import React from 'react'
import UnitCountFive from './child/UnitCountFive'
import TrafficSourcesOne from './child/TrafficSourcesOne'
import TopCategoriesOne from './child/TopCategoriesOne'
import TopInstructorsOne from './child/TopInstructorsOne'
import StudentProgressOne from './child/StudentProgressOne'
import CoursesOne from './child/CoursesOne'

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

                {/* CoursesOne */}
                <CoursesOne />


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