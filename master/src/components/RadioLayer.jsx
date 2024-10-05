import React from 'react'
import DefaultRadio from './child/DefaultRadio'
import RadioDisable from './child/RadioDisable'

const RadioLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultRadio */}
            <DefaultRadio />

            {/* RadioDisable */}
            <RadioDisable />


            <div className="col-md-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Radio With Button</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex align-items-center flex-wrap gap-24">
                            <div className="bg-primary-50 px-20 py-12 radius-8">
                                <span className="form-check checked-primary d-flex align-items-center gap-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radio100"
                                        id="radio100"
                                        defaultChecked=""
                                    />
                                    <label
                                        className="form-check-label line-height-1 fw-medium text-secondary-light"
                                        htmlFor="radio100"
                                    >
                                        {" "}
                                        Radio Active{" "}
                                    </label>
                                </span>
                            </div>
                            <div className="bg-neutral-100 px-20 py-12 radius-8">
                                <span className="form-check checked-success d-flex align-items-center gap-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radio200"
                                        id="radio200"
                                        defaultChecked=""
                                    />
                                    <label
                                        className="form-check-label line-height-1 fw-medium text-secondary-light"
                                        htmlFor="radio200"
                                    >
                                        {" "}
                                        Radio Active{" "}
                                    </label>
                                </span>
                            </div>
                            <div className="bg-success-100 px-20 py-12 radius-8">
                                <span className="form-check checked-success d-flex align-items-center gap-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radio300"
                                        id="radio300"
                                        defaultChecked=""
                                    />
                                    <label
                                        className="form-check-label line-height-1 fw-medium text-secondary-light"
                                        htmlFor="radio300"
                                    >
                                        {" "}
                                        Radio Active{" "}
                                    </label>
                                </span>
                            </div>
                            <div className="bg-warning-100 px-20 py-12 radius-8">
                                <span className="form-check checked-warning d-flex align-items-center gap-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radio400"
                                        id="radio400"
                                        defaultChecked=""
                                    />
                                    <label
                                        className="form-check-label line-height-1 fw-medium text-secondary-light"
                                        htmlFor="radio400"
                                    >
                                        {" "}
                                        Radio Active{" "}
                                    </label>
                                </span>
                            </div>
                            <div className="bg-neutral-200 px-20 py-12 radius-8">
                                <span className="form-check checked-dark d-flex align-items-center gap-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radio500"
                                        id="radio500"
                                        defaultChecked=""
                                    />
                                    <label
                                        className="form-check-label line-height-1 fw-medium text-secondary-light"
                                        htmlFor="radio500"
                                    >
                                        {" "}
                                        Radio Active{" "}
                                    </label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-28">
                        <h6 className="text-lg fw-semibold mb-0">Radio Horizontal</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex align-items-center flex-wrap gap-28">
                            <div className="form-check checked-primary d-flex align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="horizontal"
                                    id="horizontal1"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="horizontal1"
                                >
                                    Horizontal 1{" "}
                                </label>
                            </div>
                            <div className="form-check checked-secondary d-flex align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="horizontal"
                                    id="horizontal2"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="horizontal2"
                                >
                                    Horizontal 2{" "}
                                </label>
                            </div>
                            <div className="form-check checked-success d-flex align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="horizontal"
                                    id="horizontal3"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="horizontal3"
                                >
                                    Horizontal 3{" "}
                                </label>
                            </div>
                            <div className="form-check checked-warning d-flex align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="horizontal"
                                    id="horizontal4"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="horizontal4"
                                >
                                    Horizontal 4{" "}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Radio Vertical</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex align-items-start flex-column flex-wrap gap-3">
                            <div className="form-check checked-primary d-flex align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="vertical"
                                    id="vertical11"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="vertical11"
                                >
                                    Vertical 1{" "}
                                </label>
                            </div>
                            <div className="form-check checked-secondary d-flex align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="vertical"
                                    id="vertical22"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="vertical22"
                                >
                                    Vertical 2{" "}
                                </label>
                            </div>
                            <div className="form-check checked-success d-flex align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="vertical"
                                    id="vertical33"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="vertical33"
                                >
                                    Vertical 3{" "}
                                </label>
                            </div>
                            <div className="form-check checked-warning d-flex align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="vertical"
                                    id="vertical44"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="vertical44"
                                >
                                    Vertical 4{" "}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RadioLayer