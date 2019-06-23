import React from 'react';
import Introwise from '../logos/introwise.png';

const Sponsor = ({ image, link }) => (
    <div className="w-16 h-16 rounded-lg overflow-hidden">
        <a href={link} rel="noopener noreferrer" target="_blank"><img src={image} alt="Sponsor Logo" /></a>
    </div>
);

const SponsorLink = ({ link, name }) => (
    <div className="w-32 h-16 justify-center">
        <a className="block text-center text-white font-bold" href={link}>{name}</a>
    </div>
)

const Sponsors = () => (
    <div className="w-full">
        <h3 className="text-white mb-4 text-center">Sponsors</h3>
        <div className="w-full flex justify-center mb-8">
            <Sponsor image={Introwise} link="https://introwise.com" />
        </div>
        <div className="w-full flex justify-center">
            <SponsorLink link="https://www.routerhosting.com/" name="RouterHosting" />
        </div>
    </div>
)

export default Sponsors;
