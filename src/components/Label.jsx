import React from 'react';
const cn = require('classnames');

const Label = ({ name, value, color, margin }) =>
    <p className={cn('py-1 px-2 rounded-full inline-block text-sm', 'text-' + color + '-darker', 'bg-' + color + '-lighter', margin && 'mr-2')}>
        <span className="font-bold">{name}{value && ':'} </span> {value}
    </p>
export default Label