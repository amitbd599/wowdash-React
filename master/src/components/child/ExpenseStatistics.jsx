import React from "react";

const ExpenseStatistics = () => {
  return (
    <div className='col-md-6'>
      <div className='card radius-16 h-100'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Expense Statistics</h6>
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
  );
};

export default ExpenseStatistics;
