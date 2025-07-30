import React, { useEffect, useState } from "react";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBriefcase, faEnvelope, faGraduationCap, faLocationDot, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

//components
import QuickStatsContent from "../components/contents/QuickStatsContent";
import HomeFooter from "../components/layouts/HomeFooter";
import JobDescriptionHeader from "../components/layouts/JobDescriptionHeader";
import JobCatagoryButton from "../components/buttons/JobCatagoryButton";
import UserContactDetailsContent from "../components/contents/UserContactDetailsContent";
import WorkExperienceCard from "../components/cards/WorkExperienceCard";
import EducationInfoCard from "../components/cards/EducationInfoCard";
import UserDetailsModifyHeaderContent from "../components/contents/UserDetailsModifyHeaderContent";
import UserDetailsSaveCancleButtons from "../components/buttons/UserDetailsSaveCancleButtons";
import ContactInfoInputs from "../components/inputs/ContactInfoInputs";
import ExperienceInputs from "../components/inputs/ExperienceInputs";

//utils
import { sanitizeInputs } from "../utils/Utils";
import { jobsData } from "../utils/JobData";


// myMac96
const UserProfile = () => {

    //states used for show the user details
    const [contactInfo, setContactInfo] = useState({
        address: 'New York, United States',
        phone: '(208) 555-0112',
        mail: 'example@mail.com'
    });
    const [aboutMe, setAboutMe] = useState("I'm a passionate frontend developer with experience in building responsive and user-friendly interfaces using React, Next.js, and Tailwind CSS. I enjoy translating design concepts from Figma into pixel-perfect code, focusing on both performance and user experience. I'm always eager to learn new technologies and improve my skills while building clean, scalable applications.");
    const [experience, setExperience] = useState([{
        title: "Data Analyst",
        company: "InsightSoft",
        location: "Toronto, Canada",
        logo: 'data',
        startDate: '2022-01-01',
        endDate: null
    }]);
    const [experiencePressedIndex, setExperiencePressedIndex] = useState(0);
    const [educationDetails, setEducationDetails] = useState([{
        course: 'Mechanical Engineering',
        university: 'IIT',
        startDate: '2020-01-01',
        endDate: 'Present'
    }]);
    const [educationalDetailsIndex, setEducationalDetailsIndex] = useState(0);



    //states to store the previous user info
    const [aboutMeDraft, setAboutMeDraft] = useState(aboutMe);
    const [contactInfoDraft, setContactInfoDraft] = useState(contactInfo);
    const [experienceDraft, setExperienceDraft] = useState(experience);
    const [educationDetailsDraft, seteducationDetailsDraft] = useState(educationDetails);



    // states used to check which field is clicked for modification
    const [isAboutMeModificationClicked, setIsAboutMeModificationClicked] = useState(false);
    const [isContactInfoModificationClicked, setIsContactInfoModificationClicked] = useState(false);
    const [isExperienceClicked, setIsExperienceClicked] = useState(false);
    const [isEducationDetailsClicked, setIsEducationDetailsClicked] = useState(false);



    //show alert messages
    const [isInvalidateAboutMe, setIsInvalidateAboutMe] = useState(false);
    const [isInvalidateContactInfo, setIsInvalidateContactInfo] = useState(false);
    const [isInvalidateExperience, setIsInvalidateExperience] = useState(false);
    const [isInvalidateEducationDetails, setIsInvalidateEducationDetails] = useState(false);



    const fetchJobs = async () => {
        //to assume this data comes from api returned dummy delayed promise
        await new Promise(resolve => setTimeout(resolve, 1000));

        const recommendedJobsData = jobsData?.filter(element => element.category?.toLowerCase()?.includes('recommended'));
        const suggestedJobsData = jobsData?.filter(element => element.category?.toLowerCase()?.includes('suggested'));

        // setRecommendedJobs([...recommendedJobsData]);
        // setSuggestedJobs([...suggestedJobsData]);
    }

    //fetch the data
    useEffect(() => {
        fetchJobs();
    }, []);


    //onchange onclick functions 



    //about me edit functions

    const handleAboutMeOnchange = (e) => {
        const sanitizedContent = sanitizeInputs(e?.target?.value); //sanitize to prevent xss
        setAboutMeDraft(sanitizedContent);
        setIsInvalidateAboutMe(false); //reset the alert msg state
    }

    //contact info functions
    const handleContactInfoChange = (objKey, value) => {
        const sanitizedContent = sanitizeInputs(value);
        const data = { ...contactInfoDraft };
        data[objKey] = sanitizedContent;
        setContactInfoDraft({ ...data });
        setIsInvalidateContactInfo(false);
    }

    // experience functions 
    const handleExperienceChange = (objKey, value) => {
        const sanitizedContent = sanitizeInputs(value);
        const data = [...experienceDraft];
        data[experiencePressedIndex][objKey] = sanitizedContent;
        setExperienceDraft([...data]);
        setIsInvalidateExperience(false);
    }

    // education functions 
    const handleEducationDetailsChange = (objKey, value) => {
        const sanitizedContent = sanitizeInputs(value);
        const data = [...educationDetailsDraft];
        data[educationalDetailsIndex][objKey] = sanitizedContent;
        seteducationDetailsDraft([...data]);
        setIsInvalidateEducationDetails(false);
    }
    return (
        <>
            <div className="bg-dark min-h-screen pb-24">
                {/* header  */}
                <JobDescriptionHeader isShareVisible={false} content={'Profile'} />


                <section className="flex justify-center items-center px-4 md:px-6 lg:px-12 py-4">
                    <div className="max-w-[1200px] w-full flex gap-7 lg:gap-[3%] flex-wrap">

                        {/* left editable section  */}
                        <div className="w-full lg:w-[67%] flex flex-col gap-5 order-1">
                            <div className="flex items-center gap-3">
                                <div className="w-full bg-[#24294D] h-3 rounded-full overflow-hidden">
                                    <div className="w-[90%] bg-purple h-3 rounded-full"></div>
                                </div>
                                <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-white font-poppins font-light">9/10</div>

                            </div>
                            {/* contact info  */}
                            <div className="bg-lightgrey rounded-xl p-4 md:p-8 flex flex-col gap-5">
                                <UserDetailsModifyHeaderContent title={'Contact Info'} logo={faUser} originalStateValue={contactInfo} setDraftState={setContactInfoDraft} setShowInputs={setIsContactInfoModificationClicked} />
                                {!isContactInfoModificationClicked ? <div className="flex flex-col gap-3">
                                    <UserContactDetailsContent logo={faLocationDot} content={contactInfo?.address} />
                                    <UserContactDetailsContent logo={faPhone} content={contactInfo?.phone} />
                                    <UserContactDetailsContent logo={faEnvelope} content={contactInfo?.mail} />
                                </div>
                                    :
                                    <>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex flex-col items-center gap-2">
                                                <ContactInfoInputs logo={faLocationDot} value={contactInfoDraft?.address} inputKey={'address'} inputChangingFunc={handleContactInfoChange} />
                                                <ContactInfoInputs logo={faPhone} value={contactInfoDraft?.phone} inputKey={'phone'} inputChangingFunc={handleContactInfoChange} />
                                                <ContactInfoInputs logo={faEnvelope} value={contactInfoDraft?.mail} inputKey={'mail'} inputChangingFunc={handleContactInfoChange} />
                                            </div>
                                        </div>
                                        {isInvalidateContactInfo && <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-[#F10C0C] font-poppins font-light">Please Enter Valid Details.</div>}
                                        <UserDetailsSaveCancleButtons draftState={contactInfoDraft} setOriginalState={setContactInfo} errorCondition={contactInfoDraft?.address?.length === 0 || contactInfoDraft?.phone?.length === 0 || contactInfoDraft?.mail?.length === 0} setInputView={setIsContactInfoModificationClicked} setErrorShow={setIsInvalidateContactInfo} />
                                    </>

                                }

                            </div>

                            {/* about me info  */}
                            <div className="bg-lightgrey rounded-xl p-4 md:p-8 flex flex-col gap-5">
                                {!isAboutMeModificationClicked ? <>
                                    <UserDetailsModifyHeaderContent title={'About Me'} logo={faAddressCard} originalStateValue={aboutMe} setDraftState={setAboutMeDraft} setShowInputs={setIsAboutMeModificationClicked} />
                                    <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-grey font-poppins font-light">{aboutMe}</div>
                                </>
                                    :
                                    //below input is visible if user press the modify icon which is present in the header
                                    <>
                                        <textarea name="aboutme" id="aboutme" value={aboutMeDraft} onChange={handleAboutMeOnchange} rows={9} className="outline-none border border-grey text-mobile-body md:text-tablet-body lg:text-desktop-body text-grey font-poppins font-light" />
                                        {isInvalidateAboutMe && <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-[#F10C0C] font-poppins font-light">About Me cannot be empty.</div>}
                                        <UserDetailsSaveCancleButtons draftState={aboutMeDraft} setOriginalState={setAboutMe} errorCondition={aboutMeDraft?.length === 0} setInputView={setIsAboutMeModificationClicked} setErrorShow={setIsInvalidateAboutMe} />
                                    </>
                                }
                            </div>

                            {/* experience info  */}
                            <div className="bg-lightgrey rounded-xl p-4 md:p-8 flex flex-col gap-5">
                                {!isExperienceClicked ? <>
                                    <UserDetailsModifyHeaderContent title={'Experience'} logo={faBriefcase} isEdit={false} />
                                    {experience?.length > 0 && experience?.map((element, index) => <WorkExperienceCard key={index} data={element} index={index} originalStateValue={experience} setDraftState={setExperienceDraft} setExperiencePressedIndex={setExperiencePressedIndex} setShowInputs={setIsExperienceClicked} />)}
                                </> :
                                    <>
                                        <div className="flex flex-col gap-3">
                                            <ExperienceInputs htmlfor={"title"} value={experienceDraft[experiencePressedIndex]?.title} inputKey={'title'} inputChangingFunc={handleExperienceChange} title={'Title'} />
                                            <ExperienceInputs htmlfor={"company"} value={experienceDraft[experiencePressedIndex]?.company} inputKey={'company'} inputChangingFunc={handleExperienceChange} title={'Company'} />
                                            <ExperienceInputs htmlfor={"location"} value={experienceDraft[experiencePressedIndex]?.location} inputKey={'location'} inputChangingFunc={handleExperienceChange} title={'Location'} />
                                            <ExperienceInputs htmlfor={"startDate"} value={experienceDraft[experiencePressedIndex]?.startDate} type="date" inputKey={'startDate'} inputChangingFunc={handleExperienceChange} title={'start Date'} />
                                            <ExperienceInputs htmlfor={"endDate"} value={experienceDraft[experiencePressedIndex]?.endDate} type="date" inputKey={'endDate'} inputChangingFunc={handleExperienceChange} title={'end Date'} />
                                            <label className="text-white flex gap-2 items-center">
                                                <input type="checkbox" checked={experienceDraft[experiencePressedIndex]?.endDate === "present"} onChange={(e) =>
                                                    handleExperienceChange("endDate", e.target.checked ? "present" : new Date().toISOString().split("T")[0] // or empty string
                                                    )
                                                }
                                                />
                                                Currently work here
                                            </label>
                                        </div>
                                        {isInvalidateExperience && <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-[#F10C0C] font-poppins font-light">Please Enter Valid Details.</div>}
                                        <UserDetailsSaveCancleButtons draftState={experienceDraft} setOriginalState={setExperience} errorCondition={experience?.length === 0} setInputView={setIsExperienceClicked} setErrorShow={setIsInvalidateExperience} />
                                        {/* ..condition  */}
                                    </>
                                }
                            </div>

                            {/* education info  */}
                            <div className="bg-lightgrey rounded-xl p-4 md:p-8 flex flex-col gap-5">
                                {!isEducationDetailsClicked ?
                                    <>
                                        <UserDetailsModifyHeaderContent title={'Education'} logo={faGraduationCap} isEdit={false} />
                                        {educationDetails?.length > 0 && educationDetails?.map((element, index) => <EducationInfoCard key={index} data={element} index={index} originalStateValue={educationDetails} setDraftState={seteducationDetailsDraft} setExperiencePressedIndex={setEducationalDetailsIndex} setShowInputs={setIsEducationDetailsClicked} />)}

                                    </>
                                    :
                                    <>
                                        <div className="flex flex-col gap-3">
                                            <ExperienceInputs htmlfor={"course"} value={educationDetailsDraft[educationalDetailsIndex]?.course} inputKey={'course'} inputChangingFunc={handleEducationDetailsChange} title={'Course'} />
                                            <ExperienceInputs htmlfor={"university"} value={educationDetailsDraft[educationalDetailsIndex]?.university} inputKey={'university'} inputChangingFunc={handleEducationDetailsChange} title={'university'} />
                                            <ExperienceInputs htmlfor={"startDate"} value={educationDetailsDraft[educationalDetailsIndex]?.startDate} type="date" inputKey={'startDate'} inputChangingFunc={handleEducationDetailsChange} title={'start Date'} />
                                            <ExperienceInputs htmlfor={"endDate"} value={educationDetailsDraft[educationalDetailsIndex]?.endDate} type="date" inputKey={'endDate'} inputChangingFunc={handleEducationDetailsChange} title={'end Date'} />
                                            <label className="text-white flex gap-2 items-center">
                                                <input type="checkbox" checked={educationDetailsDraft[educationalDetailsIndex]?.endDate === "present"} onChange={(e) =>
                                                    handleEducationDetailsChange("endDate", e.target.checked ? "present" : new Date().toISOString().split("T")[0] // or empty string
                                                    )
                                                }
                                                />
                                                Currently pursuing here
                                            </label>
                                        </div>
                                        {isInvalidateEducationDetails && <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-[#F10C0C] font-poppins font-light">Please Enter Valid Details.</div>}
                                        <UserDetailsSaveCancleButtons draftState={educationDetailsDraft} setOriginalState={setEducationDetails} errorCondition={educationDetails?.length === 0} setInputView={setIsEducationDetailsClicked} setErrorShow={setIsInvalidateEducationDetails} />
                                    </>
                                }

                            </div>

                        </div>

                        {/* right user details */}
                        <div className="flex flex-col gap-5 w-full lg:w-[30%] order-3 lg:order-2">

                            <div className="p-4 bg-lightgrey flex flex-col items-center gap-4 rounded-xl">
                                <div className="w-20 h-20 rounded-full bg-dark flex justify-center items-center">
                                    <FontAwesomeIcon icon={faUser} style={{ color: "white", fontSize: "2.1rem" }} />
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-white font-poppins">Rushikesh Pol</div>
                                    <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-white font-poppins">Frontend Developer</div>
                                </div>

                            </div>

                            <div className="p-4 bg-lightgrey flex flex-col gap-4 rounded-xl">
                                <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-white font-poppins">Job Preferences</div>
                                <div className="flex flex-col gap-3">
                                    <QuickStatsContent content={'Preferred Role'} value={'DevOps'} />
                                    <QuickStatsContent content={'Expected Salary'} value={'$60k - $80k'} />
                                    <QuickStatsContent content={'Work Type'} value={'Remote'} />
                                </div>
                            </div>

                            <div className="p-4 bg-lightgrey flex flex-col gap-4 rounded-xl">
                                <div className="text-mobile-body md:text-tablet-body lg:text-desktop-body text-white font-poppins">Skills</div>
                                <div className="flex flex-wrap gap-3">
                                    <JobCatagoryButton content={'Html'} />
                                    <JobCatagoryButton content={'Css'} />
                                    <JobCatagoryButton content={'Javascript'} />
                                    <JobCatagoryButton content={'React js'} />
                                    <JobCatagoryButton content={'Typescript'} />
                                    <JobCatagoryButton content={'Bootstrap'} />
                                    <JobCatagoryButton content={'Redux js'} />
                                    <JobCatagoryButton content={'Next js'} />
                                    <JobCatagoryButton content={'Java'} />
                                    <JobCatagoryButton content={'MySql'} />
                                    <JobCatagoryButton content={'SASS'} />
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

                <HomeFooter activePage={'user'} />
            </div>
        </>
    );
};
export default UserProfile;
