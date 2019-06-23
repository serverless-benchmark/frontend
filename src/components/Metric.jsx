import React from 'react';
import cn from 'classnames';

const Metric = ({ value, label, small = false, className = '' }) => small ? (
    <p className={cn("text-grey-darkest font-bold", className)}>
        {value}
        <span className="text-xs font-light"> {label}</span>
    </p>) :
    (<p className={cn("text-2xl font-bold text-grey-darkest", className)}>
        {value}
        <span className="text-lg font-normal"> {label}</span>
    </p>)

export default Metric;