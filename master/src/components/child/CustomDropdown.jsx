import React from 'react'

const CustomDropdown = () => {
    return (
        <div className="col-xl-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Custom Dropdown</h6>
                </div>
                <div className="card-body p-24">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                        <div className="dropdown">
                            <button
                                className="btn px-18 py-11 text-primary-light"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <iconify-icon
                                    icon="entypo:dots-three-vertical"
                                    className="menu-icon"
                                />
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a
                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        href="javascript:void(0)"
                                    >
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        href="javascript:void(0)"
                                    >
                                        Primary action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        href="javascript:void(0)"
                                    >
                                        Something else
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn px-18 py-11 text-primary-light"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <iconify-icon
                                    icon="ph:dots-three-outline-fill"
                                    className="menu-icon"
                                />
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a
                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        href="javascript:void(0)"
                                    >
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        href="javascript:void(0)"
                                    >
                                        Primary action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        href="javascript:void(0)"
                                    >
                                        Something else
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn px-18 py-11 text-primary-light"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <iconify-icon
                                    icon="entypo:dots-three-vertical"
                                    className="menu-icon"
                                />
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a
                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        href="javascript:void(0)"
                                    >
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        href="javascript:void(0)"
                                    >
                                        Primary action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        href="javascript:void(0)"
                                    >
                                        Something else
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn px-18 py-11 text-primary-light"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <iconify-icon
                                    icon="ph:dots-three-outline-fill"
                                    className="menu-icon"
                                />
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a
                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        href="javascript:void(0)"
                                    >
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        href="javascript:void(0)"
                                    >
                                        Primary action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        href="javascript:void(0)"
                                    >
                                        Something else
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomDropdown