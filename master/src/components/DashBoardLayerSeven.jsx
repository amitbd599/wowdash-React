import React from 'react'
import BannerInnerOne from './child/BannerInnerOne'
import TrendingBidsOne from './child/TrendingBidsOne'
import TrendingNFTsOne from './child/TrendingNFTsOne'
import RecentBidOne from './child/RecentBidOne'


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


                        {/* TrendingNFTsOne */}
                        <TrendingNFTsOne />

                        {/* RecentBidOne */}
                        <RecentBidOne />














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