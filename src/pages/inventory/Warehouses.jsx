import { Link } from 'react-router-dom'

export default function Warehouses() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Warehouse</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                  <li className="breadcrumb-item active">Warehouse</li>
              </ul>
          </div>
          <div className="card shadow-sm">
              <div className="card-header d-flex flex-wrap gap-4 justify-content-between align-items-center">
                  <h6 className="mb-0">Warehouse List</h6>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                      <div className="position-relative flex-shrink-0">
                          <input type="text" className="form-control ps-9" placeholder="Search for..." />
                          <i data-lucide="search" className="size-4 icon-dark position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                      </div>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addWarehouseModal"><i className="ri-add-line me-1"></i> Add Warehouse</button>
                  </div>
              </div>
              <div className="card-body pt-0">
                  <div className="table-card table-responsive">
                      <table className="table table-borderless text-nowrap mb-0 align-middle">
                          <thead>
                              <tr className="bg-light border-bottom">
                                  <th>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" aria-label="checkbox" id="checAllData" />
                                          <label className="form-check-label d-none" htmlFor="checAllData">Check All Data</label>
                                      </div>
                                  </th>
                                  <th className="fw-medium text-muted">Code</th>
                                  <th className="fw-medium text-muted">Name</th>
                                  <th className="fw-medium text-muted">Location</th>
                                  <th className="fw-medium text-muted">Manager</th>
                                  <th className="fw-medium text-muted">Total Items</th>
                                  <th className="fw-medium text-muted">Capacity</th>
                                  <th className="fw-medium text-muted">Last Updated</th>
                                  <th className="fw-medium text-muted">Status</th>
                                  <th className="fw-medium text-muted">Phone</th>
                                  <th className="fw-medium text-muted">Email</th>
                                  <th className="fw-medium text-muted">Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input row-checkbox" type="checkbox" aria-label="checkbox" id="checWH001" />
                                          <label className="form-check-label d-none" htmlFor="checWH001">WH-001</label>
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">WH-001</a></td>
                                  <td>Main Warehouse</td>
                                  <td>New York</td>
                                  <td>
                                      <div className="d-flex gap-2 align-items-center">
                                          <img src="../assets/user-1-xhBXJtq9.png" alt="User" className="size-8 rounded img-fluid" />
                                          <a href="#" className="text-reset">John Doe</a>
                                      </div>
                                  </td>
                                  <td>150</td>
                                  <td>200</td>
                                  <td>15 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
                                  <td>+1 212-555-1234</td>
                                  <td><a href="#" className="link link-custom-primary">main@gotpos.com</a></td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button type="button" className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button type="button" className="btn btn-sub-secondary size-8 btn-icon edit-btn"><i className="ri-edit-line"></i></button>
                                          <button type="button" className="btn btn-sub-danger size-8 btn-icon delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input row-checkbox" type="checkbox" aria-label="checkbox" id="checWH002" />
                                          <label className="form-check-label d-none" htmlFor="checWH002">WH-002</label>
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">WH-002</a></td>
                                  <td>Secondary Warehouse</td>
                                  <td>Los Angeles</td>
                                  <td>
                                      <div className="d-flex gap-2 align-items-center">
                                          <img src="../assets/user-2-CroG7YJ0.png" alt="User" className="size-8 rounded img-fluid" />
                                          <a href="#" className="text-reset">Jane Smith</a>
                                      </div>
                                  </td>
                                  <td>120</td>
                                  <td>150</td>
                                  <td>10 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
                                  <td>+1 310-555-5678</td>
                                  <td><a href="#" className="link link-custom-primary">secondary@gotpos.com</a></td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button type="button" className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button type="button" className="btn btn-sub-secondary size-8 btn-icon edit-btn"><i className="ri-edit-line"></i></button>
                                          <button type="button" className="btn btn-sub-danger size-8 btn-icon delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input row-checkbox" type="checkbox" aria-label="checkbox" id="checWH003" />
                                          <label className="form-check-label d-none" htmlFor="checWH003">WH-003</label>
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">WH-003</a></td>
                                  <td>East Warehouse</td>
                                  <td>Chicago</td>
                                  <td>
                                      <div className="d-flex gap-2 align-items-center">
                                          <img src="../assets/user-3-Bz6g7hsE.png" alt="User" className="size-8 rounded img-fluid" />
                                          <a href="#" className="text-reset">Mike Johnson</a>
                                      </div>
                                  </td>
                                  <td>90</td>
                                  <td>100</td>
                                  <td>12 Dec, 2025</td>
                                  <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Inactive</span></td>
                                  <td>+1 773-555-9876</td>
                                  <td><a href="#" className="link link-custom-primary">east@gotpos.com</a></td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button type="button" className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button type="button" className="btn btn-sub-secondary size-8 btn-icon edit-btn"><i className="ri-edit-line"></i></button>
                                          <button type="button" className="btn btn-sub-danger size-8 btn-icon delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input row-checkbox" type="checkbox" aria-label="checkbox" id="checWH004" />
                                          <label className="form-check-label d-none" htmlFor="checWH004">WH-004</label>
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">WH-004</a></td>
                                  <td>North Warehouse</td>
                                  <td>Houston</td>
                                  <td>
                                      <div className="d-flex gap-2 align-items-center">
                                          <img src="../assets/user-4-7l52E1Lo.png" alt="User" className="size-8 rounded img-fluid" />
                                          <a href="#" className="text-reset">Emily Davis</a>
                                      </div>
                                  </td>
                                  <td>110</td>
                                  <td>130</td>
                                  <td>11 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
                                  <td>+1 713-555-4321</td>
                                  <td><a href="#" className="link link-custom-primary">north@gotpos.com</a></td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button type="button" className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button type="button" className="btn btn-sub-secondary size-8 btn-icon edit-btn"><i className="ri-edit-line"></i></button>
                                          <button type="button" className="btn btn-sub-danger size-8 btn-icon delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input row-checkbox" type="checkbox" aria-label="checkbox" id="checWH005" />
                                          <label className="form-check-label d-none" htmlFor="checWH005">WH-005</label>
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">WH-005</a></td>
                                  <td>South Warehouse</td>
                                  <td>Phoenix</td>
                                  <td>
                                      <div className="d-flex gap-2 align-items-center">
                                          <img src="../assets/user-5-BsT8d_Co.png" alt="User" className="size-8 rounded img-fluid" />
                                          <a href="#" className="text-reset">David Wilson</a>
                                      </div>
                                  </td>
                                  <td>130</td>
                                  <td>160</td>
                                  <td>09 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
                                  <td>+1 602-555-8765</td>
                                  <td><a href="#" className="link link-custom-primary">south@gotpos.com</a></td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button type="button" className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button type="button" className="btn btn-sub-secondary size-8 btn-icon edit-btn"><i className="ri-edit-line"></i></button>
                                          <button type="button" className="btn btn-sub-danger size-8 btn-icon delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input row-checkbox" type="checkbox" aria-label="checkbox" id="checWH006" />
                                          <label className="form-check-label d-none" htmlFor="checWH006">WH-006</label>
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">WH-006</a></td>
                                  <td>West Warehouse</td>
                                  <td>San Francisco</td>
                                  <td>
                                      <div className="d-flex gap-2 align-items-center">
                                          <img src="../assets/user-6-BIO7_TUU.png" alt="User" className="size-8 rounded img-fluid" />
                                          <a href="#" className="text-reset">Sarah Brown</a>
                                      </div>
                                  </td>
                                  <td>95</td>
                                  <td>120</td>
                                  <td>08 Dec, 2025</td>
                                  <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Inactive</span></td>
                                  <td>+1 415-555-3456</td>
                                  <td><a href="#" className="link link-custom-primary">west@gotpos.com</a></td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button type="button" className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button type="button" className="btn btn-sub-secondary size-8 btn-icon edit-btn"><i className="ri-edit-line"></i></button>
                                          <button type="button" className="btn btn-sub-danger size-8 btn-icon delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input row-checkbox" type="checkbox" aria-label="checkbox" id="checWH007" />
                                          <label className="form-check-label d-none" htmlFor="checWH007">WH-007</label>
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">WH-007</a></td>
                                  <td>Central Warehouse</td>
                                  <td>Denver</td>
                                  <td>
                                      <div className="d-flex gap-2 align-items-center">
                                          <img src="../assets/user-7-BMyy-xCq.png" alt="User" className="size-8 rounded img-fluid" />
                                          <a href="#" className="text-reset">Chris Lee</a>
                                      </div>
                                  </td>
                                  <td>75</td>
                                  <td>90</td>
                                  <td>07 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
                                  <td>+1 303-555-9876</td>
                                  <td><a href="#" className="link link-custom-primary">central@gotpos.com</a></td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button type="button" className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button type="button" className="btn btn-sub-secondary size-8 btn-icon edit-btn"><i className="ri-edit-line"></i></button>
                                          <button type="button" className="btn btn-sub-danger size-8 btn-icon delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input row-checkbox" type="checkbox" aria-label="checkbox" id="checWH008" />
                                          <label className="form-check-label d-none" htmlFor="checWH008">WH-008</label>
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">WH-008</a></td>
                                  <td>North East Warehouse</td>
                                  <td>Boston</td>
                                  <td>
                                      <div className="d-flex gap-2 align-items-center">
                                          <img src="../assets/user-8-BAGm131G.png" alt="User" className="size-8 rounded img-fluid" />
                                          <a href="#" className="text-reset">Olivia Taylor</a>
                                      </div>
                                  </td>
                                  <td>90</td>
                                  <td>110</td>
                                  <td>06 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
                                  <td>+1 617-555-4321</td>
                                  <td><a href="#" className="link link-custom-primary">northeast@gotpos.com</a></td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button type="button" className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button type="button" className="btn btn-sub-secondary size-8 btn-icon edit-btn"><i className="ri-edit-line"></i></button>
                                          <button type="button" className="btn btn-sub-danger size-8 btn-icon delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input row-checkbox" type="checkbox" aria-label="checkbox" id="checWH009" />
                                          <label className="form-check-label d-none" htmlFor="checWH009">WH-009</label>
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">WH-009</a></td>
                                  <td>South West Warehouse</td>
                                  <td>Seattle</td>
                                  <td>
                                      <div className="d-flex gap-2 align-items-center">
                                          <img src="../assets/user-9-DB-6OyMr.png" alt="User" className="size-8 rounded img-fluid" />
                                          <a href="#" className="text-reset">Daniel Martinez</a>
                                      </div>
                                  </td>
                                  <td>60</td>
                                  <td>80</td>
                                  <td>05 Dec, 2025</td>
                                  <td><span className="badge bg-warning-subtle text-warning border border-warning-subtle">Inactive</span></td>
                                  <td>+1 206-555-9876</td>
                                  <td><a href="#" className="link link-custom-primary">southwest@gotpos.com</a></td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button type="button" className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button type="button" className="btn btn-sub-secondary size-8 btn-icon edit-btn"><i className="ri-edit-line"></i></button>
                                          <button type="button" className="btn btn-sub-danger size-8 btn-icon delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input row-checkbox" type="checkbox" aria-label="checkbox" id="checWH010" />
                                          <label className="form-check-label d-none" htmlFor="checWH010">WH-010</label>
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary">WH-010</a></td>
                                  <td>Industrial Warehouse</td>
                                  <td>Detroit</td>
                                  <td>
                                      <div className="d-flex gap-2 align-items-center">
                                          <img src="../assets/user-10-CzpspsdB.png" alt="User" className="size-8 rounded img-fluid" />
                                          <a href="#" className="text-reset">Emma White</a>
                                      </div>
                                  </td>
                                  <td>130</td>
                                  <td>160</td>
                                  <td>04 Dec, 2025</td>
                                  <td><span className="badge bg-success-subtle text-success border border-success-subtle">Active</span></td>
                                  <td>+1 313-555-1234</td>
                                  <td><a href="#" className="link link-custom-primary">industrial@gotpos.com</a></td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button type="button" className="btn btn-sub-primary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                          <button type="button" className="btn btn-sub-secondary size-8 btn-icon edit-btn"><i className="ri-edit-line"></i></button>
                                          <button type="button" className="btn btn-sub-danger size-8 btn-icon delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className="row align-items-center g-3 mt-3">
                      <div className="col-md-6">
                          <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-10</b> of <b className="ms-1">23</b> Results</p>
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


          <div className="modal fade" id="addWarehouseModal" tabIndex="-1" aria-labelledby="addWarehouseModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h6 className="modal-title" id="addWarehouseModalLabel">Add New Warehouse</h6>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                          <form id="warehouseForm">
                              <input type="hidden" id="warehouseId" />
                              <div className="row g-3">
                                  <div className="col-12">
                                      <label htmlFor="warehouseCode" className="form-label">Warehouse Code <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="warehouseCode" placeholder="WH-011" required />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="warehouseName" className="form-label">Warehouse Name <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="warehouseName" placeholder="Main Warehouse" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="warehouseLocation" className="form-label">Location <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="warehouseLocation" placeholder="City, State" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="warehouseManager" className="form-label">Manager Name <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="warehouseManager" placeholder="John Doe" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="totalItems" className="form-label">Total Items</label>
                                      <input type="number" className="form-control" id="totalItems" placeholder="150" />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="capacity" className="form-label">Capacity</label>
                                      <input type="number" className="form-control" id="capacity" placeholder="200" />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="warehouseStatus" className="form-label">Status</label>
                                      <div id="warehouseStatus"></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="phone" className="form-label">Phone</label>
                                      <input type="text" className="form-control" id="phone" placeholder="+1 212-555-1234" />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="email" className="form-label">Email</label>
                                      <input type="email" className="form-control" id="email" placeholder="warehouse@example.com" />
                                  </div>
                              </div>
                              <div className="d-flex gap-2 mt-7">
                                  <button type="button" className="btn btn-light w-100" data-bs-dismiss="modal">Cancel</button>
                                  <button type="submit" className="btn btn-primary w-100" id="saveWarehouseBtn">Save Warehouse</button>
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
                      <h5 className="mb-4 lh-base">Are you sure you want to delete this Warehouse?</h5>
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
