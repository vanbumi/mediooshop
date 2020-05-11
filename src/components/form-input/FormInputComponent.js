import React from 'react';

import './formInputStyle.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {
            label ?
            (
                <label 
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                    } from-input-label`}
                >
                    {label}
                </label>             
            ) 
            : null
        }
    </div>
);

export default FormInput; 