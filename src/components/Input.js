import React      from 'react';
import PropTypes  from 'prop-types';
import cx         from 'classnames';

import './Input.less';

function Input(props) {
    const { name, type, placeholder, defaultValue, onChange, className } = props;

    const handleChange = e => {
        if (onChange) onChange(e.target.value);
    };

    const inputClasses = cx({
        Input       : true,
        [className] : className
    });

    return (
        <input
            name         = {name}
            className    = {inputClasses}
            defaultValue = {defaultValue}
            type         = {type || 'text'}
            placeholder  = {placeholder}
            onChange     = {handleChange}
            autoComplete = 'off'     
        />
    );
}

Input.propTypes = {
    name         : PropTypes.string,
    type         : PropTypes.string,
    className    : PropTypes.string,
    defaultValue : PropTypes.string,
    placeholder  : PropTypes.string,
    onChange     : PropTypes.func,
}

export default React.memo(Input);
