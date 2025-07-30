

import React from 'react';
import PropTypes from 'prop-types';

const UserDetailsSaveCancleButtons = ({ draftState, setOriginalState, setErrorShow, errorCondition, setInputView }) => {

    const handleCancleFun = () => {
        setInputView(false); //hide the inputs and show the user details 
    };

    const handleSaveFun = () => {
        console.log('executed');

        if (errorCondition) {
            setErrorShow(true);
            return;
        }
        //handling the modifying data is in different formats
        if (Array.isArray(draftState)) {
            console.log('is array is true');

            setOriginalState([...draftState]);
        }
        else if (typeof draftState === 'object') {
            console.log('is object is true', draftState);
            setOriginalState({ ...draftState });
        }

        else {
            setOriginalState(draftState);
        }
        setInputView(false);//hide the inputs and show the user details 
            };

return (
    <>
        <div className="flex items-center gap-5">
            <button className="py-2 px-5 bg-[#F10C0C] text-white text-mobile-body md:text-tablet-body lg:text-desktop-body cursor-pointer" onClick={handleCancleFun}>Cancle</button>
            <button className="py-2 px-5 bg-purple text-white text-mobile-body md:text-tablet-body lg:text-desktop-body cursor-pointer " onClick={handleSaveFun}>Save</button>
        </div>
    </>
);
};

export default React.memo(UserDetailsSaveCancleButtons);

UserDetailsSaveCancleButtons.propTypes = {
    content: PropTypes.string,
    visibledContent: PropTypes.string,
    toggleButton: PropTypes.func
};
