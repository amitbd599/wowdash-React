import React from 'react'

const RevenueGrowthOne = () => {

    return (
        <div className="col-xxl-4">
            <div className="card h-100 radius-8 border">
                <div className="card-body p-24">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <div>
                            <h6 className="mb-2 fw-bold text-lg">Revenue Growth</h6>
                            <span className="text-sm fw-medium text-secondary-light">
                                Weekly Report
                            </span>
                        </div>
                        <div className="text-end">
                            <h6 className="mb-2 fw-bold text-lg">$50,000.00</h6>
                            <span className="bg-success-focus ps-12 pe-12 pt-2 pb-2 rounded-2 fw-medium text-success-main text-sm">
                                $10k
                            </span>
                        </div>
                    </div>
                    <div id="revenue-chart" className="mt-28" >

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RevenueGrowthOne