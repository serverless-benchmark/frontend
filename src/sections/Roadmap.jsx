import React from 'react';
import Card from '../components/Card';
import cn from 'classnames';


const Li = ({ children, done }) => <li className={cn("mb-4", done && 'line-through')}>{children}</li>
const Roadmap = () => (
    <Card title="Roadmap" hideDropdown>
        <p>I work on this project in my free-time. If you want to support the development, consider <a className="text-blue-dark no-underline font-semibold" href="https://www.patreon.com/serverlessbenchmark">becoming a sponsor</a> in exchange for a place on this page to showcase your product.</p>

        <ul className="mt-4">
            <Li done>Offer mobile friendly version.</Li>
            <Li>Working on: Open-source the code.</Li>
            <Li>Fix query performance.</Li>
            <Li>Use highest node version for all providers</Li>
            <Li>Include coldstart metrics.</Li>
            <Li>Include computation speed metrics.</Li>
            <Li>Integrate information into this site.</Li>
            <Li>Show real concurrency.</Li>
            <Li>Add zeit.co serverless.</Li>
            <Li>Add tracking and disclaimer.</Li>
            <Li>Add configuration of the resources to infos.</Li>
            <Li>Add kubernetes based offerings.</Li>

        </ul>
        <p>Missing something? I'm open for your suggestions! Send me a <a className="text-blue-dark no-underline font-semibold" href="javascript:location.href='mailto:bernd✉elbstack.com'.replace('✉', '@');">mail</a> or leave a <a className="text-blue-dark no-underline font-semibold" href="https://twitter.com/berndstrehl">tweet</a>.</p>
    </Card>
)

export default Roadmap;
