import React, { useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faFilter, faHouse, faMagnifyingGlass, faMessage, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

//images
import PassportImg from "../assets/images/passportImg.jpg";

//utils
import { sanitizeInputs } from "../utils/Utils";
import { Link, useNavigate } from "react-router-dom";
import JobInfoCard from "../components/cards/JobInfoCard";
import { jobsData } from "../utils/JobData";
import JobCardSkelton from "../components/loaders/JobCardSkelton";
import QuickStatsContent from "../components/contents/QuickStatsContent";
import PopularCompanyContent from "../components/contents/PopularCompanyContent";
import HomeFooter from "../components/layouts/HomeFooter";


const Homepage = () => {

    const [searchValue, setSearchValue] = useState('');
    const [recommendedJobs, setRecommendedJobs] = useState([]);
    const [suggestedJobs, setSuggestedJobs] = useState([]);
    const [searchedJobs, setSearchedJobs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    const fetchJobs = async () => {
        //to assume this data comes from api returned dummy delayed promise
        await new Promise(resolve => setTimeout(resolve, 1000));

        const recommendedJobsData = jobsData?.filter(element => element.category?.toLowerCase()?.includes('recommended'));
        const suggestedJobsData = jobsData?.filter(element => element.category?.toLowerCase()?.includes('suggested'));

        setRecommendedJobs([...recommendedJobsData]);
        setSuggestedJobs([...suggestedJobsData]);
    }

    //fetch the data
    useEffect(() => {
        fetchJobs();
    }, []);

    //to get the searched jobs fromm dbounce function
    useEffect(() => {
        handleSearchDataFetch();
    }, [searchValue]);



    //onchange on click functions 

    const handleSearchInput = (e) => {
        //first sanitize the input then store it in state to prevent xss attacks
        const sanitizedContent = sanitizeInputs(e.target.value);

        setSearchValue(sanitizedContent);
        console.log('sanitized data :', sanitizedContent);

    };

    const handleSearchDataFetch = useCallback(debounce(() => {

        const searchedData = jobsData?.filter(element => element?.title?.toLowerCase()?.includes(searchValue?.toLowerCase()));

        setSearchedJobs([...searchedData]);

    }, 400), [searchValue]);

    const handleUserClick = () => {
        navigate('/user-profile');
    }

    const handleScroll = () => {
        const scrollLeft = scrollRef.current.scrollLeft;
        const itemWidth = scrollRef.current.children[0].offsetWidth + 16; // add gap if needed
        const index = Math.round(scrollLeft / itemWidth);
        setActiveIndex(index);
    };
    return (
        <>
            <div className="bg-dark min-h-screen pb-24">
                {/* header  */}
                <header className="flex justify-center items-center">
                    <nav className="flex justify-between items-center  w-full border p-4">
                        <button className="cursor-pointer">
                            <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: "1.1rem" }} />
                        </button>
                        <div className="flex items-center gap-3 lg:gap-4">
                            <button className="cursor-pointer">
                                <FontAwesomeIcon icon={faBell} style={{ color: "white", fontSize: "1.1rem" }} />
                            </button>
                            <button className="cursor-pointer" onClick={handleUserClick}>
                                <img src={PassportImg} alt="user-img" className="w-8 h-8 rounded-full" />
                            </button>
                        </div>
                    </nav>
                </header>

                {/* section 1 search bar */}
                <section className="flex justify-center items-center px-4 md:px-6 lg:px-12 py-4">
                    <div className="max-w-[1200px] w-full flex flex-col gap-5">
                        <h3 className="text-mobile-heading-3 md:text-tablet-heading-3 lg:text-desktop-heading-3 text-white font-poppins font-light">Let's Find Job</h3>

                        {/* search bar  */}
                        <div className="flex items-between justify-center border border-grey p-3 rounded-full">
                            <div className="flex items-center gap-2 grow">
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white", fontSize: "1rem" }} />
                                <input type="text" name="jobSearch" id="jobSearch" value={searchValue} onChange={handleSearchInput} className=" w-full outline-none text-medium-grey placeholder-medium-grey font-poppins font-light" placeholder="Search Job" />
                            </div>
                            <button className="cursor-pointer">
                                <FontAwesomeIcon icon={faFilter} style={{ color: "white", fontSize: "1.1rem" }} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* suggested and recommended jobs  */}
                <section className="flex justify-center items-center px-4 md:px-6 lg:px-12 py-4">
                    <div className="max-w-[1200px] w-full flex gap-7 lg:gap-[3%] flex-wrap">

                        {/* container 1 */}
                        <div className="w-full lg:w-[67%] flex flex-col gap-5 order-1">
                            {/* to get searched jobs  */}

                            {searchValue?.length > 0 && suggestedJobs?.length > 0 &&
                                (
                                    <>
                                        <h4 className="text-medium-grey font-poppins text-mobile-heading-4 md:text-mobile-heading-4 lg:text-desktop-heading-4 font-light">Search Result</h4>
                                        {
                                            searchedJobs?.length > 0 &&
                                            searchedJobs.map((element, index) => (
                                                <JobInfoCard key={element.id || index} data={element} />
                                            ))
                                        }
                                    </>
                                )
                            }

                            <div className="flex justify-between items-center">
                                <h4 className="text-medium-grey font-poppins text-mobile-heading-4 md:text-mobile-heading-4 lg:text-desktop-heading-4 font-light">Suggested for you</h4>
                                <Link to='/' className="text-dark-purple font-poppins underline text-mobile-heading-4 md:text-tablet-body lg:text-desktop-body hover:no-underline hover:scale-105 transition-all duration-200">View All</Link>
                            </div>
                            {/* job suggestion cards  */}
                            {/* {suggestedJobs?.length > 0 ?
                                suggestedJobs?.map((element, index) => {
                                    return <JobInfoCard key={index} data={element} />
                                })
                                :
                                new Array(4)?.fill(null)?.map((_, index) => (<JobCardSkelton key={index} />))
                            } */}
                            <div ref={scrollRef} onScroll={handleScroll} className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none gap-4 md:gap-5 scroll-smooth px-2 md:px-0 " style={{scrollbarWidth:'none'}}>
                                {
                                    suggestedJobs?.length > 0
                                        ? suggestedJobs.map((element, index) => (
                                            <div key={index} className="snap-start shrink-0 ">
                                                <JobInfoCard data={element} />
                                            </div>
                                        ))
                                        : new Array(4).fill(null).map((_, index) => (
                                            <div key={index} className="snap-start shrink-0 ">
                                                <JobCardSkelton />
                                            </div>
                                        ))
                                }
                            </div>
                            {/* Dots */}
                            <div className="flex justify-center gap-2 mt-4 md:hidden">
                                {suggestedJobs.map((_, index) => (
                                    <div key={index} className={`h-2 w-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-purple" : "bg-white" }`}></div>
                                ))}
                            </div>
                        </div>

                        {/* container 2 */}
                        <div className="flex flex-col gap-5 w-full lg:w-[30%] order-3 lg:order-2">
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

                        {/* container 3 */}
                        <div className="w-full lg:w-[67%] flex flex-col gap-5 lg:mt-7 order-2 lg:order-3">
                            <div className="flex justify-between items-center">
                                <h4 className="text-medium-grey font-poppins text-mobile-heading-4 md:text-mobile-heading-4 lg:text-desktop-heading-4 font-light">Recommended for you</h4>
                                <Link to='/' className="text-dark-purple font-poppins underline text-mobile-heading-4 md:text-tablet-body lg:text-desktop-body hover:no-underline hover:scale-105 transition-all duration-200">View All</Link>
                            </div>

                            {recommendedJobs?.length > 0 ?
                                recommendedJobs?.map((element, index) => {
                                    return <JobInfoCard key={index} isJobuggestionCard={false} data={element} isRecommedationCard={true} />
                                })
                                :
                                new Array(4)?.fill(null)?.map((_, index) => (<JobCardSkelton key={index} />))
                            }

                        </div>

                    </div>
                </section>

                <HomeFooter activePage={'home'} />
            </div>
        </>
    );
};
export default Homepage;
