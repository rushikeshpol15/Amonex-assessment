import React from 'react';
import PropTypes from 'prop-types';

const TabButton = ({content,visibledContent,toggleButton}) => {

    const handleToggleButton = ()=>{
        toggleButton(content);
    };
  return (
    <>
       <button onClick={handleToggleButton} className={`py-2 px-5 md:px-10 font-poppins text-mobile-body md:text-tablet-body lg:text-desktop-body cursor-pointer  ${visibledContent===content? ' text-dark bg-purple' : ' text-medium-grey bg-dark'}`}>{content}</button>
    </>
  );
};

export default React.memo(TabButton);

TabButton.propTypes = {
    content: PropTypes.string,
    visibledContent: PropTypes.string,
    toggleButton: PropTypes.func
};
