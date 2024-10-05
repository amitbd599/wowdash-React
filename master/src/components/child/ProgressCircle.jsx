import React from 'react'

const ProgressCircle = () => {
    return (

        <div className="col-xxl-12">
            <div className="card p-0 overflow-hidden position-relative radius-12">
                <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                    <h6 className="text-lg mb-0"> Progress Circle </h6>
                </div>
                <div className="card-body p-24">
                    <div className="">
                        <div className="progressBar w-90-px h-44-px position-relative text-primary-light fw-semibold">
                            <div className="barOverflow">
                                <div className="circleBar border-width-6-px" />
                            </div>
                            <div className="position-absolute start-50 translate-middle top-50 line-height-1 mt-8">
                                <div className="d-flex align-items-center justify-content-center line-height-1 text-sm">
                                    <span className="barNumber line-height-1">40 </span>
                                    <span>%</span>
                                </div>
                                <span className="line-height-1 text-xs text-secondary-light">
                                    Users
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressCircle