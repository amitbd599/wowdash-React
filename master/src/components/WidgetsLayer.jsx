import React from 'react'
import Metrics from './child/Metrics'
import useReactApexChart from '../hook/useReactApexChart'
import ReactApexChart from 'react-apexcharts'
import SalesStatisticOne from './child/SalesStatisticOne'
import TopCountries from './child/TopCountries'
import ClientPaymentOne from './child/ClientPaymentOne'
import EarningStaticOne from './child/EarningStaticOne'
import UsersOverviewOne from './child/UsersOverviewOne'
import TotalTransactionsOne from './child/TotalTransactionsOne'
import SalesStatisticTwo from './child/SalesStatisticTwo'
import UsersOverviewTwo from './child/UsersOverviewTwo'

const WidgetsLayer = () => {
    let { chartOptions, chartSeries } = useReactApexChart()
    return (
        <>
            {/* Metrics */}
            <Metrics />
            <div className="row gy-4 mt-1">

                {/* SalesStatisticOne */}
                <SalesStatisticOne />

                {/* TopCountries */}
                <TopCountries />

                {/* ClientPaymentOne */}
                <ClientPaymentOne />

                {/* EarningStaticOne */}
                <EarningStaticOne />

                {/* UsersOverviewOne */}
                <UsersOverviewTwo />

                {/* TotalTransactionsOne */}
                <TotalTransactionsOne />

                {/* SalesStatisticTwo */}
                <SalesStatisticTwo />
            </div>
        </>

    )
}

export default WidgetsLayer