import React from 'react';
import cn from "classnames";

import {wrapper} from './Slice.module.css';

const Slice = ({ children }) =>
    <div className={cn("w-full text-center", wrapper)}>{children}</div>
export default Slice;
