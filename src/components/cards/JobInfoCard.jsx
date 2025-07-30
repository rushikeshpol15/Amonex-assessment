import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookmark } from "@fortawesome/free-solid-svg-icons";

//components
import JobCatagoryButton from '../buttons/JobCatagoryButton';

//utils
import { roleIconMap } from '../../utils/Utils';


const JobInfoCard = ({ isJobuggestionCard = true, data, isRecommedationCard=false }) => {

    const navigation = useNavigate();

    const handleCardClick = useCallback(()=>{
        navigation('/job-detail/'+data?.id);
    },[data]);
    return (
        <>
            <button className="w-full bg-lightgrey p-4 lg:p-6 rounded-xl flex flex-col gap-5 cursor-pointer" onClick={handleCardClick}>

                <div className="flex flex-row items-center gap-5">
                    <div className="w-14 h-14 bg-purple rounded-lg flex justify-center items-center">
                        <FontAwesomeIcon icon={roleIconMap?.[data?.logo]} style={{ color: "black", fontSize: "2rem" }} />
                    </div>
                    <div className="flex-col gap-1 justify-start ">
                        <h4 className="text-mobile-heading-4 md:text-tablet-heading-4 lg:text-mobile-heading-4 text-medium-grey font-poppins font-light text-left">{data?.title}</h4>
                        <div className="text-mobile-caption md:text-tablet-caption lg:text-mobile-caption text-medium-grey font-poppins font-light italic text-left">{data?.company}/ {data?.location}</div>
                    </div>
                   {isRecommedationCard&& <FontAwesomeIcon icon={faBookmark} style={{ color: "white", fontSize: "1rem", marginLeft:'auto' }} />}
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <JobCatagoryButton content={data?.jobRole} />
                    <JobCatagoryButton content={data?.jobType} />
                    <JobCatagoryButton content={data?.salary} />
                </div>
                {isJobuggestionCard ? <div className="flex justify-between items-center">
                        <div className="text-mobile-caption md:text-tablet-caption lg:text-desktop-caption  text-medium-grey font-poppins italic">{data?.uploadTime}</div>
                        <FontAwesomeIcon icon={faStar} style={{ color: "white", fontSize: "1rem" }} />
                    </div>
                    :
                    <div className="flex justify-between items-center">
                        <h4 className="text-mobile-heading-4 md:text-tablet-heading-text-mobile-heading-4 lg:text-desktop-heading-text-mobile-heading-4  text-medium-grey font-poppins">{data?.salary}</h4>
                        <h4 className="text-mobile-heading-4 md:text-tablet-heading-text-mobile-heading-4 lg:text-desktop-heading-text-mobile-heading-4  text-medium-grey font-poppins">{data?.uploadTime}</h4>
                    </div>
                }
            </button>
        </>
    );
};

export default React.memo(JobInfoCard);

JobInfoCard.propTypes = {
    isJobuggestionCard: PropTypes.bool,
    data: PropTypes.object,
    isRecommedationCard: PropTypes.bool,
};
