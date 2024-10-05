import React from 'react'
import DefaultTabs from './child/DefaultTabs'
import FocusTabs from './child/FocusTabs'
import ButtonTabs from './child/ButtonTabs'
import ButtonTabsTwo from './child/ButtonTabsTwo'

const TabsLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultTabs */}
            <DefaultTabs />

            {/* FocusTabs */}
            <FocusTabs />

            {/* ButtonTabs */}
            <ButtonTabs />

            {/* ButtonTabsTwo */}
            <ButtonTabsTwo />



            <div className="col-xxl-6">
                <div className="card p-0 overflow-hidden position-relative radius-12 h-100">
                    <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                        <h6 className="text-lg mb-0">Vertical Nav Tabs</h6>
                    </div>
                    <div className="card-body p-24 pt-10">
                        <div className="d-flex align-items-start">
                            <ul
                                className="nav button-tab nav-pills mb-16"
                                id="pills-tab-five"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link fw-semibold text-primary-light radius-4 px-16 py-10 active"
                                        id="pills-vertical-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-vertical-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-vertical-home"
                                        aria-selected="true"
                                    >
                                        Home
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link fw-semibold text-primary-light radius-4 px-16 py-10"
                                        id="pills-vertical-details-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-vertical-details"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-vertical-details"
                                        aria-selected="false"
                                    >
                                        Details
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link fw-semibold text-primary-light radius-4 px-16 py-10"
                                        id="pills-vertical-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-vertical-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-vertical-profile"
                                        aria-selected="false"
                                    >
                                        Profile
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link fw-semibold text-primary-light radius-4 px-16 py-10"
                                        id="pills-vertical-settings-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-vertical-settings"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-vertical-settings"
                                        aria-selected="false"
                                    >
                                        Settings
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tab-fiveContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-vertical-home"
                                    role="tabpanel"
                                    aria-labelledby="pills-vertical-home-tab"
                                    tabIndex={0}
                                >
                                    <div className="flex-grow-1">
                                        <h6 className="text-lg mb-8">Title</h6>
                                        <p className="text-secondary-light mb-16">
                                            Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type{" "}
                                        </p>
                                        <p className="text-secondary-light mb-0">
                                            &nbsp;It was popularised in the 1960s with the release of
                                            Letraset sheets containing Lorem Ipsum passages, and more
                                            recently with desktopLorem Ipsum&nbsp;is simply dummy text of
                                            the printing and typesetting industry.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-vertical-details"
                                    role="tabpanel"
                                    aria-labelledby="pills-vertical-details-tab"
                                    tabIndex={0}
                                >
                                    <div className="flex-grow-1">
                                        <h6 className="text-lg mb-8">Title</h6>
                                        <p className="text-secondary-light mb-16">
                                            Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type{" "}
                                        </p>
                                        <p className="text-secondary-light mb-0">
                                            &nbsp;It was popularised in the 1960s with the release of
                                            Letraset sheets containing Lorem Ipsum passages, and more
                                            recently with desktopLorem Ipsum&nbsp;is simply dummy text of
                                            the printing and typesetting industry.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-vertical-profile"
                                    role="tabpanel"
                                    aria-labelledby="pills-vertical-profile-tab"
                                    tabIndex={0}
                                >
                                    <div className="flex-grow-1">
                                        <h6 className="text-lg mb-8">Title</h6>
                                        <p className="text-secondary-light mb-16">
                                            Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type{" "}
                                        </p>
                                        <p className="text-secondary-light mb-0">
                                            &nbsp;It was popularised in the 1960s with the release of
                                            Letraset sheets containing Lorem Ipsum passages, and more
                                            recently with desktopLorem Ipsum&nbsp;is simply dummy text of
                                            the printing and typesetting industry.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-vertical-settings"
                                    role="tabpanel"
                                    aria-labelledby="pills-vertical-settings-tab"
                                    tabIndex={0}
                                >
                                    <div className="flex-grow-1">
                                        <h6 className="text-lg mb-8">Title</h6>
                                        <p className="text-secondary-light mb-16">
                                            Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type{" "}
                                        </p>
                                        <p className="text-secondary-light mb-0">
                                            &nbsp;It was popularised in the 1960s with the release of
                                            Letraset sheets containing Lorem Ipsum passages, and more
                                            recently with desktopLorem Ipsum&nbsp;is simply dummy text of
                                            the printing and typesetting industry.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-6">
                <div className="card p-0 overflow-hidden position-relative radius-12 h-100">
                    <div className="card-header pt-16 pb-0 px-24 bg-base border border-end-0 border-start-0 border-top-0 d-flex align-items-center flex-wrap justify-content-between">
                        <h6 className="text-lg mb-0">Card Header Tabs</h6>
                        <ul
                            className="nav bordered-tab d-inline-flex nav-pills mb-0"
                            id="pills-tab-six"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link px-16 py-10 active"
                                    id="pills-header-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-header-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-header-home"
                                    aria-selected="true"
                                >
                                    Home
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link px-16 py-10"
                                    id="pills-header-details-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-header-details"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-header-details"
                                    aria-selected="false"
                                >
                                    Details
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link px-16 py-10"
                                    id="pills-header-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-header-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-header-profile"
                                    aria-selected="false"
                                >
                                    Profile
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link px-16 py-10"
                                    id="pills-header-settings-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-header-settings"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-header-settings"
                                    aria-selected="false"
                                >
                                    Settings
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body p-24 pt-10">
                        <div className="tab-content" id="pills-tabContent-six">
                            <div
                                className="tab-pane fade show active"
                                id="pills-header-home"
                                role="tabpanel"
                                aria-labelledby="pills-header-home-tab"
                                tabIndex={0}
                            >
                                <div>
                                    <h6 className="text-lg mb-8">Title</h6>
                                    <p className="text-secondary-light mb-16">
                                        Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not{" "}
                                    </p>
                                    <p className="text-secondary-light mb-0">
                                        It was popularised in the 1960s with the release of Letraset
                                        sheets containing Lorem Ipsum passages, and more recently with
                                        desktop
                                    </p>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-header-details"
                                role="tabpanel"
                                aria-labelledby="pills-header-details-tab"
                                tabIndex={0}
                            >
                                <div>
                                    <h6 className="text-lg mb-8">Title</h6>
                                    <p className="text-secondary-light mb-16">
                                        Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not{" "}
                                    </p>
                                    <p className="text-secondary-light mb-0">
                                        It was popularised in the 1960s with the release of Letraset
                                        sheets containing Lorem Ipsum passages, and more recently with
                                        desktop
                                    </p>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-header-profile"
                                role="tabpanel"
                                aria-labelledby="pills-header-profile-tab"
                                tabIndex={0}
                            >
                                <div>
                                    <h6 className="text-lg mb-8">Title</h6>
                                    <p className="text-secondary-light mb-16">
                                        Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not{" "}
                                    </p>
                                    <p className="text-secondary-light mb-0">
                                        It was popularised in the 1960s with the release of Letraset
                                        sheets containing Lorem Ipsum passages, and more recently with
                                        desktop
                                    </p>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-header-settings"
                                role="tabpanel"
                                aria-labelledby="pills-header-settings-tab"
                                tabIndex={0}
                            >
                                <div>
                                    <h6 className="text-lg mb-8">Title</h6>
                                    <p className="text-secondary-light mb-16">
                                        Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not{" "}
                                    </p>
                                    <p className="text-secondary-light mb-0">
                                        It was popularised in the 1960s with the release of Letraset
                                        sheets containing Lorem Ipsum passages, and more recently with
                                        desktop
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TabsLayer