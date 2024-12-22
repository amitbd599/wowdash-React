import React from "react";
import UnitCountSeven from "./child/UnitCountSeven";
import IncomeVsExpense from "./child/IncomeVsExpense";
import UsersChart from "./child/UsersChart";
import TopSuppliers from "./child/TopSuppliers";

const DashBoardLayerTen = () => {
  return (
    <div className='row gy-4'>
      {/* UnitCountSeven */}
      <UnitCountSeven />

      {/* IncomeVsExpense */}
      <IncomeVsExpense />

      {/* UsersChart */}
      <UsersChart />

      {/* TopSuppliers */}
      <TopSuppliers />

      <div className='col-xxl-4 col-md-6'>
        <div className='card h-100'>
          <div className='card-header'>
            <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
              <h6 className='mb-2 fw-bold text-lg mb-0'>Top Customer</h6>
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
          <div className='card-body p-24'>
            <div className='table-responsive scroll-sm'>
              <table className='table bordered-table mb-0'>
                <thead>
                  <tr>
                    <th scope='col'>SL</th>
                    <th scope='col'>Name </th>
                    <th scope='col'>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className='text-secondary-light'>1</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>
                        Savannah Nguyen
                      </span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$30,00.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='text-secondary-light'>2</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>
                        Annette Black
                      </span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$40,00.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='text-secondary-light'>3</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>Theresa Webb</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$50,00.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='text-secondary-light'>4</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>
                        Marvin McKinney
                      </span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$60,00.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='text-secondary-light'>5</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>
                        Brooklyn Simmons
                      </span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$70,00.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='text-secondary-light'>6</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>
                        Dianne Russell
                      </span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$80,00.00</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xxl-4 col-md-6'>
        <div className='card h-100'>
          <div className='card-header'>
            <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
              <h6 className='mb-2 fw-bold text-lg'>Overall Report</h6>
              <select className='form-select form-select-sm w-auto bg-base border text-secondary-light'>
                <option>Yearly</option>
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Today</option>
              </select>
            </div>
          </div>
          <div className='card-body p-24'>
            <div className='mt-32'>
              <div
                id='userOverviewDonutChart'
                className='mx-auto apexcharts-tooltip-z-none'
              />
            </div>
            <div className='d-flex flex-wrap gap-20 justify-content-center mt-48'>
              <div className='d-flex align-items-center gap-8'>
                <span className='w-16-px h-16-px radius-2 bg-primary-600' />
                <span className='text-secondary-light'>Purchase</span>
              </div>
              <div className='d-flex align-items-center gap-8'>
                <span className='w-16-px h-16-px radius-2 bg-lilac-600' />
                <span className='text-secondary-light'>Sales</span>
              </div>
              <div className='d-flex align-items-center gap-8'>
                <span className='w-16-px h-16-px radius-2 bg-warning-600' />
                <span className='text-secondary-light'>Expense</span>
              </div>
              <div className='d-flex align-items-center gap-8'>
                <span className='w-16-px h-16-px radius-2 bg-success-600' />
                <span className='text-secondary-light'>Gross Profit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xxl-4 col-md-6'>
        <div className='card h-100'>
          <div className='card-header'>
            <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
              <h6 className='mb-2 fw-bold text-lg mb-0'>
                Purchase &amp; Sales
              </h6>
              <select className='form-select form-select-sm w-auto bg-base text-secondary-light'>
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
                  Purchase: $
                  <span className='text-primary-light fw-bold'>500</span>
                </span>
              </li>
              <li className='d-flex align-items-center gap-2'>
                <span className='w-12-px h-8-px rounded-pill bg-success-600' />
                <span className='text-secondary-light text-sm fw-semibold'>
                  Sales: $
                  <span className='text-primary-light fw-bold'>800</span>
                </span>
              </li>
            </ul>
            <div
              id='purchaseSaleChart'
              className='margin-16-minus y-value-left'
            />
          </div>
        </div>
      </div>
      <div className='col-xxl-8'>
        <div className='card h-100'>
          <div className='card-header'>
            <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
              <h6 className='mb-2 fw-bold text-lg mb-0'>Recent Transactions</h6>
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
          <div className='card-body p-24'>
            <div className='table-responsive scroll-sm'>
              <table className='table bordered-table mb-0'>
                <thead>
                  <tr>
                    <th scope='col'>SL</th>
                    <th scope='col'>Date </th>
                    <th scope='col'>Payment Type</th>
                    <th scope='col'>Paid Amount</th>
                    <th scope='col'>Due Amount</th>
                    <th scope='col'>Payable Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className='text-secondary-light'>1</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>21 Jun 2024</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>Cash</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$0.00</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$150.00</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$150.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='text-secondary-light'>2</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>21 Jun 2024</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>Bank</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$570 </span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$0.00</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$570.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='text-secondary-light'>3</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>21 Jun 2024</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>PayPal</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$300.00</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$100.00</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$200.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='text-secondary-light'>4</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>21 Jun 2024</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>Cash</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$0.00</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$150.00</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$150.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='text-secondary-light'>3</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>21 Jun 2024</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>PayPal</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$300.00</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$100.00</span>
                    </td>
                    <td>
                      <span className='text-secondary-light'>$200.00</span>
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

export default DashBoardLayerTen;
