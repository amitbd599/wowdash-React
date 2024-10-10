import React, { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Preloader from "../helper/Preloader";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation } from "react-router-dom";

const MasterLayout = ({ children }) => {
  const location = useLocation(); // Hook to get the current route

  useEffect(() => {
    // Function to handle dropdown clicks
    const handleDropdownClick = (event) => {
      event.preventDefault();
      const clickedLink = event.currentTarget;
      const clickedDropdown = clickedLink.closest('.dropdown');

      if (!clickedDropdown) return;

      const isActive = clickedDropdown.classList.contains('active');

      // Close all dropdowns
      const allDropdowns = document.querySelectorAll('.sidebar-menu .dropdown');
      allDropdowns.forEach((dropdown) => {
        dropdown.classList.remove('active');
      });

      // Toggle the clicked dropdown
      if (!isActive) {
        clickedDropdown.classList.add('active');
      }
    };

    // Attach click event listeners to all dropdown triggers
    const dropdownTriggers = document.querySelectorAll('.sidebar-menu .dropdown > a, .sidebar-menu .dropdown > Link');

    dropdownTriggers.forEach((trigger) => {
      trigger.addEventListener('click', handleDropdownClick);
    });

    // Function to open submenu based on current route
    const openActiveDropdown = () => {
      const allDropdowns = document.querySelectorAll('.sidebar-menu .dropdown');
      allDropdowns.forEach((dropdown) => {
        const submenuLinks = dropdown.querySelectorAll('.sidebar-submenu li a');
        submenuLinks.forEach((link) => {
          if (link.getAttribute('href') === location.pathname || link.getAttribute('to') === location.pathname) {
            dropdown.classList.add('active');
          }
        });
      });
    };

    // Open the submenu that contains the active route
    openActiveDropdown();

    // Optional: Close dropdowns when clicking outside the sidebar
    const handleClickOutside = (event) => {
      if (!event.target.closest('.sidebar-menu')) {
        const allDropdowns = document.querySelectorAll('.sidebar-menu .dropdown');
        allDropdowns.forEach((dropdown) => {
          dropdown.classList.remove('active');
        });
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup event listeners on unmount
    return () => {
      dropdownTriggers.forEach((trigger) => {
        trigger.removeEventListener('click', handleDropdownClick);
      });
      document.removeEventListener('click', handleClickOutside);
    };
  }, [location.pathname]);



  return (
    <>
      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* sidebar */}
      <aside className="sidebar">
        <button type="button" className="sidebar-close-btn">
          <Icon icon="radix-icons:cross-2" />
        </button>
        <div>
          <Link to="/" className="sidebar-logo">
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
          </Link>
        </div>
        <div className="sidebar-menu-area">
          <ul className="sidebar-menu" id="sidebar-menu">
            <li className="dropdown">
              <Link to="#">
                <Icon icon="solar:home-smile-angle-outline" className="menu-icon" />
                <span>Dashboard</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> AI
                  </Link>
                </li>
                <li>
                  <Link to="/index-2">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" /> CRM
                  </Link>
                </li>
                <li>
                  <Link to="/index-3">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" /> eCommerce
                  </Link>
                </li>
                <li>
                  <Link to="/index-4">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />
                    Cryptocurrency
                  </Link>
                </li>
                <li>
                  <Link to="/index-5">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto" /> Investment
                  </Link>
                </li>
                <li>
                  <Link to="/index-6">
                    <i className="ri-circle-fill circle-icon text-purple w-auto" /> LMS
                  </Link>
                </li>
                <li>
                  <Link to="/index-7">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" /> NFT &amp; Gaming
                  </Link>
                </li>
              </ul>
            </li>

            <li className="sidebar-menu-group-title">Application</li>
            <li>
              <Link to="/email">
                <Icon icon="mage:email" className="menu-icon" />
                <span>Email</span>
              </Link>
            </li>
            <li>
              <Link to="/chat-message">
                <Icon icon="bi:chat-dots" className="menu-icon" />
                <span>Chat</span>
              </Link>
            </li>
            <li>
              <Link to="/calendar-main">
                <Icon icon="solar:calendar-outline" className="menu-icon" />
                <span>Calendar</span>
              </Link>
            </li>
            <li>
              <Link to="/kanban">
                <Icon icon="material-symbols:map-outline" className="menu-icon" />
                <span>Kanban</span>
              </Link>
            </li>

            {/* Invoice Dropdown */}
            <li className="dropdown">
              <Link to="#">
                <Icon icon="hugeicons:invoice-03" className="menu-icon" />
                <span>Invoice</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/invoice-list">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> List
                  </Link>
                </li>
                <li>
                  <Link to="/invoice-preview">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />
                    Preview
                  </Link>
                </li>
                <li>
                  <Link to="/invoice-add">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" /> Add new
                  </Link>
                </li>
                <li>
                  <Link to="/invoice-edit">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Edit
                  </Link>
                </li>
              </ul>
            </li>

            {/* Ai Application Dropdown */}
            <li className="dropdown">
              <Link to="#">
                <i className="ri-robot-2-line" />
                <span>Ai Application</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/text-generator">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Text Generator
                  </Link>
                </li>
                <li>
                  <Link to="/code-generator">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Code Generator
                  </Link>
                </li>
                <li>
                  <Link to="/image-generator">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" /> Image Generator
                  </Link>
                </li>
                <li>
                  <Link to="/voice-generator">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Voice Generator
                  </Link>
                </li>
                <li>
                  <Link to="/video-generator">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto" /> Video Generator
                  </Link>
                </li>
              </ul>
            </li>

            {/* Crypto Currency Dropdown */}
            <li className="dropdown">
              <Link to="#">
                <i className="ri-robot-2-line" />
                <span>Crypto Currency</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/wallet">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Wallet
                  </Link>
                </li>
                <li>
                  <Link to="/marketplace">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link to="/marketplace-details">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />
                    Marketplace Details
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />
                    Portfolios
                  </Link>
                </li>
              </ul>
            </li>

            <li className="sidebar-menu-group-title">UI Elements</li>

            {/* Components Dropdown */}
            <li className="dropdown">
              <Link to="#">
                <Icon icon="solar:document-text-outline" className="menu-icon" />
                <span>Components</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/typography">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />
                    Typography
                  </Link>
                </li>
                <li>
                  <Link to="/colors">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Colors
                  </Link>
                </li>
                <li>
                  <Link to="/button">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto" /> Button
                  </Link>
                </li>
                <li>
                  <Link to="/dropdown">
                    <i className="ri-circle-fill circle-icon text-lilac-600 w-auto" /> Dropdown
                  </Link>
                </li>
                <li>
                  <Link to="/alert">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Alerts
                  </Link>
                </li>
                <li>
                  <Link to="/card">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Card
                  </Link>
                </li>
                <li>
                  <Link to="/carousel">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" /> Carousel
                  </Link>
                </li>
                <li>
                  <Link to="/avatar">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto" /> Avatars
                  </Link>
                </li>
                <li>
                  <Link to="/progress">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Progress bar
                  </Link>
                </li>
                <li>
                  <Link to="/tabs">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Tab &amp; Accordion
                  </Link>
                </li>
                <li>
                  <Link to="/pagination">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" />
                    Pagination
                  </Link>
                </li>
                <li>
                  <Link to="/badges">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" /> Badges
                  </Link>
                </li>
                <li>
                  <Link to="/tooltip">
                    <i className="ri-circle-fill circle-icon text-lilac-600 w-auto" /> Tooltip &amp; Popover
                  </Link>
                </li>
                <li>
                  <Link to="/videos">
                    <i className="ri-circle-fill circle-icon text-cyan w-auto" /> Videos
                  </Link>
                </li>
                <li>
                  <Link to="/star-rating">
                    <i className="ri-circle-fill circle-icon text-indigo w-auto" /> Star Ratings
                  </Link>
                </li>
                <li>
                  <Link to="/tags">
                    <i className="ri-circle-fill circle-icon text-purple w-auto" /> Tags
                  </Link>
                </li>
                <li>
                  <Link to="/list">
                    <i className="ri-circle-fill circle-icon text-red w-auto" /> List
                  </Link>
                </li>
                <li>
                  <Link to="/calendar">
                    <i className="ri-circle-fill circle-icon text-yellow w-auto" /> Calendar
                  </Link>
                </li>
                <li>
                  <Link to="/radio">
                    <i className="ri-circle-fill circle-icon text-orange w-auto" /> Radio
                  </Link>
                </li>
                <li>
                  <Link to="/switch">
                    <i className="ri-circle-fill circle-icon text-pink w-auto" /> Switch
                  </Link>
                </li>
                <li>
                  <Link to="/image-upload">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Upload
                  </Link>
                </li>
              </ul>
            </li>

            {/* Forms Dropdown */}
            <li className="dropdown">
              <Link to="#">
                <Icon icon="heroicons:document" className="menu-icon" />
                <span>Forms</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/form">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Input Forms
                  </Link>
                </li>
                <li>
                  <Link to="/form-layout">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Input Layout
                  </Link>
                </li>
                <li>
                  <Link to="/form-validation">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto" /> Form Validation
                  </Link>
                </li>
                <li>
                  <Link to="/wizard">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Form Wizard
                  </Link>
                </li>
              </ul>
            </li>

            {/* Table Dropdown */}
            <li className="dropdown">
              <Link to="#">
                <Icon icon="mingcute:storage-line" className="menu-icon" />
                <span>Table</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/table-basic">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Basic Table
                  </Link>
                </li>
                <li>
                  <Link to="/table-data">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Data Table
                  </Link>
                </li>
              </ul>
            </li>

            {/* Chart Dropdown */}
            <li className="dropdown">
              <Link to="#">
                <Icon icon="solar:pie-chart-outline" className="menu-icon" />
                <span>Chart</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/line-chart">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Line Chart
                  </Link>
                </li>
                <li>
                  <Link to="/column-chart">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Column Chart
                  </Link>
                </li>
                <li>
                  <Link to="/pie-chart">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto" /> Pie Chart
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/widgets">
                <Icon icon="fe:vector" className="menu-icon" />
                <span>Widgets</span>
              </Link>
            </li>

            {/* Users Dropdown */}
            <li className="dropdown">
              <Link to="#">
                <Icon icon="flowbite:users-group-outline" className="menu-icon" />
                <span>Users</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/users-list">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Users List
                  </Link>
                </li>
                <li>
                  <Link to="/users-grid">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Users Grid
                  </Link>
                </li>
                <li>
                  <Link to="/add-user">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" /> Add User
                  </Link>
                </li>
                <li>
                  <Link to="/view-profile">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" /> View Profile
                  </Link>
                </li>
              </ul>
            </li>

            {/* Role & Access Dropdown */}
            <li className="dropdown">
              <Link to="#">
                <i className="ri-user-settings-line" />
                <span>Role &amp; Access</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/role-access">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Role &amp; Access
                  </Link>
                </li>
                <li>
                  <Link to="/assign-role">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Assign Role
                  </Link>
                </li>
              </ul>
            </li>

            <li className="sidebar-menu-group-title">Application</li>

            {/* Authentication Dropdown */}
            <li className="dropdown">
              <Link to="#">
                <Icon icon="simple-line-icons:vector" className="menu-icon" />
                <span>Authentication</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/sign-in">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/sign-up">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/forgot-password">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" /> Forgot Password
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/gallery">
                <Icon icon="solar:gallery-wide-linear" className="menu-icon" />
                <span>Gallery</span>
              </Link>
            </li>
            <li>
              <Link to="/pricing">
                <Icon icon="hugeicons:money-send-square" className="menu-icon" />
                <span>Pricing</span>
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <Icon icon="mage:message-question-mark-round" className="menu-icon" />
                <span>FAQs.</span>
              </Link>
            </li>
            <li>
              <Link to="/error">
                <Icon icon="streamline:straight-face" className="menu-icon" />
                <span>404</span>
              </Link>
            </li>
            <li>
              <Link to="/terms-condition">
                <Icon icon="octicon:info-24" className="menu-icon" />
                <span>Terms &amp; Conditions</span>
              </Link>
            </li>

            {/* Settings Dropdown */}
            <li className="dropdown">
              <Link to="#">
                <Icon icon="icon-park-outline:setting-two" className="menu-icon" />
                <span>Settings</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/company">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Company
                  </Link>
                </li>
                <li>
                  <Link to="/notification">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Notification
                  </Link>
                </li>
                <li>
                  <Link to="/notification-alert">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto" /> Notification Alert
                  </Link>
                </li>
                <li>
                  <Link to="/theme">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Theme
                  </Link>
                </li>
                <li>
                  <Link to="/currencies">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Currencies
                  </Link>
                </li>
                <li>
                  <Link to="/language">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Languages
                  </Link>
                </li>
                <li>
                  <Link to="/payment-gateway">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Payment Gateway
                  </Link>
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
                  <Icon
                    icon="heroicons:bars-3-solid"
                    className="icon text-2xl non-active"
                  />
                  <Icon
                    icon="iconoir:arrow-right"
                    className="icon text-2xl active"
                  />
                </button>
                <button type="button" className="sidebar-mobile-toggle">
                  <Icon
                    icon="heroicons:bars-3-solid"
                    className="icon"
                  />
                </button>
                <form className="navbar-search">
                  <input type="text" name="search" placeholder="Search" />
                  <Icon icon="ion:search-outline" className="icon" />
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
                            <span className="text-md fw-semibold mb-0">
                              English
                            </span>
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
                            <span className="text-md fw-semibold mb-0">
                              Japan
                            </span>
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
                            <span className="text-md fw-semibold mb-0">
                              France
                            </span>
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
                            <span className="text-md fw-semibold mb-0">
                              Germany
                            </span>
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
                            <span className="text-md fw-semibold mb-0">
                              Bangladesh
                            </span>
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
                            <span className="text-md fw-semibold mb-0">
                              India
                            </span>
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
                            <span className="text-md fw-semibold mb-0">
                              Canada
                            </span>
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
                    <Icon
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
                      <Link
                        to="#"
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
                            <h6 className="text-md fw-semibold mb-4">
                              Kathryn Murphy
                            </h6>
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
                      </Link>
                      <Link
                        to="#"
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
                            <h6 className="text-md fw-semibold mb-4">
                              Kathryn Murphy
                            </h6>
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
                      </Link>
                      <Link
                        to="#"
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
                            <h6 className="text-md fw-semibold mb-4">
                              Kathryn Murphy
                            </h6>
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
                      </Link>
                      <Link
                        to="#"
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
                            <h6 className="text-md fw-semibold mb-4">
                              Kathryn Murphy
                            </h6>
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
                      </Link>
                      <Link
                        to="#"
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
                            <h6 className="text-md fw-semibold mb-4">
                              Kathryn Murphy
                            </h6>
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
                      </Link>
                    </div>
                    <div className="text-center py-12 px-16">
                      <Link
                        to="#"
                        className="text-primary-600 fw-semibold text-md"
                      >
                        See All Message
                      </Link>
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
                    <Icon
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
                      <Link
                        to="#"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                      >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                          <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                            <Icon
                              icon="bitcoin-icons:verify-outline"
                              className="icon text-xxl"
                            />
                          </span>
                          <div>
                            <h6 className="text-md fw-semibold mb-4">
                              Congratulations
                            </h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                              Your profile has been Verified. Your profile has
                              been Verified
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-secondary-light flex-shrink-0">
                          23 Mins ago
                        </span>
                      </Link>
                      <Link
                        to="#"
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
                      </Link>
                      <Link
                        to="#"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                      >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                          <span className="w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                            AM
                          </span>
                          <div>
                            <h6 className="text-md fw-semibold mb-4">
                              Arlene McCoy
                            </h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                              Invite you to prototyping
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-secondary-light flex-shrink-0">
                          23 Mins ago
                        </span>
                      </Link>
                      <Link
                        to="#"
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
                            <h6 className="text-md fw-semibold mb-4">
                              Annette Black
                            </h6>
                            <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                              Invite you to prototyping
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-secondary-light flex-shrink-0">
                          23 Mins ago
                        </span>
                      </Link>
                      <Link
                        to="#"
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
                      </Link>
                    </div>
                    <div className="text-center py-12 px-16">
                      <Link
                        to="#"
                        className="text-primary-600 fw-semibold text-md"
                      >
                        See All Notification
                      </Link>
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
                        <Icon
                          icon="radix-icons:cross-1"
                          className="icon text-xl"
                        />
                      </button>
                    </div>
                    <ul className="to-top-list">
                      <li>
                        <Link
                          className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                          href="view-profile"
                        >
                          <Icon
                            icon="solar:user-linear"
                            className="icon text-xl"
                          />{" "}
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                          href="email"
                        >
                          <Icon
                            icon="tabler:message-check"
                            className="icon text-xl"
                          />{" "}
                          Inbox
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                          href="company"
                        >
                          <Icon
                            icon="icon-park-outline:setting-two"
                            className="icon text-xl"
                          />
                          Setting
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-danger d-flex align-items-center gap-3"
                          href="javascript:void(0)"
                        >
                          <Icon
                            icon="lucide:power"
                            className="icon text-xl"
                          />{" "}
                          Log Out
                        </Link>
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
        <div className="dashboard-main-body">{children}</div>

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
  );
};

export default MasterLayout;
