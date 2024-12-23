import React from "react";
import UnitCountEight from "./child/UnitCountEight";
import BalanceStatistic from "./child/BalanceStatistic";

const DashBoardLayerEleven = () => {
  return (
    <>
      {/* UnitCountEight */}
      <UnitCountEight />

      <div className='mt-24'>
        <div className='row gy-4'>
          <div className='col-xl-8'>
            <div className='row gy-4'>
              {/* BalanceStatistic */}
              <BalanceStatistic />

              <div className='col-md-6'>
                <div className='card radius-16 h-100'>
                  <div className='card-header'>
                    <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                      <h6 className='mb-2 fw-bold text-lg mb-0'>
                        Earning Categories
                      </h6>
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
                  </div>
                  <div className='card-body'>
                    <div className='d-flex flex-column gap-20'>
                      <div className='d-flex align-items-center justify-content-between gap-3'>
                        <div className='d-flex align-items-center w-100 gap-12'>
                          <span className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-primary-100'>
                            <img
                              src='assets/images/home-eleven/icons/earn-cat-icon1.svg'
                              alt=''
                              className=''
                            />
                          </span>
                          <div className='flex-grow-1'>
                            <h6 className='text-sm mb-0'>Digital Assets</h6>
                            <span className='text-xs text-secondary-light fw-medium'>
                              $50 / from $1000
                            </span>
                          </div>
                        </div>
                        <div className='d-flex align-items-center gap-2 w-100'>
                          <div className='w-100 max-w-66 ms-auto'>
                            <div
                              className='progress progress-sm rounded-pill'
                              role='progressbar'
                              aria-label='Success example'
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className='progress-bar bg-primary-600 rounded-pill'
                                style={{ width: "80%" }}
                              />
                            </div>
                          </div>
                          <span className='text-secondary-light font-xs fw-semibold'>
                            80%
                          </span>
                        </div>
                      </div>
                      <div className='d-flex align-items-center justify-content-between gap-3'>
                        <div className='d-flex align-items-center w-100 gap-12'>
                          <span className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-danger-100'>
                            <img
                              src='assets/images/home-eleven/icons/earn-cat-icon2.svg'
                              alt=''
                              className=''
                            />
                          </span>
                          <div className='flex-grow-1'>
                            <h6 className='text-sm mb-0'>Side Project</h6>
                            <span className='text-xs text-secondary-light fw-medium'>
                              $50 / from $1000
                            </span>
                          </div>
                        </div>
                        <div className='d-flex align-items-center gap-2 w-100'>
                          <div className='w-100 max-w-66 ms-auto'>
                            <div
                              className='progress progress-sm rounded-pill'
                              role='progressbar'
                              aria-label='Success example'
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className='progress-bar bg-orange rounded-pill'
                                style={{ width: "60%" }}
                              />
                            </div>
                          </div>
                          <span className='text-secondary-light font-xs fw-semibold'>
                            60%
                          </span>
                        </div>
                      </div>
                      <div className='d-flex align-items-center justify-content-between gap-3'>
                        <div className='d-flex align-items-center w-100 gap-12'>
                          <span className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-warning-200'>
                            <img
                              src='assets/images/home-eleven/icons/earn-cat-icon3.svg'
                              alt=''
                              className=''
                            />
                          </span>
                          <div className='flex-grow-1'>
                            <h6 className='text-sm mb-0'>Investment</h6>
                            <span className='text-xs text-secondary-light fw-medium'>
                              $50 / from $1000
                            </span>
                          </div>
                        </div>
                        <div className='d-flex align-items-center gap-2 w-100'>
                          <div className='w-100 max-w-66 ms-auto'>
                            <div
                              className='progress progress-sm rounded-pill'
                              role='progressbar'
                              aria-label='Success example'
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className='progress-bar bg-yellow rounded-pill'
                                style={{ width: "49%" }}
                              />
                            </div>
                          </div>
                          <span className='text-secondary-light font-xs fw-semibold'>
                            49%
                          </span>
                        </div>
                      </div>
                      <div className='d-flex align-items-center justify-content-between gap-3'>
                        <div className='d-flex align-items-center w-100 gap-12'>
                          <span className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-success-200'>
                            <img
                              src='assets/images/home-eleven/icons/earn-cat-icon4.svg'
                              alt=''
                              className=''
                            />
                          </span>
                          <div className='flex-grow-1'>
                            <h6 className='text-sm mb-0'>Working Hard</h6>
                            <span className='text-xs text-secondary-light fw-medium'>
                              $50 / from $1000
                            </span>
                          </div>
                        </div>
                        <div className='d-flex align-items-center gap-2 w-100'>
                          <div className='w-100 max-w-66 ms-auto'>
                            <div
                              className='progress progress-sm rounded-pill'
                              role='progressbar'
                              aria-label='Success example'
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className='progress-bar bg-success-main rounded-pill'
                                style={{ width: "100%" }}
                              />
                            </div>
                          </div>
                          <span className='text-secondary-light font-xs fw-semibold'>
                            100%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card radius-16 h-100'>
                  <div className='card-header'>
                    <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                      <h6 className='mb-2 fw-bold text-lg mb-0'>
                        Expense Statistics
                      </h6>
                      <select className='form-select form-select-sm w-auto bg-base border text-secondary-light'>
                        <option>Today</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Yearly</option>
                      </select>
                    </div>
                  </div>
                  <div className='card-body'>
                    <div
                      id='expenseStatistics'
                      className='apexcharts-tooltip-z-none d-flex justify-content-center'
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card radius-16'>
                  <div className='card-header'>
                    <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                      <h6 className='mb-2 fw-bold text-lg mb-0'>
                        Payment History
                      </h6>
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
                  </div>
                  <div className='card-body'>
                    <div className='d-flex align-items-center justify-content-between pb-10 mb-10 border-bottom border-neutral-200'>
                      <div className=''>
                        <h6 className='text-md mb-0'>Digital Assets</h6>
                        <span className='text-xs text-secondary-light fw-medium'>
                          18 Nov 2024
                        </span>
                      </div>
                      <div className=''>
                        <h6 className='text-sm mb-1'>$450.00</h6>
                        <span className='text-xs fw-medium text-success-600 bg-success-100 rounded-pill px-3'>
                          Paid
                        </span>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between pb-10 mb-10 border-bottom border-neutral-200'>
                      <div className=''>
                        <h6 className='text-md mb-0'>Electricity</h6>
                        <span className='text-xs text-secondary-light fw-medium'>
                          18 Nov 2024
                        </span>
                      </div>
                      <div className=''>
                        <h6 className='text-sm mb-1'>$150.00</h6>
                        <span className='text-xs fw-medium text-warning-600 bg-warning-100 rounded-pill px-3'>
                          Due
                        </span>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between pb-10 mb-10 border-bottom border-neutral-200'>
                      <div className=''>
                        <h6 className='text-md mb-0'>Internet Bill</h6>
                        <span className='text-xs text-secondary-light fw-medium'>
                          18 Nov 2024
                        </span>
                      </div>
                      <div className=''>
                        <h6 className='text-sm mb-1'>$450.00</h6>
                        <span className='text-xs fw-medium text-danger-600 bg-danger-100 rounded-pill px-3'>
                          Cancel
                        </span>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between pb-10 mb-10 border-bottom border-neutral-200'>
                      <div className=''>
                        <h6 className='text-md mb-0'>House rent </h6>
                        <span className='text-xs text-secondary-light fw-medium'>
                          18 Nov 2024
                        </span>
                      </div>
                      <div className=''>
                        <h6 className='text-sm mb-1'>$450.00</h6>
                        <span className='text-xs fw-medium text-success-600 bg-success-100 rounded-pill px-3'>
                          Paid
                        </span>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className=''>
                        <h6 className='text-md mb-0'>Office rent</h6>
                        <span className='text-xs text-secondary-light fw-medium'>
                          18 Nov 2024
                        </span>
                      </div>
                      <div className=''>
                        <h6 className='text-sm mb-1'>$450.00</h6>
                        <span className='text-xs fw-medium text-success-600 bg-success-100 rounded-pill px-3'>
                          Paid
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card radius-16'>
                  <div className='card-header'>
                    <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                      <h6 className='mb-2 fw-bold text-lg mb-0'>
                        Monthly Expense Breakdown
                      </h6>
                    </div>
                  </div>
                  <div className='card-body'>
                    <div className='mb-3 d-flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={464}
                        height={12}
                        viewBox='0 0 464 12'
                        fill='none'
                      >
                        <g clipPath='url(#clip0_6886_52892)'>
                          <rect width={464} height={12} rx={6} fill='#6B7280' />
                          <rect width={464} height={12} rx={6} fill='#06B6D4' />
                          <rect width={418} height={12} rx={6} fill='#22C55E' />
                          <rect width={365} height={12} rx={6} fill='#84CC16' />
                          <rect width={295} height={12} rx={6} fill='#EAB308' />
                          <rect width={210} height={12} rx={6} fill='#F59E0B' />
                          <rect width={111} height={12} rx={6} fill='#F97316' />
                        </g>
                        <defs>
                          <clipPath id='clip0_6886_52892'>
                            <rect width={464} height={12} rx={6} fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className='d-flex align-items-center justify-content-between p-12 bg-neutral-100'>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='w-12-px h-8-px bg-orange rounded-pill' />
                        <span className='text-secondary-light'>Healthcare</span>
                      </div>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='text-secondary-light'>$1500</span>
                        <span className='text-primary-light fw-semibold'>
                          40%
                        </span>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between p-12 bg-base'>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='w-12-px h-8-px bg-warning-600 rounded-pill' />
                        <span className='text-secondary-light'>Education</span>
                      </div>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='text-secondary-light'>$1500</span>
                        <span className='text-primary-light fw-semibold'>
                          40%
                        </span>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between p-12 bg-neutral-100'>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='w-12-px h-8-px bg-warning-600 rounded-pill' />
                        <span className='text-secondary-light'>Clothes</span>
                      </div>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='text-secondary-light'>$1500</span>
                        <span className='text-primary-light fw-semibold'>
                          40%
                        </span>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between p-12 bg-base'>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='w-12-px h-8-px bg-success-600 rounded-pill' />
                        <span className='text-secondary-light'>Food</span>
                      </div>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='text-secondary-light'>$1500</span>
                        <span className='text-primary-light fw-semibold'>
                          30%
                        </span>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between p-12 bg-neutral-100'>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='w-12-px h-8-px bg-success-600 rounded-pill' />
                        <span className='text-secondary-light'>Transport</span>
                      </div>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='text-secondary-light'>$1500</span>
                        <span className='text-primary-light fw-semibold'>
                          20%
                        </span>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between p-12 bg-base'>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='w-12-px h-8-px bg-cyan-600 rounded-pill' />
                        <span className='text-secondary-light'>Pets</span>
                      </div>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='text-secondary-light'>$1500</span>
                        <span className='text-primary-light fw-semibold'>
                          20%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar start */}
          <div className='col-xl-4'>
            <div className='card radius-16'>
              <div className='card-header'>
                <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                  <h6 className='mb-2 fw-bold text-lg mb-0'>Quick Transfer</h6>
                </div>
              </div>
              <div className='card-body p-0'>
                <div className='p-20'>
                  <div className='position-relative z-1 py-32 text-center px-3'>
                    <img
                      src='assets/images/home-eleven/bg/bg-orange-gradient.png'
                      alt=''
                      className='position-absolute top-0 start-0 w-100 h-100 z-n1'
                    />
                    <h3 className='text-white'>$500.00</h3>
                    <span className='text-white'>Your Balance</span>
                  </div>
                </div>
                <div className='px-24 bg-neutral-100 border-bottom-0 py-20 dark-bg-neutral-200'>
                  <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                    <h6 className='mb-2 fw-bold text-lg mb-0'>Contacts</h6>
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
                </div>
                <div className='py-16 px-24'>
                  <div className='officer-slider'>
                    <div className='officer-slider__item d-flex flex-column text-center align-items-center justify-content-center'>
                      <div className='officer-slider__thumb w-56-px h-56-px rounded-circle overflow-hidden flex-shrink-0 mx-8'>
                        <img
                          src='assets/images/home-eleven/officer-img1.png'
                          alt=''
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                      <div className='officer-slider__content mt-24 min-w-max-content'>
                        <h6 className='mb-0 text-xl'>Mr. Bin</h6>
                        <span className='text-sm text-secondary-light'>
                          Insurance officer
                        </span>
                      </div>
                    </div>
                    <div className='officer-slider__item d-flex flex-column text-center align-items-center justify-content-center'>
                      <div className='officer-slider__thumb w-56-px h-56-px rounded-circle overflow-hidden flex-shrink-0 mx-8'>
                        <img
                          src='assets/images/home-eleven/officer-img2.png'
                          alt=''
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                      <div className='officer-slider__content mt-24 min-w-max-content'>
                        <h6 className='mb-0 text-xl'>Mr. Robiul</h6>
                        <span className='text-sm text-secondary-light'>
                          Insurance officer
                        </span>
                      </div>
                    </div>
                    <div className='officer-slider__item d-flex flex-column text-center align-items-center justify-content-center'>
                      <div className='officer-slider__thumb w-56-px h-56-px rounded-circle overflow-hidden flex-shrink-0 mx-8'>
                        <img
                          src='assets/images/home-eleven/officer-img3.png'
                          alt=''
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                      <div className='officer-slider__content mt-24 min-w-max-content'>
                        <h6 className='mb-0 text-xl'>Mr. Deo</h6>
                        <span className='text-sm text-secondary-light'>
                          Insurance officer
                        </span>
                      </div>
                    </div>
                    <div className='officer-slider__item d-flex flex-column text-center align-items-center justify-content-center'>
                      <div className='officer-slider__thumb w-56-px h-56-px rounded-circle overflow-hidden flex-shrink-0 mx-8'>
                        <img
                          src='assets/images/home-eleven/officer-img4.png'
                          alt=''
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                      <div className='officer-slider__content mt-24 min-w-max-content'>
                        <h6 className='mb-0 text-xl'>Mr. Riad</h6>
                        <span className='text-sm text-secondary-light'>
                          Insurance officer
                        </span>
                      </div>
                    </div>
                    <div className='officer-slider__item d-flex flex-column text-center align-items-center justify-content-center'>
                      <div className='officer-slider__thumb w-56-px h-56-px rounded-circle overflow-hidden flex-shrink-0 mx-8'>
                        <img
                          src='assets/images/home-eleven/officer-img5.png'
                          alt=''
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                      <div className='officer-slider__content mt-24 min-w-max-content'>
                        <h6 className='mb-0 text-xl'>Mr. Alex</h6>
                        <span className='text-sm text-secondary-light'>
                          Insurance officer
                        </span>
                      </div>
                    </div>
                    <div className='officer-slider__item d-flex flex-column text-center align-items-center justify-content-center'>
                      <div className='officer-slider__thumb w-56-px h-56-px rounded-circle overflow-hidden flex-shrink-0 mx-8'>
                        <img
                          src='assets/images/home-eleven/officer-img2.png'
                          alt=''
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                      <div className='officer-slider__content mt-24 min-w-max-content'>
                        <h6 className='mb-0 text-xl'>Mr. John</h6>
                        <span className='text-sm text-secondary-light'>
                          Insurance officer
                        </span>
                      </div>
                    </div>
                  </div>
                  <form action='#'>
                    <div className=''>
                      <label
                        htmlFor='message'
                        className='d-block fw-semibold text-primary-light mb-8'
                      >
                        Write Short Description
                      </label>
                      <textarea
                        className='form-control'
                        id='message'
                        rows={4}
                        cols={50}
                        placeholder='Enter a description...'
                        defaultValue={""}
                      />
                    </div>
                    <div className='mt-16'>
                      <label
                        htmlFor='Amount'
                        className='d-block fw-semibold text-primary-light mb-8'
                      >
                        Amount
                      </label>
                      <div className='d-flex gap-16'>
                        <input
                          type='text'
                          id='Amount'
                          className='form-control form-control-lg'
                          placeholder='Ex: $200'
                        />
                        <button
                          className='btn btn-primary-600 flex-shrink-0 d-flex align-items-center gap-2 px-32'
                          type='submit'
                        >
                          Send <i className='ri-send-plane-fill' />{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='card radius-16 mt-24'>
              <div className='card-header'>
                <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                  <h6 className='mb-2 fw-bold text-lg mb-0'>Investment</h6>
                  <select className='form-select form-select-sm w-auto bg-base border text-secondary-light'>
                    <option>Today</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
              </div>
              <div className='card-body py-20'>
                <p className='text-center text-secondary-light d-flex align-items-center gap-8 justify-content-center'>
                  Total Investment:{" "}
                  <span className='fw-semibold text-primary-light'>$500</span>{" "}
                </p>
                <div className='mt-40 mb-24 text-center pe-110 position-relative max-w-288-px mx-auto'>
                  <div className='w-170-px h-170-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center border border-white border-width-2-px'>
                    <img
                      src='assets/images/home-eleven/bg/radial-bg1.png'
                      alt=''
                      className='position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover'
                    />
                    <h5 className='text-white'> 60% </h5>
                  </div>
                  <div className='w-144-px h-144-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center border border-white border-width-3-px position-absolute top-0 end-0 mt--36'>
                    <img
                      src='assets/images/home-eleven/bg/radial-bg2.png'
                      alt=''
                      className='position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover'
                    />
                    <h5 className='text-white'> 30% </h5>
                  </div>
                  <div className='w-110-px h-110-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center border border-white border-width-3-px position-absolute bottom-0 start-50 translate-middle-x ms-48'>
                    <img
                      src='assets/images/home-eleven/bg/radial-bg3.png'
                      alt=''
                      className='position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover'
                    />
                    <h5 className='text-white'> 10% </h5>
                  </div>
                </div>
                <div className='d-flex align-items-center flex-wrap gap-24 justify-content-between'>
                  <div className='d-flex flex-column align-items-start'>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='w-12-px h-12-px rounded-pill bg-primary-600' />
                      <span className='text-secondary-light text-sm fw-normal'>
                        Net Income
                      </span>
                    </div>
                    <h6 className='text-primary-light fw-semibold mb-0 mt-4 text-lg'>
                      $50,000
                    </h6>
                  </div>
                  <div className='d-flex flex-column align-items-start'>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='w-12-px h-12-px rounded-pill bg-purple' />
                      <span className='text-secondary-light text-sm fw-normal'>
                        Real State
                      </span>
                    </div>
                    <h6 className='text-primary-light fw-semibold mb-0 mt-4 text-lg'>
                      $150
                    </h6>
                  </div>
                  <div className='d-flex flex-column align-items-start'>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='w-12-px h-12-px rounded-pill bg-success-600' />
                      <span className='text-secondary-light text-sm fw-normal'>
                        Business
                      </span>
                    </div>
                    <h6 className='text-primary-light fw-semibold mb-0 mt-4 text-lg'>
                      $100
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar end */}
        </div>
      </div>
      {/* Table Start */}
      <div className='card radius-16 mt-24'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Payment History</h6>
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
        </div>
        <div className='card-body'>
          <div className='table-responsive scroll-sm'>
            <table className='table bordered-table sm-table mb-0'>
              <thead>
                <tr>
                  <th scope='col'>Users </th>
                  <th scope='col' className='text-center'>
                    Email
                  </th>
                  <th scope='col' className='text-center'>
                    Transaction ID
                  </th>
                  <th scope='col' className='text-center'>
                    Amount
                  </th>
                  <th scope='col' className='text-center'>
                    Payment Method
                  </th>
                  <th scope='col' className='text-center'>
                    Date
                  </th>
                  <th scope='col' className='text-center'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=''>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user1.png'
                        alt=''
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-medium'>
                          Dianne Russell
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className='text-center'>osgoodwy@gmail.com</td>
                  <td className='text-center'>9562415412263</td>
                  <td className='text-center'>$29.00</td>
                  <td className='text-center'>Bank</td>
                  <td className='text-center'>24 Jun 2024</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className=''>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user2.png'
                        alt=''
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-medium'>Wade Warren</h6>
                      </div>
                    </div>
                  </td>
                  <td className='text-center'>redaniel@gmail.com</td>
                  <td className='text-center'>9562415412263</td>
                  <td className='text-center'>$29.00</td>
                  <td className='text-center'>Bank</td>
                  <td className='text-center'>24 Jun 2024</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className=''>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user3.png'
                        alt=''
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-medium'>
                          Albert Flores
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className='text-center'>seema@gmail.com</td>
                  <td className='text-center'>9562415412263</td>
                  <td className='text-center'>$29.00</td>
                  <td className='text-center'>Bank</td>
                  <td className='text-center'>24 Jun 2024</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className=''>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user4.png'
                        alt=''
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-medium'>
                          Bessie Cooper{" "}
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className='text-center'>hamli@gmail.com</td>
                  <td className='text-center'>9562415412263</td>
                  <td className='text-center'>$29.00</td>
                  <td className='text-center'>Bank</td>
                  <td className='text-center'>24 Jun 2024</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className=''>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user5.png'
                        alt=''
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-medium'>Arlene McCoy</h6>
                      </div>
                    </div>
                  </td>
                  <td className='text-center'>zitka@mail.ru</td>
                  <td className='text-center'>9562415412263</td>
                  <td className='text-center'>$29.00</td>
                  <td className='text-center'>Bank</td>
                  <td className='text-center'>24 Jun 2024</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Table End */}
    </>
  );
};

export default DashBoardLayerEleven;
