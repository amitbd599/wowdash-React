import React from 'react'
import DefaultCard from './child/DefaultCard'
import CardTextIcon from './child/CardTextIcon'

const CardLayer = () => {
    return (
        <>
            {/* DefaultCard */}
            <DefaultCard />

            {/* CardTextIcon */}
            <CardTextIcon />


            <div className="mb-40">
                <h6 className="mb-24">Card With image &amp; Overlays </h6>
                <div className="row gy-4">
                    <div className="col-xxl-4 col-sm-6">
                        <div className="card h-100 radius-12 p-0 overflow-hidden position-relative">
                            <div className="card-body p-0 gradient-overlay bottom-0 start-0">
                                <img
                                    src="assets/images/card-component/card-overlay-img1.png"
                                    alt=""
                                    className="w-100 h-100"
                                />
                                <div className="position-absolute start-0 bottom-0 p-24 z-1">
                                    <h5
                                        className="card-title text-white text-primary-light
                             text-lg mb-6"
                                    >
                                        This is Card title
                                    </h5>
                                    <p className="card-text text-white">
                                        We quickly learn to fear and thus automatically avo id
                                        potentially stressful situations of all kinds, including the
                                        most common of all
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        className="btn text-primary-600 hover-text-primary px-0 py-10 d-inline-flex align-items-center gap-2"
                                    >
                                        Read More{" "}
                                        <iconify-icon
                                            icon="iconamoon:arrow-right-2"
                                            className="text-xl"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-sm-6">
                        <div className="card h-100 radius-12 p-0 overflow-hidden position-relative">
                            <div className="card-body p-0 gradient-overlay top-0 start-0">
                                <img
                                    src="assets/images/card-component/card-overlay-img1.png"
                                    alt=""
                                    className="w-100 h-100"
                                />
                                <div className="position-absolute start-0 top-0 p-24 z-1 text-center">
                                    <h5
                                        className="card-title text-white text-primary-light
                             text-lg mb-6"
                                    >
                                        This is Card title
                                    </h5>
                                    <p className="card-text text-white">
                                        We quickly learn to fear and thus automatically avo id
                                        potentially stressful situations of all kinds, including the
                                        most common of all
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        className="btn text-primary-600 hover-text-primary px-0 py-10 d-inline-flex align-items-center gap-2"
                                    >
                                        Read More{" "}
                                        <iconify-icon
                                            icon="iconamoon:arrow-right-2"
                                            className="text-xl"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-sm-6">
                        <div className="card h-100 radius-12 p-0 overflow-hidden position-relative">
                            <div className="card-body p-0 gradient-overlay bottom-0 start-0">
                                <img
                                    src="assets/images/card-component/card-overlay-img1.png"
                                    alt=""
                                    className="w-100 h-100"
                                />
                                <div className="position-absolute start-0 bottom-0 p-24 z-1 text-end">
                                    <h5
                                        className="card-title text-white text-primary-light
                             text-lg mb-6"
                                    >
                                        This is Card title
                                    </h5>
                                    <p className="card-text text-white">
                                        We quickly learn to fear and thus automatically avo id
                                        potentially stressful situations of all kinds, including the
                                        most common of all
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        className="btn text-primary-600 hover-text-primary px-0 py-10 d-inline-flex align-items-center gap-2"
                                    >
                                        Read More{" "}
                                        <iconify-icon
                                            icon="iconamoon:arrow-right-2"
                                            className="text-xl"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-40">
                <h6 className="mb-24">Card Header &amp; Footer</h6>
                <div className="row gy-4">
                    <div className="col-xxl-4 col-sm-6">
                        <div className="card radius-12 h-100">
                            <div className="card-header py-16 px-24 bg-base d-flex align-items-center gap-1 justify-content-between border border-end-0 border-start-0 border-top-0">
                                <h6 className="text-lg mb-0">Hi, Will Mart</h6>
                                <button type="button" className="text-xl line-height-1">
                                    <iconify-icon icon="mdi:times" className="text-xl" />
                                </button>
                            </div>
                            <div className="card-body py-16 px-24">
                                <h6 className="card-title text-primary-light mb-8 text-lg">
                                    How to learn UI /UX Design
                                </h6>
                                <p className="card-text text-neutral-600 mb-0">
                                    Intrinsically incubate intuitive opportunities and real-time
                                    potentialities for change for interoperable meta-itself the
                                    viewer's attention from the layout
                                </p>
                            </div>
                            <div className="card-footer text-center bg-transparent border border-end-0 border-start-0 border-bottom-0 py-16 px-24">
                                <a href="javascript:void(0)" className="text-primary-600">
                                    View All
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-sm-6">
                        <div className="card radius-12 h-100">
                            <div className="card-body py-16 px-24">
                                <div className="d-flex align-items-center gap-2 mb-12">
                                    <iconify-icon icon="typcn:user-add" className="text-xxl" />
                                    <h6 className="text-lg mb-0">How to learn UI /UX Design</h6>
                                </div>
                                <p className="card-text text-neutral-600 mb-16">
                                    Intrinsically incubate intuitive opportunities and real-time
                                    potentialities for change for interoperable meta-itself the
                                    viewer's attention from the layout
                                </p>
                                <p className="card-text text-neutral-600 mb-0">
                                    Intrinsically incubate intuitive opportunities and real-time
                                    potentialities for change for interoperable{" "}
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="btn text-primary-600 hover-text-primary px-0 py-0 d-inline-flex align-items-center gap-2 mt-16"
                                >
                                    Read More{" "}
                                    <iconify-icon
                                        icon="iconamoon:arrow-right-2"
                                        className="text-xl"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-sm-6">
                        <div className="card radius-12 h-100">
                            <div className="card-header py-16 px-24 bg-base d-flex align-items-center gap-1 justify-content-between border border-end-0 border-start-0 border-top-0">
                                <div>
                                    <h6 className="text-lg mb-0">How can i help your</h6>
                                    <span className="text-sm">Awesome Support</span>
                                </div>
                                <a href="javascript:void(0)" className="text-primary-600">
                                    View All
                                </a>
                            </div>
                            <div className="card-body py-16 px-24">
                                <p className="card-text text-neutral-600 mb-16">
                                    Intrinsically incubate intuitive opportunities and real-time
                                    potentialities for change for interoperable meta-itself the
                                    viewer's attention from the layout
                                </p>
                                <p className="card-text text-neutral-600 mb-0">
                                    Intrinsically incubate intuitive opportunities and real-time
                                    potentialities for change for interoperable{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-40">
                <h6 className="mb-24">Horizontal Card</h6>
                <div className="row gy-4">
                    <div className="col-xl-6">
                        <div className="card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row">
                            <div className="d-flex flex-shrink-0 w-170-px h-100">
                                <img
                                    src="assets/images/card-component/horizontal-card-img1.png"
                                    className="h-100 w-100 object-fit-cover"
                                    alt=""
                                />
                            </div>
                            <div className="card-body p-16 flex-grow-1">
                                <h5 className="card-title text-lg text-primary-light mb-6">
                                    This is Card title
                                </h5>
                                <p className="card-text text-neutral-600 mb-16">
                                    We quickly learn to fear and thus automatically avo id potentially
                                    stressful situations of all kinds, including the most common of
                                    all .
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2"
                                >
                                    Read More{" "}
                                    <iconify-icon
                                        icon="iconamoon:arrow-right-2"
                                        className="text-xl"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row flex-row-reverse">
                            <div className="d-flex flex-shrink-0 w-170-px h-100">
                                <img
                                    src="assets/images/card-component/horizontal-card-img2.png"
                                    className="h-100 w-100 object-fit-cover"
                                    alt=""
                                />
                            </div>
                            <div className="card-body p-16 flex-grow-1">
                                <h5 className="card-title text-lg text-primary-light mb-6">
                                    This is Card title
                                </h5>
                                <p className="card-text text-neutral-600 mb-16">
                                    We quickly learn to fear and thus automatically avo id potentially
                                    stressful situations of all kinds, including the most common of
                                    all .
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2"
                                >
                                    Read More{" "}
                                    <iconify-icon
                                        icon="iconamoon:arrow-right-2"
                                        className="text-xl"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row">
                            <div className="d-flex flex-shrink-0 w-170-px h-100">
                                <img
                                    src="assets/images/card-component/horizontal-card-img3.png"
                                    className="h-100 w-100 object-fit-cover"
                                    alt=""
                                />
                            </div>
                            <div className="card-body p-16 flex-grow-1">
                                <h5 className="card-title text-lg text-primary-light mb-6">
                                    This is Card title
                                </h5>
                                <p className="card-text text-neutral-600 mb-16">
                                    We quickly learn to fear and thus automatically avo id potentially
                                    stressful situations of all kinds, including the most common of
                                    all .
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2"
                                >
                                    Read More{" "}
                                    <iconify-icon
                                        icon="iconamoon:arrow-right-2"
                                        className="text-xl"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row flex-row-reverse">
                            <div className="d-flex flex-shrink-0 w-170-px h-100">
                                <img
                                    src="assets/images/card-component/horizontal-card-img4.png"
                                    className="h-100 w-100 object-fit-cover"
                                    alt=""
                                />
                            </div>
                            <div className="card-body p-16 flex-grow-1">
                                <h5 className="card-title text-lg text-primary-light mb-6">
                                    This is Card title
                                </h5>
                                <p className="card-text text-neutral-600 mb-16">
                                    We quickly learn to fear and thus automatically avo id potentially
                                    stressful situations of all kinds, including the most common of
                                    all .
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2"
                                >
                                    Read More{" "}
                                    <iconify-icon
                                        icon="iconamoon:arrow-right-2"
                                        className="text-xl"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h6 className="mb-24">Card With Background Color</h6>
                <div className="row gy-4">
                    <div className="col-xxl-3 col-sm-6">
                        <div className="card h-100 radius-12 bg-gradient-purple">
                            <div className="card-body p-24">
                                <div className="w-64-px h-64-px d-inline-flex align-items-center justify-content-center bg-lilac-600 text-white mb-16 radius-12">
                                    <iconify-icon
                                        icon="solar:medal-ribbons-star-bold"
                                        className="h5 mb-0"
                                    />
                                </div>
                                <h6 className="mb-8">Brand Identity</h6>
                                <p className="card-text mb-8 text-secondary-light">
                                    Random Text gateway to the Origin al the Works Platform, &amp;
                                    your unique block chain gateway identity.
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="btn text-lilac-600 hover-text-lilac px-0 py-0 mt-16 d-inline-flex align-items-center gap-2"
                                >
                                    Read More{" "}
                                    <iconify-icon
                                        icon="iconamoon:arrow-right-2"
                                        className="text-xl"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-sm-6">
                        <div className="card h-100 radius-12 bg-gradient-primary text-center">
                            <div className="card-body p-24">
                                <div className="w-64-px h-64-px d-inline-flex align-items-center justify-content-center bg-primary-600 text-white mb-16 radius-12">
                                    <iconify-icon icon="ri:computer-fill" className="h5 mb-0" />
                                </div>
                                <h6 className="mb-8">UI/UX Designer</h6>
                                <p className="card-text mb-8 text-secondary-light">
                                    Random Text gateway to the Origin al the Works Platform, &amp;
                                    your unique block chain gateway identity.
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="btn text-primary-600 hover-text-primary px-0 py-10 d-inline-flex align-items-center gap-2"
                                >
                                    Read More{" "}
                                    <iconify-icon
                                        icon="iconamoon:arrow-right-2"
                                        className="text-xl"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-sm-6">
                        <div className="card h-100 radius-12 bg-gradient-success text-end">
                            <div className="card-body p-24">
                                <div className="w-64-px h-64-px d-inline-flex align-items-center justify-content-center bg-success-600 text-white mb-16 radius-12">
                                    <iconify-icon
                                        icon="fluent:toolbox-20-filled"
                                        className="h5 mb-0"
                                    />
                                </div>
                                <h6 className="mb-8">Business Strategy</h6>
                                <p className="card-text mb-8 text-secondary-light">
                                    Random Text gateway to the Origin al the Works Platform, &amp;
                                    your unique block chain gateway identity.
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="btn text-success-600 hover-text-success px-0 py-10 d-inline-flex align-items-center gap-2"
                                >
                                    Read More{" "}
                                    <iconify-icon
                                        icon="iconamoon:arrow-right-2"
                                        className="text-xl"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-sm-6">
                        <div className="card h-100 radius-12 bg-gradient-danger text-center">
                            <div className="card-body p-24">
                                <div className="w-64-px h-64-px d-inline-flex align-items-center justify-content-center bg-danger-600 text-white mb-16 radius-12">
                                    <iconify-icon icon="ph:code-fill" className="h5 mb-0" />
                                </div>
                                <h6 className="mb-8">Business Strategy</h6>
                                <p className="card-text mb-8 text-secondary-light">
                                    Random Text gateway to the Origin al the Works Platform, &amp;
                                    your unique block chain gateway identity.
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="btn text-danger-600 hover-text-danger px-0 py-10 d-inline-flex align-items-center gap-2"
                                >
                                    Read More{" "}
                                    <iconify-icon
                                        icon="iconamoon:arrow-right-2"
                                        className="text-xl"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CardLayer