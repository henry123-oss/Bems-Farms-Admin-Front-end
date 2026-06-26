import { Link } from 'react-router-dom'

export default function BankAccounts() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Bank Accounts</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Accounts</a></li>
                  <li className="breadcrumb-item active">Bank Accounts</li>
              </ul>
          </div>
          <div className="card">
              <div className="card-header">
                  <div className="d-flex flex-wrap gap-4 align-items-center gap-2 justify-content-between">
                      <h5 className="card-title mb-1">Bank Accounts</h5>
                      <div className="d-flex flex-wrap gap-2 align-items-center gap-2">
                          <div className="position-relative">
                              <input type="text" id="tableExpenseSearch" className="form-control ps-10" placeholder="Search Bank Accounts..." />
                              <i data-lucide="search" className="size-4 icon-dark position-absolute top-50 start-0 ms-4 translate-middle-y"></i>
                          </div>
                          <div id="filterType" className="w-44"></div>
                          <div id="filterStatus" className="w-44"></div>
                          <div id="filterCurrency" className="w-36"></div>
                          <div className="dropdown">
                              <button type="button" className="btn btn-outline-light btn-icon border" data-bs-toggle="dropdown" aria-expanded="false"><i data-lucide="funnel" className="size-4"></i></button>
                              <ul className="dropdown-menu dropdown-menu-end p-3 w-80" aria-labelledby="filterDropdownButton">
                                  <h6 className="mb-3">Filter Options</h6>
                                  <form action="#!" id="filterForm">
                                      <div className="d-flex align-items-center gap-3 mb-3">
                                          <div>
                                              <label htmlFor="minBalance" className="form-label">Min</label>
                                              <input type="number" className="form-control" placeholder="0.00" id="minBalance" />
                                          </div>
                                          <span>-</span>
                                          <div>
                                              <label htmlFor="maxBalance" className="form-label">Max</label>
                                              <input type="number" className="form-control" placeholder="0.00" id="maxBalance" />
                                          </div>
                                      </div>
                                      <div className="mb-3">
                                          <label htmlFor="bankName" className="form-label">Bank Name</label>
                                          <input type="text" className="form-control" id="bankName" placeholder="Search by bank" />
                                      </div>
                                      <div className="mb-3">
                                          <label htmlFor="accountHolder" className="form-label">Account Holder</label>
                                          <input type="text" className="form-control" id="accountHolder" placeholder="Search by name" />
                                      </div>
                                      <div className="d-flex align-items-center justify-content-end gap-2 mt-7">
                                          <button type="reset" className="btn-sm btn btn-light h-8 px-4">Reset</button>
                                          <button type="submit" className="btn-sm btn btn-primary h-8 px-4">Apply</button>
                                      </div>
                                  </form>
                              </ul>
                          </div>
                          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addBankAccountModal"><i data-lucide="plus" className="size-4 me-1"></i>Add Accounts</button>
                      </div>
                  </div>
              </div>
              <div className="card-body pt-0">
                  <div className="table-card table-responsive">
                      <table className="table text-nowrap table-borderless align-middle mb-0">
                          <thead>
                              <tr className="bg-light border-bottom">
                                  <th>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checkAllAccounts" />
                                      </div>
                                  </th>
                                  <th className="fw-medium text-muted">Bank Name</th>
                                  <th className="fw-medium text-muted">Account Holder</th>
                                  <th className="fw-medium text-muted">Account Number</th>
                                  <th className="fw-medium text-muted">Type</th>
                                  <th className="fw-medium text-muted">Currency</th>
                                  <th className="fw-medium text-muted">Balance</th>
                                  <th className="fw-medium text-muted">Status</th>
                                  <th className="fw-medium text-muted">Last Transaction</th>
                                  <th className="fw-medium text-muted">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                  </td>
                                  <td>Chase Bank</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-1-xhBXJtq9.png" className="size-8 rounded-circle" alt="User" />
                                          <span>Sophia Smith</span>
                                      </div>
                                  </td>
                                  <td><span className="fw-medium">Ends in **** 1218</span></td>
                                  <td>Saving Account</td>
                                  <td>USD</td>
                                  <td>$12,500</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
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
                                      <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                  </td>
                                  <td>HDFC Bank</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-2-CroG7YJ0.png" className="size-8 rounded-circle" alt="User" />
                                          <span>Rohan Patel</span>
                                      </div>
                                  </td>
                                  <td><span className="fw-medium">Ends in **** 5678</span></td>
                                  <td>Checking Account</td>
                                  <td>INR</td>
                                  <td>₹450,000</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
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
                                      <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                  </td>
                                  <td>Bank of America</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-3-Bz6g7hsE.png" className="size-8 rounded-circle" alt="User" />
                                          <span>Emma Johnson</span>
                                      </div>
                                  </td>
                                  <td><span className="fw-medium">Ends in **** 3321</span></td>
                                  <td>Savings Account</td>
                                  <td>USD</td>
                                  <td>$75,200</td>
                                  <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Inactive</span></td>
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
                                      <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                  </td>
                                  <td>ICICI Bank</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-4-7l52E1Lo.png" className="size-8 rounded-circle" alt="User" />
                                          <span>Aarav Sharma</span>
                                      </div>
                                  </td>
                                  <td><span className="fw-medium">Ends in **** 7789</span></td>
                                  <td>Checking Account</td>
                                  <td>INR</td>
                                  <td>₹250,000</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
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
                                      <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                  </td>
                                  <td>Wells Fargo</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-5-BsT8d_Co.png" className="size-8 rounded-circle" alt="User" />
                                          <span>Liam Davis</span>
                                      </div>
                                  </td>
                                  <td><span className="fw-medium">Ends in **** 4455</span></td>
                                  <td>Savings Account</td>
                                  <td>USD</td>
                                  <td>$98,300</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
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
                                      <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                  </td>
                                  <td>Axis Bank</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-6-BIO7_TUU.png" className="size-8 rounded-circle" alt="User" />
                                          <span>Neha Verma</span>
                                      </div>
                                  </td>
                                  <td><span className="fw-medium">Ends in **** 9912</span></td>
                                  <td>Checking Account</td>
                                  <td>INR</td>
                                  <td>₹310,000</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
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
                                      <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                  </td>
                                  <td>State Bank of India</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-7-BMyy-xCq.png" className="size-8 rounded-circle" alt="User" />
                                          <span>Ankit Mehta</span>
                                      </div>
                                  </td>
                                  <td><span className="fw-medium">Ends in **** 5566</span></td>
                                  <td>Saving Account</td>
                                  <td>INR</td>
                                  <td>₹120,500</td>
                                  <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Inactive</span></td>
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
                                      <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                  </td>
                                  <td>Citibank</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-8-BAGm131G.png" className="size-8 rounded-circle" alt="User" />
                                          <span>Karan Singh</span>
                                      </div>
                                  </td>
                                  <td><span className="fw-medium">Ends in **** 7788</span></td>
                                  <td>Checking Account</td>
                                  <td>USD</td>
                                  <td>$88,900</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
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
                                  <td>Punjab National Bank</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-9-DB-6OyMr.png" className="size-8 rounded-circle" alt="User" />
                                          <span>Priya Sharma</span>
                                      </div>
                                  </td>
                                  <td><span className="fw-medium">Ends in **** 3344</span></td>
                                  <td>Savings Account</td>
                                  <td>INR</td>
                                  <td>₹190,000</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
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
                                  <td>Standard Chartered</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-10-CzpspsdB.png" className="size-8 rounded-circle" alt="User" />
                                          <span>Rita Kapoor</span>
                                      </div>
                                  </td>
                                  <td><span className="fw-medium">Ends in **** 6677</span></td>
                                  <td>Checking Account</td>
                                  <td>USD</td>
                                  <td>$52,400</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
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
          </div>
    </div>
  )
}
