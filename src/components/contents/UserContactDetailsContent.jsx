
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserContactDetailsContent = ({ content, logo }) => {
    return (
        <div className="flex items-center w-full gap-3">
            <FontAwesomeIcon icon={logo} style={{ color:'white',fontSize: "1.1rem" }} />
            <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-grey font-poppins ">{content}</div>

        </div>
    );
};

export default UserContactDetailsContent;

UserContactDetailsContent.propTypes = {
    content: PropTypes.string,
    logo: PropTypes.any
};