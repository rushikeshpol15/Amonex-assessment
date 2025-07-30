import React from 'react';
import PropTypes from 'prop-types';


export const ExperienceInputs = ({ htmlfor,title, type='text', value, inputKey, inputChangingFunc }) => {
    return (
        <div className="flex items-center gap-2">
            <label htmlFor={htmlfor} className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-grey whitespace-nowrap min-w-20">{title} </label>
            <input type={type} name={htmlfor} id={htmlfor} className="text-white w-full outline-none border border-grey rounded-lg p-2" value={value} onChange={(e) => inputChangingFunc(inputKey, e.target.value)} />
        </div>
    );
};
export default React.memo(ExperienceInputs);

ExperienceInputs.propTypes = {
    logo: PropTypes.any,
    type: PropTypes.any,
    value: PropTypes.any,
    inputKey: PropTypes.string,
    title: PropTypes.string,
    inputChangingFunc: PropTypes.func
}