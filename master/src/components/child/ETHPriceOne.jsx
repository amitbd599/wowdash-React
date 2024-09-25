import React from 'react'
import useReactApexChart from '../../hook/useReactApexChart'

const ETHPriceOne = () => {
    let { createChartSeven } = useReactApexChart()
    return (
        <div className="col-xxl-12 col-md-6">
            <div className="card h-100">
                <div className="card-header border-bottom d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h6 className="fw-bold text-lg mb-0">ETH Price</h6>
                    <select className="form-select form-select-sm w-auto bg-base border text-secondary-light rounded-pill">
                        <option>November </option>
                        <option>December</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                    </select>
                </div>
                <div className="card-body">
                    <div
                        id="enrollmentChart"
                        className="apexcharts-tooltip-style-1 yaxies-more"
                    >
                        {createChartSeven("#487FFF")}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ETHPriceOne