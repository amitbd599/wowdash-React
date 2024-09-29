import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'


const CarouselLayer = () => {
    return (
        <div className="chat-wrapper">
            <div className="chat-sidebar card">
                <div className="chat-sidebar-single active top-profile">
                    <div className="img">
                        <img src="assets/images/chat/1.png" alt="image" />
                    </div>
                    <div className="info">
                        <h6 className="text-md mb-0">Kathryn Murphy</h6>
                        <p className="mb-0">Available</p>
                    </div>
                    <div className="action">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="text-secondary-light text-xl"
                                data-bs-toggle="dropdown"
                                data-bs-display="static"
                                aria-expanded="false"
                            >
                                <Icon icon="bi:three-dots" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-lg-end border">
                                <li>
                                    <a
                                        href="chat-profile.html"
                                        className="dropdown-item center-gap rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    >
                                        <Icon icon="fluent:person-32-regular" />
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="chat-profile.html"
                                        className="dropdown-item center-gap rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    >
                                        <Icon icon="carbon:settings" />
                                        Settings
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* chat-sidebar-single end */}
                <div className="chat-search">
                    <span className="icon">
                        <Icon icon="iconoir:search" />
                    </span>
                    <input type="text" name="#0" autoComplete="off" placeholder="Search..." />
                </div>
                <div className="chat-all-list">
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/2.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Kathryn Murphy</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/3.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">James Michael</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single">
                        <div className="img">
                            <img src="assets/images/chat/4.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Russell Lucas</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single">
                        <div className="img">
                            <img src="assets/images/chat/5.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Caleb Bradley</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/6.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Bobby Roy</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/7.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Vincent Liam</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/8.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Randy Mason</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/9.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Albert Wayne</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/10.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Elijah Willie</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/2.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Kathryn Murphy</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/3.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">James Michael</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single">
                        <div className="img">
                            <img src="assets/images/chat/4.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Russell Lucas</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single">
                        <div className="img">
                            <img src="assets/images/chat/5.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Caleb Bradley</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/6.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Bobby Roy</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/7.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Vincent Liam</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/8.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Randy Mason</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/9.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Albert Wayne</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                    <div className="chat-sidebar-single active">
                        <div className="img">
                            <img src="assets/images/chat/10.png" alt="image" />
                        </div>
                        <div className="info">
                            <h6 className="text-sm mb-1">Elijah Willie</h6>
                            <p className="mb-0 text-xs">hey! there i'm...</p>
                        </div>
                        <div className="action text-end">
                            <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                            <span className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">
                                8
                            </span>
                        </div>
                    </div>
                    {/* chat-sidebar-single end */}
                </div>
            </div>
            <div className="chat-main card">
                <div className="chat-sidebar-single active">
                    <div className="img">
                        <img src="assets/images/chat/11.png" alt="image" />
                    </div>
                    <div className="info">
                        <h6 className="text-md mb-0">Kathryn Murphy</h6>
                        <p className="mb-0">Available</p>
                    </div>
                    <div className="action d-inline-flex align-items-center gap-3">
                        <button type="button" className="text-xl text-primary-light">
                            <Icon icon="mi:call" />
                        </button>
                        <button type="button" className="text-xl text-primary-light">
                            <Icon icon="fluent:video-32-regular" />
                        </button>
                        <div className="btn-group">
                            <button
                                type="button"
                                className="text-primary-light text-xl"
                                data-bs-toggle="dropdown"
                                data-bs-display="static"
                                aria-expanded="false"
                            >
                                <Icon icon="tabler:dots-vertical" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-lg-end border">
                                <li>
                                    <button
                                        className="dropdown-item center-gap rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        type="button"
                                    >
                                        <Icon icon="mdi:clear-circle-outline" />
                                        Clear All
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item center-gap rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                        type="button"
                                    >
                                        <Icon icon="ic:baseline-block" />
                                        Block
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* chat-sidebar-single end */}
                <div className="chat-empty">
                    <div className="text-center">
                        <img src="assets/images/chat/empty-img.png" alt="image" />
                        <h6 className="mb-1 mt-16">Empty, Message...</h6>
                        <p className="mb-0 text-sm">
                            don't worry, just take a deep breath &amp; say "Hello"
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CarouselLayer