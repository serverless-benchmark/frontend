import React, { useState } from 'react';
import Card from '../../components/Card';
import Averages from './Averages';
import Percentiles from './Percentiles';

const Overhead = ({metrics}) => {
  const [concurrency, setConcurrency] = useState(50);
  return (
    <Card onChangeConcurrency={setConcurrency} title="Overhead" text="is defined as the time from request to response without the actual time the function took." >
        <Averages data={metrics['job-overhead-01']} concurrency={concurrency} />
        <Percentiles data={metrics['job-overhead-01']} concurrency={concurrency} />
    </Card>
  );
}

export default Overhead;