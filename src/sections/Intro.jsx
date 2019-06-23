import React from 'react';
import Card from '../components/Card';

const Intro = () => (
    <Card title="Intro" hideDropdown>
        <p>
            All workloads are Node.js functions. A note on the definition of concurrency: If concurrency is set 50 the server starts 50 requests at once and as soon as the server got a response the next request will be started. However if the response is faster than the server can fire requests, this might lead to actutal concurrency being lower than 50. This will be examined soon.
        </p>
        <p className="mt-2">
            I had to cut the query down to the last 3 days because of performance issues. I will deal with it as soon as possible.
        </p>
    </Card>
)

export default Intro;