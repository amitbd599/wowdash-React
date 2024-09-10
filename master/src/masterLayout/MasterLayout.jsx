import React from 'react'

const MasterLayout = ({ children }) => {
  return (
    <>

      {/* sidebar */}
      <aside className="sidebar">
        <button type="button" className="sidebar-close-btn">
          <iconify-icon icon="radix-icons:cross-2" />
        </button>
        <div>
          <a href="index.html" className="sidebar-logo">
            <img
              src="assets/images/logo.png"
              alt="site logo"
              className="light-logo"
            />
            <img
              src="assets/images/logo-light.png"
              alt="site logo"
              className="dark-logo"
            />
            <img
              src="assets/images/logo-icon.png"
              alt="site logo"
              className="logo-icon"
            />
          </a>
        </div>
        <div className="sidebar-menu-area">
          <ul className="sidebar-menu" id="sidebar-menu">
            <li className="dropdown">
              <a href="javascript:void(0)">
                <iconify-icon
                  icon="solar:home-smile-angle-outline"
                  className="menu-icon"
                />
                <span>Dashboard</span>
              </a>
              <ul className="sidebar-submenu">
                <li>
                  <a href="index.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                    AI
                  </a>
                </li>
                <li>
                  <a href="index-2.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                    CRM
                  </a>
                </li>
                <li>
                  <a href="index-3.html">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                    eCommerce
                  </a>
                </li>
                <li>
                  <a href="index-4.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />
                    Cryptocurrency
                  </a>
                </li>
                <li>
                  <a href="index-5.html">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto" />{" "}
                    Investment
                  </a>
                </li>
                <li>
                  <a href="index-6.html">
                    <i className="ri-circle-fill circle-icon text-purple w-auto" />{" "}
                    LMS
                  </a>
                </li>
                <li>
                  <a href="index-7.html">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                    NFT &amp; Gaming
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-group-title">Application</li>
            <li>
              <a href="email.html">
                <iconify-icon icon="mage:email" className="menu-icon" />
                <span>Email</span>
              </a>
            </li>
            <li>
              <a href="chat-message.html">
                <iconify-icon icon="bi:chat-dots" className="menu-icon" />
                <span>Chat</span>
              </a>
            </li>
            <li>
              <a href="calendar-main.html">
                <iconify-icon icon="solar:calendar-outline" className="menu-icon" />
                <span>Calendar</span>
              </a>
            </li>
            <li>
              <a href="kanban.html">
                <iconify-icon
                  icon="material-symbols:map-outline"
                  className="menu-icon"
                />
                <span>Kanban</span>
              </a>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)">
                <iconify-icon icon="hugeicons:invoice-03" className="menu-icon" />
                <span>Invoice</span>
              </a>
              <ul className="sidebar-submenu">
                <li>
                  <a href="invoice-list.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                    List
                  </a>
                </li>
                <li>
                  <a href="invoice-preview.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />
                    Preview
                  </a>
                </li>
                <li>
                  <a href="invoice-add.html">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                    Add new
                  </a>
                </li>
                <li>
                  <a href="invoice-edit.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                    Edit
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)">
                <i className="ri-robot-2-line" />
                <span>Ai Application</span>
              </a>
              <ul className="sidebar-submenu">
                <li>
                  <a href="text-generator.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                    Text Generator
                  </a>
                </li>
                <li>
                  <a href="code-generator.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                    Code Generator
                  </a>
                </li>
                <li>
                  <a href="image-generator.html">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                    Image Generator
                  </a>
                </li>
                <li>
                  <a href="voice-generator.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                    Voice Generator
                  </a>
                </li>
                <li>
                  <a href="video-generator.html">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto" />{" "}
                    Video Generator
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)">
                <i className="ri-robot-2-line" />
                <span>Crypto Currency</span>
              </a>
              <ul className="sidebar-submenu">
                <li>
                  <a href="wallet.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                    Wallet
                  </a>
                </li>
                <li>
                  <a href="marketplace.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="marketplace-details.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />
                    Marketplace Details
                  </a>
                </li>
                <li>
                  <a href="portfolio.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />
                    Portfolios
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-group-title">UI Elements</li>
            <li className="dropdown">
              <a href="javascript:void(0)">
                <iconify-icon
                  icon="solar:document-text-outline"
                  className="menu-icon"
                />
                <span>Components</span>
              </a>
              <ul className="sidebar-submenu">
                <li>
                  <a href="typography.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />
                    Typography
                  </a>
                </li>
                <li>
                  <a href="colors.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                    Colors
                  </a>
                </li>
                <li>
                  <a href="button.html">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto" />{" "}
                    Button
                  </a>
                </li>
                <li>
                  <a href="dropdown.html">
                    <i className="ri-circle-fill circle-icon text-lilac-600 w-auto" />{" "}
                    Dropdown
                  </a>
                </li>
                <li>
                  <a href="alert.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                    Alerts
                  </a>
                </li>
                <li>
                  <a href="card.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                    Card
                  </a>
                </li>
                <li>
                  <a href="carousel.html">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                    Carousel
                  </a>
                </li>
                <li>
                  <a href="avatar.html">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto" />{" "}
                    Avatars
                  </a>
                </li>
                <li>
                  <a href="progress.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                    Progress bar
                  </a>
                </li>
                <li>
                  <a href="tabs.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                    Tab &amp; Accordion
                  </a>
                </li>
                <li>
                  <a href="pagination.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />
                    Pagination
                  </a>
                </li>
                <li>
                  <a href="badges.html">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                    Badges
                  </a>
                </li>
                <li>
                  <a href="tooltip.html">
                    <i className="ri-circle-fill circle-icon text-lilac-600 w-auto" />{" "}
                    Tooltip &amp; Popover
                  </a>
                </li>
                <li>
                  <a href="videos.html">
                    <i className="ri-circle-fill circle-icon text-cyan w-auto" />{" "}
                    Videos
                  </a>
                </li>
                <li>
                  <a href="star-rating.html">
                    <i className="ri-circle-fill circle-icon text-indigo w-auto" />{" "}
                    Star Ratings
                  </a>
                </li>
                <li>
                  <a href="tags.html">
                    <i className="ri-circle-fill circle-icon text-purple w-auto" />{" "}
                    Tags
                  </a>
                </li>
                <li>
                  <a href="list.html">
                    <i className="ri-circle-fill circle-icon text-red w-auto" /> List
                  </a>
                </li>
                <li>
                  <a href="calendar.html">
                    <i className="ri-circle-fill circle-icon text-yellow w-auto" />{" "}
                    Calendar
                  </a>
                </li>
                <li>
                  <a href="radio.html">
                    <i className="ri-circle-fill circle-icon text-orange w-auto" />{" "}
                    Radio
                  </a>
                </li>
                <li>
                  <a href="switch.html">
                    <i className="ri-circle-fill circle-icon text-pink w-auto" />{" "}
                    Switch
                  </a>
                </li>
                <li>
                  <a href="image-upload.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                    Upload
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)">
                <iconify-icon icon="heroicons:document" className="menu-icon" />
                <span>Forms</span>
              </a>
              <ul className="sidebar-submenu">
                <li>
                  <a href="form.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                    Input Forms
                  </a>
                </li>
                <li>
                  <a href="form-layout.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                    Input Layout
                  </a>
                </li>
                <li>
                  <a href="form-validation.html">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto" />{" "}
                    Form Validation
                  </a>
                </li>
                <li>
                  <a href="wizard.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                    Form Wizard
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)">
                <iconify-icon icon="mingcute:storage-line" className="menu-icon" />
                <span>Table</span>
              </a>
              <ul className="sidebar-submenu">
                <li>
                  <a href="table-basic.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                    Basic Table
                  </a>
                </li>
                <li>
                  <a href="table-data.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                    Data Table
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)">
                <iconify-icon icon="solar:pie-chart-outline" className="menu-icon" />
                <span>Chart</span>
              </a>
              <ul className="sidebar-submenu">
                <li>
                  <a href="line-chart.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                    Line Chart
                  </a>
                </li>
                <li>
                  <a href="column-chart.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                    Column Chart
                  </a>
                </li>
                <li>
                  <a href="pie-chart.html">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto" />{" "}
                    Pie Chart
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="widgets.html">
                <iconify-icon icon="fe:vector" className="menu-icon" />
                <span>Widgets</span>
              </a>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)">
                <iconify-icon
                  icon="flowbite:users-group-outline"
                  className="menu-icon"
                />
                <span>Users</span>
              </a>
              <ul className="sidebar-submenu">
                <li>
                  <a href="users-list.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                    Users List
                  </a>
                </li>
                <li>
                  <a href="users-grid.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                    Users Grid
                  </a>
                </li>
                <li>
                  <a href="add-user.html">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                    Add User
                  </a>
                </li>
                <li>
                  <a href="view-profile.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                    View Profile
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)">
                <i className="ri-user-settings-line" />
                <span>Role &amp; Access</span>
              </a>
              <ul className="sidebar-submenu">
                <li>
                  <a href="role-access.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                    Role &amp; Access
                  </a>
                </li>
                <li>
                  <a href="assign-role.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                    Assign Role
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-group-title">Application</li>
            <li className="dropdown">
              <a href="javascript:void(0)">
                <iconify-icon icon="simple-line-icons:vector" className="menu-icon" />
                <span>Authentication</span>
              </a>
              <ul className="sidebar-submenu">
                <li>
                  <a href="sign-in.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="sign-up.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="forgot-password.html">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                    Forgot Password
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="gallery.html">
                <iconify-icon
                  icon="solar:gallery-wide-linear"
                  className="menu-icon"
                />
                <span>Gallery</span>
              </a>
            </li>
            <li>
              <a href="pricing.html">
                <iconify-icon
                  icon="hugeicons:money-send-square"
                  className="menu-icon"
                />
                <span>Pricing</span>
              </a>
            </li>
            <li>
              <a href="faq.html">
                <iconify-icon
                  icon="mage:message-question-mark-round"
                  className="menu-icon"
                />
                <span>FAQs.</span>
              </a>
            </li>
            <li>
              <a href="error.html">
                <iconify-icon icon="streamline:straight-face" className="menu-icon" />
                <span>404</span>
              </a>
            </li>
            <li>
              <a href="terms-condition.html">
                <iconify-icon icon="octicon:info-24" className="menu-icon" />
                <span>Terms &amp; Conditions</span>
              </a>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)">
                <iconify-icon
                  icon="icon-park-outline:setting-two"
                  className="menu-icon"
                />
                <span>Settings</span>
              </a>
              <ul className="sidebar-submenu">
                <li>
                  <a href="company.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                    Company
                  </a>
                </li>
                <li>
                  <a href="notification.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />
                    Notification
                  </a>
                </li>
                <li>
                  <a href="notification-alert.html">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" />
                    Notification Alert
                  </a>
                </li>
                <li>
                  <a href="theme.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                    Theme
                  </a>
                </li>
                <li>
                  <a href="currencies.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />
                    Currencies
                  </a>
                </li>
                <li>
                  <a href="language.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                    Languages
                  </a>
                </li>
                <li>
                  <a href="payment-gateway.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                    Payment Gateway
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>

      <main className="dashboard-main">

        <div className="navbar-header">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="d-flex flex-wrap align-items-center gap-4">
                <button type="button" className="sidebar-toggle">
                  <iconify-icon
                    icon="heroicons:bars-3-solid"
                    className="icon text-2xl non-active"
                  />
                  <iconify-icon
                    icon="iconoir:arrow-right"
                    className="icon text-2xl active"
                  />
                </button>
                <button type="button" className="sidebar-mobile-toggle">
                  <iconify-icon icon="heroicons:bars-3-solid" className="icon" />
                </button>
                <form className="navbar-search">
                  <input type="text" name="search" placeholder="Search" />
                  <iconify-icon icon="ion:search-outline" className="icon" />
                </form>
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex flex-wrap align-items-center gap-3">
                <button
                  type="button"
                  data-theme-toggle=""
                  className="w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                />
                <div className="dropdown d-none d-sm-inline-block">
                  <button
                    className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="assets/images/lang-flag.png"
                      alt="image"
                      className="w-24 h-24 object-fit-cover rounded-circle"
                    />
                  </button>
                  <div className="dropdown-menu to-top dropdown-menu-sm">
                    <div className="py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                      <div>
                        <h6 className="text-lg text-primary-light fw-semibold mb-0">
                          Choose Your Language
                        </h6>
                      </div>
                    </div>
                    <div className="max-h-400-px overflow-y-auto scroll-sm pe-8">
                      <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                        <label
                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                          htmlFor="english"
                        >
                          <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            <img
                              src="assets/images/flags/flag1.png"
                              alt=""
                              className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                            />
                            <span className="text-md fw-semibold mb-0">English</span>
                          </span>
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="crypto"
                          id="english"
                        />
                      </div>
                      <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                        <label
                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                          htmlFor="japan"
                        >
                          <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            <img
                              src="assets/images/flags/flag2.png"
                              alt=""
                              className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                            />
                            <span className="text-md fw-semibold mb-0">Japan</span>
                          </span>
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="crypto"
                          id="japan"
                        />
                      </div>
                      <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                        <label
                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                          htmlFor="france"
                        >
                          <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            <img
                              src="assets/images/flags/flag3.png"
                              alt=""
                              className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                            />
                            <span className="text-md fw-semibold mb-0">France</span>
                          </span>
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="crypto"
                          id="france"
                        />
                      </div>
                      <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                        <label
                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                          htmlFor="germany"
                        >
                          <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            <img
                              src="assets/images/flags/flag4.png"
                              alt=""
                              className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                            />
                            <span className="text-md fw-semibold mb-0">Germany</span>
                          </span>
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="crypto"
                          id="germany"
                        />
                      </div>
                      <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                        <label
                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                          htmlFor="korea"
                        >
                          <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            <img
                              src="assets/images/flags/flag5.png"
                              alt=""
                              className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                            />
                            <span className="text-md fw-semibold mb-0">
                              South Korea
                            </span>
                          </span>
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="crypto"
                          id="korea"
                        />
                      </div>
                      <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                        <label
                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                          htmlFor="bangladesh"
                        >
                          <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            <img
                              src="assets/images/flags/flag6.png"
                              alt=""
                              className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                            />
                            <span className="text-md fw-semibold mb-0">Bangladesh</span>
                          </span>
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="crypto"
                          id="bangladesh"
                        />
                      </div>
                      <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                        <label
                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                          htmlFor="india"
                        >
                          <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            <img
                              src="assets/images/flags/flag7.png"
                              alt=""
                              className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                            />
                            <span className="text-md fw-semibold mb-0">India</span>
                          </span>
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="crypto"
                          id="india"
                        />
                      </div>
                      <div className="form-check style-check d-flex align-items-center justify-content-between">
                        <label
                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                          htmlFor="canada"
                        >
                          <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            <img
                              src="assets/images/flags/flag8.png"
                              alt=""
                              className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                            />
                            <span className="text-md fw-semibold mb-0">Canada</span>
                          </span>
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="crypto"
                          id="canada"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Language dropdown end */}
                <div className="dropdown">
                  <button
                    className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <iconify-icon
                      icon="mage:email"
                      className="text-primary-light text-xl"
                    />
                  </button>
                  <div className="dropdown-menu to-top dropdown-menu-lg p-0">
                    <div className="m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                      <div>
                        <h6 className="text-lg text-primary-light fw-semibold mb-0">
                          Message
                        </h6>
                      </div>
                      <span className="text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center">
                        05
                      </span>
                    </div>
                    <div className="max-h-400-px overflow-y-auto scroll-sm pe-4">
                      <a
                        href="javascript:void(0)"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                      >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                          <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                            <img
                              src="assets/images/notification/profile-3.png"
                              alt=""
                            />
                            <span className="w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0" />
                          </span>
                          <div>
                            <h6 className="text-md fw-semibold mb-4">Kathryn Murphy</h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-100-px">
                              hey! there i’m...
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <span className="text-sm text-secondary-light flex-shrink-0">
                            12:30 PM
                          </span>
                          <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle">
                            8
                          </span>
                        </div>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                      >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                          <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                            <img
                              src="assets/images/notification/profile-4.png"
                              alt=""
                            />
                            <span className="w-8-px h-8-px  bg-neutral-300 rounded-circle position-absolute end-0 bottom-0" />
                          </span>
                          <div>
                            <h6 className="text-md fw-semibold mb-4">Kathryn Murphy</h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-100-px">
                              hey! there i’m...
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <span className="text-sm text-secondary-light flex-shrink-0">
                            12:30 PM
                          </span>
                          <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle">
                            2
                          </span>
                        </div>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50"
                      >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                          <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                            <img
                              src="assets/images/notification/profile-5.png"
                              alt=""
                            />
                            <span className="w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0" />
                          </span>
                          <div>
                            <h6 className="text-md fw-semibold mb-4">Kathryn Murphy</h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-100-px">
                              hey! there i’m...
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <span className="text-sm text-secondary-light flex-shrink-0">
                            12:30 PM
                          </span>
                          <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-neutral-400 rounded-circle">
                            0
                          </span>
                        </div>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50"
                      >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                          <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                            <img
                              src="assets/images/notification/profile-6.png"
                              alt=""
                            />
                            <span className="w-8-px h-8-px bg-neutral-300 rounded-circle position-absolute end-0 bottom-0" />
                          </span>
                          <div>
                            <h6 className="text-md fw-semibold mb-4">Kathryn Murphy</h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-100-px">
                              hey! there i’m...
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <span className="text-sm text-secondary-light flex-shrink-0">
                            12:30 PM
                          </span>
                          <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-neutral-400 rounded-circle">
                            0
                          </span>
                        </div>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                      >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                          <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                            <img
                              src="assets/images/notification/profile-7.png"
                              alt=""
                            />
                            <span className="w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0" />
                          </span>
                          <div>
                            <h6 className="text-md fw-semibold mb-4">Kathryn Murphy</h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-100-px">
                              hey! there i’m...
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <span className="text-sm text-secondary-light flex-shrink-0">
                            12:30 PM
                          </span>
                          <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle">
                            8
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="text-center py-12 px-16">
                      <a
                        href="javascript:void(0)"
                        className="text-primary-600 fw-semibold text-md"
                      >
                        See All Message
                      </a>
                    </div>
                  </div>
                </div>
                {/* Message dropdown end */}
                <div className="dropdown">
                  <button
                    className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <iconify-icon
                      icon="iconoir:bell"
                      className="text-primary-light text-xl"
                    />
                  </button>
                  <div className="dropdown-menu to-top dropdown-menu-lg p-0">
                    <div className="m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                      <div>
                        <h6 className="text-lg text-primary-light fw-semibold mb-0">
                          Notifications
                        </h6>
                      </div>
                      <span className="text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center">
                        05
                      </span>
                    </div>
                    <div className="max-h-400-px overflow-y-auto scroll-sm pe-4">
                      <a
                        href="javascript:void(0)"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                      >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                          <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                            <iconify-icon
                              icon="bitcoin-icons:verify-outline"
                              className="icon text-xxl"
                            />
                          </span>
                          <div>
                            <h6 className="text-md fw-semibold mb-4">
                              Congratulations
                            </h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                              Your profile has been Verified. Your profile has been
                              Verified
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-secondary-light flex-shrink-0">
                          23 Mins ago
                        </span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50"
                      >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                          <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                            <img
                              src="assets/images/notification/profile-1.png"
                              alt=""
                            />
                          </span>
                          <div>
                            <h6 className="text-md fw-semibold mb-4">
                              Ronald Richards
                            </h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                              You can stitch between artboards
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-secondary-light flex-shrink-0">
                          23 Mins ago
                        </span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                      >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                          <span className="w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                            AM
                          </span>
                          <div>
                            <h6 className="text-md fw-semibold mb-4">Arlene McCoy</h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                              Invite you to prototyping
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-secondary-light flex-shrink-0">
                          23 Mins ago
                        </span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50"
                      >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                          <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                            <img
                              src="assets/images/notification/profile-2.png"
                              alt=""
                            />
                          </span>
                          <div>
                            <h6 className="text-md fw-semibold mb-4">Annette Black</h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                              Invite you to prototyping
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-secondary-light flex-shrink-0">
                          23 Mins ago
                        </span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                      >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                          <span className="w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                            DR
                          </span>
                          <div>
                            <h6 className="text-md fw-semibold mb-4">
                              Darlene Robertson
                            </h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                              Invite you to prototyping
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-secondary-light flex-shrink-0">
                          23 Mins ago
                        </span>
                      </a>
                    </div>
                    <div className="text-center py-12 px-16">
                      <a
                        href="javascript:void(0)"
                        className="text-primary-600 fw-semibold text-md"
                      >
                        See All Notification
                      </a>
                    </div>
                  </div>
                </div>
                {/* Notification dropdown end */}
                <div className="dropdown">
                  <button
                    className="d-flex justify-content-center align-items-center rounded-circle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="assets/images/user.png"
                      alt="image"
                      className="w-40-px h-40-px object-fit-cover rounded-circle"
                    />
                  </button>
                  <div className="dropdown-menu to-top dropdown-menu-sm">
                    <div className="py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                      <div>
                        <h6 className="text-lg text-primary-light fw-semibold mb-2">
                          Shaidul Islam
                        </h6>
                        <span className="text-secondary-light fw-medium text-sm">
                          Admin
                        </span>
                      </div>
                      <button type="button" className="hover-text-danger">
                        <iconify-icon
                          icon="radix-icons:cross-1"
                          className="icon text-xl"
                        />
                      </button>
                    </div>
                    <ul className="to-top-list">
                      <li>
                        <a
                          className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                          href="view-profile.html"
                        >
                          <iconify-icon
                            icon="solar:user-linear"
                            className="icon text-xl"
                          />{" "}
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                          href="email.html"
                        >
                          <iconify-icon
                            icon="tabler:message-check"
                            className="icon text-xl"
                          />{" "}
                          Inbox
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                          href="company.html"
                        >
                          <iconify-icon
                            icon="icon-park-outline:setting-two"
                            className="icon text-xl"
                          />
                          Setting
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-danger d-flex align-items-center gap-3"
                          href="javascript:void(0)"
                        >
                          <iconify-icon icon="lucide:power" className="icon text-xl" />{" "}
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Profile dropdown end */}
              </div>
            </div>
          </div>
        </div>

        {/* dashboard-main-body */}
        <div className='dashboard-main-body'>
          {children}
        </div>


        {/* Footer section */}
        <footer className="d-footer">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <p className="mb-0">© 2024 WowDash. All Rights Reserved.</p>
            </div>
            <div className="col-auto">
              <p className="mb-0">
                Made by <span className="text-primary-600">wowtheme7</span>
              </p>
            </div>
          </div>
        </footer>



      </main>

    </>
  )
}

export default MasterLayout