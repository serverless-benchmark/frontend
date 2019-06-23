import React, { useState } from 'react';
import Dropdown from 'react-dropdown';

const Card = ({ title, text, onChangeConcurrency = () => { }, children, hideDropdown = false }) => {
    const concurrencyOptions = [{ value: 1, label: 'Concurrency 1' }, { value: 25, label: 'Concurrency 25' }, { value: 50, label: 'Concurrency 50' }];
    const [concurrency, setConcurrency] = useState(concurrencyOptions[2]);
    const handleChangeConcurrency = ({ value, label }) => {
        onChangeConcurrency(value);
        setConcurrency({ value, label });
    }

    return (
        <section className="bg-white shadow mb-6 border border-grey-light flex flex-col h-full">
            <div className="flex justify-between items-center border-grey-light border-b p-4 flex-wrap xl:flex-no-wrap">
                <div>
                    <h1 className="text-2xl inline-block mb-4 xl:mb-0">{title}</h1>
                    <p className="inline-block lg:ml-2 font-light">{text}</p>
                </div>

                    {!hideDropdown &&
                    <div className="inline-block mt-4 xl:mt-0">
                        <Dropdown options={concurrencyOptions} onChange={handleChangeConcurrency} value={concurrency} placeholder="Select concurrency" />
                    </div>
                }   

            </div>
            <div className="p-4">
                {children}
            </div>

        </section>
    )
}

export default Card;