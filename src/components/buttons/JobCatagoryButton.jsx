import React from 'react';
import PropTypes from 'prop-types';

const JobCatagoryButton = ({content}) => {
  return (
    <>
        <div className="py-1 px-3 md:px-5 rounded-lg bg-lightgrey-medium font-poppins text-mobile-body md:text-tablet-body lg:text-desktop-body text-medium-grey font-light">{content}</div>
    </>
  );
};

export default React.memo(JobCatagoryButton);

JobCatagoryButton.propTypes = {
    content: PropTypes.string
};
