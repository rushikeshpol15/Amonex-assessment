
import React from 'react';
import PropTypes from 'prop-types';

const QuickStatsContent = ({ content, value }) => {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-grey font-poppins ">{content}</div>
            <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-white font-poppins ">{value}</div>
        </div>
    );
};

export default QuickStatsContent;

QuickStatsContent.propTypes = {
    content: PropTypes.string,
    value: PropTypes.string
};