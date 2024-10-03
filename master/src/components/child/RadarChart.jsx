import React from 'react'

const RadarChart = () => {
    return (
        <div className="col-md-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Radar Chart</h6>
                </div>
                <div className="card-body p-24 text-center">
                    <div
                        id="radarChart"
                        className="square-marker check-marker series-gap-24 d-flex justify-content-center"
                    />
                </div>
            </div>
        </div>
    )
}

export default RadarChart