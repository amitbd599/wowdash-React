import React from 'react'

const AlertLayer = () => {
    return (
        <div className="row gy-4">
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Default Alerts</h6>
                    </div>
                    <div className="card-body p-24 d-flex flex-column gap-4">
                        <div
                            className="alert alert-primary bg-primary-50 text-primary-600 border-primary-50 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            This is a Primary alert
                            <button className="remove-button text-primary-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-lilac bg-lilac-50 text-lilac-600 border-lilac-50 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            This is a Secondary alert
                            <button className="remove-button text-lilac-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-warning bg-warning-100 text-warning-600 border-warning-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            This is a Warning alert
                            <button className="remove-button text-warning-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-info bg-info-100 text-info-600 border-info-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            This is a Info alert
                            <button className="remove-button text-info-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-danger bg-danger-100 text-danger-600 border-danger-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            This is a Danger alert
                            <button className="remove-button text-danger-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Outline Alerts</h6>
                    </div>
                    <div className="card-body p-24 d-flex flex-column gap-4">
                        <div
                            className="alert alert-primary bg-transparent text-primary-600 border-primary-600 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            This is a Primary alert
                            <button className="remove-button text-primary-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-lilac bg-transparent text-lilac-600 border-lilac-600 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            This is a Secondary alert
                            <button className="remove-button text-lilac-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-warning bg-transparent text-warning-600 border-warning-600 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            This is a Warning alert
                            <button className="remove-button text-warning-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-info bg-transparent text-info-600 border-info-600 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            This is a Info alert
                            <button className="remove-button text-info-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-danger bg-transparent text-danger-600 border-danger-600 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            This is a Danger alert
                            <button className="remove-button text-danger-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-12">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Solid Alerts</h6>
                    </div>
                    <div className="card-body p-24">
                        <div className="row gy-4">
                            <div className="col-sm-6">
                                <div className="d-flex flex-column gap-4">
                                    <div
                                        className="alert alert-primary bg-primary-600 text-white border-primary-600 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                                        role="alert"
                                    >
                                        This is a Primary alert
                                        <button className="remove-button text-white text-xxl line-height-1">
                                            {" "}
                                            <iconify-icon
                                                icon="iconamoon:sign-times-light"
                                                className="icon"
                                            />
                                        </button>
                                    </div>
                                    <div
                                        className="alert alert-success bg-success-600 text-white border-success-600 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                                        role="alert"
                                    >
                                        This is a Success alert
                                        <button className="remove-button text-white text-xxl line-height-1">
                                            {" "}
                                            <iconify-icon
                                                icon="iconamoon:sign-times-light"
                                                className="icon"
                                            />
                                        </button>
                                    </div>
                                    <div
                                        className="alert alert-info bg-info-600 text-white border-info-600 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                                        role="alert"
                                    >
                                        This is a Info alert
                                        <button className="remove-button text-white text-xxl line-height-1">
                                            {" "}
                                            <iconify-icon
                                                icon="iconamoon:sign-times-light"
                                                className="icon"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex flex-column gap-4">
                                    <div
                                        className="alert alert-lilac bg-lilac-600 text-white border-lilac-600 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                                        role="alert"
                                    >
                                        This is a Secondary alert
                                        <button className="remove-button text-white text-xxl line-height-1">
                                            {" "}
                                            <iconify-icon
                                                icon="iconamoon:sign-times-light"
                                                className="icon"
                                            />
                                        </button>
                                    </div>
                                    <div
                                        className="alert alert-warning bg-warning-600 text-white border-warning-600 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                                        role="alert"
                                    >
                                        This is a Warning alert
                                        <button className="remove-button text-white text-xxl line-height-1">
                                            {" "}
                                            <iconify-icon
                                                icon="iconamoon:sign-times-light"
                                                className="icon"
                                            />
                                        </button>
                                    </div>
                                    <div
                                        className="alert alert-danger bg-danger-600 text-white border-danger-600 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                                        role="alert"
                                    >
                                        This is a Danger alert
                                        <button className="remove-button text-white text-xxl line-height-1">
                                            {" "}
                                            <iconify-icon
                                                icon="iconamoon:sign-times-light"
                                                className="icon"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Outline Alerts</h6>
                    </div>
                    <div className="card-body p-24 d-flex flex-column gap-4">
                        <div
                            className="alert alert-primary bg-primary-50 text-primary-600 border-primary-50 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <iconify-icon icon="mingcute:emoji-line" className="icon text-xl" />
                                This is a Primary alert
                            </div>
                            <button className="remove-button text-primary-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-lilac bg-lilac-50 text-lilac-600 border-lilac-50 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <iconify-icon icon="mingcute:emoji-line" className="icon text-xl" />
                                This is a Secondary alert
                            </div>
                            <button className="remove-button text-lilac-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-success bg-success-100 text-success-600 border-success-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <iconify-icon
                                    icon="akar-icons:double-check"
                                    className="icon text-xl"
                                />
                                This is a Success alert
                            </div>
                            <button className="remove-button text-success-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-warning bg-warning-100 text-warning-600 border-warning-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <iconify-icon
                                    icon="mdi:alert-circle-outline"
                                    className="icon text-xl"
                                />
                                This is a Warning alert
                            </div>
                            <button className="remove-button text-warning-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-info bg-info-100 text-info-600 border-info-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <iconify-icon icon="ci:link" className="icon text-xl" />
                                This is a Info alert
                            </div>
                            <button className="remove-button text-info-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-danger bg-danger-100 text-danger-600 border-danger-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <iconify-icon
                                    icon="mingcute:delete-2-line"
                                    className="icon text-xl"
                                />
                                This is a Danger alert
                            </div>
                            <button className="remove-button text-danger-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Left Border Alerts</h6>
                    </div>
                    <div className="card-body p-24 d-flex flex-column gap-4">
                        <div
                            className="alert alert-primary bg-primary-50 text-primary-600 border-primary-600 border-start-width-4-px border-top-0 border-end-0 border-bottom-0 px-24 py-13 mb-0 fw-semibold text-lg radius-4 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <iconify-icon icon="mingcute:emoji-line" className="icon text-xl" />
                                This is a Primary alert
                            </div>
                            <button className="remove-button text-primary-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-lilac bg-lilac-50 text-lilac-600 border-lilac-600 border-start-width-4-px border-top-0 border-end-0 border-bottom-0 px-24 py-13 mb-0 fw-semibold text-lg radius-4 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <iconify-icon icon="mingcute:emoji-line" className="icon text-xl" />
                                This is a Secondary alert
                            </div>
                            <button className="remove-button text-lilac-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-success bg-success-100 text-success-600 border-success-600 border-start-width-4-px border-top-0 border-end-0 border-bottom-0 px-24 py-13 mb-0 fw-semibold text-lg radius-4 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <iconify-icon
                                    icon="akar-icons:double-check"
                                    className="icon text-xl"
                                />
                                This is a Success alert
                            </div>
                            <button className="remove-button text-success-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-warning bg-warning-100 text-warning-600 border-warning-600 border-start-width-4-px border-top-0 border-end-0 border-bottom-0 px-24 py-13 mb-0 fw-semibold text-lg radius-4 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <iconify-icon
                                    icon="mdi:alert-circle-outline"
                                    className="icon text-xl"
                                />
                                This is a Warning alert
                            </div>
                            <button className="remove-button text-warning-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-info bg-info-100 text-info-600 border-info-600 border-start-width-4-px border-top-0 border-end-0 border-bottom-0 px-24 py-13 mb-0 fw-semibold text-lg radius-4 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <iconify-icon icon="ci:link" className="icon text-xl" />
                                This is a Info alert
                            </div>
                            <button className="remove-button text-info-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                        <div
                            className="alert alert-danger bg-danger-100 text-danger-600 border-danger-600 border-start-width-4-px border-top-0 border-end-0 border-bottom-0 px-24 py-13 mb-0 fw-semibold text-lg radius-4 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <iconify-icon
                                    icon="mingcute:delete-2-line"
                                    className="icon text-xl"
                                />
                                This is a Danger alert
                            </div>
                            <button className="remove-button text-danger-600 text-xxl line-height-1">
                                {" "}
                                <iconify-icon icon="iconamoon:sign-times-light" className="icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Default Alerts</h6>
                    </div>
                    <div className="card-body p-24 d-flex flex-column gap-4">
                        <div
                            className="alert alert-primary bg-primary-50 text-primary-600 border-primary-50 px-24 py-11 mb-0 fw-semibold text-lg radius-8"
                            role="alert"
                        >
                            <div className="d-flex align-items-center justify-content-between text-lg">
                                This is a Primary alert
                                <button className="remove-button text-primary-600 text-xxl line-height-1">
                                    {" "}
                                    <iconify-icon
                                        icon="iconamoon:sign-times-light"
                                        className="icon"
                                    />
                                </button>
                            </div>
                            <p className="fw-medium text-primary-600 text-sm mt-8">
                                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy
                            </p>
                        </div>
                        <div
                            className="alert alert-success bg-success-100 text-success-600 border-success-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8"
                            role="alert"
                        >
                            <div className="d-flex align-items-center justify-content-between text-lg">
                                This is a Success alert
                                <button className="remove-button text-success-600 text-xxl line-height-1">
                                    {" "}
                                    <iconify-icon
                                        icon="iconamoon:sign-times-light"
                                        className="icon"
                                    />
                                </button>
                            </div>
                            <p className="fw-medium text-success-600 text-sm mt-8">
                                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy
                            </p>
                        </div>
                        <div
                            className="alert alert-warning bg-warning-100 text-warning-600 border-warning-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8"
                            role="alert"
                        >
                            <div className="d-flex align-items-center justify-content-between text-lg">
                                This is a Warning alert
                                <button className="remove-button text-warning-600 text-xxl line-height-1">
                                    {" "}
                                    <iconify-icon
                                        icon="iconamoon:sign-times-light"
                                        className="icon"
                                    />
                                </button>
                            </div>
                            <p className="fw-medium text-warning-600 text-sm mt-8">
                                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy
                            </p>
                        </div>
                        <div
                            className="alert alert-info bg-info-100 text-info-600 border-info-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8"
                            role="alert"
                        >
                            <div className="d-flex align-items-center justify-content-between text-lg">
                                This is a Info alert
                                <button className="remove-button text-info-600 text-xxl line-height-1">
                                    {" "}
                                    <iconify-icon
                                        icon="iconamoon:sign-times-light"
                                        className="icon"
                                    />
                                </button>
                            </div>
                            <p className="fw-medium text-info-600 text-sm mt-8">
                                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy
                            </p>
                        </div>
                        <div
                            className="alert alert-danger bg-danger-100 text-danger-600 border-danger-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8"
                            role="alert"
                        >
                            <div className="d-flex align-items-center justify-content-between text-lg">
                                This is a Danger alert
                                <button className="remove-button text-danger-600 text-xxl line-height-1">
                                    {" "}
                                    <iconify-icon
                                        icon="iconamoon:sign-times-light"
                                        className="icon"
                                    />
                                </button>
                            </div>
                            <p className="fw-medium text-danger-600 text-sm mt-8">
                                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Default Alerts</h6>
                    </div>
                    <div className="card-body p-24 d-flex flex-column gap-4">
                        <div
                            className="alert alert-primary bg-primary-50 text-primary-600 border-primary-50 px-24 py-11 mb-0 fw-semibold text-lg radius-8"
                            role="alert"
                        >
                            <div className="d-flex align-items-start justify-content-between text-lg">
                                <div className="d-flex align-items-start gap-2">
                                    <iconify-icon
                                        icon="mingcute:emoji-line"
                                        className="icon text-xl mt-4 flex-shrink-0"
                                    />
                                    <div>
                                        This is a Primary alert
                                        <p className="fw-medium text-primary-600 text-sm mt-8">
                                            Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy
                                        </p>
                                    </div>
                                </div>
                                <button className="remove-button text-primary-600 text-xxl line-height-1">
                                    {" "}
                                    <iconify-icon
                                        icon="iconamoon:sign-times-light"
                                        className="icon"
                                    />
                                </button>
                            </div>
                        </div>
                        <div
                            className="alert alert-success bg-success-100 text-success-600 border-success-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8"
                            role="alert"
                        >
                            <div className="d-flex align-items-start justify-content-between text-lg">
                                <div className="d-flex align-items-start gap-2">
                                    <iconify-icon
                                        icon="bi:patch-check"
                                        className="icon text-xl mt-4 flex-shrink-0"
                                    />
                                    <div>
                                        This is a Success alert
                                        <p className="fw-medium text-success-600 text-sm mt-8">
                                            Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy
                                        </p>
                                    </div>
                                </div>
                                <button className="remove-button text-success-600 text-xxl line-height-1">
                                    {" "}
                                    <iconify-icon
                                        icon="iconamoon:sign-times-light"
                                        className="icon"
                                    />
                                </button>
                            </div>
                        </div>
                        <div
                            className="alert alert-warning bg-warning-100 text-warning-600 border-warning-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8"
                            role="alert"
                        >
                            <div className="d-flex align-items-start justify-content-between text-lg">
                                <div className="d-flex align-items-start gap-2">
                                    <iconify-icon
                                        icon="mdi:clock-outline"
                                        className="icon text-xl mt-4 flex-shrink-0"
                                    />
                                    <div>
                                        This is a Warning alert
                                        <p className="fw-medium text-warning-600 text-sm mt-8">
                                            Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy
                                        </p>
                                    </div>
                                </div>
                                <button className="remove-button text-warning-600 text-xxl line-height-1">
                                    {" "}
                                    <iconify-icon
                                        icon="iconamoon:sign-times-light"
                                        className="icon"
                                    />
                                </button>
                            </div>
                        </div>
                        <div
                            className="alert alert-info bg-info-100 text-info-600 border-info-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8"
                            role="alert"
                        >
                            <div className="d-flex align-items-start justify-content-between text-lg">
                                <div className="d-flex align-items-start gap-2">
                                    <iconify-icon
                                        icon="mynaui:check-octagon"
                                        className="icon text-xl mt-4 flex-shrink-0"
                                    />
                                    <div>
                                        This is a Info alert
                                        <p className="fw-medium text-info-600 text-sm mt-8">
                                            Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy
                                        </p>
                                    </div>
                                </div>
                                <button className="remove-button text-info-600 text-xxl line-height-1">
                                    {" "}
                                    <iconify-icon
                                        icon="iconamoon:sign-times-light"
                                        className="icon"
                                    />
                                </button>
                            </div>
                        </div>
                        <div
                            className="alert alert-danger bg-danger-100 text-danger-600 border-danger-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8"
                            role="alert"
                        >
                            <div className="d-flex align-items-start justify-content-between text-lg">
                                <div className="d-flex align-items-start gap-2">
                                    <iconify-icon
                                        icon="mingcute:delete-2-line"
                                        className="icon text-xl mt-4 flex-shrink-0"
                                    />
                                    <div>
                                        This is a Danger alert
                                        <p className="fw-medium text-danger-600 text-sm mt-8">
                                            Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy
                                        </p>
                                    </div>
                                </div>
                                <button className="remove-button text-danger-600 text-xxl line-height-1">
                                    {" "}
                                    <iconify-icon
                                        icon="iconamoon:sign-times-light"
                                        className="icon"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AlertLayer