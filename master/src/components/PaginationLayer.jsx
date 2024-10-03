import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const PaginationLayer = () => {
    return (
        <div className="row gy-4">
            <div className="col-md-6">
                <div className="card p-0 overflow-hidden position-relative radius-12">
                    <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                        <h6 className="text-lg mb-0">Default Solid</h6>
                    </div>
                    <div className="card-body p-24">
                        <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                    href="javascript:void(0)"
                                >
                                    First
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                    href="javascript:void(0)"
                                >
                                    Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    <Icon icon="ep:d-arrow-left" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white"
                                    href="javascript:void(0)"
                                >
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon icon="ep:d-arrow-right" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                    href="javascript:void(0)"
                                >
                                    Next
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                    href="javascript:void(0)"
                                >
                                    Last
                                </a>
                            </li>
                        </ul>
                        <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center mt-24">
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                    href="javascript:void(0)"
                                >
                                    Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    <Icon icon="ep:d-arrow-left" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white"
                                    href="javascript:void(0)"
                                >
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon icon="ep:d-arrow-right" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                    href="javascript:void(0)"
                                >
                                    Next
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card p-0 overflow-hidden position-relative radius-12">
                    <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                        <h6 className="text-lg mb-0">Outline</h6>
                    </div>
                    <div className="card-body p-24">
                        <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                    href="javascript:void(0)"
                                >
                                    First
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                    href="javascript:void(0)"
                                >
                                    Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    <Icon icon="ep:d-arrow-left" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px border-primary-400 text-primary-600"
                                    href="javascript:void(0)"
                                >
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon icon="ep:d-arrow-right" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                    href="javascript:void(0)"
                                >
                                    Next
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                    href="javascript:void(0)"
                                >
                                    Last
                                </a>
                            </li>
                        </ul>
                        <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center mt-24">
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                    href="javascript:void(0)"
                                >
                                    Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    <Icon icon="ep:d-arrow-left" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px border-primary-400 text-primary-600"
                                    href="javascript:void(0)"
                                >
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon icon="ep:d-arrow-right" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                    href="javascript:void(0)"
                                >
                                    Next
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card p-0 overflow-hidden position-relative radius-12">
                    <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                        <h6 className="text-lg mb-0">Square with icon</h6>
                    </div>
                    <div className="card-body p-24">
                        <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    <Icon icon="ep:d-arrow-left" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    <Icon
                                        icon="iconamoon:arrow-left-2-light"
                                        className="text-xxl"
                                    />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white"
                                    href="javascript:void(0)"
                                >
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    4
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    5
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon
                                        icon="iconamoon:arrow-right-2-light"
                                        className="text-xxl"
                                    />{" "}
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon icon="ep:d-arrow-right" className="text-xl" />
                                </a>
                            </li>
                        </ul>
                        <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center mt-24">
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    <Icon icon="ep:d-arrow-left" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white"
                                    href="javascript:void(0)"
                                >
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon icon="ep:d-arrow-right" className="text-xl" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card p-0 overflow-hidden position-relative radius-12">
                    <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                        <h6 className="text-lg mb-0">Rounded with icon</h6>
                    </div>
                    <div className="card-body p-24">
                        <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    <Icon icon="ep:d-arrow-left" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    <Icon
                                        icon="iconamoon:arrow-left-2-light"
                                        className="text-xxl"
                                    />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white"
                                    href="javascript:void(0)"
                                >
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    4
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    5
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon
                                        icon="iconamoon:arrow-right-2-light"
                                        className="text-xxl"
                                    />{" "}
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon icon="ep:d-arrow-right" className="text-xl" />
                                </a>
                            </li>
                        </ul>
                        <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center mt-24">
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    <Icon icon="ep:d-arrow-left" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white"
                                    href="javascript:void(0)"
                                >
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon icon="ep:d-arrow-right" className="text-xl" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card p-0 overflow-hidden position-relative radius-12">
                    <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                        <h6 className="text-lg mb-0">Default Solid</h6>
                    </div>
                    <div className="card-body p-24 text-center">
                        <div className="p-24 bg-primary-50 d-inline-block radius-12 bg-primary-success-gradient justify-content-center mx-auto">
                            <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">
                                <li className="page-item">
                                    <a
                                        className="page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                        href="javascript:void(0)"
                                    >
                                        Page 1of 11
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                        href="javascript:void(0)"
                                    >
                                        <Icon icon="ep:d-arrow-left" className="text-xl" />
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                        href="javascript:void(0)"
                                    >
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white"
                                        href="javascript:void(0)"
                                    >
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                        href="javascript:void(0)"
                                    >
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                        href="javascript:void(0)"
                                    >
                                        4
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                        href="javascript:void(0)"
                                    >
                                        5
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                        href="javascript:void(0)"
                                    >
                                        ...
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                        href="javascript:void(0)"
                                    >
                                        {" "}
                                        <Icon icon="ep:d-arrow-right" className="text-xl" />
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px"
                                        href="javascript:void(0)"
                                    >
                                        Last
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card p-0 overflow-hidden position-relative radius-12">
                    <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                        <h6 className="text-lg mb-0">No Spacing</h6>
                    </div>
                    <div className="card-body text-center p-24">
                        <ul className="pagination d-flex flex-wrap align-items-center justify-content-center">
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px rounded-pill rounded-end-0"
                                    href="javascript:void(0)"
                                >
                                    <Icon icon="ep:d-arrow-left" className="text-xl" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    <Icon
                                        icon="iconamoon:arrow-left-2-light"
                                        className="text-xxl"
                                    />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white"
                                    href="javascript:void(0)"
                                >
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    4
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    5
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon
                                        icon="iconamoon:arrow-right-2-light"
                                        className="text-xxl"
                                    />{" "}
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px rounded-pill rounded-start-0"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon icon="ep:d-arrow-right" className="text-xl" />
                                </a>
                            </li>
                        </ul>
                        <ul className="pagination d-flex flex-wrap align-items-center justify-content-center mt-24">
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px rounded-pill rounded-end-0"
                                    href="javascript:void(0)"
                                >
                                    <Icon
                                        icon="iconamoon:arrow-left-2-light"
                                        className="text-xxl"
                                    />
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white"
                                    href="javascript:void(0)"
                                >
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    4
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px"
                                    href="javascript:void(0)"
                                >
                                    5
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px rounded-pill rounded-start-0"
                                    href="javascript:void(0)"
                                >
                                    {" "}
                                    <Icon
                                        icon="iconamoon:arrow-right-2-light"
                                        className="text-xxl"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PaginationLayer