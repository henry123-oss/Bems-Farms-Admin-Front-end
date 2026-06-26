import { Link } from 'react-router-dom'

export default function MoneyTransfer() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Money Transfer</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Accounts</a></li>
                  <li className="breadcrumb-item active">Money Transfer</li>
              </ul>
          </div>
          <div className="card">
              <div className="card-header pb-0">
                  <div className="d-flex flex-wrap gap-4 align-items-center gap-2 justify-content-between mb-4">
                      <div>
                          <h5 className="card-title mb-1">Money Transfer</h5>
                          <p className="text-muted">Manage your Money Transfer accounts and transactions.</p>
                      </div>
                      <div className="d-flex flex-wrap gap-2 align-items-center gap-2">
                          <div className="position-relative">
                              <input type="text" id="tableExpenseSearch" className="form-control ps-10" placeholder="Search accounts..." />
                              <i data-lucide="search" className="size-4 icon-dark position-absolute top-50 start-0 ms-4 translate-middle-y"></i>
                          </div>
                          <div id="statusFilter" className="w-32"></div>
                          <div id="amountFilter" className="w-40"></div>
                          <div className="position-relative flex-shrink-0 w-48">
                              <input type="text" id="filterExpenseDate" className="form-control ps-10" data-datepicker data-date-format="dd-MM-yyyy" placeholder="Choose date" />
                              <i data-lucide="calendar" className="size-4 icon-dark position-absolute top-50 start-0 ms-4 translate-middle-y"></i>
                          </div>
                          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#transferModal"><i data-lucide="plus" className="size-4 me-1"></i>Add Accounts</button>
                      </div>
                  </div>
                  <div className="d-flex flex-wrap gap-4 align-items-center gap-2 justify-content-between">
                      <ul className="nav nav-underline" id="moneyTransferTabs" role="tablist">
                          <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="all-transfers-tab" data-bs-toggle="tab" data-bs-target="#all-transfers-pane" type="button" role="tab" aria-controls="all-transfers-pane" aria-selected="true">All Transfers</button>
                          </li>
                          <li className="nav-item" role="presentation">
                              <button className="nav-link" id="pending-transfers-tab" data-bs-toggle="tab" data-bs-target="#pending-transfers-pane" type="button" role="tab" aria-controls="pending-transfers-pane" aria-selected="false">Pending</button>
                          </li>
                          <li className="nav-item" role="presentation">
                              <button className="nav-link" id="completed-transfers-tab" data-bs-toggle="tab" data-bs-target="#completed-transfers-pane" type="button" role="tab" aria-controls="completed-transfers-pane" aria-selected="false">Completed</button>
                          </li>
                          <li className="nav-item" role="presentation">
                              <button className="nav-link" id="failed-transfers-tab" data-bs-toggle="tab" data-bs-target="#failed-transfers-pane" type="button" role="tab" aria-controls="failed-transfers-pane" aria-selected="false">Failed</button>
                          </li>
                      </ul>
                      <div className="d-flex flex-wrap gap-4 align-items-center mb-1">
                          <div className="d-flex gap-3 align-items-center">
                              <label className="form-label flex-shrink-0 mb-0">Recipient :</label>
                              <input type="text" className="form-control border-0 p-0 w-36" placeholder="John Doe" />
                          </div>
                          <div className="d-flex gap-3 align-items-center">
                              <label className="form-label flex-shrink-0 mb-0">Account (Last Digits) :</label>
                              <input type="number" className="form-control border-0 p-0 w-14" placeholder="1218" />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card-body pt-0">
                  <div className="tab-content" id="moneyTransferTabsContent">
                      <div className="tab-pane show active" id="all-transfers-pane" role="tabpanel" aria-labelledby="all-transfers-tab" tabIndex="0">
                          <div className="table-card table-responsive">
                              <table className="table text-nowrap table-borderless align-middle mb-0">
                                  <thead>
                                      <tr className="border-bottom">
                                          <th>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" id="checkAllTransfers" />
                                              </div>
                                          </th>
                                          <th className="fw-medium text-muted">Transaction ID</th>
                                          <th className="fw-medium text-muted">From Account</th>
                                          <th className="fw-medium text-muted">To Account</th>
                                          <th className="fw-medium text-muted">Recipient</th>
                                          <th className="fw-medium text-muted">Amount</th>
                                          <th className="fw-medium text-muted">Currency</th>
                                          <th className="fw-medium text-muted">Status</th>
                                          <th className="fw-medium text-muted">Date</th>
                                          <th className="fw-medium text-muted">Action</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102458</a></td>
                                          <td>**** 2233</td>
                                          <td>**** 8899</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-3-Bz6g7hsE.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Emma Watson</span>
                                              </div>
                                          </td>
                                          <td>$1,100</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                          <td>17 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102459</a></td>
                                          <td>**** 3344</td>
                                          <td>**** 9988</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-4-7l52E1Lo.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Liam Carter</span>
                                              </div>
                                          </td>
                                          <td>$950</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>16 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102460</a></td>
                                          <td>**** 4455</td>
                                          <td>**** 2233</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-5-BsT8d_Co.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Olivia Taylor</span>
                                              </div>
                                          </td>
                                          <td>$2,500</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>15 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102461</a></td>
                                          <td>**** 5566</td>
                                          <td>**** 3344</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-6-BIO7_TUU.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>William Harris</span>
                                              </div>
                                          </td>
                                          <td>$1,750</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-danger-subtle text-danger border border-danger-subtle">Failed</span></td>
                                          <td>14 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102462</a></td>
                                          <td>**** 6677</td>
                                          <td>**** 4455</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-7-BMyy-xCq.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Ava Martinez</span>
                                              </div>
                                          </td>
                                          <td>$3,200</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>13 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102463</a></td>
                                          <td>**** 7788</td>
                                          <td>**** 5566</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-8-BAGm131G.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Mia Robinson</span>
                                              </div>
                                          </td>
                                          <td>$900</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                          <td>12 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102464</a></td>
                                          <td>**** 8899</td>
                                          <td>**** 6677</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-9-DB-6OyMr.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Lucas Walker</span>
                                              </div>
                                          </td>
                                          <td>$1,450</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>11 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102465</a></td>
                                          <td>**** 9900</td>
                                          <td>**** 7788</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-10-CzpspsdB.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Sophia Hall</span>
                                              </div>
                                          </td>
                                          <td>$2,750</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-danger-subtle text-danger border border-danger-subtle">Failed</span></td>
                                          <td>10 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102466</a></td>
                                          <td>**** 1011</td>
                                          <td>**** 8899</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-1-xhBXJtq9.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>James Allen</span>
                                              </div>
                                          </td>
                                          <td>$1,900</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>09 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102467</a></td>
                                          <td>**** 1122</td>
                                          <td>**** 9900</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-3-Bz6g7hsE.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Charlotte King</span>
                                              </div>
                                          </td>
                                          <td>$1,250</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>08 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <div className="row align-items-center g-3 mt-3">
                              <div className="col-md-6">
                                  <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-10</b> of <b className="ms-1">26</b> Results</p>
                              </div>
                              <div className="col-md-6">
                                  <nav aria-label="Page navigation example">
                                      <ul className="pagination justify-content-center justify-content-md-end mb-0 products-pagination">
                                          <li className="page-item disabled"><a className="page-link" href="#"><i data-lucide="chevron-left" className="size-4"></i>Previous</a></li>
                                          <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                          <li className="page-item"><a className="page-link" href="#">2</a></li>
                                          <li className="page-item"><a className="page-link" href="#">3</a></li>
                                          <li className="page-item"><a className="page-link" href="#">Next<i data-lucide="chevron-right" className="size-4"></i></a></li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                      <div className="tab-pane" id="pending-transfers-pane" role="tabpanel" aria-labelledby="pending-transfers-tab" tabIndex="0">
                          <div className="table-card table-responsive">
                              <table className="table text-nowrap table-borderless align-middle mb-0">
                                  <thead>
                                      <tr className="border-bottom">
                                          <th>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" id="checkAllPending" />
                                              </div>
                                          </th>
                                          <th className="fw-medium text-muted">Transaction ID</th>
                                          <th className="fw-medium text-muted">From Account</th>
                                          <th className="fw-medium text-muted">To Account</th>
                                          <th className="fw-medium text-muted">Recipient</th>
                                          <th className="fw-medium text-muted">Amount</th>
                                          <th className="fw-medium text-muted">Currency</th>
                                          <th className="fw-medium text-muted">Status</th>
                                          <th className="fw-medium text-muted">Date</th>
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
                                          <td><a href="#" className="link link-custom-primary">TXN-102470</a></td>
                                          <td>**** 3344</td>
                                          <td>**** 5566</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-2-CroG7YJ0.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>John Doe</span>
                                              </div>
                                          </td>
                                          <td>$500</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                          <td>24 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102471</a></td>
                                          <td>**** 4455</td>
                                          <td>**** 6677</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-3-Bz6g7hsE.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Emma Watson</span>
                                              </div>
                                          </td>
                                          <td>$750</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                          <td>23 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102472</a></td>
                                          <td>**** 5566</td>
                                          <td>**** 7788</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-4-7l52E1Lo.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Liam Carter</span>
                                              </div>
                                          </td>
                                          <td>$1,200</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                          <td>22 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102473</a></td>
                                          <td>**** 6677</td>
                                          <td>**** 8899</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-5-BsT8d_Co.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Olivia Taylor</span>
                                              </div>
                                          </td>
                                          <td>$1,500</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                          <td>21 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102474</a></td>
                                          <td>**** 7788</td>
                                          <td>**** 9900</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-6-BIO7_TUU.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>William Harris</span>
                                              </div>
                                          </td>
                                          <td>$800</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                          <td>20 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102475</a></td>
                                          <td>**** 8899</td>
                                          <td>**** 1011</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-7-BMyy-xCq.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Ava Martinez</span>
                                              </div>
                                          </td>
                                          <td>$1,100</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                          <td>19 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102476</a></td>
                                          <td>**** 9900</td>
                                          <td>**** 1122</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-8-BAGm131G.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Mia Robinson</span>
                                              </div>
                                          </td>
                                          <td>$650</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                          <td>18 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102477</a></td>
                                          <td>**** 1011</td>
                                          <td>**** 2233</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-9-DB-6OyMr.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Lucas Walker</span>
                                              </div>
                                          </td>
                                          <td>$900</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                          <td>17 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102478</a></td>
                                          <td>**** 3345</td>
                                          <td>**** 5567</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-10-CzpspsdB.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Henry Johnson</span>
                                              </div>
                                          </td>
                                          <td>$1,050</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                          <td>16 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102479</a></td>
                                          <td>**** 4456</td>
                                          <td>**** 6678</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-11-bzS6tHsV.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Sophia Brown</span>
                                              </div>
                                          </td>
                                          <td>$2,300</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Pending</span></td>
                                          <td>15 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <div className="row align-items-center g-3 mt-3">
                              <div className="col-md-6">
                                  <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-10</b> of <b className="ms-1">11</b> Results</p>
                              </div>
                              <div className="col-md-6">
                                  <nav aria-label="Page navigation example">
                                      <ul className="pagination justify-content-center justify-content-md-end mb-0 products-pagination">
                                          <li className="page-item disabled"><a className="page-link" href="#"><i data-lucide="chevron-left" className="size-4"></i>Previous</a></li>
                                          <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                          <li className="page-item"><a className="page-link" href="#">Next<i data-lucide="chevron-right" className="size-4"></i></a></li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                      <div className="tab-pane" id="completed-transfers-pane" role="tabpanel" aria-labelledby="completed-transfers-tab" tabIndex="0">
                          <div className="table-card table-responsive">
                              <table className="table text-nowrap table-borderless align-middle mb-0">
                                  <thead>
                                      <tr className="border-bottom">
                                          <th>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" id="checkAllPending" />
                                              </div>
                                          </th>
                                          <th className="fw-medium text-muted">Transaction ID</th>
                                          <th className="fw-medium text-muted">From Account</th>
                                          <th className="fw-medium text-muted">To Account</th>
                                          <th className="fw-medium text-muted">Recipient</th>
                                          <th className="fw-medium text-muted">Amount</th>
                                          <th className="fw-medium text-muted">Currency</th>
                                          <th className="fw-medium text-muted">Status</th>
                                          <th className="fw-medium text-muted">Date</th>
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
                                          <td><a href="#" className="link link-custom-primary">TXN-102450</a></td>
                                          <td>**** 1218</td>
                                          <td>**** 3321</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-1-xhBXJtq9.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>John Doe</span>
                                              </div>
                                          </td>
                                          <td>$500</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>24 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102451</a></td>
                                          <td>**** 2233</td>
                                          <td>**** 4455</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-2-CroG7YJ0.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Emma Watson</span>
                                              </div>
                                          </td>
                                          <td>$750</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>23 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102452</a></td>
                                          <td>**** 3344</td>
                                          <td>**** 5566</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-3-Bz6g7hsE.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Liam Carter</span>
                                              </div>
                                          </td>
                                          <td>$1,200</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>22 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102453</a></td>
                                          <td>**** 4455</td>
                                          <td>**** 6677</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-4-7l52E1Lo.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Ava Martinez</span>
                                              </div>
                                          </td>
                                          <td>$900</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>21 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102454</a></td>
                                          <td>**** 5566</td>
                                          <td>**** 7788</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-5-BsT8d_Co.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Olivia Taylor</span>
                                              </div>
                                          </td>
                                          <td>$1,050</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>20 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102455</a></td>
                                          <td>**** 6677</td>
                                          <td>**** 8899</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-6-BIO7_TUU.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>William Harris</span>
                                              </div>
                                          </td>
                                          <td>$1,250</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>19 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102456</a></td>
                                          <td>**** 7788</td>
                                          <td>**** 9900</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-7-BMyy-xCq.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Mia Robinson</span>
                                              </div>
                                          </td>
                                          <td>$950</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Completed</span></td>
                                          <td>18 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <div className="row align-items-center g-3 mt-3">
                              <div className="col-md-6">
                                  <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-7</b> of <b className="ms-1">7</b> Results</p>
                              </div>
                              <div className="col-md-6">
                                  <nav aria-label="Page navigation example">
                                      <ul className="pagination justify-content-center justify-content-md-end mb-0 products-pagination">
                                          <li className="page-item disabled"><a className="page-link" href="#"><i data-lucide="chevron-left" className="size-4"></i>Previous</a></li>
                                          <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                          <li className="page-item"><a className="page-link" href="#">Next<i data-lucide="chevron-right" className="size-4"></i></a></li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                      <div className="tab-pane" id="failed-transfers-pane" role="tabpanel" aria-labelledby="failed-transfers-tab" tabIndex="0">
                          <div className="table-card table-responsive">
                              <table className="table text-nowrap table-borderless align-middle mb-0">
                                  <thead>
                                      <tr className="border-bottom">
                                          <th>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" id="checkAllPending" />
                                              </div>
                                          </th>
                                          <th className="fw-medium text-muted">Transaction ID</th>
                                          <th className="fw-medium text-muted">From Account</th>
                                          <th className="fw-medium text-muted">To Account</th>
                                          <th className="fw-medium text-muted">Recipient</th>
                                          <th className="fw-medium text-muted">Amount</th>
                                          <th className="fw-medium text-muted">Currency</th>
                                          <th className="fw-medium text-muted">Status</th>
                                          <th className="fw-medium text-muted">Date</th>
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
                                          <td><a href="#" className="link link-custom-primary">TXN-102501</a></td>
                                          <td>**** 1189</td>
                                          <td>**** 4412</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-12-CfsiEgBV.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Michael Scott</span>
                                              </div>
                                          </td>
                                          <td>$750</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-danger-subtle text-danger border border-danger-subtle">Failed</span></td>
                                          <td>22 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102502</a></td>
                                          <td>**** 7723</td>
                                          <td>**** 9081</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-13-NgroKY8u.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Emma Wilson</span>
                                              </div>
                                          </td>
                                          <td>$1,200</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-danger-subtle text-danger border border-danger-subtle">Failed</span></td>
                                          <td>21 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102503</a></td>
                                          <td>**** 3409</td>
                                          <td>**** 5561</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-14-BWimhkHc.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Daniel Brown</span>
                                              </div>
                                          </td>
                                          <td>$980</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-danger-subtle text-danger border border-danger-subtle">Failed</span></td>
                                          <td>19 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102504</a></td>
                                          <td>**** 6652</td>
                                          <td>**** 9930</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-15-Bm8xnKEs.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Olivia Martinez</span>
                                              </div>
                                          </td>
                                          <td>$430</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-danger-subtle text-danger border border-danger-subtle">Failed</span></td>
                                          <td>18 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102505</a></td>
                                          <td>**** 8841</td>
                                          <td>**** 1207</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-16-DwC0VZG4.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>William Taylor</span>
                                              </div>
                                          </td>
                                          <td>$2,600</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-danger-subtle text-danger border border-danger-subtle">Failed</span></td>
                                          <td>17 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" />
                                              </div>
                                          </td>
                                          <td><a href="#" className="link link-custom-primary">TXN-102506</a></td>
                                          <td>**** 5519</td>
                                          <td>**** 3302</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="../assets/user-17-Y_OiPHJx.png" className="size-8 rounded-circle" alt="User" />
                                                  <span>Isabella Moore</span>
                                              </div>
                                          </td>
                                          <td>$890</td>
                                          <td>USD</td>
                                          <td><span className="badge bg-danger-subtle text-danger border border-danger-subtle">Failed</span></td>
                                          <td>16 Dec, 2025</td>
                                          <td>
                                              <div className="dropdown dropdown-menu-end">
                                                  <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                                  <ul className="dropdown-menu">
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                                      <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <div className="row align-items-center g-3 mt-3">
                              <div className="col-md-6">
                                  <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-6</b> of <b className="ms-1">6</b> Results</p>
                              </div>
                              <div className="col-md-6">
                                  <nav aria-label="Page navigation example">
                                      <ul className="pagination justify-content-center justify-content-md-end mb-0 products-pagination">
                                          <li className="page-item disabled"><a className="page-link" href="#"><i data-lucide="chevron-left" className="size-4"></i>Previous</a></li>
                                          <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                          <li className="page-item"><a className="page-link" href="#">Next<i data-lucide="chevron-right" className="size-4"></i></a></li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
