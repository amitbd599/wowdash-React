import React from 'react'
import UnitCountThree from './child/UnitCountThree'
import CoinAnalyticsOne from './child/CoinAnalyticsOne'
import CoinAnalyticsTwo from './child/CoinAnalyticsTwo'
import MyOrdersOne from './child/MyOrdersOne'
import RecentTransactionOne from './child/RecentTransactionOne'

const DashBoardLayerFour = () => {
  return (
    <>

      {/* UnitCountThree */}
      <UnitCountThree />

      <section>
        <div className="row gy-4 mt-4">
          {/* Crypto Home Widgets Start */}
          <div className="col-xxl-8">
            <div className="row gy-4">

              {/* CoinAnalyticsOne */}
              <CoinAnalyticsOne />


              {/* CoinAnalyticsTwo */}
              <CoinAnalyticsTwo />


              {/* MyOrdersOne */}
              <MyOrdersOne />

              {/* RecentTransactionOne */}
              <RecentTransactionOne />

            </div>
          </div>
          {/* Crypto Home Widgets End */}
          <div className="col-xxl-4">
            <div className="row gy-4">
              <div className="col-xxl-12 col-lg-6">
                <div className="card h-100 radius-8 border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                      <h6 className="mb-2 fw-bold text-lg">My Cards</h6>
                      <a
                        href=""
                        className="btn btn-outline-primary d-inline-flex align-items-center gap-2 text-sm btn-sm px-8 py-6"
                      >
                        <iconify-icon icon="ph:plus-circle" className="icon text-xl" />{" "}
                        Button
                      </a>
                    </div>
                    <div>
                      <div className="card-slider">
                        <div className="p-20 h-240-px radius-8 overflow-hidden position-relative z-1">
                          <img
                            src="assets/images/card/card-bg.png"
                            alt=""
                            className="position-absolute start-0 top-0 w-100 h-100 object-fit-cover z-n1"
                          />
                          <div className="d-flex flex-column justify-content-between h-100">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                              <h6 className="text-white mb-0">Master Card</h6>
                              <img src="assets/images/card/card-logo.png" alt="" />
                            </div>
                            <div>
                              <span className="text-white text-xs fw-normal text-opacity-75">
                                Credit Card Number
                              </span>
                              <h6 className="text-white text-xl fw-semibold mt-1 mb-0">
                                2356 9854 3652 5612
                              </h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <span className="text-white text-xs fw-normal text-opacity-75">
                                  Name
                                </span>
                                <h6 className="text-white text-xl fw-semibold mb-0">
                                  Arlene McCoy
                                </h6>
                              </div>
                              <div>
                                <span className="text-white text-xs fw-normal text-opacity-75">
                                  Exp. Date
                                </span>
                                <h6 className="text-white text-xl fw-semibold mb-0">
                                  05/26
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-20 h-240-px radius-8 overflow-hidden position-relative z-1">
                          <img
                            src="assets/images/card/card-bg.png"
                            alt=""
                            className="position-absolute start-0 top-0 w-100 h-100 object-fit-cover z-n1"
                          />
                          <div className="d-flex flex-column justify-content-between h-100">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                              <h6 className="text-white mb-0">Master Card</h6>
                              <img src="assets/images/card/card-logo.png" alt="" />
                            </div>
                            <div>
                              <span className="text-white text-xs fw-normal text-opacity-75">
                                Credit Card Number
                              </span>
                              <h6 className="text-white text-xl fw-semibold mt-1 mb-0">
                                2356 9854 3652 5612
                              </h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <span className="text-white text-xs fw-normal text-opacity-75">
                                  Name
                                </span>
                                <h6 className="text-white text-xl fw-semibold mb-0">
                                  Arlene McCoy
                                </h6>
                              </div>
                              <div>
                                <span className="text-white text-xs fw-normal text-opacity-75">
                                  Exp. Date
                                </span>
                                <h6 className="text-white text-xl fw-semibold mb-0">
                                  05/26
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-20 h-240-px radius-8 overflow-hidden position-relative z-1">
                          <img
                            src="assets/images/card/card-bg.png"
                            alt=""
                            className="position-absolute start-0 top-0 w-100 h-100 object-fit-cover z-n1"
                          />
                          <div className="d-flex flex-column justify-content-between h-100">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                              <h6 className="text-white mb-0">Master Card</h6>
                              <img src="assets/images/card/card-logo.png" alt="" />
                            </div>
                            <div>
                              <span className="text-white text-xs fw-normal text-opacity-75">
                                Credit Card Number
                              </span>
                              <h6 className="text-white text-xl fw-semibold mt-1 mb-0">
                                2356 9854 3652 5612
                              </h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <span className="text-white text-xs fw-normal text-opacity-75">
                                  Name
                                </span>
                                <h6 className="text-white text-xl fw-semibold mb-0">
                                  Arlene McCoy
                                </h6>
                              </div>
                              <div>
                                <span className="text-white text-xs fw-normal text-opacity-75">
                                  Exp. Date
                                </span>
                                <h6 className="text-white text-xl fw-semibold mb-0">
                                  05/26
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-lg-6">
                <div className="card h-100">
                  <div className="card-body p-24">
                    <span className="mb-4 text-sm text-secondary-light">
                      Total Balance
                    </span>
                    <h6 className="mb-4">$320,320.00</h6>
                    <ul
                      className="nav nav-pills pill-tab mb-24 mt-28 border input-form-light p-1 radius-8 bg-neutral-50"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item w-50" role="presentation">
                        <button
                          className="nav-link px-12 py-10 text-md w-100 text-center radius-8 active"
                          id="pills-Buy-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-Buy"
                          type="button"
                          role="tab"
                          aria-controls="pills-Buy"
                          aria-selected="true"
                        >
                          Buy
                        </button>
                      </li>
                      <li className="nav-item w-50" role="presentation">
                        <button
                          className="nav-link px-12 py-10 text-md w-100 text-center radius-8"
                          id="pills-Sell-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-Sell"
                          type="button"
                          role="tab"
                          aria-controls="pills-Sell"
                          aria-selected="false"
                        >
                          Sell
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-Buy"
                        role="tabpanel"
                        aria-labelledby="pills-Buy-tab"
                        tabIndex={0}
                      >
                        <div className="mb-20">
                          <label
                            htmlFor="estimatedValue"
                            className="fw-semibold mb-8 text-primary-light"
                          >
                            Estimated Purchase Value
                          </label>
                          <div className="input-group input-group-lg border input-form-light radius-8">
                            <input
                              type="text"
                              className="form-control bg-base border-0 radius-8"
                              id="estimatedValue"
                              placeholder="Estimated Value"
                            />
                            <div className="input-group-text bg-neutral-50 border-0 fw-normal text-md ps-1 pe-1">
                              <select className="form-select form-select-sm w-auto bg-transparent fw-bolder border-0 text-secondary-light">
                                <option className="bg-base">BTC</option>
                                <option className="bg-base">LTC</option>
                                <option className="bg-base">ETC</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="mb-20">
                          <label
                            htmlFor="tradeValue"
                            className="fw-semibold mb-8 text-primary-light"
                          >
                            Trade Value
                          </label>
                          <div className="input-group input-group-lg border input-form-light radius-8">
                            <input
                              type="text"
                              className="form-control bg-base border-0 radius-8"
                              id="tradeValue"
                              placeholder="Trade Value"
                            />
                            <div className="input-group-text bg-neutral-50 border-0 fw-normal text-md ps-1 pe-1">
                              <select className="form-select form-select-sm w-auto bg-transparent fw-bolder border-0 text-secondary-light">
                                <option className="bg-base">USD</option>
                                <option className="bg-base">BTC</option>
                                <option className="bg-base">LTC</option>
                                <option className="bg-base">ETC</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="mb-20">
                          <label className="fw-semibold mb-8 text-primary-light">
                            Trade Value
                          </label>
                          <textarea
                            className="form-control bg-base h-80-px radius-8"
                            placeholder="Enter Address"
                            defaultValue={""}
                          />
                        </div>
                        <div className="mb-24">
                          <span className="mb-4 text-sm text-secondary-light">
                            Total Balance
                          </span>
                          <h6 className="mb-4 fw-semibold text-xl text-warning-main">
                            $320,320.00
                          </h6>
                        </div>
                        <a
                          href=""
                          className="btn btn-primary text-sm btn-sm px-8 py-12 w-100 radius-8"
                        >
                          {" "}
                          Transfer Now
                        </a>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-Sell"
                        role="tabpanel"
                        aria-labelledby="pills-Sell-tab"
                        tabIndex={0}
                      >
                        <div className="mb-20">
                          <label
                            htmlFor="estimatedValueSell"
                            className="fw-semibold mb-8 text-primary-light"
                          >
                            Estimated Purchase Value
                          </label>
                          <div className="input-group input-group-lg border input-form-light radius-8">
                            <input
                              type="text"
                              className="form-control border-0 radius-8"
                              id="estimatedValueSell"
                              placeholder="Estimated Value"
                            />
                            <div className="input-group-text bg-neutral-50 border-0 fw-normal text-md ps-1 pe-1">
                              <select className="form-select form-select-sm w-auto bg-transparent fw-bolder border-0 text-secondary-light">
                                <option>BTC</option>
                                <option>LTC</option>
                                <option>USD</option>
                                <option>ETC</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="mb-20">
                          <label
                            htmlFor="tradeValueSell"
                            className="fw-semibold mb-8 text-primary-light"
                          >
                            Trade Value
                          </label>
                          <div className="input-group input-group-lg border input-form-light radius-8">
                            <input
                              type="text"
                              className="form-control border-0 radius-8"
                              id="tradeValueSell"
                              placeholder="Trade Value"
                            />
                            <div className="input-group-text bg-neutral-50 border-0 fw-normal text-md ps-1 pe-1">
                              <select className="form-select form-select-sm w-auto bg-transparent fw-bolder border-0 text-secondary-light">
                                <option>BTC</option>
                                <option>LTC</option>
                                <option>USD</option>
                                <option>ETC</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="mb-20">
                          <label className="fw-semibold mb-8">Trade Value</label>
                          <textarea
                            className="form-control h-80-px radius-8"
                            placeholder="Enter Address"
                            defaultValue={""}
                          />
                        </div>
                        <div className="mb-24">
                          <span className="mb-4 text-sm text-secondary-light">
                            Total Balance
                          </span>
                          <h6 className="mb-4 fw-semibold text-xl text-warning-main">
                            $320,320.00
                          </h6>
                        </div>
                        <a
                          href=""
                          className="btn btn-primary text-sm btn-sm px-8 py-12 w-100 radius-8"
                        >
                          {" "}
                          Transfer Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-lg-6">
                <div className="card h-100 radius-8 border-0">
                  <div className="card-body p-24">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                      <h6 className="mb-2 fw-bold text-lg">User Activates</h6>
                      <div className="">
                        <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                          <option>This Week</option>
                          <option>This Month</option>
                          <option>This Year</option>
                        </select>
                      </div>
                    </div>
                    <div className="position-relative">
                      <span className="w-80-px h-80-px bg-base shadow text-primary-light fw-semibold text-xl d-flex justify-content-center align-items-center rounded-circle position-absolute end-0 top-0 z-1">
                        +30%
                      </span>
                      <div
                        id="statisticsDonutChart"
                        className="mt-36 flex-grow-1 apexcharts-tooltip-z-none title-style circle-none"
                      />
                      <span className="w-80-px h-80-px bg-base shadow text-primary-light fw-semibold text-xl d-flex justify-content-center align-items-center rounded-circle position-absolute start-0 bottom-0 z-1">
                        +25%
                      </span>
                    </div>
                    <ul className="d-flex flex-wrap align-items-center justify-content-between mt-3 gap-3">
                      <li className="d-flex align-items-center gap-2">
                        <span className="w-12-px h-12-px radius-2 bg-primary-600" />
                        <span className="text-secondary-light text-sm fw-normal">
                          Visits By Day:
                          <span className="text-primary-light fw-bold">20,000</span>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="w-12-px h-12-px radius-2 bg-yellow" />
                        <span className="text-secondary-light text-sm fw-normal">
                          Referral Join:
                          <span className="text-primary-light fw-bold">25,000</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>





    </>
  )
}

export default DashBoardLayerFour