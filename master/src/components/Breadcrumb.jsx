import React from "react";
import { Icon } from '@iconify/react';
const Breadcrumb = () => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
      <h6 className="fw-semibold mb-0">Dashboard</h6>
      <ul className="d-flex align-items-center gap-2">
        <li className="fw-medium">
          <a
            href="index.html"
            className="d-flex align-items-center gap-1 hover-text-primary"
          >
            <Icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
            Dashboard
          </a>
        </li>
        <li> - </li>
        <li className="fw-medium">AI</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
