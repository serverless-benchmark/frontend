import React, { Fragment, useState } from 'react';
import Label from '../components/Label';
import Metric from '../components/Metric';
import { LineChart, Line, Tooltip, YAxis, ReferenceLine, ResponsiveContainer } from 'recharts';
import CardSection from '../components/CardSection';
import ProviderName from '../components/ProviderName';
import Slice from '../components/Slice';
import { ProviderIdToColor } from '../mappings';
import Card from '../components/Card';
import Comparison from '../components/Comparison';
import Switch from "react-switch";

const Chart = ({ data }) => {
    const values = data.overheadMetrics.percentiles.map((value, idx) => ({ name: `Percentile #${idx}`, value }))
    const color = ProviderIdToColor.get(data.resource.provider);
    return (
        <ResponsiveContainer width="100%" height={100} >
            <LineChart data={values.slice(0,100)}>
                <YAxis unit="ms" type="number" domain={[data.overheadMetrics.percentiles[0], data.overheadMetrics.percentiles[98]]} hide />
                <ReferenceLine x={90} stroke="#b8c2cc" strokeDasharray="2 4" />
                <ReferenceLine x={50} stroke="#606f7b" strokeDasharray="2 4" />
                <ReferenceLine x={99} stroke="#b8c2cc" strokeDasharray="2 4" />
                <Tooltip label="name" formatter={(value) => `${Math.round(value)}ms`} labelFormatter={(value) => `Percentile #${value}`} />
                <Line type="monotone" dataKey="value" stroke={color} yAxisId={0} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    )
}

const Coldstart = ({metrics}) => {
  const concurrency = 10;
  const [showSingelGraphComaprison, setShowSingelGraphComaprison] = useState(false)
  const data = metrics['job-coldstart-01'];
  const getData = resourceId => data.find(x => x.resource.id === resourceId && x.job.concurrency === 10);

  const Provider = ({ data }) => {
    return (
        <Slice>
            <Metric value={Math.round(data.overheadMetrics.percentiles[50]) + 'ms'} label="median" className="mb-2" />
            <Metric value={Math.round(data.overheadMetrics.percentiles[100]) + 'ms'} label="max" small className="mb-2" />
            <div className="flex justify-between">
                <Metric value={Math.round(data.count.coldstart) + '#'} label="actual cold" small className="mb-2" />
                <Metric value={Math.round(data.count.warm) + '#'} label="warm" small className="mb-2" />
            </div>
            {!showSingelGraphComaprison &&
                <Chart data={data} />
            }
            <ProviderName id={data.resource.provider} />
        </Slice>
    )
  }

  const RightComponents = () => (<Fragment>
    <label class="mr-2">Single Graph</label>
    <Switch
        checked={showSingelGraphComaprison}
        onChange={()=> setShowSingelGraphComaprison(!showSingelGraphComaprison) }
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch mr-2"
        id="material-switch"
    />
    <Label name="Concurrency" value={concurrency} color="blue" />
</Fragment>);

  return (
    <Card hideDropdown title="Coldstart" text="functions are called every 3 hours." >
    <p className="mx-8 text-sm">The functions were called every 3 hours, at some providers this will not necessarily lead to an actual coldstart. This will be regarded to the providers benefit in the percentile metrics. More data soon!</p>
      <CardSection title="Overhead Percentiles" rightComponents={RightComponents} className="my-8">
          <Provider data={getData('awscs')} />
          <Provider data={getData('gcpcs')} />
          <Provider data={getData('ibmcs')} />
          <Provider data={getData('azurecs')} />
          <Provider data={getData('cf')} />
      </CardSection>
      {showSingelGraphComaprison &&
          <Comparison data={data} concurrency={concurrency}/>
      }
    </Card>
  );
}

export default Coldstart;