import React from 'react'
import DefaultCarousel from './child/DefaultCarousel'
import CarouselWithArrows from './child/CarouselWithArrows'
import CarouselWithPagination from './child/CarouselWithPagination'

const CarouselLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultCarousel */}
            <DefaultCarousel />

            {/* CarouselWithArrows */}
            <CarouselWithArrows />

            {/* CarouselWithPagination */}
            <CarouselWithPagination />



            <div className="col-sm-6">
                <div className="card p-0 overflow-hidden position-relative radius-12">
                    <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                        <h6 className="text-lg mb-0">Carousel with progress</h6>
                    </div>
                    <div className="card-body p-0 position-relative">
                        <div className="p-0 progress-carousel dots-style-circle dots-positioned">
                            <div className="gradient-overlay bottom-0 start-0 h-100 position-relative">
                                <img
                                    src="assets/images/carousel/carousel-img4.png"
                                    alt=""
                                    className="w-100 h-100 object-fit-cover"
                                />
                                <div className="position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px">
                                    <h5 className="card-title text-white text-lg mb-6">
                                        Carousel Slide One
                                    </h5>
                                    <p className="card-text text-white mx-auto text-sm">
                                        User Interface (UI) and User Experience (UX) Design play key
                                        roles in the experience users have when{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="gradient-overlay bottom-0 start-0 h-100">
                                <img
                                    src="assets/images/carousel/carousel-img2.png"
                                    alt=""
                                    className="w-100 h-100 object-fit-cover"
                                />
                                <div className="position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px">
                                    <h5 className="card-title text-white text-lg mb-6">
                                        Carousel Slide Two
                                    </h5>
                                    <p className="card-text text-white mx-auto text-sm">
                                        User Interface (UI) and User Experience (UX) Design play key
                                        roles in the experience users have when{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="gradient-overlay bottom-0 start-0 h-100">
                                <img
                                    src="assets/images/carousel/carousel-img3.png"
                                    alt=""
                                    className="w-100 h-100 object-fit-cover"
                                />
                                <div className="position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px">
                                    <h5 className="card-title text-white text-lg mb-6">
                                        Carousel Slide Three
                                    </h5>
                                    <p className="card-text text-white mx-auto text-sm">
                                        User Interface (UI) and User Experience (UX) Design play key
                                        roles in the experience users have when{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="gradient-overlay bottom-0 start-0 h-100">
                                <img
                                    src="assets/images/carousel/carousel-img1.png"
                                    alt=""
                                    className="w-100 h-100 object-fit-cover"
                                />
                                <div className="position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px">
                                    <h5 className="card-title text-white text-lg mb-6">
                                        Carousel Slide Four
                                    </h5>
                                    <p className="card-text text-white mx-auto text-sm">
                                        User Interface (UI) and User Experience (UX) Design play key
                                        roles in the experience users have when{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="slider-progress">
                            <span />
                        </div>
                    </div>
                </div>
            </div>
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