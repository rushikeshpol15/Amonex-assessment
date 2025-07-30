import React from 'react';
import PropTypes from 'prop-types';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContactInfoInputs = ({logo,value,inputKey,inputChangingFunc}) => {
  return (
    <div className="flex w-full items-center border gap-3 border-grey p-2 rounded-lg">
    <FontAwesomeIcon icon={logo} style={{ color: "white", fontSize: "1.1rem" }} />
    <input type="text" name="address" id="address" className="text-white w-full outline-none border-none" value={value} onChange={(e)=>inputChangingFunc(inputKey,e.target.value)} />
</div>
  );
};
export default React.memo(ContactInfoInputs);

ContactInfoInputs.propTypes={
    logo: PropTypes.any,
    value: PropTypes.any,
    inputKey: PropTypes.string,
    inputChangingFunc: PropTypes.func
}