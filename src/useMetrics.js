import { useState, useEffect } from 'react';
const axios = require('axios');
const fallbackMetrics = require('./metrics.json');

const useMetrics = () => {
    const [metrics, setMetrics] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios(process.env.REACT_APP_DATA_URL);
                console.log(data);
                if (data['job-overhead-01'].length > 0) setMetrics(data);
                else setMetrics(fallbackMetrics);
            } catch (error) {
                console.error(error);
                console.log('using fallback data');
                setMetrics(fallbackMetrics);
            }
        };
        fetchData();
    }, []);
    return metrics;
}

export default useMetrics;