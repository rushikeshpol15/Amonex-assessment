import React from 'react';
import PropTypes from 'prop-types';

const PopularCompanyContent = ({content}) => {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-white font-poppins ">{content}</div>
            <button className="text-mobile-body md:text-tablet-ctext-mobile-body lg:text-desktop-ctext-mobile-body text-grey font-poppins px-3 py-1 hover:bg-purple hover:text-white rounded-xl cursor-pointer duration-300">Follow</button>
        </div>
    );
};

export default PopularCompanyContent;

PopularCompanyContent.propTypes = {
    content: PropTypes.string,
};