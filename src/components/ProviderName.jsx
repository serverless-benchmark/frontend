import React from 'react';
import cn from 'classnames';
import { ProviderIdToName, ProviderIdToColorName, ProviderIdToSubName } from '../mappings';

const ProviderName = ({ id, withBorder = false }) => {
    const name = ProviderIdToName.get(id);
    const subname = ProviderIdToSubName.get(id);
    const color = ProviderIdToColorName.get(id);

    return (
        <p className={cn('mt-4 text-xl font-light', 'text-' + color, withBorder && `border-b-4 pb-4 border-${color}-light`)}>
        {name}
        <span className="text-sm"> {subname}</span>
        </p>
    )
}

export default ProviderName;