import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterButton = ({ content, Logo, isAcitvePage = false, link }) => {

    return (
        <>
            <Link to={link}>
                <button className="cursor-pointer flex items-center gap-3" >
                    <div className="flex flex-col gap-1 items-center">
                        <FontAwesomeIcon icon={Logo} className={`${isAcitvePage ? ' text-purple ' : ' text-white '}`} style={{ fontSize: "1.1rem" }} />
                        {isAcitvePage && <div className="w-1 h-1 rounded-full bg-purple"></div>}
                    </div>
                    <div className={`hidden lg:block text-mobile-body md:text-tablet-body lg:text-desktop-body ${isAcitvePage ? ' text-purple ' : ' text-white '} font-poppins`}>{content}</div>
                </button>
            </Link>

        </>
    );
};

export default React.memo(FooterButton);

FooterButton.propTypes = {
    content: PropTypes.string,
    Logo: PropTypes.any,
    isAcitvePage: PropTypes.bool,
    link: PropTypes.string,
};
