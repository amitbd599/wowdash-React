import React from 'react'
import UnitCountFour from './child/UnitCountFour'
import RevenueStatisticsOne from './child/RevenueStatisticsOne'
import SalesStatisticTwo from './child/SalesStatisticTwo'
import TopCountriesTwo from './child/TopCountriesTwo'
import UserActivatesTwo from './child/UserActivatesTwo'
import LatestInvestmentsOne from './child/LatestInvestmentsOne'
import NoticeBoardOne from './child/NoticeBoardOne'
import TotalTransactionsOne from './child/TotalTransactionsOne'

const DashBoardLayerFive = () => {
    return (
        <>
            <div className="row gy-4">

                {/* UnitCountFour */}
                <UnitCountFour />

                {/* RevenueStatisticsOne */}
                <RevenueStatisticsOne />


                {/* SalesStatisticTwo */}
                <SalesStatisticTwo />


                {/* TopCountriesTwo */}
                <TopCountriesTwo />


                {/* UserActivatesTwo */}
                <UserActivatesTwo />


                {/* LatestInvestmentsOne */}
                <LatestInvestmentsOne />

                {/* NoticeBoardOne */}
                <NoticeBoardOne />

                {/* TotalTransactionsOne */}
                <TotalTransactionsOne />



                {/* Notice board End */}
                {/* Total Transactions Start */}

                {/* Total Transactions End */}
                {/* Project Status Start */}
                <div className="col-xxl-4">
                    <div className="card h-100">
                        <div className="card-body p-24">
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                                <h6 className="mb-2 fw-bold text-lg">Project Status</h6>
                                <div className="">
                                    <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                                        <option>Yearly</option>
                                        <option>Monthly</option>
                                        <option>Weekly</option>
                                        <option>Today</option>
                                    </select>
                                </div>
                            </div>
                            <div className="table-responsive scroll-sm">
                                <table className="table sm-table bordered-table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">
                                                <div className="max-w-112 mx-auto">
                                                    <span>Stock</span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Gold</td>
                                            <td>2 Months</td>
                                            <td>
                                                <div className="max-w-112 mx-auto">
                                                    <div className="w-100">
                                                        <div
                                                            className="progress progress-sm rounded-pill"
                                                            role="progressbar"
                                                            aria-label="Success example"
                                                            aria-valuenow={25}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <div
                                                                className="progress-bar bg-red rounded-pill"
                                                                style={{ width: "30%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="mt-8 text-secondary-light text-sm fw-medium">
                                                        30%
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Dollars</td>
                                            <td>3 Months</td>
                                            <td>
                                                <div className="max-w-112 mx-auto">
                                                    <div className="w-100">
                                                        <div
                                                            className="progress progress-sm rounded-pill"
                                                            role="progressbar"
                                                            aria-label="Success example"
                                                            aria-valuenow={25}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <div
                                                                className="progress-bar bg-warning-main rounded-pill"
                                                                style={{ width: "50%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="mt-8 text-secondary-light text-sm fw-medium">
                                                        50%
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Stock Market</td>
                                            <td>1 Months</td>
                                            <td>
                                                <div className="max-w-112 mx-auto">
                                                    <div className="w-100">
                                                        <div
                                                            className="progress progress-sm rounded-pill"
                                                            role="progressbar"
                                                            aria-label="Success example"
                                                            aria-valuenow={25}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <div
                                                                className="progress-bar bg-info-main rounded-pill"
                                                                style={{ width: "60%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="mt-8 text-secondary-light text-sm fw-medium">
                                                        60%
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Dimond</td>
                                            <td>5 Months</td>
                                            <td>
                                                <div className="max-w-112 mx-auto">
                                                    <div className="w-100">
                                                        <div
                                                            className="progress progress-sm rounded-pill"
                                                            role="progressbar"
                                                            aria-label="Success example"
                                                            aria-valuenow={25}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <div
                                                                className="progress-bar bg-success-main rounded-pill"
                                                                style={{ width: "80%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="mt-8 text-secondary-light text-sm fw-medium">
                                                        80%
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>S&amp;P 500</td>
                                            <td>4 Months</td>
                                            <td>
                                                <div className="max-w-112 mx-auto">
                                                    <div className="w-100">
                                                        <div
                                                            className="progress progress-sm rounded-pill"
                                                            role="progressbar"
                                                            aria-label="Success example"
                                                            aria-valuenow={25}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <div
                                                                className="progress-bar bg-red rounded-pill"
                                                                style={{ width: "70%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="mt-8 text-secondary-light text-sm fw-medium">
                                                        70%
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project Status End */}
            </div>

        </>
    )
}

export default DashBoardLayerFive