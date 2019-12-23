import React from 'react';
import { LineChart, Line, Tooltip, YAxis, ReferenceLine, ResponsiveContainer } from 'recharts';
import { ProviderIdToColor, ProviderIdToName } from '../mappings';
const cloudProviders = ["AWS", "IBM", "GCP", "AZURE", "CF"]

const CustomTooltipFasterOnTop = ({ active, payload, label }) => {
    const byValue = (({value: a}, {value: b})=> a > b ? 1 : -1)
    const tooltipStyle = {
        "padding": "10px",
        "background-color": "rgb(255, 255, 255)",
        "border": "1px solid rgb(204, 204, 204)",
        "white-space": "nowrap"}
    
    if (active) {
      return (
        <div className="custom-tooltip" style={tooltipStyle}>
           {payload.sort(byValue).map((x, i)=> {
                const style = {color: x.color}
                if (i === 0) {
                    style['font-weight'] = "bolder"
                    style['font-size'] = "larger"
                }
                return <p key={i} style={style} className="label">{`${x.name} : ${x.value.toFixed(0)}ms`}</p>
            })
           }
        </div>
      );
    }
  
    return null;
  };

const ComparisonChart = ({data}) => {
    const getLine = (p, i) => <Line key={i} name={ProviderIdToName.get(p)} type="monotone" dataKey={p} stroke={ProviderIdToColor.get(p)}  dot={false} />
    return (
        <ResponsiveContainer  width="100%" height={100} >
            <LineChart data={data}>
                <YAxis unit="ms" type="number" domain={[0, dataMax => (dataMax).toFixed(0)]} width={80} hide/>
                <ReferenceLine x={90} stroke="#b8c2cc" strokeDasharray="2 4" />
                <ReferenceLine x={50} stroke="#606f7b" strokeDasharray="2 4" />
                <ReferenceLine x={99} stroke="#b8c2cc" strokeDasharray="2 4" />
                <Tooltip content={<CustomTooltipFasterOnTop/>} />
                { cloudProviders.map((p,i) => getLine(p,i))}
            </LineChart>
        </ResponsiveContainer>
    )
}

const Comparison = ({ data, concurrency }) => {
    const getData = provider => data.find(x => x.resource.provider === provider && x.job.concurrency === concurrency);
    const comparisonData = [];
    cloudProviders.forEach(provider => {
        const data = getData(provider)
        const {overheadMetrics} = data

        overheadMetrics.percentiles.forEach((val, index) => {
            const dataPoint = comparisonData[index] || { name: index };
            dataPoint[provider] = val;
            comparisonData[index] = dataPoint
        })
    });

    return (
        <ComparisonChart  data={comparisonData} />
    );
}

export default Comparison;