import React from 'react'
import DefaultRadioTwo from './child/DefaultRadioTwo'

const SwitchLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultRadioTwo */}
            <DefaultRadioTwo />

            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Switch Disable</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex align-items-center flex-wrap gap-28">
                            <div className="form-switch switch-primary d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="switch111"
                                    defaultChecked=""
                                    disabled=""
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="switch111"
                                >
                                    Switch Active
                                </label>
                            </div>
                            <div className="form-switch switch-purple d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="switch222"
                                    defaultChecked=""
                                    disabled=""
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="switch222"
                                >
                                    Switch Active
                                </label>
                            </div>
                            <div className="form-switch switch-success d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="switch333"
                                    defaultChecked=""
                                    disabled=""
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="switch333"
                                >
                                    Switch Active
                                </label>
                            </div>
                            <div className="form-switch switch-warning d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="switch444"
                                    defaultChecked=""
                                    disabled=""
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="switch444"
                                >
                                    Switch Active
                                </label>
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap gap-28 mt-24">
                            <div className="form-switch switch-primary d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="switch10"
                                    disabled=""
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="switch10"
                                >
                                    Switch Inactive
                                </label>
                            </div>
                            <div className="form-switch switch-purple d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="switch20"
                                    disabled=""
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="switch20"
                                >
                                    Switch Inactive
                                </label>
                            </div>
                            <div className="form-switch switch-success d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="switch30"
                                    disabled=""
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="switch30"
                                >
                                    Switch Inactive
                                </label>
                            </div>
                            <div className="form-switch switch-warning d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="switch40"
                                    disabled=""
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="switch40"
                                >
                                    Switch Inactive
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Switch With Tex</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex align-items-center flex-wrap gap-28">
                            <div className="form-switch switch-primary d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="yes"
                                    defaultChecked=""
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="yes"
                                >
                                    Yes
                                </label>
                            </div>
                            <div className="form-switch switch-primary d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="no"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="no"
                                >
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Switch Horizontal</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex align-items-center flex-wrap gap-28">
                            <div className="form-switch switch-primary d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="horizontal1"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="horizontal1"
                                >
                                    Horizontal 1
                                </label>
                            </div>
                            <div className="form-switch switch-purple d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="horizontal2"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="horizontal2"
                                >
                                    Horizontal 2
                                </label>
                            </div>
                            <div className="form-switch switch-success d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="horizontal3"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="horizontal3"
                                >
                                    Horizontal 3
                                </label>
                            </div>
                            <div className="form-switch switch-warning d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="horizontal4"
                                />
                                <label
                                    className="form-check-label line-height-1 fw-medium text-secondary-light"
                                    htmlFor="horizontal4"
                                >
                                    Horizontal 4
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SwitchLayer