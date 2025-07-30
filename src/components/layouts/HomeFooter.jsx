import React from 'react';
import PropTypes from 'prop-types';

//icons
import { faEnvelope, faHouse, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';

//components
import FooterButton from '../buttons/FooterButton';

export const HomeFooter = ({activePage}) => {
    return (
        <footer className="fixed rounded-full bg-grey-transparent p-3 px-6 bottom-10  flex justify-between w-[90%] left-1/2 -translate-x-1/2 ">
           <FooterButton Logo={faHouse} content={'Homepage'} link={'/'} isAcitvePage={activePage==='home'} />
           <FooterButton Logo={faEnvelope} content={'Mail'} link={'#'} isAcitvePage={activePage==='mail'} />
           <FooterButton Logo={faMessage} content={'Messages'} link={'#'} isAcitvePage={activePage==='messages'} />
           <FooterButton Logo={faUser} content={'Profile'} link={'/user-profile'} isAcitvePage={activePage==='user'} />
        </footer>

    );
};

export default HomeFooter;

HomeFooter.propTypes={
    activePage: PropTypes.string
};