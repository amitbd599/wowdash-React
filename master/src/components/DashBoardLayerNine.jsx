import React from "react";
import UpgradeYourPlan from "./child/UpgradeYourPlan";
import RevenueStatisticOne from "./child/RevenueStatisticOne";
import SupportTracker from "./child/SupportTracker";
import AverageDailySales from "./child/AverageDailySales";
import TransactionsTwo from "./child/TransactionsTwo";
import SalesByCountries from "./child/SalesByCountries";
import SourceVisitors from "./child/SourceVisitors";

const DashBoardLayerNine = () => {
  return (
    <div className='row gy-4'>
      {/* UpgradeYourPlan */}
      <UpgradeYourPlan />

      {/* RevenueStatisticOne */}
      <RevenueStatisticOne />

      {/* SupportTracker */}
      <SupportTracker />

      {/* AverageDailySales */}
      <AverageDailySales />

      {/* TransactionsTwo */}
      <TransactionsTwo />

      {/* SalesByCountries */}
      <SalesByCountries />

      {/* SourceVisitors */}
      <SourceVisitors />

      <div className='col-xxl-4'>
        <div className='card h-100'>
          <div className='card-body p-24'>
            <div className='d-flex align-items-start flex-column gap-2'>
              <h6 className='mb-2 fw-bold text-lg'>Monthly Campaign State</h6>
              <span className='text-secondary-light'>7.2k Social visitors</span>
            </div>
            <div className='d-flex flex-column gap-32 mt-32'>
              <div className='d-flex align-items-center justify-content-between gap-3'>
                <div className='d-flex align-items-center gap-3'>
                  <div className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-lilac-100 flex-shrink-0'>
                    <img
                      src='assets/images/home-nine/socials1.png'
                      alt=''
                      className=''
                    />
                  </div>
                  <div className='flex-grow-1'>
                    <h6 className='text-md mb-0 fw-semibold'>Email</h6>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-8'>
                  <span className='text-secondary-light text-md fw-medium'>
                    6,200
                  </span>
                  <span className='text-success-600 text-md fw-medium'>
                    0.3%
                  </span>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between gap-3'>
                <div className='d-flex align-items-center gap-3'>
                  <div className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-warning-100 flex-shrink-0'>
                    <img
                      src='assets/images/home-nine/socials2.png'
                      alt=''
                      className=''
                    />
                  </div>
                  <div className='flex-grow-1'>
                    <h6 className='text-md mb-0 fw-semibold'>Clicked</h6>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-8'>
                  <span className='text-secondary-light text-md fw-medium'>
                    Clicked
                  </span>
                  <span className='text-danger-600 text-md fw-medium'>
                    1.3%
                  </span>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between gap-3'>
                <div className='d-flex align-items-center gap-3'>
                  <div className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-info-100 flex-shrink-0'>
                    <img
                      src='assets/images/home-nine/socials3.png'
                      alt=''
                      className=''
                    />
                  </div>
                  <div className='flex-grow-1'>
                    <h6 className='text-md mb-0 fw-semibold'>Subscribe</h6>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-8'>
                  <span className='text-secondary-light text-md fw-medium'>
                    5,175
                  </span>
                  <span className='text-success-600 text-md fw-medium'>
                    0.3%
                  </span>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between gap-3'>
                <div className='d-flex align-items-center gap-3'>
                  <div className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-success-100 flex-shrink-0'>
                    <img
                      src='assets/images/home-nine/socials4.png'
                      alt=''
                      className=''
                    />
                  </div>
                  <div className='flex-grow-1'>
                    <h6 className='text-md mb-0 fw-semibold'>Complaints </h6>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-8'>
                  <span className='text-secondary-light text-md fw-medium'>
                    3,780
                  </span>
                  <span className='text-success-600 text-md fw-medium'>
                    0.3%
                  </span>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between gap-3'>
                <div className='d-flex align-items-center gap-3'>
                  <div className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-danger-100 flex-shrink-0'>
                    <img
                      src='assets/images/home-nine/socials5.png'
                      alt=''
                      className=''
                    />
                  </div>
                  <div className='flex-grow-1'>
                    <h6 className='text-md mb-0 fw-semibold'>Unsubscribe</h6>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-8'>
                  <span className='text-secondary-light text-md fw-medium'>
                    4,120
                  </span>
                  <span className='text-success-600 text-md fw-medium'>
                    0.3%
                  </span>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between gap-3'>
                <div className='d-flex align-items-center gap-3'>
                  <div className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-info-100 flex-shrink-0'>
                    <img
                      src='assets/images/home-nine/socials3.png'
                      alt=''
                      className=''
                    />
                  </div>
                  <div className='flex-grow-1'>
                    <h6 className='text-md mb-0 fw-semibold'>Subscribe</h6>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-8'>
                  <span className='text-secondary-light text-md fw-medium'>
                    5,175
                  </span>
                  <span className='text-success-600 text-md fw-medium'>
                    0.3%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xxl-8'>
        <div className='card h-100'>
          <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between'>
            <h6 className='text-lg fw-semibold mb-0'>Recent Activity</h6>
            <a
              href='javascript:void(0)'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              View All
              <iconify-icon
                icon='solar:alt-arrow-right-linear'
                className='icon'
              />
            </a>
          </div>
          <div className='card-body p-0'>
            <div className='table-responsive scroll-sm'>
              <table className='table bordered-table mb-0 rounded-0 border-0'>
                <thead>
                  <tr>
                    <th scope='col' className='bg-transparent rounded-0'>
                      Customer
                    </th>
                    <th scope='col' className='bg-transparent rounded-0'>
                      ID
                    </th>
                    <th scope='col' className='bg-transparent rounded-0'>
                      Retained
                    </th>
                    <th scope='col' className='bg-transparent rounded-0'>
                      Amount
                    </th>
                    <th scope='col' className='bg-transparent rounded-0'>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/user-grid/user-grid-img1.png'
                          alt=''
                          className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0'>Kristin Watson</h6>
                          <span className='text-sm text-secondary-light fw-medium'>
                            ulfaha@mail.ru
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>#63254</td>
                    <td>5 min ago</td>
                    <td>$12,408.12</td>
                    <td>
                      {" "}
                      <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                        Member
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/user-grid/user-grid-img2.png'
                          alt=''
                          className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0'>Theresa Webb</h6>
                          <span className='text-sm text-secondary-light fw-medium'>
                            joie@gmail.com
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>#63254</td>
                    <td>12 min ago</td>
                    <td>$12,408.12</td>
                    <td>
                      {" "}
                      <span className='bg-lilac-100 text-lilac-600 px-10 py-4 radius-8 fw-medium text-sm'>
                        New Customer
                      </span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/user-grid/user-grid-img3.png'
                          alt=''
                          className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0'>Brooklyn Simmons</h6>
                          <span className='text-sm text-secondary-light fw-medium'>
                            warn@mail.ru
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>#63254</td>
                    <td>15 min ago</td>
                    <td>$12,408.12</td>
                    <td>
                      {" "}
                      <span className='bg-warning-focus text-warning-main px-10 py-4 radius-8 fw-medium text-sm'>
                        Signed Up{" "}
                      </span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/user-grid/user-grid-img4.png'
                          alt=''
                          className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0'>Robert Fox</h6>
                          <span className='text-sm text-secondary-light fw-medium'>
                            fellora@mail.ru
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>#63254</td>
                    <td>17 min ago</td>
                    <td>$12,408.12</td>
                    <td>
                      {" "}
                      <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                        Member
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/user-grid/user-grid-img5.png'
                          alt=''
                          className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0'>Jane Cooper</h6>
                          <span className='text-sm text-secondary-light fw-medium'>
                            zitka@mail.ru
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>#63254</td>
                    <td>25 min ago</td>
                    <td>$12,408.12</td>
                    <td>
                      {" "}
                      <span className='bg-warning-focus text-warning-main px-10 py-4 radius-8 fw-medium text-sm'>
                        Signed Up{" "}
                      </span>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayerNine;
