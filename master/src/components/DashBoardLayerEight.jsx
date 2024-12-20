import React from "react";
import UnitCountSix from "./child/UnitCountSix";
import EarningStatistic from "./child/EarningStatistic";

const DashBoardLayerEight = () => {
  return (
    <>
      <div className='row gy-4'>
        <div className='col-xxxl-9'>
          <div className='row gy-4'>
            {/* UnitCountSix */}
            <UnitCountSix />
            {/* Earning Statistic */}
            <EarningStatistic />

            {/* Earning Statistic */}
            {/* Patient Visited by Depertment */}
            <div className='col-xxl-6'>
              <div className='card h-100'>
                <div className='card-header'>
                  <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                    <h6 className='mb-2 fw-bold text-lg mb-0'>
                      Patient Visited by Depertment
                    </h6>
                  </div>
                </div>
                <div className='card-body p-24 d-flex align-items-center gap-16'>
                  <div id='radialMultipleBar' />
                  <ul className='d-flex flex-column gap-12'>
                    <li>
                      <span className='text-lg'>
                        Cardiology:{" "}
                        <span className='text-primary-600 fw-semibold'>
                          80%
                        </span>{" "}
                      </span>
                    </li>
                    <li>
                      <span className='text-lg'>
                        Psychiatry:{" "}
                        <span className='text-warning-600 fw-semibold'>
                          40%
                        </span>{" "}
                      </span>
                    </li>
                    <li>
                      <span className='text-lg'>
                        Pediatrics:{" "}
                        <span className='text-success-600 fw-semibold'>
                          10%
                        </span>{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Patient Visited by Depertment */}
            {/* Patient Visit By Gender */}
            <div className='col-xxl-6'>
              <div className='card h-100'>
                <div className='card-header'>
                  <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                    <h6 className='mb-2 fw-bold text-lg mb-0'>
                      Patient Visit By Gender
                    </h6>
                    <select className='form-select form-select-sm w-auto bg-base border-0 text-secondary-light'>
                      <option>This Month</option>
                      <option>This Week</option>
                      <option>This Year</option>
                    </select>
                  </div>
                </div>
                <div className='card-body p-24'>
                  <ul className='d-flex flex-wrap align-items-center justify-content-center my-3 gap-3'>
                    <li className='d-flex align-items-center gap-2'>
                      <span className='w-12-px h-8-px rounded-pill bg-warning-600' />
                      <span className='text-secondary-light text-sm fw-semibold'>
                        Male:
                        <span className='text-primary-light fw-bold'>200</span>
                      </span>
                    </li>
                    <li className='d-flex align-items-center gap-2'>
                      <span className='w-12-px h-8-px rounded-pill bg-success-600' />
                      <span className='text-secondary-light text-sm fw-semibold'>
                        Female:
                        <span className='text-primary-light fw-bold'> 450</span>
                      </span>
                    </li>
                  </ul>
                  <div
                    id='paymentStatusChart'
                    className='margin-16-minus y-value-left'
                  />
                </div>
              </div>
            </div>
            {/* Patient Visit By Gender */}
            {/* Top performance Start */}
            <div className='col-xxl-4'>
              <div className='card'>
                <div className='card-header border-bottom'>
                  <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                    <h6 className='mb-2 fw-bold text-lg mb-0'>Doctors List</h6>
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
                  <div className='d-flex flex-column gap-24'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/home-eight/doctor-img1.png'
                          alt=''
                          className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0'>Dr. Davis</h6>
                          <span className='text-sm text-secondary-light fw-medium'>
                            Cardiology
                          </span>
                        </div>
                      </div>
                      <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                        Available
                      </span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/home-eight/doctor-img2.png'
                          alt=''
                          className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0'>Dr. Riead</h6>
                          <span className='text-sm text-secondary-light fw-medium'>
                            Orthopedics
                          </span>
                        </div>
                      </div>
                      <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                        Available
                      </span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/home-eight/doctor-img3.png'
                          alt=''
                          className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0'>Albert Flores</h6>
                          <span className='text-sm text-secondary-light fw-medium'>
                            Ophthalmology
                          </span>
                        </div>
                      </div>
                      <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
                        Not Available
                      </span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/home-eight/doctor-img4.png'
                          alt=''
                          className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0'>Dr. Smith</h6>
                          <span className='text-sm text-secondary-light fw-medium'>
                            Cardiology
                          </span>
                        </div>
                      </div>
                      <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                        Available
                      </span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/home-eight/doctor-img6.png'
                          alt=''
                          className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0'>Dr. Johnson</h6>
                          <span className='text-sm text-secondary-light fw-medium'>
                            Cardiology
                          </span>
                        </div>
                      </div>
                      <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
                        Not Available
                      </span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/home-eight/doctor-img5.png'
                          alt=''
                          className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0'>Dr. Martinez</h6>
                          <span className='text-sm text-secondary-light fw-medium'>
                            Cardiology
                          </span>
                        </div>
                      </div>
                      <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Top performance End */}
            <div className='col-xxl-8'>
              <div className='card h-100'>
                <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between'>
                  <h6 className='text-lg fw-semibold mb-0'>
                    Latest Appointments
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
                <div className='card-body p-0'>
                  <div className='table-responsive scroll-sm'>
                    <table className='table bordered-table mb-0 rounded-0 border-0'>
                      <thead>
                        <tr>
                          <th scope='col' className='bg-transparent rounded-0'>
                            Name
                          </th>
                          <th scope='col' className='bg-transparent rounded-0'>
                            ID
                          </th>
                          <th scope='col' className='bg-transparent rounded-0'>
                            Date
                          </th>
                          <th scope='col' className='bg-transparent rounded-0'>
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>General Checkup</td>
                          <td>#63254</td>
                          <td>27 Mar 2024</td>
                          <td>
                            {" "}
                            <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>Blood test results </td>
                          <td>3.053 ETH</td>
                          <td>2h 5m 40s</td>
                          <td>
                            {" "}
                            <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
                              Canceled
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>Heart Checkup</td>
                          <td>3.053 ETH</td>
                          <td>2h 5m 40s</td>
                          <td>
                            {" "}
                            <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>Vaccination</td>
                          <td>3.053 ETH</td>
                          <td>2h 5m 40s</td>
                          <td>
                            {" "}
                            <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
                              Canceled
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>Dental Cleanup</td>
                          <td>3.053 ETH</td>
                          <td>2h 5m 40s</td>
                          <td>
                            {" "}
                            <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>Follow up Appointment </td>
                          <td>3.053 ETH</td>
                          <td>2h 5m 40s</td>
                          <td>
                            {" "}
                            <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
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
            {/* Latest Performance End */}
          </div>
        </div>
        <div className='col-xxxl-3'>
          <div className='row gy-4'>
            <div className='col-xxl-12 col-xl-6'>
              <div className='card h-100 radius-8 border-0'>
                <div className='card-header border-bottom d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                  <h6 className='mb-2 fw-bold text-lg'>Total Income</h6>
                  <div className=''>
                    <select className='form-select form-select-sm w-auto bg-base border-0 text-secondary-light'>
                      <option>This Month</option>
                      <option>This Week</option>
                      <option>This Year</option>
                    </select>
                  </div>
                </div>
                <div className='card-body p-24'>
                  <div className='position-relative'>
                    <div
                      id='statisticsDonutChart'
                      className='mt-36 flex-grow-1 apexcharts-tooltip-z-none title-style circle-none'
                    />
                    <div className='text-center position-absolute top-50 start-50 translate-middle'>
                      <span className='text-secondary-light'>Income</span>
                      <h6 className=''>$28,500</h6>
                    </div>
                  </div>
                  <ul className='row gy-4 mt-3'>
                    <li className='col-6 d-flex flex-column align-items-center'>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='w-12-px h-8-px rounded-pill bg-warning-600' />
                        <span className='text-secondary-light text-sm fw-normal'>
                          Net Income
                        </span>
                      </div>
                      <h6 className='text-primary-light fw-bold mb-0'>
                        $50,000
                      </h6>
                    </li>
                    <li className='col-6 d-flex flex-column align-items-center'>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='w-12-px h-8-px rounded-pill bg-success-600' />
                        <span className='text-secondary-light text-sm fw-normal'>
                          Commission{" "}
                        </span>
                      </div>
                      <h6 className='text-primary-light fw-bold mb-0'>
                        $20,000
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xxl-12 col-xl-6'>
              <div className='card'>
                <div className='card-header'>
                  <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                    <h6 className='mb-2 fw-bold text-lg mb-0'>
                      Available Treatments
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
                  <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
                    <div className='d-flex align-items-center gap-12'>
                      <div className='w-40-px h-40-px rounded-circle flex-shrink-0 bg-info-50 d-flex justify-content-center align-items-center'>
                        <img
                          src='assets/images/home-eight/treatment-icon1.png'
                          alt=''
                          className=''
                        />
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-normal'>Psychiatry</h6>
                        <span className='text-sm text-secondary-light fw-normal'>
                          57 Doctors
                        </span>
                      </div>
                    </div>
                    <span className='text-secondary-light'>08:45 AM</span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
                    <div className='d-flex align-items-center gap-12'>
                      <div className='w-40-px h-40-px rounded-circle flex-shrink-0 bg-success-50 d-flex justify-content-center align-items-center'>
                        <img
                          src='assets/images/home-eight/treatment-icon2.png'
                          alt=''
                          className=''
                        />
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-normal'>Orthopedic</h6>
                        <span className='text-sm text-secondary-light fw-normal'>
                          85 Doctors
                        </span>
                      </div>
                    </div>
                    <span className='text-secondary-light'>08:45 AM</span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
                    <div className='d-flex align-items-center gap-12'>
                      <div className='w-40-px h-40-px rounded-circle flex-shrink-0 bg-lilac-50 d-flex justify-content-center align-items-center'>
                        <img
                          src='assets/images/home-eight/treatment-icon3.png'
                          alt=''
                          className=''
                        />
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-normal'>Cardiology</h6>
                        <span className='text-sm text-secondary-light fw-normal'>
                          60 Doctors
                        </span>
                      </div>
                    </div>
                    <span className='text-secondary-light'>08:45 AM</span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
                    <div className='d-flex align-items-center gap-12'>
                      <div className='w-40-px h-40-px rounded-circle flex-shrink-0 bg-warning-50 d-flex justify-content-center align-items-center'>
                        <img
                          src='assets/images/home-eight/treatment-icon4.png'
                          alt=''
                          className=''
                        />
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-normal'>Pediatrics</h6>
                        <span className='text-sm text-secondary-light fw-normal'>
                          120 Doctors
                        </span>
                      </div>
                    </div>
                    <span className='text-secondary-light'>08:45 AM</span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
                    <div className='d-flex align-items-center gap-12'>
                      <div className='w-40-px h-40-px rounded-circle flex-shrink-0 bg-danger-50 d-flex justify-content-center align-items-center'>
                        <img
                          src='assets/images/home-eight/treatment-icon5.png'
                          alt=''
                          className=''
                        />
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-normal'>Neurology </h6>
                        <span className='text-sm text-secondary-light fw-normal'>
                          25 Doctors
                        </span>
                      </div>
                    </div>
                    <span className='text-secondary-light'>08:45 AM</span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between gap-3 mb-0'>
                    <div className='d-flex align-items-center gap-12'>
                      <div className='w-40-px h-40-px rounded-circle flex-shrink-0 bg-primary-50 d-flex justify-content-center align-items-center'>
                        <img
                          src='assets/images/home-eight/treatment-icon6.png'
                          alt=''
                          className=''
                        />
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-normal'>
                          Gastroenterology
                        </h6>
                        <span className='text-sm text-secondary-light fw-normal'>
                          95 Doctors
                        </span>
                      </div>
                    </div>
                    <span className='text-secondary-light'>08:45 AM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-12 col-xl-6'>
              <div className='card'>
                <div className='card-header'>
                  <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                    <h6 className='mb-2 fw-bold text-lg mb-0'>
                      Health Reports Document
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
                  <div className='d-flex flex-column gap-24'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='d-flex align-items-center gap-12'>
                        <div className='flex-shrink-0'>
                          <img
                            src='assets/images/home-eight/icon-pdf.png'
                            alt=''
                            className=''
                          />
                        </div>
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-normal'>
                            Checkup Result.pdf
                          </h6>
                          <span className='text-xs text-secondary-light fw-normal'>
                            2.5mb
                          </span>
                        </div>
                      </div>
                      <div className='flex-align gap-12'>
                        <button
                          type='button'
                          className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-danger-100 text-danger-600 bg-hover-danger-600 text-hover-white text-md rounded-circle'
                        >
                          <i className='ri-delete-bin-5-line' />
                        </button>
                        <button
                          type='button'
                          className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-success-100 text-success-600 bg-hover-success-600 text-hover-white text-md rounded-circle'
                        >
                          <i className='ri-download-2-fill' />
                        </button>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='d-flex align-items-center gap-12'>
                        <div className='flex-shrink-0'>
                          <img
                            src='assets/images/home-eight/icon-text.png'
                            alt=''
                            className=''
                          />
                        </div>
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-normal'>
                            Checkup Result.doc
                          </h6>
                          <span className='text-xs text-secondary-light fw-normal'>
                            2mb
                          </span>
                        </div>
                      </div>
                      <div className='flex-align gap-12'>
                        <button
                          type='button'
                          className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-danger-100 text-danger-600 bg-hover-danger-600 text-hover-white text-md rounded-circle'
                        >
                          <i className='ri-delete-bin-5-line' />
                        </button>
                        <button
                          type='button'
                          className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-success-100 text-success-600 bg-hover-success-600 text-hover-white text-md rounded-circle'
                        >
                          <i className='ri-download-2-fill' />
                        </button>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='d-flex align-items-center gap-12'>
                        <div className='flex-shrink-0'>
                          <img
                            src='assets/images/home-eight/icon-pdf.png'
                            alt=''
                            className=''
                          />
                        </div>
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-normal'>
                            Prescription.pdf
                          </h6>
                          <span className='text-xs text-secondary-light fw-normal'>
                            3mb
                          </span>
                        </div>
                      </div>
                      <div className='flex-align gap-12'>
                        <button
                          type='button'
                          className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-danger-100 text-danger-600 bg-hover-danger-600 text-hover-white text-md rounded-circle'
                        >
                          <i className='ri-delete-bin-5-line' />
                        </button>
                        <button
                          type='button'
                          className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-success-100 text-success-600 bg-hover-success-600 text-hover-white text-md rounded-circle'
                        >
                          <i className='ri-download-2-fill' />
                        </button>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='d-flex align-items-center gap-12'>
                        <div className='flex-shrink-0'>
                          <img
                            src='assets/images/home-eight/icon-text.png'
                            alt=''
                            className=''
                          />
                        </div>
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-normal'>
                            Xray Result.doc
                          </h6>
                          <span className='text-xs text-secondary-light fw-normal'>
                            3mb
                          </span>
                        </div>
                      </div>
                      <div className='flex-align gap-12'>
                        <button
                          type='button'
                          className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-danger-100 text-danger-600 bg-hover-danger-600 text-hover-white text-md rounded-circle'
                        >
                          <i className='ri-delete-bin-5-line' />
                        </button>
                        <button
                          type='button'
                          className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-success-100 text-success-600 bg-hover-success-600 text-hover-white text-md rounded-circle'
                        >
                          <i className='ri-download-2-fill' />
                        </button>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='d-flex align-items-center gap-12'>
                        <div className='flex-shrink-0'>
                          <img
                            src='assets/images/home-eight/icon-pdf.png'
                            alt=''
                            className=''
                          />
                        </div>
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-normal'>
                            Glucose Level Report.pdf
                          </h6>
                          <span className='text-xs text-secondary-light fw-normal'>
                            3mb
                          </span>
                        </div>
                      </div>
                      <div className='flex-align gap-12'>
                        <button
                          type='button'
                          className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-danger-100 text-danger-600 bg-hover-danger-600 text-hover-white text-md rounded-circle'
                        >
                          <i className='ri-delete-bin-5-line' />
                        </button>
                        <button
                          type='button'
                          className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-success-100 text-success-600 bg-hover-success-600 text-hover-white text-md rounded-circle'
                        >
                          <i className='ri-download-2-fill' />
                        </button>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='d-flex align-items-center gap-12'>
                        <div className='flex-shrink-0'>
                          <img
                            src='assets/images/home-eight/icon-text.png'
                            alt=''
                            className=''
                          />
                        </div>
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-normal'>
                            Checkup Result.doc
                          </h6>
                          <span className='text-xs text-secondary-light fw-normal'>
                            2mb
                          </span>
                        </div>
                      </div>
                      <div className='flex-align gap-12'>
                        <button
                          type='button'
                          className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-danger-100 text-danger-600 bg-hover-danger-600 text-hover-white text-md rounded-circle'
                        >
                          <i className='ri-delete-bin-5-line' />
                        </button>
                        <button
                          type='button'
                          className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-success-100 text-success-600 bg-hover-success-600 text-hover-white text-md rounded-circle'
                        >
                          <i className='ri-download-2-fill' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayerEight;
