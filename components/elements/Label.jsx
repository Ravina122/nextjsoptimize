import React from 'react';

const Label = ({label}) => {
    return (
        <label
          htmlFor="password"
          className="mb-3 block text-sm font-medium text-dark dark:text-white">
            {label}
        </label>
    );
};


export default Label;
