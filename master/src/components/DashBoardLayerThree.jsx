import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import RevenueReportOne from './child/RevenueReportOne'

const DashBoardLayerThree = () => {

  return (
    <div className="row gy-4">
      {/* RevenueReportOne */}
      <RevenueReportOne />

      <div className="col-xxl-3 col-lg-6">
        <div className="card h-100 radius-8 border-0">
          <div className="card-body p-24">
            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
              <h6 className="mb-2 fw-bold text-lg">Customers Statistics</h6>
              <div className="">
                <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                  <option>Yearly</option>
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Today</option>
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
                  Male:
                  <span className="text-primary-light fw-bold">20,000</span>
                </span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span className="w-12-px h-12-px radius-2 bg-yellow" />
                <span className="text-secondary-light text-sm fw-normal">
                  Female:
                  <span className="text-primary-light fw-bold">25,000</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xxl-9 col-lg-6">
        <div className="card h-100">
          <div className="card-body p-24">
            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
              <h6 className="mb-2 fw-bold text-lg mb-0">Recent Orders</h6>
              <a
                href="javascript:void(0)"
                className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
              >
                View All
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  className="icon"
                />
              </a>
            </div>
            <div className="table-responsive scroll-sm">
              <table className="table bordered-table mb-0">
                <thead>
                  <tr>
                    <th scope="col">Users</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Items</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Amount</th>
                    <th scope="col" className="text-center">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/users/user1.png"
                          alt=""
                          className="flex-shrink-0 me-12 radius-8"
                        />
                        <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                          Dianne Russell
                        </span>
                      </div>
                    </td>
                    <td>#6352148</td>
                    <td>iPhone 14 max</td>
                    <td>2</td>
                    <td>$5,000.00</td>
                    <td className="text-center">
                      {" "}
                      <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                        Paid
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/users/user2.png"
                          alt=""
                          className="flex-shrink-0 me-12 radius-8"
                        />
                        <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                          Wade Warren
                        </span>
                      </div>
                    </td>
                    <td>#6352148</td>
                    <td>Laptop HPH </td>
                    <td>3</td>
                    <td>$1,000.00</td>
                    <td className="text-center">
                      {" "}
                      <span className="bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/users/user3.png"
                          alt=""
                          className="flex-shrink-0 me-12 radius-8"
                        />
                        <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                          Albert Flores
                        </span>
                      </div>
                    </td>
                    <td>#6352148</td>
                    <td>Smart Watch </td>
                    <td>7</td>
                    <td>$1,000.00</td>
                    <td className="text-center">
                      {" "}
                      <span className="bg-info-focus text-info-main px-24 py-4 rounded-pill fw-medium text-sm">
                        Shipped
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/users/user4.png"
                          alt=""
                          className="flex-shrink-0 me-12 radius-8"
                        />
                        <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                          Bessie Cooper
                        </span>
                      </div>
                    </td>
                    <td>#6352148</td>
                    <td>Nike Air Shoe</td>
                    <td>1</td>
                    <td>$3,000.00</td>
                    <td className="text-center">
                      {" "}
                      <span className="bg-danger-focus text-danger-main px-24 py-4 rounded-pill fw-medium text-sm">
                        Canceled
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/users/user5.png"
                          alt=""
                          className="flex-shrink-0 me-12 radius-8"
                        />
                        <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                          Arlene McCoy
                        </span>
                      </div>
                    </td>
                    <td>#6352148</td>
                    <td>New Headphone </td>
                    <td>5</td>
                    <td>$4,000.00</td>
                    <td className="text-center">
                      {" "}
                      <span className="bg-danger-focus text-danger-main px-24 py-4 rounded-pill fw-medium text-sm">
                        Canceled
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-3">
        <div className="card h-100">
          <div className="card-body">
            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
              <h6 className="mb-2 fw-bold text-lg">Transactions</h6>
              <div className="">
                <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                  <option>This Month</option>
                  <option>Last Month</option>
                </select>
              </div>
            </div>
            <div className="mt-32">
              <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/payment/payment1.png"
                    alt=""
                    className="w-40-px h-40-px radius-8 flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-md mb-0 fw-normal">Paytm</h6>
                    <span className="text-sm text-secondary-light fw-normal">
                      Starbucks
                    </span>
                  </div>
                </div>
                <span className="text-danger text-md fw-medium">-$20</span>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/payment/payment2.png"
                    alt=""
                    className="w-40-px h-40-px radius-8 flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-md mb-0 fw-normal">PayPal</h6>
                    <span className="text-sm text-secondary-light fw-normal">
                      Client Payment
                    </span>
                  </div>
                </div>
                <span className="text-success-main text-md fw-medium">+$800</span>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/payment/payment3.png"
                    alt=""
                    className="w-40-px h-40-px radius-8 flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-md mb-0 fw-normal">Stripe</h6>
                    <span className="text-sm text-secondary-light fw-normal">
                      Ordered iPhone 14
                    </span>
                  </div>
                </div>
                <span className="text-danger-main text-md fw-medium">-$300</span>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/payment/payment4.png"
                    alt=""
                    className="w-40-px h-40-px radius-8 flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-md mb-0 fw-normal">Razorpay</h6>
                    <span className="text-sm text-secondary-light fw-normal">
                      Refund
                    </span>
                  </div>
                </div>
                <span className="text-success-main text-md fw-medium">+$500</span>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/payment/payment1.png"
                    alt=""
                    className="w-40-px h-40-px radius-8 flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-md mb-0 fw-normal">Paytm</h6>
                    <span className="text-sm text-secondary-light fw-normal">
                      Starbucks
                    </span>
                  </div>
                </div>
                <span className="text-danger-main text-md fw-medium">-$1500</span>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/payment/payment3.png"
                    alt=""
                    className="w-40-px h-40-px radius-8 flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-md mb-0 fw-normal">Stripe</h6>
                    <span className="text-sm text-secondary-light fw-normal">
                      Ordered iPhone 14
                    </span>
                  </div>
                </div>
                <span className="text-success-main text-md fw-medium">+$800</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4">
        <div className="card h-100 radius-8 border">
          <div className="card-body p-24">
            <h6 className="mb-12 fw-bold text-lg mb-0">Recent Orders</h6>
            <div className="d-flex align-items-center gap-2">
              <h6 className="fw-semibold mb-0">$27,200</h6>
              <p className="text-sm mb-0">
                <span className="bg-success-focus border border-success px-8 py-2 rounded-pill fw-semibold text-success-main text-sm d-inline-flex align-items-center gap-1">
                  10%
                  <Icon icon="iconamoon:arrow-up-2-fill" className="icon" />
                </span>
                Increases
              </p>
            </div>
            <div id="recent-orders" className="mt-28" />
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-lg-6">
        <div className="card radius-8 border-0">
          <div className="card-body">
            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
              <h6 className="mb-2 fw-bold text-lg">Distribution Maps</h6>
              <div className="">
                <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                  <option>Yearly</option>
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Today</option>
                </select>
              </div>
            </div>
          </div>
          <div id="world-map" />
          <div className="card-body p-24 max-h-266-px scroll-sm overflow-y-auto">
            <div className="">
              <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                <div className="d-flex align-items-center w-100">
                  <img
                    src="assets/images/flags/flag1.png"
                    alt=""
                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-sm mb-0">USA</h6>
                    <span className="text-xs text-secondary-light fw-medium">
                      1,240 Users
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 w-100">
                  <div className="w-100 max-w-66 ms-auto">
                    <div
                      className="progress progress-sm rounded-pill"
                      role="progressbar"
                      aria-label="Success example"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="progress-bar bg-primary-600 rounded-pill"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                  <span className="text-secondary-light font-xs fw-semibold">
                    80%
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                <div className="d-flex align-items-center w-100">
                  <img
                    src="assets/images/flags/flag2.png"
                    alt=""
                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-sm mb-0">Japan</h6>
                    <span className="text-xs text-secondary-light fw-medium">
                      1,240 Users
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 w-100">
                  <div className="w-100 max-w-66 ms-auto">
                    <div
                      className="progress progress-sm rounded-pill"
                      role="progressbar"
                      aria-label="Success example"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="progress-bar bg-orange rounded-pill"
                        style={{ width: "60%" }}
                      />
                    </div>
                  </div>
                  <span className="text-secondary-light font-xs fw-semibold">
                    60%
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                <div className="d-flex align-items-center w-100">
                  <img
                    src="assets/images/flags/flag3.png"
                    alt=""
                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-sm mb-0">France</h6>
                    <span className="text-xs text-secondary-light fw-medium">
                      1,240 Users
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 w-100">
                  <div className="w-100 max-w-66 ms-auto">
                    <div
                      className="progress progress-sm rounded-pill"
                      role="progressbar"
                      aria-label="Success example"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="progress-bar bg-yellow rounded-pill"
                        style={{ width: "49%" }}
                      />
                    </div>
                  </div>
                  <span className="text-secondary-light font-xs fw-semibold">
                    49%
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center w-100">
                  <img
                    src="assets/images/flags/flag4.png"
                    alt=""
                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-sm mb-0">Germany</h6>
                    <span className="text-xs text-secondary-light fw-medium">
                      1,240 Users
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 w-100">
                  <div className="w-100 max-w-66 ms-auto">
                    <div
                      className="progress progress-sm rounded-pill"
                      role="progressbar"
                      aria-label="Success example"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="progress-bar bg-success-main rounded-pill"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <span className="text-secondary-light font-xs fw-semibold">
                    100%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-lg-6">
        <div className="card h-100">
          <div className="card-body">
            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
              <h6 className="mb-2 fw-bold text-lg mb-0">Top Customers</h6>
              <a
                href="javascript:void(0)"
                className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
              >
                View All
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  className="icon"
                />
              </a>
            </div>
            <div className="mt-32">
              <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/user6.png"
                    alt=""
                    className="w-40-px h-40-px radius-8 flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-md mb-0 fw-normal">Dianne Russell</h6>
                    <span className="text-sm text-secondary-light fw-normal">
                      017******58
                    </span>
                  </div>
                </div>
                <span className="text-primary-light text-md fw-medium">
                  Orders: 30
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/user1.png"
                    alt=""
                    className="w-40-px h-40-px radius-8 flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-md mb-0 fw-normal">Wade Warren</h6>
                    <span className="text-sm text-secondary-light fw-normal">
                      017******58
                    </span>
                  </div>
                </div>
                <span className="text-primary-light text-md fw-medium">
                  Orders: 30
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/user2.png"
                    alt=""
                    className="w-40-px h-40-px radius-8 flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-md mb-0 fw-normal">Albert Flores</h6>
                    <span className="text-sm text-secondary-light fw-normal">
                      017******58
                    </span>
                  </div>
                </div>
                <span className="text-primary-light text-md fw-medium">
                  Orders: 35
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/user3.png"
                    alt=""
                    className="w-40-px h-40-px radius-8 flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-md mb-0 fw-normal">Bessie Cooper</h6>
                    <span className="text-sm text-secondary-light fw-normal">
                      017******58
                    </span>
                  </div>
                </div>
                <span className="text-primary-light text-md fw-medium">
                  Orders: 20
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/user4.png"
                    alt=""
                    className="w-40-px h-40-px radius-8 flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-md mb-0 fw-normal">Arlene McCoy</h6>
                    <span className="text-sm text-secondary-light fw-normal">
                      017******58
                    </span>
                  </div>
                </div>
                <span className="text-primary-light text-md fw-medium">
                  Orders: 25
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/user6.png"
                    alt=""
                    className="w-40-px h-40-px radius-8 flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <h6 className="text-md mb-0 fw-normal">John Doe</h6>
                    <span className="text-sm text-secondary-light fw-normal">
                      017******58
                    </span>
                  </div>
                </div>
                <span className="text-primary-light text-md fw-medium">
                  Orders: 32
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-6">
        <div className="card h-100">
          <div className="card-body p-24">
            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
              <h6 className="mb-2 fw-bold text-lg mb-0">Top Selling Product</h6>
              <a
                href="javascript:void(0)"
                className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
              >
                View All
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  className="icon"
                />
              </a>
            </div>
            <div className="table-responsive scroll-sm">
              <table className="table bordered-table mb-0">
                <thead>
                  <tr>
                    <th scope="col">Items</th>
                    <th scope="col">Price</th>
                    <th scope="col">Discount </th>
                    <th scope="col">Sold</th>
                    <th scope="col" className="text-center">
                      Total Orders
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/product/product-img1.png"
                          alt=""
                          className="flex-shrink-0 me-12 radius-8 me-12"
                        />
                        <div className="flex-grow-1">
                          <h6 className="text-md mb-0 fw-normal">Blue t-shirt</h6>
                          <span className="text-sm text-secondary-light fw-normal">
                            Fashion
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>$500.00</td>
                    <td>15%</td>
                    <td>300</td>
                    <td className="text-center">
                      <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                        70
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/product/product-img2.png"
                          alt=""
                          className="flex-shrink-0 me-12 radius-8 me-12"
                        />
                        <div className="flex-grow-1">
                          <h6 className="text-md mb-0 fw-normal">Nike Air Shoe</h6>
                          <span className="text-sm text-secondary-light fw-normal">
                            Fashion
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>$150.00</td>
                    <td>N/A</td>
                    <td>200</td>
                    <td className="text-center">
                      <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                        70
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/product/product-img3.png"
                          alt=""
                          className="flex-shrink-0 me-12 radius-8 me-12"
                        />
                        <div className="flex-grow-1">
                          <h6 className="text-md mb-0 fw-normal">Woman Dresses</h6>
                          <span className="text-sm text-secondary-light fw-normal">
                            Fashion
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>$300.00</td>
                    <td>$50.00</td>
                    <td>1500</td>
                    <td className="text-center">
                      <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                        70
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/product/product-img4.png"
                          alt=""
                          className="flex-shrink-0 me-12 radius-8 me-12"
                        />
                        <div className="flex-grow-1">
                          <h6 className="text-md mb-0 fw-normal">Smart Watch</h6>
                          <span className="text-sm text-secondary-light fw-normal">
                            Fashion
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>$400.00</td>
                    <td>$50.00</td>
                    <td>700</td>
                    <td className="text-center">
                      <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                        70
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/product/product-img5.png"
                          alt=""
                          className="flex-shrink-0 me-12 radius-8 me-12"
                        />
                        <div className="flex-grow-1">
                          <h6 className="text-md mb-0 fw-normal">Hoodie Rose</h6>
                          <span className="text-sm text-secondary-light fw-normal">
                            Fashion
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>$300.00</td>
                    <td>25%</td>
                    <td>500</td>
                    <td className="text-center">
                      <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                        70
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-6">
        <div className="card h-100">
          <div className="card-body p-24">
            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
              <h6 className="mb-2 fw-bold text-lg mb-0">Stock Report</h6>
              <a
                href="javascript:void(0)"
                className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
              >
                View All
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  className="icon"
                />
              </a>
            </div>
            <div className="table-responsive scroll-sm">
              <table className="table bordered-table mb-0">
                <thead>
                  <tr>
                    <th scope="col">Items</th>
                    <th scope="col">Price</th>
                    <th scope="col">
                      <div className="max-w-112 mx-auto">
                        <span>Stock</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nike Air Shoes</td>
                    <td>$500.00</td>
                    <td>
                      <div className="max-w-112 mx-auto">
                        <div className="w-100">
                          <div
                            className="progress progress-sm rounded-pill"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-primary-600 rounded-pill"
                              style={{ width: "0%" }}
                            />
                          </div>
                        </div>
                        <span className="mt-12 text-secondary-light text-sm fw-medium">
                          Out of Stock
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Nike Air Shoes</td>
                    <td>$300.00</td>
                    <td>
                      <div className="max-w-112 mx-auto">
                        <div className="w-100">
                          <div
                            className="progress progress-sm rounded-pill"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-danger-main rounded-pill"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </div>
                        <span className="mt-12 text-secondary-light text-sm fw-medium">
                          18 Low Stock
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Nike Air Shoes</td>
                    <td>$500.00</td>
                    <td>
                      <div className="max-w-112 mx-auto">
                        <div className="w-100">
                          <div
                            className="progress progress-sm rounded-pill"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-success-main rounded-pill"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                        <span className="mt-12 text-secondary-light text-sm fw-medium">
                          80 High Stock
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Nike Air Shoes</td>
                    <td>$300.00</td>
                    <td>
                      <div className="max-w-112 mx-auto">
                        <div className="w-100">
                          <div
                            className="progress progress-sm rounded-pill"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-success-main rounded-pill"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </div>
                        <span className="mt-12 text-secondary-light text-sm fw-medium">
                          50 High Stock
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Nike Air Shoes</td>
                    <td>$150.00</td>
                    <td>
                      <div className="max-w-112 mx-auto">
                        <div className="w-100">
                          <div
                            className="progress progress-sm rounded-pill"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-success-main rounded-pill"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </div>
                        <span className="mt-12 text-secondary-light text-sm fw-medium">
                          70 High Stock
                        </span>
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


  )
}

export default DashBoardLayerThree