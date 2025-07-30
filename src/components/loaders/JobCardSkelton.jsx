import React from 'react';

const JobCardSkelton = () => {
    return (
        <div className="w-full bg-lightgrey p-4 lg:p-6 rounded-xl flex flex-col gap-5 animate-pulse">

            <div className="flex flex-row items-center gap-5">
                <div className="w-14 h-14 bg-dark-purple rounded-lg" />
                <div className="flex flex-col gap-2 flex-1 w-full">
                    <div className="h-4 w-1/2 bg-dark-purple rounded" />
                    <div className="h-3 w-1/3 bg-dark-purple rounded" />
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4 w-full">
                <div className="h-7 w-16 bg-dark-purple rounded-full" />
                <div className="h-7 w-20 bg-dark-purple rounded-full" />
                <div className="h-7 w-24 bg-dark-purple rounded-full" />
            </div>

            <div className="flex justify-between items-center w-full">
                <div className="h-3 w-20 bg-dark-purple rounded" />
                <div className="h-4 w-4 bg-dark-purple rounded-full" />
            </div>
        </div>
    );
};

export default JobCardSkelton;
