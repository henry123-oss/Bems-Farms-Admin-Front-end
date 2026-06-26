import { Link } from 'react-router-dom'

export default function WalletBalance() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Wallet Balance</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Customers</a></li>
                  <li className="breadcrumb-item active">Wallet Balance</li>
              </ul>
          </div>
          <div className="card">
              <div className="card-header d-flex flex-wrap gap-4 align-items-center gap-2 justify-content-between">
                  <h5 className="card-title mb-1">Wallet Balance</h5>
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                      <div className="position-relative w-64 flex-shrink-0">
                          <input type="text" className="form-control ps-10" data-datepicker data-date-format="dd-MM-yyyy" placeholder="Dec 1, 2025 - Dec 31, 2025" />
                          <i data-lucide="calendar" className="size-4 icon-dark position-absolute top-50 start-0 ms-4 translate-middle-y"></i>
                      </div>
                      <div id="status" className="w-44"></div>
                      <input type="number" className="form-control form-control w-36" placeholder="Min Balance" />
                      <input type="number" className="form-control form-control w-36" placeholder="Max Balance" />
                      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addWalletBalanceModal"><i className="ri-add-line me-1"></i> Add Balance</button>
                  </div>
              </div>
              <div className="card-body pt-0">
                  <div className="table-card table-responsive">
                      <table className="table text-nowrap align-middle mb-0">
                          <thead>
                              <tr className="bg-light border-bottom">
                                  <th>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checAllCustomers" />
                                      </div>
                                  </th>
                                  <th className="fw-medium text-muted">Customer ID</th>
                                  <th className="fw-medium text-muted">Customer</th>
                                  <th className="fw-medium text-muted">Phone</th>
                                  <th className="fw-medium text-muted">Wallet Balance</th>
                                  <th className="fw-medium text-muted">Total Credit</th>
                                  <th className="fw-medium text-muted">Total Debit</th>
                                  <th className="fw-medium text-muted">Wallet Status</th>
                                  <th className="fw-medium text-muted">Last Wallet Txn</th>
                                  <th className="fw-medium text-muted">Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">#CUS1025</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-3-Bz6g7hsE.png" className="size-9 rounded img-fluid" alt="User" />
                                          <div>
                                              <a href="#" className="text-reset fw-medium d-block">John Miller</a>
                                              <a href="mailto:john@gotpos.com" className="link link-custom-primary fs-14">john@gotpos.com</a>
                                          </div>
                                      </div>
                                  </td>
                                  <td>+1 765 234 8899</td>
                                  <td className="fw-semibold text-danger">- $45.00</td>
                                  <td>$600.00</td>
                                  <td>$645.00</td>
                                  <td>
                                      <span className="badge bg-danger-subtle text-danger border border-danger-subtle">Blocked</span>
                                  </td>
                                  <td>Dec 18, 2025</td>
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
                                  <td><a href="#" className="link link-custom-primary fw-medium">#CUS1026</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-6-BIO7_TUU.png" className="size-9 rounded img-fluid" alt="User" />
                                          <div>
                                              <a href="#" className="text-reset fw-medium d-block">Sophia Brown</a>
                                              <a href="mailto:sophia@gotpos.com" className="link link-custom-primary fs-14">sophia@gotpos.com</a>
                                          </div>
                                      </div>
                                  </td>
                                  <td>+1 889 456 7788</td>
                                  <td className="fw-semibold text-success">+ $150.00</td>
                                  <td>$900.00</td>
                                  <td>$750.00</td>
                                  <td>
                                      <span className="badge bg-success-subtle text-success border border-success-subtle">Active</span>
                                  </td>
                                  <td>Dec 15, 2025</td>
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
                                  <td><a href="#" className="link link-custom-primary fw-medium">#CUS1027</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-20-BaxQ31Jt.png" className="size-9 rounded img-fluid" alt="User" />
                                          <div>
                                              <a href="#" className="text-reset fw-medium d-block">David Clark</a>
                                              <a href="mailto:david@gotpos.com" className="link link-custom-primary fs-14">david@gotpos.com</a>
                                          </div>
                                      </div>
                                  </td>
                                  <td>+1 902 345 6677</td>
                                  <td className="fw-semibold text-danger">- $25.00</td>
                                  <td>$300.00</td>
                                  <td>$325.00</td>
                                  <td>
                                      <span className="badge bg-danger-subtle text-danger border border-danger-subtle">Blocked</span>
                                  </td>
                                  <td>Dec 05, 2025</td>
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
                                  <td><a href="#" className="link link-custom-primary fw-medium">#CUS1028</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-2-CroG7YJ0.png" className="size-9 rounded img-fluid" alt="User" />
                                          <div>
                                              <a href="#" className="text-reset fw-medium d-block">Olivia Martin</a>
                                              <a href="mailto:olivia@gotpos.com" className="link link-custom-primary fs-14">olivia@gotpos.com</a>
                                          </div>
                                      </div>
                                  </td>
                                  <td>+1 678 234 5566</td>
                                  <td className="fw-semibold text-success">+ $540.00</td>
                                  <td>$2,200.00</td>
                                  <td>$1,660.00</td>
                                  <td>
                                      <span className="badge bg-success-subtle text-success border border-success-subtle">Active</span>
                                  </td>
                                  <td>Dec 21, 2025</td>
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
                                  <td><a href="#" className="link link-custom-primary fw-medium">#CUS1029</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-21-0wmBLMGI.png" className="size-9 rounded img-fluid" alt="User" />
                                          <div>
                                              <a href="#" className="text-reset fw-medium d-block">Ethan Walker</a>
                                              <a href="mailto:ethan@gotpos.com" className="link link-custom-primary fs-14">ethan@gotpos.com</a>
                                          </div>
                                      </div>
                                  </td>
                                  <td>+1 445 778 9911</td>
                                  <td className="fw-semibold text-danger">- $90.00</td>
                                  <td>$750.00</td>
                                  <td>$840.00</td>
                                  <td>
                                      <span className="badge bg-danger-subtle text-danger border border-danger-subtle">Blocked</span>
                                  </td>
                                  <td>Dec 17, 2025</td>
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
                                  <td><a href="#" className="link link-custom-primary fw-medium">#CUS1030</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-9-DB-6OyMr.png" className="size-9 rounded img-fluid" alt="User" />
                                          <div>
                                              <a href="#" className="text-reset fw-medium d-block">Isabella Moore</a>
                                              <a href="mailto:isabella@gotpos.com" className="link link-custom-primary fs-14">isabella@gotpos.com</a>
                                          </div>
                                      </div>
                                  </td>
                                  <td>+1 321 889 4433</td>
                                  <td className="fw-semibold text-success">+ $85.00</td>
                                  <td>$420.00</td>
                                  <td>$335.00</td>
                                  <td>
                                      <span className="badge bg-success-subtle text-success border border-success-subtle">Active</span>
                                  </td>
                                  <td>Dec 14, 2025</td>
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
                                  <td><a href="#" className="link link-custom-primary fw-medium">#CUS1031</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-24-Bierqpo3.png" className="size-9 rounded img-fluid" alt="User" />
                                          <div>
                                              <a href="#" className="text-reset fw-medium d-block">Liam Anderson</a>
                                              <a href="mailto:liam@gotpos.com" className="link link-custom-primary fs-14">liam@gotpos.com</a>
                                          </div>
                                      </div>
                                  </td>
                                  <td>+1 998 665 2233</td>
                                  <td className="fw-semibold text-success">+ $1,200.00</td>
                                  <td>$3,500.00</td>
                                  <td>$2,300.00</td>
                                  <td>
                                      <span className="badge bg-success-subtle text-success border border-success-subtle">Active</span>
                                  </td>
                                  <td>Dec 22, 2025</td>
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
                                  <td><a href="#" className="link link-custom-primary fw-medium">#CUS1032</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-1-xhBXJtq9.png" className="size-9 rounded img-fluid" alt="User" />
                                          <div>
                                              <a href="#" className="text-reset fw-medium d-block">Noah Wilson</a>
                                              <a href="mailto:noah@gotpos.com" className="link link-custom-primary fs-14">noah@gotpos.com</a>
                                          </div>
                                      </div>
                                  </td>
                                  <td>+1 223 456 7788</td>
                                  <td className="fw-semibold text-success">+ $260.00</td>
                                  <td>$980.00</td>
                                  <td>$720.00</td>
                                  <td>
                                      <span className="badge bg-success-subtle text-success border border-success-subtle">Active</span>
                                  </td>
                                  <td>Dec 11, 2025</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                              <i className="ri-delete-bin-line"></i>
                                          </button>
                                      </div>
                                  </td>
                              </tr>

                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">#CUS1033</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-7-BMyy-xCq.png" className="size-9 rounded img-fluid" alt="User" />
                                          <div>
                                              <a href="#" className="text-reset fw-medium d-block">Mia Johnson</a>
                                              <a href="mailto:mia@gotpos.com" className="link link-custom-primary fs-14">mia@gotpos.com</a>
                                          </div>
                                      </div>
                                  </td>
                                  <td>+1 776 998 4455</td>
                                  <td className="fw-semibold text-danger">- $120.00</td>
                                  <td>$650.00</td>
                                  <td>$770.00</td>
                                  <td>
                                      <span className="badge bg-danger-subtle text-danger border border-danger-subtle">Blocked</span>
                                  </td>
                                  <td>Dec 09, 2025</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                              <i className="ri-delete-bin-line"></i>
                                          </button>
                                      </div>
                                  </td>
                              </tr>

                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">#CUS1034</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-11-bzS6tHsV.png" className="size-9 rounded img-fluid" alt="User" />
                                          <div>
                                              <a href="#" className="text-reset fw-medium d-block">Lucas Harris</a>
                                              <a href="mailto:lucas@gotpos.com" className="link link-custom-primary fs-14">lucas@gotpos.com</a>
                                          </div>
                                      </div>
                                  </td>
                                  <td>+1 556 332 9911</td>
                                  <td className="fw-semibold text-success">+ $410.75</td>
                                  <td>$1,800.00</td>
                                  <td>$1,389.25</td>
                                  <td>
                                      <span className="badge bg-success-subtle text-success border border-success-subtle">Active</span>
                                  </td>
                                  <td>Dec 20, 2025</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-edit-line"></i></button>
                                          <button className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                              <i className="ri-delete-bin-line"></i>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className="row align-items-center g-3 mt-3">
                      <div className="col-md-6">
                          <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-10</b> of <b className="ms-1">17</b> Results</p>
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

          <div className="modal fade" id="addWalletBalanceModal" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h6 className="modal-title">Add Wallet Balance</h6>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                          <form>
                              <div className="row g-4">
                                  <div className="col-12">
                                      <label htmlFor="walletCustomer" className="form-label">Customer <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="walletCustomer" placeholder="Search customer name / ID" required />
                                  </div>
                                  <div className="col-12">
                                      <div className="border rounded p-3 bg-light-subtle">
                                          <div className="d-flex justify-content-between align-items-center">
                                              <span className="text-muted">Current Wallet Balance</span>
                                              <span className="fw-semibold fs-16 text-success" id="currentWalletBalance">$150.00</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="walletTxnType" className="form-label">Transaction Type <span className="text-danger">*</span></label>
                                      <div id="walletTxnType" required></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="walletAmount" className="form-label">Amount <span className="text-danger">*</span></label>
                                      <input type="number" className="form-control" id="walletAmount" placeholder="0.00" step="0.01" required />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="walletNote" className="form-label">Note / Remark</label>
                                      <textarea className="form-control" id="walletNote" rows="3" placeholder="Optional remark for wallet transaction"></textarea>
                                  </div>
                              </div>
                              <div className="d-flex gap-3 mt-4">
                                  <button type="button" className="btn btn-light w-50" data-bs-dismiss="modal">Cancel</button>
                                  <button type="submit" className="btn btn-primary w-50">Save Wallet Balance</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>


          <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-xs">
                  <div className="modal-content p-7 text-center">
                      <div className="d-flex justify-content-center mb-4">
                          <div className="size-14 bg-danger-subtle rounded-circle d-flex align-items-center justify-content-center size-16">
                              <i className="ri-delete-bin-line text-danger fs-2xl"></i>
                          </div>
                      </div>
                      <h5 className="mb-4 lh-base">Are you sure you want to delete this Wallet?</h5>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                          <button type="button" className="btn btn-link text-reset" data-bs-dismiss="modal">Cancel</button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
