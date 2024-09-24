import React from 'react'
import UnitCountThree from './child/UnitCountThree'
import CoinAnalyticsOne from './child/CoinAnalyticsOne'
import CoinAnalyticsTwo from './child/CoinAnalyticsTwo'
import MyOrdersOne from './child/MyOrdersOne'
import RecentTransactionOne from './child/RecentTransactionOne'
import MyCardsOne from './child/MyCardsOne'
import TotalBalanceOne from './child/TotalBalanceOne'

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


              {/* MyCardsOne */}
              <MyCardsOne />

              {/* TotalBalanceOne */}
              <TotalBalanceOne />

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