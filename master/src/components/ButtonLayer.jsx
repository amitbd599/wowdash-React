import React from 'react'
import DefaultButtons from './child/DefaultButtons'
import OutlineButtons from './child/OutlineButtons'
import RoundedButtons from './child/RoundedButtons'
import RoundedButtonsTwo from './child/RoundedButtonsTwo'
import SoftButtons from './child/SoftButtons'

const ButtonLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultButtons */}
            <DefaultButtons />

            {/* OutlineButtons */}
            <OutlineButtons />

            {/* RoundedButtons */}
            <RoundedButtons />

            {/* RoundedButtonsTwo */}
            <RoundedButtonsTwo />

            {/* SoftButtons */}
            <SoftButtons />





            <div className="col-xl-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Text Buttons</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <button
                                type="button"
                                className="btn rounded-pill text-primary-600 radius-8 px-20 py-11"
                            >
                                Primary
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill text-lilac-600 radius-8 px-20 py-11"
                            >
                                Secondary
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill text-success-600 radius-8 px-20 py-11"
                            >
                                Success
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill text-info-600 radius-8 px-20 py-11"
                            >
                                Info
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill text-warning-600 radius-8 px-20 py-11"
                            >
                                Warning
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill text-danger-600 radius-8 px-20 py-11"
                            >
                                Danger
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill text-primary-light radius-8 px-20 py-11"
                            >
                                Dark
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill text-secondary-light text-decoration-none radius-8 px-20 py-11"
                            >
                                Link
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill text-secondary-light radius-8 px-20 py-11"
                            >
                                Light
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Buttons with Label</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <button
                                type="button"
                                className="btn btn-primary-600 radius-8 px-20 py-11 d-flex align-items-center gap-2"
                            >
                                <iconify-icon
                                    icon="mingcute:square-arrow-left-line"
                                    className="text-xl"
                                />{" "}
                                Left Icon
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-primary-600 radius-8 px-20 py-11 d-flex align-items-center gap-2"
                            >
                                <iconify-icon
                                    icon="mingcute:square-arrow-left-line"
                                    className="text-xl"
                                />{" "}
                                Left Icon
                            </button>
                            <button
                                type="button"
                                className="btn btn-success-600 radius-8 px-20 py-11 d-flex align-items-center gap-2"
                            >
                                Right Icon{" "}
                                <iconify-icon
                                    icon="mingcute:square-arrow-right-line"
                                    className="text-xl"
                                />
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-success-600 radius-8 px-20 py-11 d-flex align-items-center gap-2"
                            >
                                Right Icon{" "}
                                <iconify-icon
                                    icon="mingcute:square-arrow-right-line"
                                    className="text-xl"
                                />
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning-600 radius-8 p-20 w-60-px h-50-px d-flex align-items-center justify-content-center gap-2"
                            >
                                <iconify-icon
                                    icon="mingcute:square-arrow-up-line"
                                    className="text-xl"
                                />
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-info-600 radius-8 p-20 w-60-px h-50-px d-flex align-items-center justify-content-center gap-2"
                            >
                                <iconify-icon
                                    icon="mingcute:square-arrow-down-line"
                                    className="text-xl"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Buttons with Label Round</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <button
                                type="button"
                                className="btn rounded-pill btn-primary-600 radius-8 px-20 py-11 d-flex align-items-center gap-2"
                            >
                                <iconify-icon
                                    icon="mingcute:square-arrow-left-line"
                                    className="text-xl"
                                />{" "}
                                Left Icon
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill btn-outline-primary-600 radius-8 px-20 py-11 d-flex align-items-center gap-2"
                            >
                                <iconify-icon
                                    icon="mingcute:square-arrow-left-line"
                                    className="text-xl"
                                />{" "}
                                Left Icon
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill btn-success-600 radius-8 px-20 py-11 d-flex align-items-center gap-2"
                            >
                                Right Icon{" "}
                                <iconify-icon
                                    icon="mingcute:square-arrow-right-line"
                                    className="text-xl"
                                />
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill btn-outline-success-600 radius-8 px-20 py-11 d-flex align-items-center gap-2"
                            >
                                Right Icon{" "}
                                <iconify-icon
                                    icon="mingcute:square-arrow-right-line"
                                    className="text-xl"
                                />
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill btn-warning-600 radius-8 p-20 w-60-px h-50-px d-flex align-items-center justify-content-center gap-2"
                            >
                                <iconify-icon
                                    icon="mingcute:square-arrow-up-line"
                                    className="text-xl"
                                />
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill btn-outline-info-600 radius-8 p-20 w-60-px h-50-px d-flex align-items-center justify-content-center gap-2"
                            >
                                <iconify-icon
                                    icon="mingcute:square-arrow-down-line"
                                    className="text-xl"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Buttons Sizes</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <button
                                type="button"
                                className="btn btn-primary-600 radius-8 px-20 py-11"
                            >
                                {" "}
                                Large Button
                            </button>
                            <button
                                type="button"
                                className="btn btn-success-600 radius-8 px-16 py-9"
                            >
                                Medium Button
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning-600 radius-8 px-14 py-6 text-sm"
                            >
                                Small Button
                            </button>
                        </div>
                        <div className="d-flex flex-wrap align-items-center gap-3 mt-16">
                            <button
                                type="button"
                                className="btn btn-primary-100 text-primary-600 radius-8 px-20 py-11"
                            >
                                {" "}
                                Large Button
                            </button>
                            <button
                                type="button"
                                className="btn btn-success-100 text-success-600 radius-8 px-16 py-9"
                            >
                                Medium Button
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning-100 text-warning-600 radius-8 px-14 py-6 text-sm"
                            >
                                Small Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">
                            Checkbox &amp; Radio Buttons
                        </h6>
                    </div>
                    <div className="card-body py-16 px-24 d-flex flex-wrap align-items-center gap-3">
                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic checkbox toggle button group"
                        >
                            <input type="checkbox" className="btn-check" id="btncheck1" />
                            <label
                                className="btn btn-outline-primary-600 px-20 py-11 radius-8"
                                htmlFor="btncheck1"
                            >
                                Checkbox 1
                            </label>
                            <input type="checkbox" className="btn-check" id="btncheck2" />
                            <label
                                className="btn btn-outline-primary-600 px-20 py-11"
                                htmlFor="btncheck2"
                            >
                                Checkbox 2
                            </label>
                            <input type="checkbox" className="btn-check" id="btncheck3" />
                            <label
                                className="btn btn-outline-primary-600 px-20 py-11 radius-8"
                                htmlFor="btncheck3"
                            >
                                Checkbox 3
                            </label>
                        </div>
                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic radio toggle button group"
                        >
                            <input
                                type="radio"
                                className="btn-check"
                                name="btnradio"
                                id="btnradio1"
                                defaultChecked=""
                            />
                            <label
                                className="btn btn-outline-warning-600 px-20 py-11 radius-8"
                                htmlFor="btnradio1"
                            >
                                Radio 1
                            </label>
                            <input
                                type="radio"
                                className="btn-check"
                                name="btnradio"
                                id="btnradio2"
                            />
                            <label
                                className="btn btn-outline-warning-600 px-20 py-11"
                                htmlFor="btnradio2"
                            >
                                Radio 2
                            </label>
                            <input
                                type="radio"
                                className="btn-check"
                                name="btnradio"
                                id="btnradio3"
                            />
                            <label
                                className="btn btn-outline-warning-600 px-20 py-11 radius-8"
                                htmlFor="btnradio3"
                            >
                                Radio 3
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Buttons Group</h6>
                    </div>
                    <div className="card-body py-16 px-24 d-flex flex-wrap align-items-center gap-3">
                        <div
                            className="btn-group radius-8"
                            role="group"
                            aria-label="Default button group"
                        >
                            <button
                                type="button"
                                className="btn btn-primary-600 px-20 py-11 radius-8"
                            >
                                Left
                            </button>
                            <button type="button" className="btn btn-primary-600 px-20 py-11">
                                Middle
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary-600 px-20 py-11 radius-8"
                            >
                                Right
                            </button>
                        </div>
                        <div
                            className="btn-group radius-8"
                            role="group"
                            aria-label="Default button group"
                        >
                            <button
                                type="button"
                                className="btn btn-primary-600 px-20 py-11 radius-50"
                            >
                                Left
                            </button>
                            <button type="button" className="btn btn-primary-600 px-20 py-11">
                                Middle
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary-600 px-20 py-11 radius-50"
                            >
                                Right
                            </button>
                        </div>
                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Default button group"
                        >
                            <button
                                type="button"
                                className="btn btn-light-100 px-20 py-13 radius-8 text-dark d-flex"
                            >
                                {" "}
                                <iconify-icon
                                    icon="heroicons:bars-3-bottom-left-16-solid"
                                    className="text-xl"
                                />
                            </button>
                            <button
                                type="button"
                                className="btn btn-light-100 px-20 py-13 radius-8 text-dark d-flex"
                            >
                                {" "}
                                <iconify-icon icon="fe:bar" className="text-xl" />{" "}
                            </button>
                            <button
                                type="button"
                                className="btn btn-light-100 px-20 py-13 radius-8 text-dark d-flex"
                            >
                                <iconify-icon
                                    icon="heroicons:bars-3-bottom-right-16-solid"
                                    className="text-xl"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Buttons Group</h6>
                    </div>
                    <div className="card-body p-24">
                        <button
                            type="button"
                            className="btn btn-primary-600 radius-8 px-20 py-11"
                        >
                            Custom Button
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ButtonLayer