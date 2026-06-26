import { Link } from 'react-router-dom'

export default function Expenses() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Expenses</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Accounts</a></li>
                  <li className="breadcrumb-item active">Expenses</li>
              </ul>
          </div>
          <div className="card">
              <div className="row row-cols-1 row-cols-md-5 g-0">
                  <div className="col border-end">
                      <div className="d-flex flex-md-column flex-xl-row align-items-center align-items-md-start align-items-xl-center gap-2 p-4 bg-light bg-opacity-75">
                          <span className="d-block size-2 bg-primary rounded-circle"></span>
                          <h6 className="mb-0 fs-16 fw-medium text-truncate overflow-hidden">Total Expenses</h6>
                      </div>
                      <div className="p-4 mt-5 overflow-hidden text-truncate">
                          <h4 className="mb-2 font-base">$92,780</h4>
                          <span className="text-muted d-flex flex-md-column flex-xl-row">
                              <span className="text-success fw-medium me-2">
                                  <i data-lucide="trending-up" className="size-4 me-1"></i>9.8%
                              </span>
                              All-time spending
                          </span>
                      </div>
                  </div>
                  <div className="col border-end">
                      <div className="d-flex flex-md-column flex-xl-row align-items-center align-items-md-start align-items-xl-center gap-2 p-4 bg-light bg-opacity-75">
                          <span className="d-block size-2 bg-success rounded-circle"></span>
                          <h6 className="mb-0 fs-16 fw-medium text-truncate overflow-hidden">Today’s Expenses</h6>
                      </div>
                      <div className="p-4 mt-5 overflow-hidden text-truncate">
                          <h4 className="mb-2 font-base">$2,140</h4>
                          <span className="text-muted d-flex flex-md-column flex-xl-row">
                              <span className="text-success fw-medium me-2">
                                  <i data-lucide="trending-up" className="size-4 me-1"></i>4.6%
                              </span>
                              Last 24 hours
                          </span>
                      </div>
                  </div>

                  <div className="col border-end">
                      <div className="d-flex flex-md-column flex-xl-row align-items-center align-items-md-start align-items-xl-center gap-2 p-4 bg-light bg-opacity-75">
                          <span className="d-block size-2 bg-warning rounded-circle"></span>
                          <h6 className="mb-0 fs-16 fw-medium text-truncate overflow-hidden">Pending Expenses</h6>
                      </div>
                      <div className="p-4 mt-5 overflow-hidden text-truncate">
                          <h4 className="mb-2 font-base">$6,320</h4>
                          <span className="text-muted d-flex flex-md-column flex-xl-row">
                              <span className="text-success fw-medium me-2">
                                  <i data-lucide="trending-up" className="size-4 me-1"></i>2.1%
                              </span>
                              Awaiting payment
                          </span>
                      </div>
                  </div>

                  <div className="col border-end">
                      <div className="d-flex flex-md-column flex-xl-row align-items-center align-items-md-start align-items-xl-center gap-2 p-4 bg-light bg-opacity-75">
                          <span className="d-block size-2 bg-info rounded-circle"></span>
                          <h6 className="mb-0 fs-16 fw-medium text-truncate overflow-hidden">Total Vouchers</h6>
                      </div>
                      <div className="p-4 mt-5 overflow-hidden text-truncate">
                          <h4 className="mb-2 font-base">842</h4>
                          <span className="text-muted d-flex flex-md-column flex-xl-row">
                              <span className="text-success fw-medium me-2">
                                  <i data-lucide="trending-up" className="size-4 me-1"></i>7.2%
                              </span>
                              Expense records
                          </span>
                      </div>
                  </div>
                  <div className="col">
                      <div className="d-flex flex-md-column flex-xl-row align-items-center align-items-md-start align-items-xl-center gap-2 p-4 bg-light bg-opacity-75">
                          <span className="d-block size-2 bg-danger rounded-circle"></span>
                          <h6 className="mb-0 fs-16 fw-medium text-truncate overflow-hidden">Avg / Expense</h6>
                      </div>
                      <div className="p-4 mt-5 overflow-hidden text-truncate">
                          <h4 className="mb-2 font-base">$110.20</h4>
                          <span className="text-muted d-flex flex-md-column flex-xl-row">
                              <span className="text-danger fw-medium me-2">
                                  <i data-lucide="trending-down" className="size-4 me-1"></i>3.4%
                              </span>
                              Cost efficiency
                          </span>
                      </div>
                  </div>
              </div>
          </div>

          <div className="card">
              <div className="card-header">
                  <div className="d-flex flex-wrap gap-4 align-items-center gap-2 justify-content-between mb-5">
                      <h5 className="card-title mb-1">Expenses</h5>
                      <div className="d-flex flex-wrap gap-2 align-items-center gap-2">
                          <a href="#" className="avatar size-10 bg-warning-subtle rounded p-2">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANESURBVHic7ZtLaBNRFIa/O5nWakJpfaXWBwU1LkQQxI2gIIqvigtBN4JrwZUbQbAbF+5UBBHdiO5UFF8gIihoRVERtVqQLkRqrH3Z2odNjZ05LtxqZnLndm5a54Nswnn88+fezJnJRBESeXMmh5s6gi9bUCwAVNjcknQ+/Pv7jiv0vx8jnT2rdj84bKTXXwh1ENJ2bgfKvwqkjSv4lwEAn+5DcQTmr+5Q+16vMN4bcIICpP38EpR/hck4+FAI9L7OycVcr8ielOnqgQbgeYeAjOnGZTPYMY9Lb/vk6p5qk2WDDVBsNNkwEoMd9Yy+HJC722tNlQw2QJhnqpkRhj6l+fKuV27typooF2YFmPm2N8lofgbdz/NybefyqKWCDahUxnpc+p99kBvNa6KUmboGABS+OXQ/fSE3m9fplpjaBgCMDzp0tT6RW5ubddKnvgEAP4cV+Wd35ObW/eWmTg8DAIo/FJ8fXZJrmw+VkzZ9DACYGIeuxyfl+qZjYVMq2wCnqvwcrwj51pawJlS2AZkFenl+EbqetsjtbWuDQl29DjFRnwPfg5FO8H6Vl+t7MNp3GVhaKqyyDVAOzF3556WDm8nCq5Ihlb0FoiLFmqCQ6W1ACBIDbAuwTWKAbQG2SQywLcA22oOQ73v0fGyjMNyPiGgL+D78UzsXFDXVDisaq3FTep+l9goY+dbF2FBfpIOPjjBe9Pg6OKFdQduAlGv09nwkqlz9nay9BTL185lYlKMwPBBpFRQKPdq5AJmZDg11+pc0ES6GFHXZJuqyTfolgMaaEr8NxsB/fxZIDLAtwDaJAbYF2CaZBHVbJ5NgMgkmk2AyCU4HEgNsC7BNYoBtAbaJdRJ03CrmLFxG7dzFum2NE+sk6E/8or/zA+J7um2NE/sk6KRccCpn58U6CTquS322qaIePrU+CdqmctaiJRIDbAuwTWKAbQG2SQywLcA2iQGBEYLN276TTpg/TfXFoGNycNxiYEhgEVF271pGwZ3VHhQSYgX4p4ARE3pixUkJVekDgWFBAWrVwc84shf4YURYHKiUkG44qtafKP2oOCHPAmrlwXs4shrkAqg84EcWaRoFpGZ41MzuINO4UW04fTxM2m9+4hqehcgNDwAAAABJRU5ErkJggg==" alt="Image" className="img-fluid" />
                          </a>
                          <a href="#" className="avatar size-10 bg-success-subtle rounded p-2">
                              <img src="data:image/png;base64,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" alt="Image" className="img-fluid" />
                          </a>
                          <a href="#" className="avatar size-10 bg-danger-subtle rounded p-2">
                              <img src="data:image/png;base64,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" alt="Image" className="img-fluid" />
                          </a>
                          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addExpenseModal"><i data-lucide="plus" className="size-4 me-1"></i>Add Expense</button>
                      </div>
                  </div>
                  <div className="d-flex flex-wrap gap-4 align-items-center gap-2 justify-content-between">
                      <div className="d-flex flex-wrap gap-2">
                          <div className="position-relative flex-shrink-0 w-48">
                              <input type="text" id="filterExpenseDate" className="form-control ps-10" data-datepicker data-date-format="dd-MM-yyyy" placeholder="Choose date" />
                              <i data-lucide="calendar" className="size-4 icon-dark position-absolute top-50 start-0 ms-4 translate-middle-y"></i>
                          </div>
                          <div id="expenseCategory" className="w-44"></div>
                          <div id="expensePaymentMethod" className="w-36"></div>
                          <div id="expenseType" className="w-36"></div>
                          <button type="button" className="btn btn-primary">Apply</button>
                          <button type="button" className="btn btn-light btn-icon"><i className="ri-loop-left-line"></i></button>
                      </div>
                      <div className="position-relative">
                          <input type="text" id="tableExpenseSearch" className="form-control ps-10" placeholder="Search expenses..." />
                          <i data-lucide="search" className="size-4 icon-dark position-absolute top-50 start-0 ms-4 translate-middle-y"></i>
                      </div>
                  </div>
              </div>
              <div className="card-body pt-0">
                  <div className="table-card table-responsive">
                      <table className="table text-nowrap align-middle mb-0">
                          <thead>
                              <tr className="bg-light border-bottom">
                                  <th>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checkAllExpenses" />
                                      </div>
                                  </th>
                                  <th className="fw-medium text-muted">Voucher</th>
                                  <th className="fw-medium text-muted">Payee</th>
                                  <th className="fw-medium text-muted">Category</th>
                                  <th className="fw-medium text-muted">Payment Method</th>
                                  <th className="fw-medium text-muted">Approved By</th>
                                  <th className="fw-medium text-muted">Date</th>
                                  <th className="fw-medium text-muted">Status</th>
                                  <th className="fw-medium text-muted">Amount</th>
                                  <th className="fw-medium text-muted">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">EXP-0019</a></td>
                                  <td>Office Rent</td>
                                  <td>Rent</td>
                                  <td><span className="fs-13 rounded fw-medium py-1 px-2 border text-reset">Bank</span></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-1-xhBXJtq9.png" className="size-8 rounded-circle" alt="Avatar" />
                                          <span className="fw-medium">Admin</span>
                                      </div>
                                  </td>
                                  <td>24 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Paid</span></td>
                                  <td>$2,500</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">EXP-0018</a></td>
                                  <td>Electricity Board</td>
                                  <td>Utilities</td>
                                  <td><span className="fs-13 rounded fw-medium py-1 px-2 border text-reset">Online</span></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-3-Bz6g7hsE.png" className="size-8 rounded-circle" alt="Avatar" />
                                          <span className="fw-medium">Accountant</span>
                                      </div>
                                  </td>
                                  <td>23 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Paid</span></td>
                                  <td>$320</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">EXP-0017</a></td>
                                  <td>Staff Salary</td>
                                  <td>Salary</td>
                                  <td><span className="fs-13 rounded fw-medium py-1 px-2 border text-reset">Bank</span></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-2-CroG7YJ0.png" className="size-8 rounded-circle" alt="Avatar" />
                                          <span className="fw-medium">Manager</span>
                                      </div>
                                  </td>
                                  <td>22 Dec, 2025</td>
                                  <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                  <td>$4,800</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">EXP-0016</a></td>
                                  <td>Courier Service</td>
                                  <td>Transportation</td>
                                  <td><span className="fs-13 rounded fw-medium py-1 px-2 border text-reset">Cash</span></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-4-7l52E1Lo.png" className="size-8 rounded-circle" alt="Avatar" />
                                          <span className="fw-medium">Cashier</span>
                                      </div>
                                  </td>
                                  <td>21 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Paid</span></td>
                                  <td>$180</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">EXP-0015</a></td>
                                  <td>Internet Provider</td>
                                  <td>Utilities</td>
                                  <td><span className="fs-13 rounded fw-medium py-1 px-2 border text-reset">Online</span></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-5-BsT8d_Co.png" className="size-8 rounded-circle" alt="Avatar" />
                                          <span className="fw-medium">Admin</span>
                                      </div>
                                  </td>
                                  <td>20 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Paid</span></td>
                                  <td>$120</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">EXP-0014</a></td>
                                  <td>Printer Maintenance</td>
                                  <td>Maintenance</td>
                                  <td><span className="fs-13 rounded fw-medium py-1 px-2 border text-reset">Cash</span></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-2-CroG7YJ0.png" className="size-8 rounded-circle" alt="Avatar" />
                                          <span className="fw-medium">Manager</span>
                                      </div>
                                  </td>
                                  <td>19 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Paid</span></td>
                                  <td>$90</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">EXP-0013</a></td>
                                  <td>Office Supplies</td>
                                  <td>Supplies</td>
                                  <td><span className="fs-13 rounded fw-medium py-1 px-2 border text-reset">Card</span></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-3-Bz6g7hsE.png" className="size-8 rounded-circle" alt="Avatar" />
                                          <span className="fw-medium">Accountant</span>
                                      </div>
                                  </td>
                                  <td>18 Dec, 2025</td>
                                  <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                  <td>$450</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">EXP-0012</a></td>
                                  <td>Fuel Expense</td>
                                  <td>Transportation</td>
                                  <td><span className="fs-13 rounded fw-medium py-1 px-2 border text-reset">Cash</span></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-4-7l52E1Lo.png" className="size-8 rounded-circle" alt="Avatar" />
                                          <span className="fw-medium">Cashier</span>
                                      </div>
                                  </td>
                                  <td>17 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Paid</span></td>
                                  <td>$260</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">EXP-0011</a></td>
                                  <td>Software Subscription</td>
                                  <td>IT Services</td>
                                  <td><span className="fs-13 rounded fw-medium py-1 px-2 border text-reset">Online</span></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-1-xhBXJtq9.png" className="size-8 rounded-circle" alt="Avatar" />
                                          <span className="fw-medium">Admin</span>
                                      </div>
                                  </td>
                                  <td>16 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Paid</span></td>
                                  <td>$99</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">EXP-0010</a></td>
                                  <td>Security Services</td>
                                  <td>Services</td>
                                  <td><span className="fs-13 rounded fw-medium py-1 px-2 border text-reset">Bank</span></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-6-BIO7_TUU.png" className="size-8 rounded-circle" alt="Avatar" />
                                          <span className="fw-medium">Supervisor</span>
                                      </div>
                                  </td>
                                  <td>15 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Paid</span></td>
                                  <td>$1,200</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className="row align-items-center g-3 mt-3">
                      <div className="col-md-6">
                          <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-10</b> of <b className="ms-1">19</b> Results</p>
                      </div>
                      <div className="col-md-6">
                          <nav aria-label="Page navigation example">
                              <ul className="pagination justify-content-center justify-content-md-end mb-0 products-pagination">
                                  <li className="page-item disabled"><a className="page-link" href="#"><i data-lucide="chevron-left" className="size-4"></i>Previous</a></li>
                                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                                  <li className="page-item"><a className="page-link" href="#">Next<i data-lucide="chevron-right" className="size-4"></i></a></li>
                              </ul>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
