import React from 'react';
import PropTypes from 'prop-types';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

const UserDetailsModifyHeaderContent = ({ title, logo, isEdit=true ,originalStateValue, setDraftState, setShowInputs }) => {

    const handleOnClickModify = ()=>{

        //handling the modifying data is in different formats
        if(typeof originalStateValue==='object')
        {
            setDraftState({...originalStateValue});
        }
        else if (Array.isArray(originalStateValue)){
            setDraftState([...originalStateValue]);
        }
        else{
            setDraftState(originalStateValue);
        }

        setShowInputs(true); //show the inputs of the selected catagory modify
    }

    return (
        <div className="flex justify-between items-center border-b border-b-grey-transparent pb-2.5">
        <div className="flex items-center gap-3 ">
            <FontAwesomeIcon icon={logo} className="text-purple" style={{ fontSize: "1.1rem" }} />
            <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-white font-poppins ">{title}</div>
        </div>
        <button className="cursor-pointer hover:scale-105 duration-300" onClick={handleOnClickModify}>
            <FontAwesomeIcon icon={isEdit ? faPen : faPlus} className="text-purple" style={{ fontSize: "1.1rem" }} />
        </button>
    </div>
    );
};

export default UserDetailsModifyHeaderContent;

UserDetailsModifyHeaderContent.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.any,
    isEdit: PropTypes.bool,
    originalStateValue: PropTypes.any,
    onClickFun: PropTypes.func,
    setDraftState: PropTypes.func,
    setShowInputs: PropTypes.func,
};