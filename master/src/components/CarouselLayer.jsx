import React from 'react'
import DefaultCarousel from './child/DefaultCarousel'
import CarouselWithArrows from './child/CarouselWithArrows'
import CarouselWithPagination from './child/CarouselWithPagination'
import CarouselWithProgress from './child/CarouselWithProgress'

const CarouselLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultCarousel */}
            <DefaultCarousel />

            {/* CarouselWithArrows */}
            <CarouselWithArrows />

            {/* CarouselWithPagination */}
            <CarouselWithPagination />

            {/* CarouselWithProgress */}
            <CarouselWithProgress />




            <div className="col-sm-12">
                <div className="card p-0 overflow-hidden position-relative radius-12">
                    <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                        <h6 className="text-lg mb-0">Multiple slides</h6>
                    </div>
                    <div className="card-body py-24 px-16 multiple-carousel dots-style-circle">
                        <div className="mx-8 mb-24">
                            <img
                                src="assets/images/carousel/mutiple-carousel-img1.png"
                                className="w-100 h-100 object-fit-cover"
                                alt=""
                            />
                        </div>
                        <div className="mx-8 mb-24">
                            <img
                                src="assets/images/carousel/mutiple-carousel-img2.png"
                                className="w-100 h-100 object-fit-cover"
                                alt=""
                            />
                        </div>
                        <div className="mx-8 mb-24">
                            <img
                                src="assets/images/carousel/mutiple-carousel-img3.png"
                                className="w-100 h-100 object-fit-cover"
                                alt=""
                            />
                        </div>
                        <div className="mx-8 mb-24">
                            <img
                                src="assets/images/carousel/mutiple-carousel-img4.png"
                                className="w-100 h-100 object-fit-cover"
                                alt=""
                            />
                        </div>
                        <div className="mx-8 mb-24">
                            <img
                                src="assets/images/carousel/mutiple-carousel-img2.png"
                                className="w-100 h-100 object-fit-cover"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CarouselLayer