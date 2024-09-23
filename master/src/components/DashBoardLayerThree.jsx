import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import RevenueReportOne from './child/RevenueReportOne'
import CustomersStatisticsOne from './child/CustomersStatisticsOne'
import RecentOrdersOne from './child/RecentOrdersOne'
import TransactionsOne from './child/TransactionsOne'
import RecentOrdersTwo from './child/RecentOrdersTwo'

const DashBoardLayerThree = () => {

  return (
    <div className="row gy-4">
      {/* RevenueReportOne */}
      <RevenueReportOne />

      {/* CustomersStatisticsOne */}
      <CustomersStatisticsOne />

      {/* RecentOrdersOne */}
      <RecentOrdersOne />

      {/* TransactionsOne */}
      <TransactionsOne />

      {/* RecentOrdersTwo */}
      <RecentOrdersTwo />



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