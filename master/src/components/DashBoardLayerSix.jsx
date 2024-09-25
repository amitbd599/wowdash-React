import React from 'react'
import UnitCountFive from './child/UnitCountFive'
import TrafficSourcesOne from './child/TrafficSourcesOne'
import TopCategoriesOne from './child/TopCategoriesOne'
import TopInstructorsOne from './child/TopInstructorsOne'
import StudentProgressOne from './child/StudentProgressOne'

const DashBoardLayerSix = () => {
    return (
        <>

            <div className="row gy-4 mb-24">

                {/* UnitCountFive */}
                <UnitCountFive />

                {/* TrafficSourcesOne */}
                <TrafficSourcesOne />

                {/* TopCategoriesOne */}
                <TopCategoriesOne />

                {/* TopInstructorsOne */}
                <TopInstructorsOne />

                {/* StudentProgressOne */}
                <StudentProgressOne />





                {/* Student Progress Card Start */}

                {/* Student Progress Card End */}
                {/* ================== Second Row Cards End ======================= */}
                {/* ================== Third Row Cards Start ======================= */}
                <div className="col-xxl-8">
                    <div className="card h-100">
                        <div className="card-header">
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                <h6 className="mb-2 fw-bold text-lg mb-0">Courses</h6>
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
                        </div>
                        <div className="card-body p-24">
                            <div className="table-responsive scroll-sm">
                                <table className="table bordered-table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Registered On</th>
                                            <th scope="col">Instructors </th>
                                            <th scope="col">Users</th>
                                            <th scope="col">Enrolled</th>
                                            <th scope="col">Price </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="text-secondary-light">24 Jun 2024</span>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">Ronald Richards</span>
                                            </td>
                                            <td>
                                                <div className="text-secondary-light">
                                                    <h6 className="text-md mb-0 fw-normal">
                                                        3d Illustration &amp; Art Design
                                                    </h6>
                                                    <span className="text-sm fw-normal">34 Lessons</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">257</span>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">$29.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="text-secondary-light">24 Jun 2024</span>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">Jerome Bell</span>
                                            </td>
                                            <td>
                                                <div className="text-secondary-light">
                                                    <h6 className="text-md mb-0 fw-normal">
                                                        Advanced JavaScript Development
                                                    </h6>
                                                    <span className="text-sm fw-normal">20 Lessons</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">375</span>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">$29.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="text-secondary-light">24 Jun 2024</span>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">Cody Fisher</span>
                                            </td>
                                            <td>
                                                <div className="text-secondary-light">
                                                    <h6 className="text-md mb-0 fw-normal">
                                                        Portrait Drawing Fundamentals{" "}
                                                    </h6>
                                                    <span className="text-sm fw-normal">16 Lessons</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">220</span>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">$29.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="text-secondary-light">24 Jun 2024</span>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">Floyd Miles</span>
                                            </td>
                                            <td>
                                                <div className="text-secondary-light">
                                                    <h6 className="text-md mb-0 fw-normal">
                                                        Advanced App Development
                                                    </h6>
                                                    <span className="text-sm fw-normal">25 Lessons</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">57</span>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">$29.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="text-secondary-light">24 Jun 2024</span>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">Ralph Edwards</span>
                                            </td>
                                            <td>
                                                <div className="text-secondary-light">
                                                    <h6 className="text-md mb-0 fw-normal">
                                                        HTML Fundamental Course
                                                    </h6>
                                                    <span className="text-sm fw-normal">17 Lessons&nbsp;</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">27</span>
                                            </td>
                                            <td>
                                                <span className="text-secondary-light">$29.00</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4">
                    <div className="card h-100">
                        <div className="card-header">
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                <h6 className="mb-2 fw-bold text-lg mb-0">Course Activity</h6>
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
                        </div>
                        <div className="card-body p-24">
                            <ul className="d-flex flex-wrap align-items-center justify-content-center my-3 gap-3">
                                <li className="d-flex align-items-center gap-2">
                                    <span className="w-12-px h-12-px rounded-circle bg-warning-600" />
                                    <span className="text-secondary-light text-sm fw-semibold">
                                        Paid Course:
                                        <span className="text-primary-light fw-bold">500</span>
                                    </span>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <span className="w-12-px h-12-px rounded-circle bg-success-main" />
                                    <span className="text-secondary-light text-sm fw-semibold">
                                        Free Course:
                                        <span className="text-primary-light fw-bold">300</span>
                                    </span>
                                </li>
                            </ul>
                            <div id="paymentStatusChart" className="margin-16-minus y-value-left" />
                        </div>
                    </div>
                </div>
                {/* ================== Third Row Cards End ======================= */}
            </div>



        </>
    )
}

export default DashBoardLayerSix