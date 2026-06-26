import { Link } from 'react-router-dom'

export default function StockAdjustment() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Stock Adjustment</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                  <li className="breadcrumb-item active">Stock Adjustment</li>
              </ul>
          </div>
          <div className="row">
              <div className="col-12">
                  <div className="card">
                      <div className="card-header border-bottom">
                          <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between mb-4">
                              <h5 className="card-title mb-0">Stock Adjustments</h5>
                              <div className="d-flex flex-wrap align-items-center gap-2">
                                  <div className="dropdown flex-shrink-0">
                                      <button className="btn btn-light d-flex align-items-center" type="button" id="exportDropdownButton" data-bs-toggle="dropdown">
                                          <i data-lucide="download" className="size-4 me-1"></i> Export
                                      </button>
                                      <ul className="dropdown-menu dropdown-menu-end">
                                          <li className="dropdown-item"><i data-lucide="file-text" className="size-4 me-1"></i> Export to Excel</li>
                                          <li className="dropdown-item"><i data-lucide="file" className="size-4 me-1"></i> Export to CSV</li>
                                          <li className="dropdown-item"><i data-lucide="file-output" className="size-4 me-1"></i> Export to PDF</li>
                                          <li className="dropdown-item"><i data-lucide="printer" className="size-4 me-1"></i> Print</li>
                                      </ul>
                                  </div>
                                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addEditAdjustmentModal">
                                      <i data-lucide="plus" className="me-1 size-4"></i> Add Adjustment
                                  </button>
                              </div>
                          </div>
                          <div className="d-flex justify-content-between flex-wrap gap-3">
                              <div className="flex-shrink-0">
                                  <div className="position-relative">
                                      <input type="text" className="form-control ps-9" id="searchProductInput" placeholder="Search for..." />
                                      <i data-lucide="search" className="size-4 icon-dark position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                                  </div>
                              </div>
                              <div className="d-flex gap-2 flex-wrap flex-md-nowrap">
                                  <div className="position-relative min-w-52">
                                      <input type="text" className="form-control ps-9" id="adjustmentDateFilter" placeholder="Adjustment date" readOnly />
                                      <i data-lucide="calendar" className="size-4 icon-dark position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                                  </div>
                                  <div id="typeFilter" className="min-w-52"></div>
                                  <div id="warehouseFilter" className="min-w-52"></div>
                              </div>
                          </div>
                      </div>
                      <div className="card-body pt-0">
                          <div className="table-card table-responsive">
                              <table className="table table-borderless align-middle text-nowrap mb-0">
                                  <thead>
                                      <tr className="bg-light border-bottom">
                                          <th><div className="form-check check-primary"><input className="form-check-input" type="checkbox" id="checkAllData" /></div></th>
                                          <th className="fw-medium text-muted sortable" data-column="adjustmentNo">Adjustment No</th>
                                          <th className="fw-medium text-muted sortable" data-column="product">Product</th>
                                          <th className="fw-medium text-muted sortable" data-column="type">Type</th>
                                          <th className="fw-medium text-muted sortable" data-column="date">Date</th>
                                          <th className="fw-medium text-muted sortable" data-column="warehouse">Warehouse</th>
                                          <th className="fw-medium text-muted sortable" data-column="before">Before</th>
                                          <th className="fw-medium text-muted sortable" data-column="adjust">Adjust</th>
                                          <th className="fw-medium text-muted sortable" data-column="after">After</th>
                                          <th className="fw-medium text-muted sortable" data-column="impact">Impact (%)</th>
                                          <th className="fw-medium text-muted sortable" data-column="reason">Reason</th>
                                          <th className="fw-medium text-muted">Action</th>
                                      </tr>
                                  </thead>
                                  <tbody id="adjustmentTableBody"></tbody>
                              </table>
                          </div>

                          <div className="row align-items-center g-3 mt-2">
                              <div className="col-md-6">
                                  <p className="text-muted text-center text-md-start mb-0" id="paginationInfo">Showing <b className="me-1">1-0</b> of <b className="ms-1">0</b> Results</p>
                              </div>
                              <div className="col-md-6">
                                  <nav>
                                      <ul className="pagination justify-content-center justify-content-md-end mb-0" id="pagination"></ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div className="modal fade" id="addEditAdjustmentModal" tabIndex="-1" aria-labelledby="addEditAdjustmentModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content overflow-hidden">
                      <div className="modal-header">
                          <h6 className="modal-title" id="addEditAdjustmentModalLabel">Add Stock Adjustment</h6>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body position-relative">
                          <form id="adjustmentForm">
                              <input type="hidden" id="adjustmentId" />
                              <div className="row g-3">
                                  <div className="col-12">
                                      <label htmlFor="adjustmentNo" className="form-label">Adjustment No <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="adjustmentNo" placeholder="e.g., ADJ-00021" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="adjustmentDate" className="form-label">Adjustment Date <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="adjustmentDate" placeholder="Choose date" readOnly required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="productName" className="form-label">Product <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="productName" placeholder="e.g., iPhone 15" required />
                                  </div>
                                  <div className="col-12">
                                      <label className="form-label">Warehouse <span className="text-danger">*</span></label>
                                      <div id="modalWarehouseSelect"></div>
                                  </div>
                                  <div className="col-md-4">
                                      <label htmlFor="beforeQty" className="form-label">Before Quantity <span className="text-danger">*</span></label>
                                      <input type="number" className="form-control" id="beforeQty" min="0" defaultValue="0" required />
                                  </div>
                                  <div className="col-md-4">
                                      <label htmlFor="adjustQty" className="form-label">Adjust Quantity <span className="text-danger">*</span></label>
                                      <div className="input-spin-group input-spin-primary">
                                          <button type="button" id="decreaseBtn" className="input-spin-minus">
                                              <i data-lucide="minus" className="size-4"></i>
                                          </button>
                                          <input type="number" className="input-spin form-control" id="adjustQty" readOnly defaultValue="0" />
                                          <button type="button" id="increaseBtn" className="input-spin-plus">
                                              <i data-lucide="plus" className="size-4"></i>
                                          </button>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <label htmlFor="afterQty" className="form-label">After Quantity</label>
                                      <input type="number" className="form-control" id="afterQty" readOnly />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="reason" className="form-label">Reason <span className="text-danger">*</span></label>
                                      <textarea className="form-control" id="reason" rows="3" required></textarea>
                                  </div>
                              </div>
                              <div className="d-flex gap-2 mt-7">
                                  <button type="button" className="btn btn-light w-100" data-bs-dismiss="modal">Close</button>
                                  <button type="submit" className="btn btn-primary w-100">Save Adjustment</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>


          <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-xs">
                  <div className="modal-content p-7 text-center">
                      <div className="d-flex justify-content-center mb-4">
                          <div className="size-14 bg-danger-subtle rounded-circle d-flex align-items-center justify-content-center size-16">
                              <i className="ri-delete-bin-line text-danger fs-2xl"></i>
                          </div>
                      </div>
                      <h5 className="mb-4">Are you sure you want to delete this Adjustment?</h5>
                      <input type="hidden" id="deleteAdjustmentId" />
                      <div className="d-flex justify-content-center gap-2">
                          <button type="button" className="btn btn-danger" id="confirmDeleteBtn">Delete</button>
                          <button type="button" className="btn btn-link text-reset" data-bs-dismiss="modal">Cancel</button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
