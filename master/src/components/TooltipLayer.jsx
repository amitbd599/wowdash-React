import React, { useEffect } from 'react'
import { Tooltip } from "bootstrap";
const TooltipLayer = () => {
    useEffect(() => {
        // Select all elements with data-bs-toggle="tooltip"
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

        // Initialize tooltips
        const tooltipList = Array.from(tooltipTriggerList).map(
            (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
        );

        // Cleanup on unmount
        return () => {
            tooltipList.forEach((tooltip) => tooltip.dispose());
        };
    }, []);
    return (
        <div className="row gy-4">
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Default Tooltip</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <button
                                type="button"
                                className="btn btn-primary-50 text-primary-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-primary"
                                data-bs-title="Primary Tooltip"
                            >
                                Primary
                            </button>
                            <button
                                type="button"
                                className="btn btn-lilac-100 text-lilac-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-purple"
                                data-bs-title="Secondary Tooltip"
                            >
                                Secondary
                            </button>
                            <button
                                type="button"
                                className="btn btn-success-100 text-success-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-success"
                                data-bs-title="Success Tooltip"
                            >
                                Success
                            </button>
                            <button
                                type="button"
                                className="btn btn-info-100 text-info-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-info"
                                data-bs-title="Info Tooltip"
                            >
                                Info
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning-100 text-warning-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-warning"
                                data-bs-title="Warning Tooltip"
                            >
                                Warning
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger-100 text-danger-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-danger"
                                data-bs-title="Danger Tooltip"
                            >
                                Danger
                            </button>
                            <button
                                type="button"
                                className="btn btn-neutral-100 text-neutral-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-dark"
                                data-bs-title="Dark Tooltip"
                            >
                                Dark
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Default Tooltip</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <button
                                type="button"
                                className="btn text-secondary-light border input-form-dark radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-primary"
                                data-bs-title="Primary Tooltip"
                            >
                                Tooltip On Top
                            </button>
                            <button
                                type="button"
                                className="btn text-secondary-light border input-form-dark radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                data-bs-custom-class="tooltip-primary"
                                data-bs-title="Primary Tooltip"
                            >
                                Tooltip On Right
                            </button>
                            <button
                                type="button"
                                className="btn text-secondary-light border input-form-dark radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                data-bs-custom-class="tooltip-primary"
                                data-bs-title="Primary Tooltip"
                            >
                                Tooltip On Left
                            </button>
                            <button
                                type="button"
                                className="btn text-secondary-light border input-form-dark radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                data-bs-custom-class="tooltip-primary"
                                data-bs-title="Primary Tooltip"
                            >
                                Tooltip On Bottom
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Default Tooltip</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <button
                                type="button"
                                className="btn bg-transparent bg-hover-primary-50 text-primary-600 text-hover-primary-600 border border-primary-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-primary"
                                data-bs-title="primary Tooltip"
                            >
                                Primary
                            </button>
                            <button
                                type="button"
                                className="btn bg-transparent bg-hover-lilac-100 text-lilac-600 text-hover-lilac-600 border border-lilac-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-purple"
                                data-bs-title="Secondary Tooltip"
                            >
                                Secondary
                            </button>
                            <button
                                type="button"
                                className="btn bg-transparent bg-hover-success-100 text-success-600 text-hover-success-600 border border-success-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-success"
                                data-bs-title="Success Tooltip"
                            >
                                Success
                            </button>
                            <button
                                type="button"
                                className="btn bg-transparent bg-hover-info-100 text-info-600 text-hover-info-600 border border-info-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-info"
                                data-bs-title="Info Tooltip"
                            >
                                Info
                            </button>
                            <button
                                type="button"
                                className="btn bg-transparent bg-hover-warning-100 text-warning-600 text-hover-warning-600 border border-warning-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-warning"
                                data-bs-title="Warning Tooltip"
                            >
                                Warning
                            </button>
                            <button
                                type="button"
                                className="btn bg-transparent bg-hover-danger-100 text-danger-600 text-hover-danger-600 border border-danger-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-danger"
                                data-bs-title="Danger Tooltip"
                            >
                                Danger
                            </button>
                            <button
                                type="button"
                                className="btn bg-transparent bg-hover-neutral-100 text-neutral-600 text-hover-neutral-600 border border-neutral-600 radius-8 px-32 py-11"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="tooltip-dark"
                                data-bs-title="Dark Tooltip"
                            >
                                Dark
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Tooltip Popover Positions</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <div className="">
                                <button
                                    type="button"
                                    className="tooltip-button btn bg-primary-600 text-white border border-primary-600 radius-8 px-32 py-11"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-html="true"
                                    data-bs-custom-class="tooltip-primary"
                                    title=""
                                >
                                    Primary
                                </button>
                                <div className="my-tooltip tip-content hidden text-start shadow">
                                    <h6 className="text-white">Primary</h6>
                                    <p className="text-white">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <button
                                    type="button"
                                    className="tooltip-button btn bg-success-600 text-white border border-success-600 radius-8 px-32 py-11"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-html="true"
                                    data-bs-custom-class="tooltip-success"
                                    title=""
                                >
                                    Success
                                </button>
                                <div className="my-tooltip tip-content hidden text-start shadow">
                                    <h6 className="text-white">Success</h6>
                                    <p className="text-white">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <button
                                    type="button"
                                    className="tooltip-button btn bg-info-600 text-white border border-info-600 radius-8 px-32 py-11"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-html="true"
                                    data-bs-custom-class="tooltip-info"
                                    title=""
                                >
                                    Info
                                </button>
                                <div className="my-tooltip tip-content hidden text-start shadow">
                                    <h6 className="text-white">Info</h6>
                                    <p className="text-white">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <button
                                    type="button"
                                    className="tooltip-button btn bg-warning-600 text-white border border-warning-600 radius-8 px-32 py-11"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-html="true"
                                    data-bs-custom-class="tooltip-warning"
                                    title=""
                                >
                                    warning
                                </button>
                                <div className="my-tooltip tip-content hidden text-start shadow">
                                    <h6 className="text-white">Warning</h6>
                                    <p className="text-white">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <button
                                    type="button"
                                    className="tooltip-button btn bg-danger-600 text-white border border-danger-600 radius-8 px-32 py-11"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-html="true"
                                    data-bs-custom-class="tooltip-danger"
                                    title=""
                                >
                                    Danger
                                </button>
                                <div className="my-tooltip tip-content hidden text-start shadow">
                                    <h6 className="text-white">Danger</h6>
                                    <p className="text-white">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <button
                                    type="button"
                                    className="tooltip-button btn bg-neutral-900 text-base border border-neutral-900 radius-8 px-32 py-11"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-html="true"
                                    data-bs-custom-class="tooltip-dark"
                                    title=""
                                >
                                    Dark
                                </button>
                                <div className="my-tooltip tip-content hidden text-start shadow">
                                    <h6 className="text-white">Dark</h6>
                                    <p className="text-white">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Tooltip Text popup</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <ul className="list-decimal ps-20">
                                <li className="text-secondary-light mb-8">
                                    This is tooltip text
                                    <button
                                        type="button"
                                        className="tooltip-button text-primary-600"
                                        data-bs-toggle="tooltip"
                                        data-bs-custom-class="tooltip-primary"
                                        data-bs-placement="right"
                                    >
                                        popup
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
                                    This is tooltip text
                                    <button
                                        type="button"
                                        className="tooltip-button text-primary-600"
                                        data-bs-toggle="tooltip"
                                        data-bs-custom-class="tooltip-primary"
                                        data-bs-placement="right"
                                    >
                                        popup
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
                                    This is tooltip text
                                    <button
                                        type="button"
                                        className="tooltip-button text-primary-600"
                                        data-bs-toggle="tooltip"
                                        data-bs-custom-class="tooltip-primary"
                                        data-bs-placement="right"
                                    >
                                        popup
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
                                    This is tooltip text
                                    <button
                                        type="button"
                                        className="tooltip-button text-primary-600"
                                        data-bs-toggle="tooltip"
                                        data-bs-custom-class="tooltip-primary"
                                        data-bs-placement="right"
                                    >
                                        popup
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
                                    This is tooltip text
                                    <button
                                        type="button"
                                        className="tooltip-button text-primary-600"
                                        data-bs-toggle="tooltip"
                                        data-bs-custom-class="tooltip-primary"
                                        data-bs-placement="right"
                                    >
                                        popup
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