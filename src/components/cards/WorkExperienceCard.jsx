import React from 'react';
import PropTypes from 'prop-types';

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatMonthYear, roleIconMap } from '../../utils/Utils';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const WorkExperienceCard = ({ data ,originalStateValue, setDraftState, setShowInputs, setExperiencePressedIndex,index }) => {

    const handleEditClick = ()=>{
        setShowInputs(true);
        setDraftState([...originalStateValue]);
        setExperiencePressedIndex(index);
    };
    return (
        <>
            <div className="">
                <div className="flex justify-between gap-2">
                    <div className="flex flex-row items-center gap-5">
                        <div className="w-14 h-14 bg-purple rounded-lg flex justify-center items-center">
                            <FontAwesomeIcon icon={roleIconMap?.[data?.logo]} style={{ color: "black", fontSize: "2rem" }} />
                        </div>
                        <div className="flex flex-col gap-2 justify-start ">
                            <h4 className="text-mobile-heading-4 md:text-tablet-heading-4 lg:text-mobile-heading-4 text-medium-grey font-poppins font-light text-left">{data?.title}</h4>
                            <div className="text-mobile-body md:text-tablet-body lg:text-mobile-body text-medium-grey font-poppins font-light italic text-left">{data?.company}/ {data?.location}</div>
                            <div className="text-mobile-body md:text-tablet-body lg:text-mobile-body text-medium-grey font-poppins font-light italic text-left">{formatMonthYear(data?.startDate)}/ {formatMonthYear(data?.endDate) || data?.endDate}</div>
                        </div>
                    </div>
                    <button className="w-14 h-14 rounded-lg flex justify-center items-center cursor-pointer" onClick={handleEditClick}>
                        <FontAwesomeIcon icon={faPen} className='text-purple' style={{  fontSize: "1rem" }} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default React.memo(WorkExperienceCard);

WorkExperienceCard.propTypes = {
    data: PropTypes.object,
};
