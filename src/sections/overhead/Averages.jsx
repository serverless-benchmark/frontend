import React, { Fragment } from 'react';
import Label from '../../components/Label';
import CardSection from '../../components/CardSection';
import Slice from '../../components/Slice';
import Metric from '../../components/Metric';
import ProviderName from '../../components/ProviderName';


const Provider = ({ data }) => (
    <Slice>
        <Metric value={Math.round(data.overheadMetrics.average) + 'ms'} label="avg" className="mb-2" />
        <p className="text-xs text-grey-darkest"> ({data.amountValues.toLocaleString()} data points)</p>
        <ProviderName id={data.resource.provider} withBorder />
    </Slice>
)

const Averages = ({ data, concurrency }) => {

    const getData = resourceId => data.find(x => x.resource.id === resourceId && x.job.concurrency === concurrency);

    const RightComponents = () => (<Fragment>
        <Label name="Concurrency" value={concurrency} color="blue" margin />
        <Label name="only hot" color="red" margin />
        <Label name="last 3 days" color="green" />
    </Fragment>)

    return (
        <CardSection title="Average" rightComponents={RightComponents} className="my-8">
            <Provider data={getData('aws1024')} />
            <Provider data={getData('gcp1024')} />
            <Provider data={getData('ibm1024')} />
            <Provider data={getData('azure')} />
            <Provider data={getData('cf')} />
        </CardSection>
    );
}

export default Averages;