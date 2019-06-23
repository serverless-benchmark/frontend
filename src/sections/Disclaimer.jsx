import React from 'react';
import Card from '../components/Card';

const Disclaimer = () => (
    <Card title="Info / Disclaimer" hideDropdown>
        <p className="leading-loose mb-4">The #1 rule for this benchmark is neutrality and usage of rigorous methods.</p>
        <p className="leading-loose mb-4">
            I'm not affiliated with any of the providers and will never accept any compensation in return for improving data, however <a className="text-blue-dark no-underline font-semibold" href="https://www.patreon.com/serverlessbenchmark">I will accept sponsoring</a> and might show related adverts. I want to be open about the methods I used to obtain the data, if you're interested in this information, please read the <a className="text-blue-dark no-underline font-semibold" href="https://medium.com/elbstack/serverless-benchmark-2-0-part-i-f23acb8e8a29">medium article</a>. If you are concerned with practices and metrics used in this benchmark feel free to contact me via <a className="text-blue-dark no-underline font-semibold" href="mailto:bernd@elbstack.com">mail</a> or <a className="text-blue-dark no-underline font-semibold" href="https://twitter.com/berndstrehl">Twitter</a>.
    </p>
        <p className="font-bold">
            If you refer to this data please include this project as source.
    </p>
    </Card>
)

export default Disclaimer;