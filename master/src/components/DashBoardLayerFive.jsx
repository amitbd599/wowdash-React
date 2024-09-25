import React from 'react'
import UnitCountFour from './child/UnitCountFour'
import RevenueStatisticsOne from './child/RevenueStatisticsOne'
import SalesStatisticTwo from './child/SalesStatisticTwo'
import TopCountriesTwo from './child/TopCountriesTwo'

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



                {/* Most Location End */}
                {/* My portfolio Start */}
                <div className="col-xxl-3">
                    <div className="card h-100 radius-8 border-0">
                        <div className="card-body p-24">
                            <h6 className="mb-2 fw-bold text-lg">My Portfolio</h6>
                            <div className="position-relative">
                                <span className="w-80-px h-80-px bg-base shadow text-primary-light fw-bold text-xxl d-flex justify-content-center align-items-center rounded-circle position-absolute end-0 top-0 z-1">
                                    20k
                                </span>
                                <div
                                    id="statisticsDonutChart"
                                    className="mt-36 flex-grow-1 apexcharts-tooltip-z-none title-style circle-none"
                                />
                                <span className="w-80-px h-80-px bg-base shadow text-primary-light fw-bold text-xxl d-flex justify-content-center align-items-center rounded-circle position-absolute start-0 bottom-0 z-1">
                                    50k
                                </span>
                            </div>
                            <ul className="d-flex flex-wrap flex-column mt-64 gap-3">
                                <li className="d-flex align-items-center gap-2">
                                    <span className="w-16-px h-16-px radius-2 bg-primary-600" />
                                    <span className="text-secondary-light text-lg fw-normal">
                                        Total Gain:
                                        <span className="text-primary-light fw-bold text-lg">
                                            $50,000
                                        </span>
                                    </span>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <span className="w-16-px h-16-px radius-2 bg-yellow" />
                                    <span className="text-secondary-light text-lg fw-normal">
                                        Total Investment:
                                        <span className="text-primary-light fw-bold text-lg">
                                            $20,000
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* My portfolio End */}
                {/* Latest Investments Start */}
                <div className="col-xxl-6">
                    <div className="card h-100">
                        <div className="card-body p-24">
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                                <h6 className="mb-2 fw-bold text-lg mb-0">Latest Investments</h6>
                                <a
                                    href="javascript:void(0)"
                                    className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                                >
                                    View All
                                    <iconify-icon
                                        icon="solar:alt-arrow-right-linear"
                                        className="icon"
                                    />
                                </a>
                            </div>
                            <div className="table-responsive scroll-sm">
                                <table className="table bordered-table sm-table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Asset</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price </th>
                                            <th scope="col">Date</th>
                                            <th scope="col" className="text-center">
                                                Total Orders
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="assets/images/asset/asset-img1.png"
                                                        alt=""
                                                        className="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-md mb-0 fw-normal">Gold</h6>
                                                        <span className="text-sm text-secondary-light fw-normal">
                                                            Main Asset
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 className="text-md mb-0 fw-normal">7500</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Ounces
                                                </span>
                                            </td>
                                            <td>$7,500.00</td>
                                            <td>25 May 2024</td>
                                            <td className="text-center">
                                                <span className="bg-success-focus text-success-main px-16 py-4 radius-8 fw-medium text-sm">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="assets/images/asset/asset-img2.png"
                                                        alt=""
                                                        className="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-md mb-0 fw-normal">Dollars</h6>
                                                        <span className="text-sm text-secondary-light fw-normal">
                                                            Currency
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 className="text-md mb-0 fw-normal">5,40,000</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Dollars
                                                </span>
                                            </td>
                                            <td>$5,40,000.00</td>
                                            <td>25 May 2024</td>
                                            <td className="text-center">
                                                <span className="bg-warning-focus text-warning-main px-16 py-4 radius-8 fw-medium text-sm">
                                                    In Progress
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="assets/images/asset/asset-img3.png"
                                                        alt=""
                                                        className="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-md mb-0 fw-normal">Stock Market</h6>
                                                        <span className="text-sm text-secondary-light fw-normal">
                                                            Product
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 className="text-md mb-0 fw-normal">1500</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Products
                                                </span>
                                            </td>
                                            <td>$50,000.00</td>
                                            <td>25 May 2024</td>
                                            <td className="text-center">
                                                <span className="bg-success-focus text-success-main px-16 py-4 radius-8 fw-medium text-sm">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="assets/images/asset/asset-img4.png"
                                                        alt=""
                                                        className="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-md mb-0 fw-normal">Dimond</h6>
                                                        <span className="text-sm text-secondary-light fw-normal">
                                                            Asset
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 className="text-md mb-0 fw-normal">350</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Ounces
                                                </span>
                                            </td>
                                            <td>$30,000.00</td>
                                            <td>25 May 2024</td>
                                            <td className="text-center">
                                                <span className="bg-warning-focus text-warning-main px-16 py-4 radius-8 fw-medium text-sm">
                                                    In Progress
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="assets/images/asset/asset-img5.png"
                                                        alt=""
                                                        className="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-md mb-0 fw-normal">S&amp;P 500</h6>
                                                        <span className="text-sm text-secondary-light fw-normal">
                                                            Index
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 className="text-md mb-0 fw-normal">24,000</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Shares
                                                </span>
                                            </td>
                                            <td>$63,000.00</td>
                                            <td>25 May 2024</td>
                                            <td className="text-center">
                                                <span className="bg-success-focus text-success-main px-16 py-4 radius-8 fw-medium text-sm">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Latest Investments End */}
                {/* Notice board Start */}
                <div className="col-xxl-4">
                    <div className="card h-100">
                        <div className="card-body p-24">
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                                <h6 className="mb-2 fw-bold text-lg mb-0">Notice board</h6>
                                <a
                                    href="javascript:void(0)"
                                    className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                                >
                                    View All
                                    <iconify-icon
                                        icon="solar:alt-arrow-right-linear"
                                        className="icon"
                                    />
                                </a>
                            </div>
                            <div className="d-flex align-items-start gap-2 mb-20">
                                <img
                                    src="assets/images/notice/board-img1.png"
                                    alt=""
                                    className="flex-shrink-0 w-40-px h-40-px me-12 radius-8 me-12"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-1 fw-semibold">Admin</h6>
                                    <p className="text-sm text-secondary-light fw-medium mb-1">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum is simply dummy.
                                    </p>
                                    <span className="text-sm text-secondary-light fw-normal">
                                        25 Jan 2024
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-2 mb-20">
                                <img
                                    src="assets/images/notice/board-img2.png"
                                    alt=""
                                    className="flex-shrink-0 w-40-px h-40-px me-12 radius-8 me-12"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-1 fw-semibold">Kathryn Murphy</h6>
                                    <p className="text-sm text-secondary-light fw-medium mb-1">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                    <span className="text-sm text-secondary-light fw-normal">
                                        25 Jan 2024
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                                <img
                                    src="assets/images/notice/board-img3.png"
                                    alt=""
                                    className="flex-shrink-0 w-40-px h-40-px me-12 radius-8 me-12"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-1 fw-semibold">Cameron Williamson</h6>
                                    <p className="text-sm text-secondary-light fw-medium mb-1">
                                        Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is
                                        simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <span className="text-sm text-secondary-light fw-normal">
                                        25 Jan 2024
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Notice board End */}
                {/* Total Transactions Start */}
                <div className="col-xxl-4">
                    <div className="card h-100">
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