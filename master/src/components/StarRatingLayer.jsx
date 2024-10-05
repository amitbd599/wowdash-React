import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import DefaultStarRatings from './child/DefaultStarRatings'
import HalfStar from './child/HalfStar'
import MultiColorStar from './child/MultiColorStar'

const StarRatingLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultStarRatings */}
            <DefaultStarRatings />

            {/* HalfStar */}
            <HalfStar />


            {/* MultiColorStar */}
            <MultiColorStar />



            <div className="col-sm-6">
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Rating</h6>
                    </div>
                    <div className="card-body p-24">
                        <ul className="d-flex flex-wrap align-items-center gap-12">
                            <li className="text-warning-600 text-2xxl line-height-1">
                                <Icon icon="material-symbols:star" />
                            </li>
                            <li className="text-warning-600 text-2xxl line-height-1">
                                <Icon icon="material-symbols:star" />
                            </li>
                            <li className="text-neutral-400 text-2xxl line-height-1">
                                <Icon icon="material-symbols:star" />
                            </li>
                            <li className="text-neutral-400 text-2xxl line-height-1">
                                <Icon icon="material-symbols:star" />
                            </li>
                            <li className="text-neutral-400 text-2xxl line-height-1">
                                <Icon icon="material-symbols:star" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StarRatingLayer