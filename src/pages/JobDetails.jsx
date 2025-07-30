import React, { useCallback, useEffect, useState } from "react";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

//utils
import { jobsData } from "../utils/JobData";
import { roleIconMap } from "../utils/Utils";

//components
import JobCatagoryButton from "../components/buttons/JobCatagoryButton";
import TabButton from "../components/buttons/TabButton";
import JobDescriptionHeader from "../components/layouts/JobDescriptionHeader";
import QuickStatsContent from "../components/contents/QuickStatsContent";
import PopularCompanyContent from "../components/contents/PopularCompanyContent";


const JobDetails = () => {

    //get id from params
    const { jobId } = useParams();


    const [jobData, setJobData] = useState(null);
    const [visibledContent, setVisibledContent] = useState('Job Details');

    const fetchJob = async () => {

        const jobInfo = jobsData?.find(element => element?.id === jobId);

        setJobData(jobInfo);
    }

    //fetch the data
    useEffect(() => {
        fetchJob();
    }, []);


    //onchange on click functions 

    const toggleButton = useCallback((value) => {
        setVisibledContent(value);
    }, [visibledContent]);
    return (
        <>
            <div className="bg-dark min-h-screen pb-20">
                {/* header  */}
                <JobDescriptionHeader content={'Job Description'}/>

                {/* section 1 job details */}
                <section className="flex flex-col justify-center items-center px-4 md:px-6 lg:px-12 py-4 mt-5">
                    <div className="max-w-[1200px] w-full flex gap-7 lg:gap-[3%] flex-wrap">

                        {/* container 1 */}
                        <div className="w-full lg:w-[67%] flex flex-col gap-5 ">
                            <div className="flex flex-col items-center gap-6 py-5 md:py-10 px-4 bg-lightgrey rounded-xl">

                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-14 h-14 bg-purple rounded-lg flex justify-center items-center">
                                        <FontAwesomeIcon icon={roleIconMap?.[jobData?.logo]} style={{ color: "black", fontSize: "2rem" }} />
                                    </div>
                                    <div className="flex flex-col gap-1 items-center ">
                                        <h3 className="text-mobile-heading-3 md:text-tablet-heading-3 lg:text-mobile-heading-3 text-medium-grey font-poppins font-light text-left">{jobData?.title}</h3>
                                        <div className="text-mobile-body md:text-tablet-body lg:text-mobile-body text-medium-grey font-poppins font-light italic text-left ">{jobData?.company}/ {jobData?.location}</div>
                                    </div>

                                    <h4 className="text-mobile-heading-4 md:text-tablet-heading-text-mobile-heading-4 lg:text-desktop-heading-text-mobile-heading-4  text-medium-grey font-poppins">{jobData?.salary}</h4>
                                </div>
                                <div className="flex items-center gap-2 md:gap-4">
                                    <JobCatagoryButton content={jobData?.jobRole} />
                                    <JobCatagoryButton content={jobData?.jobType} />
                                    <JobCatagoryButton content={jobData?.workMode} />
                                </div>

                                <div className="flex items-center rounded-full overflow-hidden">
                                    <TabButton content={'Job Details'} visibledContent={visibledContent} toggleButton={toggleButton} />
                                    <TabButton content={'About Company'} visibledContent={visibledContent} toggleButton={toggleButton} />
                                </div>

                                {visibledContent === 'Job Details' ?
                                        <>

                                            <div className="flex flex-col gap-3 w-full">
                                                <h4 className="text-mobile-heading-4 md:text-tablet-heading-4 lg:text-desktop-heading-text-mobile-heading-4  text-medium-grey font-poppins">Job Description</h4>
                                                <h4 className="text-mobile-body md:text-tablet-body lg:text-desktop-body  text-grey font-poppins">{jobData?.jobDescription}</h4>
                                            </div>
                                            <div className="flex flex-col gap-3 w-full">
                                                <h4 className="text-mobile-heading-4 md:text-tablet-heading-4 lg:text-desktop-heading-text-mobile-heading-4  text-medium-grey font-poppins">Key Responsibilities</h4>
                                                <ul className="list-disc ml-5 text-dark-purple text-mobile-heading-3">
                                                    {jobData?.keyResponsibilities?.map((element, index) => {
                                                        return <li key={index}>
                                                            <p className="text-mobile-body md:text-tablet-body lg:text-desktop-body  text-grey font-poppins">{element}</p>
                                                        </li>
                                                    })}
                                                </ul>
                                            </div>
                                        </>
                                    :
                                    <>
                                        <div className="flex flex-col gap-3 w-full">
                                            <h4 className="text-mobile-heading-4 md:text-tablet-heading-4 lg:text-desktop-heading-text-mobile-heading-4  text-medium-grey font-poppins">About {jobData?.company}</h4>
                                            <h4 className="text-mobile-body md:text-tablet-body lg:text-desktop-body  text-grey font-poppins">{jobData?.companyDetails}</h4>
                                        </div>
                                    </>
                                }

                            </div>
                        </div>

                        {/* container 2 */}
                        <div className="flex flex-col gap-5 w-full lg:w-[30%]">
                            <div className="p-4 bg-lightgrey flex flex-col gap-4 rounded-xl">
                                <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-white font-poppins">Quick Stats</div>
                                <div className="flex flex-col gap-3">
                                    <QuickStatsContent content={'Jobs Applied'} value={'24'} />
                                    <QuickStatsContent content={'Interviews'} value={'8'} />
                                    <QuickStatsContent content={'Response Rate'} value={'33%'} />
                                </div>
                            </div>

                            <div className="p-4 bg-lightgrey flex flex-col gap-4 rounded-xl">
                                <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-white font-poppins">Popular Companies</div>
                                <div className="flex flex-col gap-3">
                                    <PopularCompanyContent content={'Google'} />
                                    <PopularCompanyContent content={'Microsoft'} />
                                    <PopularCompanyContent content={'Apple'} />
                                    <PopularCompanyContent content={'Meta'} />
                                    <PopularCompanyContent content={'Netflix'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button className="py-2 px-10 w-[90%] md:max-w-[1200px] md:w-full bg-purple text-dark rounded-full mt-5 hover:text-dark-purple hover:scale-105 duration-200 cursor-pointer fixed bottom-10  md:static left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0">Apply Now</button>
                </section>
                
            </div>
        </>
    );
};
export default JobDetails;
