import React from 'react'
import DefaultTable from './child/DefaultTable'
import BorderedTables from './child/BorderedTables'
import StripedRows from './child/StripedRows'
import StripedRowsTwo from './child/StripedRowsTwo'

const TableBasicLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultTable */}
            <DefaultTable />

            {/* BorderedTables */}
            <BorderedTables />

            {/* StripedRows */}
            <StripedRows />

            {/* StripedRowsTwo */}
            <StripedRowsTwo />



            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Tables Border Colors</h5>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table border-primary-table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <div className="form-check style-check d-flex align-items-center">
                                                <input className="form-check-input" type="checkbox" />
                                                <label className="form-check-label">S.L</label>
                                            </div>
                                        </th>
                                        <th scope="col">Transaction ID</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check style-check d-flex align-items-center">
                                                <input className="form-check-input" type="checkbox" />
                                                <label className="form-check-label">01</label>
                                            </div>
                                        </td>
                                        <td>5986124445445</td>
                                        <td>27 Mar 2024</td>
                                        <td>
                                            <span className="bg-warning-focus text-warning-main px-32 py-4 rounded-pill fw-medium text-sm">
                                                Pending
                                            </span>
                                        </td>
                                        <td>$20,000.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check style-check d-flex align-items-center">
                                                <input className="form-check-input" type="checkbox" />
                                                <label className="form-check-label">02</label>
                                            </div>
                                        </td>
                                        <td>5986124445445</td>
                                        <td>27 Mar 2024</td>
                                        <td>
                                            <span className="bg-danger-focus text-danger-main px-32 py-4 rounded-pill fw-medium text-sm">
                                                Rejected
                                            </span>
                                        </td>
                                        <td>$20,000.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check style-check d-flex align-items-center">
                                                <input className="form-check-input" type="checkbox" />
                                                <label className="form-check-label">03</label>
                                            </div>
                                        </td>
                                        <td>5986124445445</td>
                                        <td>27 Mar 2024</td>
                                        <td>
                                            <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                                                Completed
                                            </span>
                                        </td>
                                        <td>$20,000.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check style-check d-flex align-items-center">
                                                <input className="form-check-input" type="checkbox" />
                                                <label className="form-check-label">04</label>
                                            </div>
                                        </td>
                                        <td>5986124445445</td>
                                        <td>27 Mar 2024</td>
                                        <td>
                                            <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                                                Completed
                                            </span>
                                        </td>
                                        <td>$20,000.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check style-check d-flex align-items-center">
                                                <input className="form-check-input" type="checkbox" />
                                                <label className="form-check-label">05</label>
                                            </div>
                                        </td>
                                        <td>5986124445445</td>
                                        <td>27 Mar 2024</td>
                                        <td>
                                            <span className="bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm">
                                                Completed
                                            </span>
                                        </td>
                                        <td>$20,000.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* card end */}
            </div>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Tables Border Colors</h5>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table colored-row-table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" className="bg-base">
                                            Registered On
                                        </th>
                                        <th scope="col" className="bg-base">
                                            Users
                                        </th>
                                        <th scope="col" className="bg-base">
                                            Email
                                        </th>
                                        <th scope="col" className="bg-base">
                                            Plan
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="bg-primary-light">27 Mar 2024</td>
                                        <td className="bg-primary-light">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user1.png"
                                                    alt=""
                                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                />
                                                <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                    Dianne Russell
                                                </h6>
                                            </div>
                                        </td>
                                        <td className="bg-primary-light">random@gmail.com</td>
                                        <td className="bg-primary-light">Free</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-success-focus">27 Mar 2024</td>
                                        <td className="bg-success-focus">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user2.png"
                                                    alt=""
                                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                />
                                                <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                    Wade Warren
                                                </h6>
                                            </div>
                                        </td>
                                        <td className="bg-success-focus">random@gmail.com</td>
                                        <td className="bg-success-focus">Basic</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-info-focus">27 Mar 2024</td>
                                        <td className="bg-info-focus">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user3.png"
                                                    alt=""
                                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                />
                                                <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                    Albert Flores
                                                </h6>
                                            </div>
                                        </td>
                                        <td className="bg-info-focus">random@gmail.com</td>
                                        <td className="bg-info-focus">Standard </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-warning-focus">27 Mar 2024</td>
                                        <td className="bg-warning-focus">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user4.png"
                                                    alt=""
                                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                />
                                                <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                    Bessie Cooper
                                                </h6>
                                            </div>
                                        </td>
                                        <td className="bg-warning-focus">random@gmail.com</td>
                                        <td className="bg-warning-focus">Business </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-danger-focus">27 Mar 2024</td>
                                        <td className="bg-danger-focus">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user5.png"
                                                    alt=""
                                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                />
                                                <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                    Arlene McCoy
                                                </h6>
                                            </div>
                                        </td>
                                        <td className="bg-danger-focus">random@gmail.com</td>
                                        <td className="bg-danger-focus">Enterprise </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* card end */}
            </div>
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Tables Border Colors</h5>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table bordered-table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Users</th>
                                        <th scope="col">Invoice</th>
                                        <th scope="col">Items</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col" className="text-center">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user1.png"
                                                    alt=""
                                                    className="flex-shrink-0 me-12 radius-8"
                                                />
                                                <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                    Dianne Russell
                                                </span>
                                            </div>
                                        </td>
                                        <td>#6352148</td>
                                        <td>iPhone 14 max</td>
                                        <td>2</td>
                                        <td>$5,000.00</td>
                                        <td className="text-center">
                                            {" "}
                                            <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                                                Paid
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user2.png"
                                                    alt=""
                                                    className="flex-shrink-0 me-12 radius-8"
                                                />
                                                <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                    Wade Warren
                                                </span>
                                            </div>
                                        </td>
                                        <td>#6352148</td>
                                        <td>Laptop HPH </td>
                                        <td>3</td>
                                        <td>$1,000.00</td>
                                        <td className="text-center">
                                            {" "}
                                            <span className="bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user3.png"
                                                    alt=""
                                                    className="flex-shrink-0 me-12 radius-8"
                                                />
                                                <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                    Albert Flores
                                                </span>
                                            </div>
                                        </td>
                                        <td>#6352148</td>
                                        <td>Smart Watch </td>
                                        <td>7</td>
                                        <td>$1,000.00</td>
                                        <td className="text-center">
                                            {" "}
                                            <span className="bg-info-focus text-info-main px-24 py-4 rounded-pill fw-medium text-sm">
                                                Shipped
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user4.png"
                                                    alt=""
                                                    className="flex-shrink-0 me-12 radius-8"
                                                />
                                                <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                    Bessie Cooper
                                                </span>
                                            </div>
                                        </td>
                                        <td>#6352148</td>
                                        <td>Nike Air Shoe</td>
                                        <td>1</td>
                                        <td>$3,000.00</td>
                                        <td className="text-center">
                                            {" "}
                                            <span className="bg-danger-focus text-danger-main px-24 py-4 rounded-pill fw-medium text-sm">
                                                Canceled
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user5.png"
                                                    alt=""
                                                    className="flex-shrink-0 me-12 radius-8"
                                                />
                                                <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                    Arlene McCoy
                                                </span>
                                            </div>
                                        </td>
                                        <td>#6352148</td>
                                        <td>New Headphone </td>
                                        <td>5</td>
                                        <td>$4,000.00</td>
                                        <td className="text-center">
                                            {" "}
                                            <span className="bg-danger-focus text-danger-main px-24 py-4 rounded-pill fw-medium text-sm">
                                                Canceled
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* card end */}
            </div>
        </div>

    )
}

export default TableBasicLayer