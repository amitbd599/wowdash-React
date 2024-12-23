import React from "react";

const TotalPeriodIncome = () => {
  return (
    <div className='col-xxl-3 col-sm-6'>
      <div className='card p-3 shadow-2 radius-8 h-100 gradient-deep-two-1 border border-white'>
        <div className='card-body p-0'>
          <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
            <div className='d-flex align-items-center gap-10'>
              <span className='mb-0 w-48-px h-48-px bg-cyan-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0'>
                <img
                  src='assets/images/home-eleven/icons/home-eleven-icon1.svg'
                  alt=''
                />
              </span>
              <div>
                <span className='fw-medium text-secondary-light text-md'>
                  Total Period Income
                </span>
                <h6 className='fw-semibold mt-2'>$50,000</h6>
              </div>
            </div>
          </div>
          <p className='text-sm mb-0 d-flex align-items-center flex-wrap gap-12 mt-12 text-secondary-light'>
            <span className='bg-success-focus px-6 py-2 rounded-2 fw-medium text-success-main text-sm d-flex align-items-center gap-1'>
              <i className='ri-arrow-right-up-line' /> 95%
            </span>{" "}
            Last month $24,000.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalPeriodIncome;
