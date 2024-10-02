import React from 'react'

const GradientLineChart = () => {
    return (
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
    )
}

export default GradientLineChart