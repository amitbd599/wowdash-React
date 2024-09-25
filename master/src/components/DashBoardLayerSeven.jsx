import React from 'react'
import BannerInnerOne from './child/BannerInnerOne'
import TrendingBidsOne from './child/TrendingBidsOne'


const DashBoardLayerSeven = () => {
    return (
        <>
            <div className="row gy-4">



                <div className="col-xxl-8">
                    <div className="row gy-4">


                        {/* BannerInnerOne */}
                        <BannerInnerOne />

                        {/* TrendingBidsOne */}
                        <TrendingBidsOne />







                        <div className="col-12">
                            <div className="mb-16 mt-8 d-flex flex-wrap justify-content-between gap-16">
                                <h6 className="mb-0">Trending NFTs</h6>
                                <ul
                                    className="nav button-tab nav-pills mb-16 gap-12"
                                    id="pills-tab-three"
                                    role="tablist"
                                >
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link fw-semibold text-secondary-light rounded-pill px-20 py-6 border border-neutral-300 active"
                                            id="pills-button-all-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-button-all"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-button-all"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            All
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link fw-semibold text-secondary-light rounded-pill px-20 py-6 border border-neutral-300"
                                            id="pills-button-art-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-button-art"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-button-art"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            Art
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link fw-semibold text-secondary-light rounded-pill px-20 py-6 border border-neutral-300"
                                            id="pills-button-music-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-button-music"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-button-music"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            Music
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link fw-semibold text-secondary-light rounded-pill px-20 py-6 border border-neutral-300"
                                            id="pills-button-utility-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-button-utility"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-button-utility"
                                            aria-selected="true"
                                        >
                                            Utility
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link fw-semibold text-secondary-light rounded-pill px-20 py-6 border border-neutral-300"
                                            id="pills-button-fashion-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-button-fashion"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-button-fashion"
                                            aria-selected="true"
                                        >
                                            Fashion
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="pills-tab-threeContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-button-all"
                                    role="tabpanel"
                                    aria-labelledby="pills-button-all-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-3">
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img1.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        Fantastic Alien
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img1.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img2.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img2.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img3.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img3.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img4.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img4.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-button-art"
                                    role="tabpanel"
                                    aria-labelledby="pills-button-art-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-3">
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img1.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        Fantastic Alien
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img1.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img2.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img2.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img3.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img3.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img4.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img4.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-button-music"
                                    role="tabpanel"
                                    aria-labelledby="pills-button-music-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-3">
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img1.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        Fantastic Alien
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img1.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img2.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img2.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img3.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img3.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img4.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img4.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-button-utility"
                                    role="tabpanel"
                                    aria-labelledby="pills-button-utility-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-3">
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img1.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        Fantastic Alien
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img1.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img2.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img2.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img3.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img3.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img4.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img4.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-button-fashion"
                                    role="tabpanel"
                                    aria-labelledby="pills-button-fashion-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-3">
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img1.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        Fantastic Alien
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img1.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img2.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img2.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img3.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img3.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-sm-6 col-xs-6">
                                            <div className="nft-card bg-base radius-16 overflow-hidden">
                                                <div className="radius-16 overflow-hidden">
                                                    <img
                                                        src="assets/images/nft/nft-img4.png"
                                                        alt=""
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                                <div className="p-10">
                                                    <h6 className="text-md fw-bold text-primary-light">
                                                        New Figures
                                                    </h6>
                                                    <div className="d-flex align-items-center gap-8">
                                                        <img
                                                            src="assets/images/nft/nft-user-img4.png"
                                                            className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                            alt=""
                                                        />
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Watson Kristin
                                                        </span>
                                                    </div>
                                                    <div className="mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                                        <span className="text-sm text-secondary-light fw-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light fw-semibold">
                                                                1.44 ETH
                                                            </span>
                                                        </span>
                                                        <span className="text-sm fw-semibold text-primary-600">
                                                            $4,224.96
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            History
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="card h-100">
                                <div className="card-body p-24">
                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                                        <h6 className="mb-2 fw-bold text-lg mb-0">Recent Bid</h6>
                                        <select className="form-select form-select-sm w-auto bg-base border text-secondary-light rounded-pill">
                                            <option>All Items </option>
                                            <option>New Item</option>
                                            <option>Trending Item</option>
                                            <option>Old Item</option>
                                        </select>
                                    </div>
                                    <div className="table-responsive scroll-sm">
                                        <div className="table-responsive scroll-sm">
                                            <table className="table bordered-table sm-table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Items </th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Your Offer </th>
                                                        <th scope="col">Recent Offer</th>
                                                        <th scope="col">Time Left</th>
                                                        <th scope="col" className="text-center">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-items-img1.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold">
                                                                        Spanky &amp; Friends
                                                                    </h6>
                                                                    <span className="text-sm text-secondary-light fw-normal">
                                                                        Owned by ABC
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1.44 ETH</td>
                                                        <td>3.053 ETH</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-offer-img1.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold text-primary-light">
                                                                        1.44.00 ETH
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>2h 5m 40s</td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center gap-12">
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-success-600"
                                                                >
                                                                    <i className="ri-edit-line" />
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-danger-600 remove-btn"
                                                                >
                                                                    <i className="ri-delete-bin-6-line" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-items-img2.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold">
                                                                        Nike Air Shoe
                                                                    </h6>
                                                                    <span className="text-sm text-secondary-light fw-normal">
                                                                        Owned by ABC
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1.44 ETH</td>
                                                        <td>3.053 ETH</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-offer-img2.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold text-primary-light">
                                                                        1.44.00 ETH
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>2h 5m 40s</td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center gap-12">
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-success-600"
                                                                >
                                                                    <i className="ri-edit-line" />
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-danger-600 remove-btn"
                                                                >
                                                                    <i className="ri-delete-bin-6-line" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-items-img3.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold">
                                                                        Woman Dresses
                                                                    </h6>
                                                                    <span className="text-sm text-secondary-light fw-normal">
                                                                        Owned by ABC
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1.44 ETH</td>
                                                        <td>3.053 ETH</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-offer-img3.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold text-primary-light">
                                                                        1.44.00 ETH
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>2h 5m 40s</td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center gap-12">
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-success-600"
                                                                >
                                                                    <i className="ri-edit-line" />
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-danger-600 remove-btn"
                                                                >
                                                                    <i className="ri-delete-bin-6-line" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-items-img4.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold">
                                                                        Smart Watch
                                                                    </h6>
                                                                    <span className="text-sm text-secondary-light fw-normal">
                                                                        Owned by ABC
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1.44 ETH</td>
                                                        <td>3.053 ETH</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-offer-img4.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold text-primary-light">
                                                                        1.44.00 ETH
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>2h 5m 40s</td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center gap-12">
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-success-600"
                                                                >
                                                                    <i className="ri-edit-line" />
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-danger-600 remove-btn"
                                                                >
                                                                    <i className="ri-delete-bin-6-line" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-items-img5.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold">
                                                                        Hoodie Rose
                                                                    </h6>
                                                                    <span className="text-sm text-secondary-light fw-normal">
                                                                        Owned by ABC
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1.44 ETH</td>
                                                        <td>3.053 ETH</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-offer-img5.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold text-primary-light">
                                                                        1.44.00 ETH
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>2h 5m 40s</td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center gap-12">
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-success-600"
                                                                >
                                                                    <i className="ri-edit-line" />
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-danger-600 remove-btn"
                                                                >
                                                                    <i className="ri-delete-bin-6-line" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-items-img6.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold">
                                                                        Hoodie Rose
                                                                    </h6>
                                                                    <span className="text-sm text-secondary-light fw-normal">
                                                                        Owned by ABC
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1.44 ETH</td>
                                                        <td>3.053 ETH</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-offer-img6.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold text-primary-light">
                                                                        1.44.00 ETH
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>2h 5m 40s</td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center gap-12">
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-success-600"
                                                                >
                                                                    <i className="ri-edit-line" />
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-danger-600 remove-btn"
                                                                >
                                                                    <i className="ri-delete-bin-6-line" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-items-img2.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold">
                                                                        Hoodie Rose
                                                                    </h6>
                                                                    <span className="text-sm text-secondary-light fw-normal">
                                                                        Owned by ABC
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1.44 ETH</td>
                                                        <td>3.053 ETH</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="assets/images/nft/nft-offer-img7.png"
                                                                    alt=""
                                                                    className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <h6 className="text-md mb-0 fw-semibold text-primary-light">
                                                                        1.44.00 ETH
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>2h 5m 40s</td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center gap-12">
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-success-600"
                                                                >
                                                                    <i className="ri-edit-line" />
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="text-xl text-danger-600 remove-btn"
                                                                >
                                                                    <i className="ri-delete-bin-6-line" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-xxl-4">
                    <div className="row gy-4">
                        <div className="col-xxl-12 col-md-6">
                            <div className="card h-100">
                                <div className="card-header border-bottom d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                    <h6 className="fw-bold text-lg mb-0">ETH Price</h6>
                                    <select className="form-select form-select-sm w-auto bg-base border text-secondary-light rounded-pill">
                                        <option>November </option>
                                        <option>December</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                    </select>
                                </div>
                                <div className="card-body">
                                    <div
                                        id="enrollmentChart"
                                        className="apexcharts-tooltip-style-1 yaxies-more"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-12 col-md-6">
                            <div className="card h-100">
                                <div className="card-header border-bottom d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                    <h6 className="fw-bold text-lg mb-0">Statistics</h6>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                                    >
                                        View All
                                        <iconify-icon
                                            icon="solar:alt-arrow-right-linear"
                                            className="icon"
                                        />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-1 justify-content-between mb-44">
                                        <div>
                                            <h5 className="fw-semibold mb-12">145</h5>
                                            <span className="text-secondary-light fw-normal text-xl">
                                                Total Art Sold
                                            </span>
                                        </div>
                                        <div id="dailyIconBarChart" />
                                    </div>
                                    <div className="d-flex align-items-center gap-1 justify-content-between">
                                        <div>
                                            <h5 className="fw-semibold mb-12">750 ETH</h5>
                                            <span className="text-secondary-light fw-normal text-xl">
                                                Total Earnings
                                            </span>
                                        </div>
                                        <div id="areaChart" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-12 col-md-6">
                            <div className="card h-100">
                                <div className="card-header border-bottom d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                    <h6 className="fw-bold text-lg mb-0">Featured Creators</h6>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                                    >
                                        View All
                                        <iconify-icon
                                            icon="solar:alt-arrow-right-linear"
                                            className="icon"
                                        />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between gap-8 flex-wrap">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/nft/nft-items-img1.png"
                                                alt=""
                                                className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-semibold">Theresa Webb</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    Owned by ABC
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary-600 px-24 rounded-pill"
                                        >
                                            Follow
                                        </button>
                                    </div>
                                    <div className="mt-24">
                                        <div className="row gy-3">
                                            <div className="col-sm-6 col-xs-6">
                                                <div className="nft-card bg-base radius-16 overflow-hidden shadow-4">
                                                    <div className="radius-16 overflow-hidden">
                                                        <img
                                                            src="assets/images/nft/featured-creator1.png"
                                                            alt=""
                                                            className="w-100 h-100 object-fit-cover"
                                                        />
                                                    </div>
                                                    <div className="p-12">
                                                        <h6 className="text-md fw-bold text-primary-light mb-12">
                                                            New Figures
                                                        </h6>
                                                        <div className="d-flex align-items-center gap-8">
                                                            <img
                                                                src="assets/images/nft/bitcoin.png"
                                                                className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                                alt=""
                                                            />
                                                            <span className="text-sm text-secondary-light fw-medium">
                                                                0.10 BTC
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-xs-6">
                                                <div className="nft-card bg-base radius-16 overflow-hidden shadow-4">
                                                    <div className="radius-16 overflow-hidden">
                                                        <img
                                                            src="assets/images/nft/featured-creator2.png"
                                                            alt=""
                                                            className="w-100 h-100 object-fit-cover"
                                                        />
                                                    </div>
                                                    <div className="p-12">
                                                        <h6 className="text-md fw-bold text-primary-light mb-12">
                                                            Abstrac Girl
                                                        </h6>
                                                        <div className="d-flex align-items-center gap-8">
                                                            <img
                                                                src="assets/images/nft/bitcoin.png"
                                                                className="w-28-px h-28-px rounded-circle object-fit-cover"
                                                                alt=""
                                                            />
                                                            <span className="text-sm text-secondary-light fw-medium">
                                                                0.10 BTC
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-12 col-md-6">
                            <div className="card h-100">
                                <div className="card-header border-bottom d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                    <h6 className="fw-bold text-lg mb-0">Featured Creators</h6>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                                    >
                                        View All
                                        <iconify-icon
                                            icon="solar:alt-arrow-right-linear"
                                            className="icon"
                                        />
                                    </a>
                                </div>
                                <div className="card-body pt-24">
                                    <div className="d-flex align-items-center justify-content-between gap-8 flex-wrap mb-32">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/nft/creator-img1.png"
                                                alt=""
                                                className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-semibold">Theresa Webb</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    @wishon
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn bg-primary-600 border-primary-600 text-white px-24 rounded-pill follow-btn transition-2"
                                        >
                                            Follow
                                        </button>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-8 flex-wrap mb-32">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/nft/creator-img2.png"
                                                alt=""
                                                className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-semibold">Arlene McCoy</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    @nemccoy
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn bg-primary-600 border-primary-600 text-white px-24 rounded-pill follow-btn transition-2"
                                        >
                                            Follow
                                        </button>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-8 flex-wrap mb-32">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/nft/creator-img3.png"
                                                alt=""
                                                className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-semibold">Kathryn Murphy</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    @kathrynmur
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn bg-primary-600 border-primary-600 text-white px-24 rounded-pill follow-btn transition-2"
                                        >
                                            Follow
                                        </button>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-8 flex-wrap mb-32">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/nft/creator-img4.png"
                                                alt=""
                                                className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-semibold">Marvin McKinney</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    @marvinckin
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn bg-primary-600 border-primary-600 text-white px-24 rounded-pill follow-btn transition-2"
                                        >
                                            Follow
                                        </button>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-8 flex-wrap mb-0">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/nft/creator-img5.png"
                                                alt=""
                                                className="flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-md mb-0 fw-semibold">Dianne Russell</h6>
                                                <span className="text-sm text-secondary-light fw-normal">
                                                    @dinne_r
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn bg-primary-600 border-primary-600 text-white px-24 rounded-pill follow-btn transition-2"
                                        >
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DashBoardLayerSeven