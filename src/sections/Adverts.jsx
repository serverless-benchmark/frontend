import React from 'react';


const Advert = () => (
    <div className="w-full md:w-1/2 mb-4 lg:mb-0 bg-grey-lighter rounded shadow mx-4 h-32 border-2 border-blue-light flex items-center max-w-2xs">
        <p className="w-1/2 mx-auto text-center"><a className="text-blue-dark font-bold no-underline" href="https://www.patreon.com/serverlessbenchmark">Become a sponsor</a></p>
    </div>
);

const Adverts = () => (
    <div className="w-full flex flex-wrap lg:flex-no-wrap mb-6 justify-around">
        <div className="w-full lg:w-1/2 flex flex-wrap md:flex-no-wrap justify-around">
            <Advert/>
            <Advert />
        </div>
        <div className="w-full lg:w-1/2 flex flex-wrap md:flex-no-wrap justify-around">
            <Advert />
            <Advert />
        </div>

    </div>
)

export default Adverts;
