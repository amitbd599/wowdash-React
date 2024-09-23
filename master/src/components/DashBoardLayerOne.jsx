import React from 'react'
import SalesStatisticOne from './child/SalesStatisticOne';
import TotalSubscriberOne from './child/TotalSubscriberOne';
import UsersOverviewOne from './child/UsersOverviewOne';
import LatestRegisteredOne from './child/LatestRegisteredOne';
import TopPerformerOne from './child/TopPerformerOne';
import TopCountries from './child/TopCountries';
import GeneratedContent from './child/GeneratedContent';

const DashBoardLayerOne = () => {

    return (
        <div className="row gy-4 mt-1">
            {/* SalesStatisticOne */}
            <SalesStatisticOne />

            {/* TotalSubscriberOne */}
            <TotalSubscriberOne />

            {/* UsersOverviewOne */}
            <UsersOverviewOne />

            {/* LatestRegisteredOne */}
            <LatestRegisteredOne />

            {/* TopPerformerOne */}
            <TopPerformerOne />

            {/* TopCountries */}
            <TopCountries />

            {/* GeneratedContent */}
            <GeneratedContent />

        </div>

    )
}

export default DashBoardLayerOne