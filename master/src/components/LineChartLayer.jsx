import React from 'react'
import DefaultLineChart from './child/DefaultLineChart'
import ZoomAbleLineChart from './child/ZoomAbleLineChart'
import LineDataLabel from './child/LineDataLabel'

const LineChartLayer = () => {
    return (
        <div className="row gy-4">
            {/* DefaultLineChart */}
            <DefaultLineChart />

            {/* ZoomAbleLineChart */}
            <ZoomAbleLineChart />

            {/* LineDataLabel */}
            <LineDataLabel />



            <div className="col-md-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Line Chart Animation</h6>
                    </div>
                    <div className="card-body p-24">
                        <div id="doubleLineChart" />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Stepline Charts</h6>
                    </div>
                    <div className="card-body p-24">
                        <div id="stepLineChart" />
                    </div>
                </div>
            </div>
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