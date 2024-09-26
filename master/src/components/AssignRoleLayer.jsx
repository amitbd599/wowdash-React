import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'



const AssignRoleLayer = () => {
    // Initial state for the checkboxes
    const [selectAll, setSelectAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, name: 'Kathryn Murphy', img: "assets/images/user-list/user-list1.png", role: 'Waiter', checked: false },
        { id: 2, name: 'Annette Black', img: "assets/images/user-list/user-list2.png", role: 'Manager', checked: false },
        { id: 3, name: 'Ronald Richards', img: "assets/images/user-list/user-list3.png", role: 'Project Manager', checked: false },
        { id: 4, name: 'Eleanor Pena', img: "assets/images/user-list/user-list4.png", role: 'Game Developer', checked: false },
        { id: 5, name: 'Leslie Alexander', img: "assets/images/user-list/user-list5.png", role: 'Head', checked: false },
        { id: 6, name: 'Albert Flores', img: "assets/images/user-list/user-list6.png", role: 'Management', checked: false },
        { id: 7, name: 'Jacob Jones', img: "assets/images/user-list/user-list7.png", role: 'Waiter', checked: false },
        { id: 8, name: 'Jerome Bell', img: "assets/images/user-list/user-list8.png", role: 'Waiter', checked: false },
        { id: 9, name: 'Marvin McKinney', img: "assets/images/user-list/user-list9.png", role: 'Waiter', checked: false },
        { id: 10, name: 'Cameron Williamson', img: "assets/images/user-list/user-list10.png", role: 'Admin', checked: false },
    ]);

    // Handle the change event for the "select all" checkbox
    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked);
        setCheckboxes(checkboxes.map(checkbox => ({ ...checkbox, checked })));
    };

    // Handle the change event for individual checkboxes
    const handleCheckboxChange = (id) => {
        const updatedCheckboxes = checkboxes.map(checkbox =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
        setCheckboxes(updatedCheckboxes);

        // If all checkboxes are checked, set "select all" as true; otherwise, set it as false
        const allChecked = updatedCheckboxes.every(checkbox => checkbox.checked);
        setSelectAll(allChecked);
    };
    return (
        <div className="card h-100 p-0 radius-12">
            <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
                <div className="d-flex align-items-center flex-wrap gap-3">
                    <span className="text-md fw-medium text-secondary-light mb-0">Show</span>
                    <select className="form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <form className="navbar-search">
                        <input
                            type="text"
                            className="bg-base h-40-px w-auto"
                            name="search"
                            placeholder="Search"
                        />
                        <Icon icon="ion:search-outline" className="icon" />
                    </form>
                    <select className="form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px">
                        <option>Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
            </div>
            <div className="card-body p-24">
                <div className="table-responsive scroll-sm">
                    <table className="table bordered-table sm-table mb-0">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input
                                                className="form-check-input radius-4 border input-form-dark"
                                                type="checkbox"
                                                name="checkbox"
                                                id="selectAll"
                                                checked={selectAll}
                                                onChange={handleSelectAll}
                                            />
                                        </div>
                                        S.L
                                    </div>
                                </th>
                                <th scope="col">Username</th>
                                <th scope="col" className="text-center">
                                    Role Permission
                                </th>
                                <th scope="col" className="text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                checkboxes.map((item, index) => <tr>
                                    <td key={index}>
                                        <div className="d-flex align-items-center gap-10">
                                            <div className="form-check style-check d-flex align-items-center">
                                                <input
                                                    className="form-check-input radius-4 border border-neutral-400"
                                                    type="checkbox"
                                                    name="checkbox"
                                                    checked={item.checked}
                                                    onChange={() => handleCheckboxChange(item.id)}
                                                />
                                            </div>
                                            {item.id}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={item.img}
                                                alt=""
                                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                            />
                                            <div className="flex-grow-1">
                                                <span className="text-md mb-0 fw-normal text-secondary-light">
                                                    {item.name}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">{item.role}</td>
                                    <td className="text-center">
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-outline-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Assign Role
                                            </button>
                                            <ul className="dropdown-menu" style={{}}>
                                                <li>
                                                    <a
                                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                                        href="javascript:void(0)"
                                                    >
                                                        Waiter
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                                        href="javascript:void(0)"
                                                    >
                                                        Manager
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                                        href="javascript:void(0)"
                                                    >
                                                        Project Manager
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                                        href="javascript:void(0)"
                                                    >
                                                        Game Developer
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                                        href="javascript:void(0)"
                                                    >
                                                        Head
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                                        href="javascript:void(0)"
                                                    >
                                                        Management
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24">
                    <span>Showing 1 to 10 of 12 entries</span>
                    <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">
                        <li className="page-item">
                            <a
                                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                                href="javascript:void(0)"
                            >
                                <Icon icon="ep:d-arrow-left" className="" />
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md bg-primary-600 text-white"
                                href="javascript:void(0)"
                            >
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px"
                                href="javascript:void(0)"
                            >
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                                href="javascript:void(0)"
                            >
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                                href="javascript:void(0)"
                            >
                                4
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                                href="javascript:void(0)"
                            >
                                5
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                                href="javascript:void(0)"
                            >
                                {" "}
                                <Icon icon="ep:d-arrow-right" className="" />{" "}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default AssignRoleLayer