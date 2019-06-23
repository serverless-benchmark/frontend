import React, { Fragment } from 'react';
import Label from '../components/Label';
import Metric from '../components/Metric';
import { LineChart, Line, Tooltip, YAxis, ReferenceLine, ResponsiveContainer } from 'recharts';
import CardSection from '../components/CardSection';
import ProviderName from '../components/ProviderName';
import Slice from '../components/Slice';
import { ProviderIdToColor } from '../mappings';
import Card from '../components/Card';

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

const Provider = ({ data }) => {
    return (
        <Slice>
            <Metric value={Math.round(data.overheadMetrics.percentiles[50]) + 'ms'} label="median" className="mb-2" />
            <Metric value={Math.round(data.overheadMetrics.percentiles[100]) + 'ms'} label="max" small className="mb-2" />
            <div className="flex justify-between">
                <Metric value={Math.round(data.count.coldstart) + '#'} label="actual cold" small className="mb-2" />
                <Metric value={Math.round(data.count.warm) + '#'} label="warm" small className="mb-2" />
            </div>
            <Chart data={data} />
            <ProviderName id={data.resource.provider} />
        </Slice>
    )
}

const Coldstart = ({metrics}) => {
  const data = metrics['job-coldstart-01'];
  const getData = resourceId => data.find(x => x.resource.id === resourceId && x.job.concurrency === 10);

  const RightComponents = () => (<Fragment>
    <Label name="Concurrency" value={10} color="blue" />
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
    </Card>
  );
}

export default Coldstart;