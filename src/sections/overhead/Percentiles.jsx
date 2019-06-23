import React, { Fragment } from 'react';
import Label from '../../components/Label';
import Metric from '../../components/Metric';
import { LineChart, Line, Tooltip, YAxis, ReferenceLine, ResponsiveContainer } from 'recharts';
import CardSection from '../../components/CardSection';
import ProviderName from '../../components/ProviderName';
import Slice from '../../components/Slice';
import { ProviderIdToColor } from '../../mappings';

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
                <Metric value={Math.round(data.overheadMetrics.percentiles[90]) + 'ms'} label="90th percentile" small className="mb-2" />
                <Metric value={Math.round(data.overheadMetrics.percentiles[99]) + 'ms'} label="99th percentile" small className="mb-2" />
            </div>
            <Chart data={data} />
            <ProviderName id={data.resource.provider} />
        </Slice>
    )
}


const Percentiles = ({ data, concurrency }) => {
    const getData = resourceId => data.find(x => x.resource.id === resourceId && x.job.concurrency === concurrency);

    const RightComponents = () => (<Fragment>
        <Label name="Concurrency" value={concurrency} color="blue" margin />
        <Label name="only hot" color="red" margin />
        <Label name="last 3 days" color="green" />

    </Fragment>)

    return (
        <CardSection title="Percentiles" rightComponents={RightComponents}>
            <Provider data={getData('aws1024')} />
            <Provider data={getData('gcp1024')} />
            <Provider data={getData('ibm1024')} />
            <Provider data={getData('azure')} />
            <Provider data={getData('cf')} />
        </CardSection>
    );
}

export default Percentiles;