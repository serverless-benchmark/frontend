import React, { Fragment, useState } from 'react';
import Label from '../../components/Label';
import Metric from '../../components/Metric';
import { LineChart, Line, Tooltip, YAxis, ReferenceLine, ResponsiveContainer } from 'recharts';
import CardSection from '../../components/CardSection';
import ProviderName from '../../components/ProviderName';
import Slice from '../../components/Slice';
import { ProviderIdToColor } from '../../mappings';
import Switch from "react-switch";
import Comparison from '../../components/Comparison';

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

const Percentiles = ({ data, concurrency, hideGraphs }) => {
    const getData = resourceId => data.find(x => x.resource.id === resourceId && x.job.concurrency === concurrency);
    const [showSingelGraphComaprison, setShowSingelGraphComaprison] = useState(false)

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
        <Label name="Concurrency" value={concurrency} color="blue" margin />
        <Label name="only hot" color="red" margin />
        <Label name="last 3 days" color="green" />

    </Fragment>)

    const Provider = ({ data }) => {
        return (
            <Slice>
                <Metric value={Math.round(data.overheadMetrics.percentiles[50]) + 'ms'} label="median" className="mb-2" />
                <Metric value={Math.round(data.overheadMetrics.percentiles[100]) + 'ms'} label="max" small className="mb-2" />
                <div className="flex justify-between">
                    <Metric value={Math.round(data.overheadMetrics.percentiles[90]) + 'ms'} label="90th percentile" small className="mb-2" />
                    <Metric value={Math.round(data.overheadMetrics.percentiles[99]) + 'ms'} label="99th percentile" small className="mb-2" />
                </div>
                {!showSingelGraphComaprison &&
                    <Chart data={data} />
                }         
                <ProviderName id={data.resource.provider} />
            </Slice>
        )
    }

    return (
        <Fragment>
            <CardSection title="Percentiles" rightComponents={RightComponents}>
                <Provider data={getData('aws1024')}  />
                <Provider data={getData('gcp1024')} />
                <Provider data={getData('ibm1024')}  />
                <Provider data={getData('azure')} />
                <Provider data={getData('cf')} />
            </CardSection>
            {showSingelGraphComaprison && 
                <Comparison data={data} concurrency={concurrency}/>
            }
        </Fragment>
    );
}

export default Percentiles;