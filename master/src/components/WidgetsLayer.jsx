import React from 'react'
import Metrics from './child/Metrics'

const WidgetsLayer = () => {
    return (
        <>
            {/* Metrics */}
            <Metrics />
            <div className="row gy-4 mt-1">
                <div className="col-xxl-6 col-xl-6">
                    <div className="card h-100 border shadow-none">
                        <div className="card-body">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <h6 className="text-lg mb-0">Sales Statistic</h6>
                                <select className="form-select form-select-sm w-auto">
                                    <option>Yearly</option>
                                    <option>Monthly</option>
                                    <option>Weekly</option>
                                    <option>Today</option>
                                </select>
                            </div>
                            <div className="d-flex flex-wrap align-items-center gap-2 mt-8">
                                <h6 className="mb-0">$27,200</h6>
                                <span className="text-sm fw-semibold rounded-pill bg-success-focus text-success-main border br-success px-8 py-4 line-height-1">
                                    10% <iconify-icon icon="bxs:up-arrow" className="text-xs" />
                                </span>
                                <span className="text-xs fw-medium">+ $1500 Per Day</span>
                            </div>
                            <div id="chart" className="pt-28 apexcharts-tooltip-style-1" />
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6">
                    <div className="card h-100 border shadow-none">
                        <div className="card-body">
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                                <h6 className="mb-2 fw-bold text-lg mb-0">Top Countries</h6>
                                <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                                    <option>Today</option>
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                    <option>Yearly</option>
                                </select>
                            </div>
                            <div className="row gy-4">
                                <div className="col-sm-6">
                                    <div id="world-map" className="h-100 border radius-8" />
                                </div>
                                <div className="col-sm-6">
                                    <div className="h-100 border p-16 pe-0 radius-8">
                                        <div className="max-h-266-px overflow-y-auto scroll-sm pe-16">
                                            <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                                <div className="d-flex align-items-center w-100">
                                                    <img
                                                        src="assets/images/flags/flag1.png"
                                                        alt=""
                                                        className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12"
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-sm mb-0">USA</h6>
                                                        <span className="text-xs text-secondary-light fw-medium">
                                                            1,240 Users
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 w-100">
                                                    <div className="w-100 max-w-66 ms-auto">
                                                        <div
                                                            className="progress progress-sm rounded-pill"
                                                            role="progressbar"
                                                            aria-label="Success example"
                                                            aria-valuenow={25}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <div
                                                                className="progress-bar bg-primary-600 rounded-pill"
                                                                style={{ width: "80%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="text-secondary-light font-xs fw-semibold">
                                                        80%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                                <div className="d-flex align-items-center w-100">
                                                    <img
                                                        src="assets/images/flags/flag2.png"
                                                        alt=""
                                                        className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12"
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-sm mb-0">Japan</h6>
                                                        <span className="text-xs text-secondary-light fw-medium">
                                                            1,240 Users
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 w-100">
                                                    <div className="w-100 max-w-66 ms-auto">
                                                        <div
                                                            className="progress progress-sm rounded-pill"
                                                            role="progressbar"
                                                            aria-label="Success example"
                                                            aria-valuenow={25}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <div
                                                                className="progress-bar bg-orange rounded-pill"
                                                                style={{ width: "60%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="text-secondary-light font-xs fw-semibold">
                                                        60%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                                <div className="d-flex align-items-center w-100">
                                                    <img
                                                        src="assets/images/flags/flag3.png"
                                                        alt=""
                                                        className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12"
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-sm mb-0">France</h6>
                                                        <span className="text-xs text-secondary-light fw-medium">
                                                            1,240 Users
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 w-100">
                                                    <div className="w-100 max-w-66 ms-auto">
                                                        <div
                                                            className="progress progress-sm rounded-pill"
                                                            role="progressbar"
                                                            aria-label="Success example"
                                                            aria-valuenow={25}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <div
                                                                className="progress-bar bg-yellow rounded-pill"
                                                                style={{ width: "49%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="text-secondary-light font-xs fw-semibold">
                                                        49%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                                <div className="d-flex align-items-center w-100">
                                                    <img
                                                        src="assets/images/flags/flag4.png"
                                                        alt=""
                                                        className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12"
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-sm mb-0">Germany</h6>
                                                        <span className="text-xs text-secondary-light fw-medium">
                                                            1,240 Users
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 w-100">
                                                    <div className="w-100 max-w-66 ms-auto">
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
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="text-secondary-light font-xs fw-semibold">
                                                        100%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                                <div className="d-flex align-items-center w-100">
                                                    <img
                                                        src="assets/images/flags/flag5.png"
                                                        alt=""
                                                        className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12"
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-sm mb-0">South Korea</h6>
                                                        <span className="text-xs text-secondary-light fw-medium">
                                                            1,240 Users
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 w-100">
                                                    <div className="w-100 max-w-66 ms-auto">
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
                                                                style={{ width: "30%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="text-secondary-light font-xs fw-semibold">
                                                        30%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                <div className="d-flex align-items-center w-100">
                                                    <img
                                                        src="assets/images/flags/flag1.png"
                                                        alt=""
                                                        className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12"
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-sm mb-0">USA</h6>
                                                        <span className="text-xs text-secondary-light fw-medium">
                                                            1,240 Users
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 w-100">
                                                    <div className="w-100 max-w-66 ms-auto">
                                                        <div
                                                            className="progress progress-sm rounded-pill"
                                                            role="progressbar"
                                                            aria-label="Success example"
                                                            aria-valuenow={25}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <div
                                                                className="progress-bar bg-primary-600 rounded-pill"
                                                                style={{ width: "80%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="text-secondary-light font-xs fw-semibold">
                                                        80%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Client Payment Status Start */}
                <div className="col-xxl-4 col-lg-6">
                    <div className="card h-100 border shadow-none radius-8 border-0">
                        <div className="card-body p-24">
                            <h6 className="mb-2 fw-bold text-lg">Client Payment Status</h6>
                            <span className="text-sm fw-medium text-secondary-light">
                                Weekly Report
                            </span>
                            <ul className="d-flex flex-wrap align-items-center justify-content-center mt-32">
                                <li className="d-flex align-items-center gap-2 me-28">
                                    <span className="w-12-px h-12-px rounded-circle bg-success-main" />
                                    <span className="text-secondary-light text-sm fw-medium">
                                        Paid: 500
                                    </span>
                                </li>
                                <li className="d-flex align-items-center gap-2 me-28">
                                    <span className="w-12-px h-12-px rounded-circle bg-info-main" />
                                    <span className="text-secondary-light text-sm fw-medium">
                                        Pending: 500
                                    </span>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <span className="w-12-px h-12-px rounded-circle bg-warning-main" />
                                    <span className="text-secondary-light text-sm fw-medium">
                                        Overdue: 1500
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-40">
                                <div id="paymentStatusChart" className="margin-16-minus" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Client Payment Status End */}
                {/* Earning Static start */}
                <div className="col-xxl-8 col-lg-6">
                    <div className="card h-100 border shadow-none radius-8 border-0">
                        <div className="card-body p-24">
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                <div>
                                    <h6 className="mb-2 fw-bold text-lg">Earning Statistic</h6>
                                    <span className="text-sm fw-medium text-secondary-light">
                                        Yearly earning overview
                                    </span>
                                </div>
                                <div className="">
                                    <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                                        <option>Yearly</option>
                                        <option>Monthly</option>
                                        <option>Weekly</option>
                                        <option>Today</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-20 d-flex justify-content-center flex-wrap gap-3">
                                <div className="d-inline-flex align-items-center gap-2 p-2 radius-8 border pe-36 br-hover-primary group-item">
                                    <span className="bg-neutral-100 w-44-px h-44-px text-xxl radius-8 d-flex justify-content-center align-items-center text-secondary-light group-hover:bg-primary-600 group-hover:text-white">
                                        <iconify-icon icon="fluent:cart-16-filled" className="icon" />
                                    </span>
                                    <div>
                                        <span className="text-secondary-light text-sm fw-medium">
                                            Sales
                                        </span>
                                        <h6 className="text-md fw-semibold mb-0">$200k</h6>
                                    </div>
                                </div>
                                <div className="d-inline-flex align-items-center gap-2 p-2 radius-8 border pe-36 br-hover-primary group-item">
                                    <span className="bg-neutral-100 w-44-px h-44-px text-xxl radius-8 d-flex justify-content-center align-items-center text-secondary-light group-hover:bg-primary-600 group-hover:text-white">
                                        <iconify-icon icon="uis:chart" className="icon" />
                                    </span>
                                    <div>
                                        <span className="text-secondary-light text-sm fw-medium">
                                            Income
                                        </span>
                                        <h6 className="text-md fw-semibold mb-0">$200k</h6>
                                    </div>
                                </div>
                                <div className="d-inline-flex align-items-center gap-2 p-2 radius-8 border pe-36 br-hover-primary group-item">
                                    <span className="bg-neutral-100 w-44-px h-44-px text-xxl radius-8 d-flex justify-content-center align-items-center text-secondary-light group-hover:bg-primary-600 group-hover:text-white">
                                        <iconify-icon icon="ph:arrow-fat-up-fill" className="icon" />
                                    </span>
                                    <div>
                                        <span className="text-secondary-light text-sm fw-medium">
                                            Profit
                                        </span>
                                        <h6 className="text-md fw-semibold mb-0">$200k</h6>
                                    </div>
                                </div>
                            </div>
                            <div id="barChart" />
                        </div>
                    </div>
                </div>
                {/* Earning Static End */}
                <div className="col-xxl-4 col-lg-6">
                    <div className="card h-100 border shadow-none radius-8 overflow-hidden">
                        <div className="card-body p-24">
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                <h6 className="mb-2 fw-bold text-lg">Users Overview</h6>
                                <div className="">
                                    <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                                        <option>Today</option>
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                        <option>Yearly</option>
                                    </select>
                                </div>
                            </div>
                            <div id="userOverviewDonutChart" />
                            <ul className="d-flex flex-wrap align-items-center justify-content-between mt-3 gap-3">
                                <li className="d-flex align-items-center gap-2">
                                    <span className="w-12-px h-12-px radius-2 bg-primary-600" />
                                    <span className="text-secondary-light text-sm fw-normal">
                                        New:
                                        <span className="text-primary-light fw-semibold">500</span>
                                    </span>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <span className="w-12-px h-12-px radius-2 bg-yellow" />
                                    <span className="text-secondary-light text-sm fw-normal">
                                        Subscribed:
                                        <span className="text-primary-light fw-semibold">300</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Total Transactions Start */}
                <div className="col-xxl-4 col-lg-6">
                    <div className="card h-100 border shadow-none">
                        <div className="card-body p-24">
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                                <h6 className="mb-2 fw-bold text-lg">Total Transactions </h6>
                                <div className="">
                                    <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                                        <option>Yearly</option>
                                        <option>Monthly</option>
                                        <option>Weekly</option>
                                        <option>Today</option>
                                    </select>
                                </div>
                            </div>
                            <ul className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-28">
                                <li className="d-flex align-items-center gap-2">
                                    <span className="w-16-px h-16-px radius-2 bg-primary-600" />
                                    <span className="text-secondary-light text-lg fw-normal">
                                        Total Gain:
                                        <span className="text-primary-light fw-bold text-lg">
                                            $50,000
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            <div id="transactionLineChart" />
                        </div>
                    </div>
                </div>
                {/* Total Transactions End */}
                {/* Statistics Start */}
                <div className="col-xxl-4 col-lg-6">
                    <div className="card h-100 radius-8 border-0">
                        <div className="card-body p-24">
                            <h6 className="mb-2 fw-bold text-lg">Statistic</h6>
                            <div className="mt-24">
                                <div className="d-flex align-items-center gap-1 justify-content-between mb-44">
                                    <div>
                                        <span className="text-secondary-light fw-normal mb-12 text-xl">
                                            Daily Conversions
                                        </span>
                                        <h5 className="fw-semibold mb-0">%60</h5>
                                    </div>
                                    <div className="position-relative">
                                        <div id="semiCircleGauge" />
                                        <span className="w-36-px h-36-px rounded-circle bg-neutral-100 d-flex justify-content-center align-items-center position-absolute start-50 translate-middle bottom-0">
                                            <iconify-icon
                                                icon="mdi:emoji"
                                                className="text-primary-600 text-md mb-0"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-1 justify-content-between mb-44">
                                    <div>
                                        <span className="text-secondary-light fw-normal mb-12 text-xl">
                                            Visits By Day
                                        </span>
                                        <h5 className="fw-semibold mb-0">20k</h5>
                                    </div>
                                    <div id="areaChart" />
                                </div>
                                <div className="d-flex align-items-center gap-1 justify-content-between">
                                    <div>
                                        <span className="text-secondary-light fw-normal mb-12 text-xl">
                                            Today Income
                                        </span>
                                        <h5 className="fw-semibold mb-0">$5.5k</h5>
                                    </div>
                                    <div id="dailyIconBarChart" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Statistics End */}
            </div>
        </>

    )
}

export default WidgetsLayer