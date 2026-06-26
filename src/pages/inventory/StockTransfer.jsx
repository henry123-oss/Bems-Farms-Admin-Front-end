import { Link } from 'react-router-dom'

export default function StockTransfer() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Transfer</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                  <li className="breadcrumb-item active">Transfer</li>
              </ul>
          </div>
          <div className="row">
              <div className="col-12">
                  <div className="card">
                      <div className="card-header d-flex flex-wrap gap-3 justify-content-between align-items-center">
                          <h5 className="card-title mb-0">Stock Transfer</h5>
                          <button type="button" className="btn btn-primary d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#addEditStockInModal">
                              <i data-lucide="plus" className="size-4"></i> Add Transfer
                          </button>
                      </div>
                      <div className="card-body">
                          <div className="d-flex flex-wrap gap-5 mb-4 justify-content-between">
                              <div className="flex-shrink-0">
                                  <div className="position-relative">
                                      <input type="text" className="form-control ps-9" id="searchProductInput" placeholder="Search for..." />
                                      <i data-lucide="search" className="size-4 icon-dark position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                                  </div>
                              </div>
                              <div className="d-flex flex-wrap flex-md-nowrap gap-2">
                                  <div className="position-relative min-w-48">
                                      <input type="text" id="stockInDateFilter" className="form-control ps-9" placeholder="Filter by Date" readOnly />
                                      <i data-lucide="calendar" className="size-4 icon-dark position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                                  </div>
                                  <div id="Status" className="min-w-52"></div>
                                  <div id="fromWarehouseFilter" className="min-w-52"></div>
                                  <div id="toWarehouseFilter" className="min-w-52"></div>
                              </div>
                          </div>

                          <div className="table-card table-responsive">
                              <table className="table table-borderless align-middle text-nowrap mb-0">
                                  <thead>
                                      <tr className="bg-light border-bottom">
                                          <th>
                                              <div className="form-check check-primary"><input className="form-check-input" type="checkbox" /></div>
                                          </th>
                                          <th className="fw-medium text-muted sortable" data-column="transferID">Transfer ID</th>
                                          <th className="fw-medium text-muted sortable" data-column="fromWarehouse">From Warehouse</th>
                                          <th className="fw-medium text-muted sortable" data-column="toWarehouse">To Warehouse</th>
                                          <th className="fw-medium text-muted sortable" data-column="items">Items</th>
                                          <th className="fw-medium text-muted sortable" data-column="status">Status</th>
                                          <th className="fw-medium text-muted sortable" data-column="totalQty">Total Qty</th>
                                          <th className="fw-medium text-muted sortable" data-column="createdBy">Created By</th>
                                          <th className="fw-medium text-muted sortable" data-column="date">Date</th>
                                          <th className="fw-medium text-muted">Action</th>
                                      </tr>
                                  </thead>
                                  <tbody id="transferTableBody"></tbody>
                              </table>
                          </div>

                          <div className="row align-items-center g-3 mt-2">
                              <div className="col-md-6">
                                  <p className="text-muted text-center text-md-start mb-0" id="paginationInfo">Showing <b className="me-1">1-0</b> of <b className="ms-1">0</b> Results</p>
                              </div>
                              <div className="col-md-6">
                                  <nav aria-label="Page navigation example">
                                      <ul className="pagination justify-content-center justify-content-md-end mb-0" id="pagination"></ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div className="modal fade" id="addEditStockInModal" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content overflow-hidden">
                      <div className="modal-header">
                          <h6 className="modal-title" id="addCategoryModalLabel">Add Stock Transfer</h6>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body position-relative">
                          <form id="stockInForm">
                              <input type="hidden" id="stockInId" />
                              <div className="row g-4">
                                  <div className="col-12">
                                      <label htmlFor="referenceNo" className="form-label">Reference No <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="referenceNo" placeholder="e.g., TR-000146" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label className="form-label">From Warehouse <span className="text-danger">*</span></label>
                                      <div id="modalFromWarehouse" className="min-w-52"></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label className="form-label">To Warehouse <span className="text-danger">*</span></label>
                                      <div id="modalToWarehouse" className="min-w-52"></div>
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="stockInDate" className="form-label">Transfer Date <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="stockInDate" placeholder="Choose date" readOnly required />
                                  </div>
                                  <div className="col-12">
                                      <label className="form-label">Status <span className="text-danger">*</span></label>
                                      <div id="modalStatusSelect"></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="totalItems" className="form-label">Total Items</label>
                                      <input type="number" className="form-control" id="totalItems" min="1" defaultValue="1" />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="totalQty" className="form-label">Total Qty</label>
                                      <input type="number" className="form-control" id="totalQty" min="1" defaultValue="1" />
                                  </div>
                              </div>
                              <div className="d-flex gap-2 mt-7">
                                  <button type="button" className="btn btn-light w-100" data-bs-dismiss="modal">Close</button>
                                  <button type="submit" className="btn btn-primary w-100">Save Transfer</button>
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
                      <h5 className="mb-4 lh-base">Are you sure you want to delete this transfer?</h5>
                      <input type="hidden" id="deleteWarrantyId" />
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
