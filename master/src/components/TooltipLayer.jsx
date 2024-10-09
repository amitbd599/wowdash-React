import React from 'react'
import DefaultTooltip from './child/DefaultTooltip';
import DefaultTooltipTwo from './child/DefaultTooltipTwo';
import DefaultTooltipThree from './child/DefaultTooltipThree';
import TooltipPopoverPositions from './child/TooltipPopoverPositions';
import TooltipTextPopup from './child/TooltipTextPopup';
const TooltipLayer = () => {


    return (
        <div className="row gy-4">

            {/* DefaultTooltip */}
            <DefaultTooltip />

            {/* DefaultTooltipTwo */}
            <DefaultTooltipTwo />

            {/* DefaultTooltipThree */}
            <DefaultTooltipThree />


            {/* TooltipPopoverPositions */}
            <TooltipPopoverPositions />

            {/* TooltipTextPopup */}
            <TooltipTextPopup />





            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">
                            Tooltip Text with icon popup{" "}
                        </h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <ul className="list-decimal ps-20">
                                <li className="text-secondary-light mb-8">
                                    This is tooltip text popup
                                    <button
                                        type="button"
                                        className="tooltip-button text-primary-600"
                                        data-bs-toggle="tooltip"
                                        data-bs-custom-class="tooltip-primary"
                                        data-bs-placement="right"
                                    >
                                        <iconify-icon
                                            icon="jam:alert"
                                            className="text-primary-light text-lg mt-4"
                                        />{" "}
                                    </button>
                                    <div className="my-tooltip tip-content hidden text-start shadow">
                                        <h6 className="text-white">This is title</h6>
                                        <p className="text-white">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                        </p>
                                    </div>
                                </li>
                                <li className="text-secondary-light mb-8">
                                    This is tooltip text popup
                                    <button
                                        type="button"
                                        className="tooltip-button text-primary-600"
                                        data-bs-toggle="tooltip"
                                        data-bs-custom-class="tooltip-primary"
                                        data-bs-placement="right"
                                    >
                                        <iconify-icon
                                            icon="jam:alert"
                                            className="text-primary-light text-lg mt-4"
                                        />{" "}
                                    </button>
                                    <div className="my-tooltip tip-content hidden text-start shadow">
                                        <h6 className="text-white">This is title</h6>
                                        <p className="text-white">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                        </p>
                                    </div>
                                </li>
                                <li className="text-secondary-light mb-8">
                                    This is tooltip text popup
                                    <button
                                        type="button"
                                        className="tooltip-button text-primary-600"
                                        data-bs-toggle="tooltip"
                                        data-bs-custom-class="tooltip-primary"
                                        data-bs-placement="right"
                                    >
                                        <iconify-icon
                                            icon="jam:alert"
                                            className="text-primary-light text-lg mt-4"
                                        />{" "}
                                    </button>
                                    <div className="my-tooltip tip-content hidden text-start shadow">
                                        <h6 className="text-white">This is title</h6>
                                        <p className="text-white">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                        </p>
                                    </div>
                                </li>
                                <li className="text-secondary-light mb-8">
                                    This is tooltip text popup
                                    <button
                                        type="button"
                                        className="tooltip-button text-primary-600"
                                        data-bs-toggle="tooltip"
                                        data-bs-custom-class="tooltip-primary"
                                        data-bs-placement="right"
                                    >
                                        <iconify-icon
                                            icon="jam:alert"
                                            className="text-primary-light text-lg mt-4"
                                        />{" "}
                                    </button>
                                    <div className="my-tooltip tip-content hidden text-start shadow">
                                        <h6 className="text-white">This is title</h6>
                                        <p className="text-white">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                        </p>
                                    </div>
                                </li>
                                <li className="text-secondary-light">
                                    This is tooltip text popup
                                    <button
                                        type="button"
                                        className="tooltip-button text-primary-600"
                                        data-bs-toggle="tooltip"
                                        data-bs-custom-class="tooltip-primary"
                                        data-bs-placement="right"
                                    >
                                        <iconify-icon
                                            icon="jam:alert"
                                            className="text-primary-light text-lg mt-4"
                                        />{" "}
                                    </button>
                                    <div className="my-tooltip tip-content hidden text-start shadow">
                                        <h6 className="text-white">This is title</h6>
                                        <p className="text-white">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TooltipLayer