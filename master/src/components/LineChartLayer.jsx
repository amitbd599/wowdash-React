import React from 'react'
import DefaultLineChart from './child/DefaultLineChart'
import ZoomAbleLineChart from './child/ZoomAbleLineChart'
import LineDataLabel from './child/LineDataLabel'
import DoubleLineChart from './child/DoubleLineChart'
import StepLineChart from './child/StepLineChart'

const LineChartLayer = () => {
    return (
        <div className="row gy-4">
            {/* DefaultLineChart */}
            <DefaultLineChart />

            {/* ZoomAbleLineChart */}
            <ZoomAbleLineChart />

            {/* LineDataLabel */}
            <LineDataLabel />

            {/* DoubleLineChart */}
            <DoubleLineChart />

            {/* StepLineChart */}
            <StepLineChart />





            <div className="col-md-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Gradient Charts</h6>
                    </div>
                    <div className="card-body p-24">
                        <div id="gradientLineChart" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LineChartLayer