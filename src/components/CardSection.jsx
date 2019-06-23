import React from 'react';
import cn from "classnames";

import {wrapper} from './CardSection.module.css';

const CardSection = ({ title, rightComponents, children, className }) => {
    return (
        <div className={cn("bg-white my-4", className)}>
            <div>
                <div className="flex justify-between items-center w-full border-b p-4 pb-2">
                    <h2 className="text-xl font-normal">{title}</h2>
                    <div className="flex items-center">
                        {React.createElement(rightComponents)}
                    </div>
                </div>
                <div className={cn("justify-around flex-wrap xl:flex-no-wrap my-4", wrapper)}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CardSection;
