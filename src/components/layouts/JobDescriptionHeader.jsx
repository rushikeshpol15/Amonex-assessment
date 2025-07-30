import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGear, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const JobDescriptionHeader = ({isShareVisible=true, content}) => {

    const navigate = useNavigate();

    const handleBackClick = ()=>{
        navigate('/');
    };
    return (
        <header className="flex justify-center items-center">
            <nav className="flex justify-between items-center  w-full  p-4">
                <button className="cursor-pointer" onClick={handleBackClick}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{ color: "white", fontSize: "1.1rem" }} />
                </button>
                <h4 className="text-mobile-heading-4 md:text-tablet-heading-4 lg:text-desktop-heading-4 text-white font-poppins font-light">{content}</h4>

                <div className="flex items-center gap-3 lg:gap-4">
                    <button className="cursor-pointer">
                        <FontAwesomeIcon icon={isShareVisible ? faShareNodes : faGear} style={{ color: "white", fontSize: "1.1rem" }} />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default JobDescriptionHeader;

JobDescriptionHeader.propTypes={
    isShareVisible: PropTypes.bool,
    content: PropTypes.string
};