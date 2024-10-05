import React from 'react'

const GradientProgressThree = () => {
    return (
        <div className="col-sm-6">
            <div className="card p-0 overflow-hidden position-relative radius-12">
                <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                    <h6 className="text-lg mb-0"> Gradient Progress </h6>
                </div>
                <div className="card-body p-24">
                    <div
                        className="progress-wrapper d-flex align-items-center flex-column gap-4"
                        data-perc="10%"
                    >
                        <div className="h-50-px position-relative w-100">
                            <span className="floating-label bottom-0 top-auto mt-12 position-absolute text-xs fw-semibold text-secondary-light bg-base border radius-8 w-50-px h-32-px z-1 shadow d-flex justify-content-center align-items-center">
                                10%
                            </span>
                            <div
                                className="progress mt-auto h-8-px w-100 bg-primary-50"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={10}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div
                                    className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible"
                                    style={{ width: "10%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="progress-wrapper d-flex align-items-center flex-column gap-4"
                        data-perc="30%"
                    >
                        <div className="h-50-px position-relative w-100">
                            <span className="floating-label bottom-0 top-auto mt-12 position-absolute text-xs fw-semibold text-secondary-light bg-base border radius-8 w-50-px h-32-px z-1 shadow d-flex justify-content-center align-items-center">
                                30%
                            </span>
                            <div
                                className="progress mt-auto h-8-px w-100 bg-primary-50"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={30}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div
                                    className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible"
                                    style={{ width: "30%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="progress-wrapper d-flex align-items-center flex-column gap-4"
                        data-perc="50%"
                    >
                        <div className="h-50-px position-relative w-100">
                            <span className="floating-label bottom-0 top-auto mt-12 position-absolute text-xs fw-semibold text-secondary-light bg-base border radius-8 w-50-px h-32-px z-1 shadow d-flex justify-content-center align-items-center">
                                50%
                            </span>
                            <div
                                className="progress mt-auto h-8-px w-100 bg-primary-50"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div
                                    className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible"
                                    style={{ width: "50%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="progress-wrapper d-flex align-items-center flex-column gap-4"
                        data-perc="70%"
                    >
                        <div className="h-50-px position-relative w-100">
                            <span className="floating-label bottom-0 top-auto mt-12 position-absolute text-xs fw-semibold text-secondary-light bg-base border radius-8 w-50-px h-32-px z-1 shadow d-flex justify-content-center align-items-center">
                                70%
                            </span>
                            <div
                                className="progress mt-auto h-8-px w-100 bg-primary-50"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div
                                    className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible"
                                    style={{ width: "70%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="progress-wrapper d-flex align-items-center flex-column gap-4"
                        data-perc="90%"
                    >
                        <div className="h-50-px position-relative w-100">
                            <span className="floating-label bottom-0 top-auto mt-12 position-absolute text-xs fw-semibold text-secondary-light bg-base border radius-8 w-50-px h-32-px z-1 shadow d-flex justify-content-center align-items-center">
                                90%
                            </span>
                            <div
                                className="progress mt-auto h-8-px w-100 bg-primary-50"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={90}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div
                                    className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible"
                                    style={{ width: "90%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GradientProgressThree