import { Link } from 'react-router-dom'

export default function StockValuation() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Valuation</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                  <li className="breadcrumb-item active">Valuation</li>
              </ul>
          </div>
          <div className="card">
              <div className="card-body">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-6 g-3">
                      <div className="col">
                          <div className="text-center border-end-md py-3">
                              <h5 className="font-base">$245,800</h5>
                              <p className="text-muted">Inventory Cost Value</p>
                          </div>
                      </div>
                      <div className="col">
                          <div className="text-center border-end-md py-3">
                              <h5 className="font-base">$312,450</h5>
                              <p className="text-muted">Retail Inventory Value</p>
                          </div>
                      </div>
                      <div className="col">
                          <div className="text-center border-end-md py-3">
                              <h5 className="font-base">$66,650</h5>
                              <p className="text-muted">Potential Profit</p>
                          </div>
                      </div>
                      <div className="col">
                          <div className="text-center border-end-md py-3">
                              <h5 className="font-base">$28,400</h5>
                              <p className="text-muted">Low Stock Value</p>
                          </div>
                      </div>
                      <div className="col">
                          <div className="text-center border-end-md py-3">
                              <h5 className="font-base">$19,750</h5>
                              <p className="text-muted">Dead Stock Value</p>
                          </div>
                      </div>
                      <div className="col">
                          <div className="text-center py-3">
                              <h5 className="font-base">4.2x</h5>
                              <p className="text-muted">Inventory Turnover</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="card">
              <div className="card-header">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                      <div className="position-relative flex-shrink-0">
                          <input type="text" id="lostItemSearch" className="form-control ps-9" placeholder="Search for lost items..." />
                          <i data-lucide="search" className="size-4 icon-dark position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                      </div>
                      <div className="d-flex flex-wrap gap-2 align-items-center">
                          <ul className="nav nav-pills nav-light border p-1 rounded-2" id="view-tab" role="tablist">
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link py-1 px-2 active" id="grid-view-tab" data-bs-toggle="pill" data-bs-target="#grid-view" type="button" role="tab" aria-controls="grid-view" aria-selected="true">
                                      <i className="ri-layout-grid-line"></i>
                                  </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link py-1 px-2" id="list-view-tab" data-bs-toggle="pill" data-bs-target="#list-view" type="button" role="tab" aria-controls="list-view" aria-selected="false">
                                      <i className="ri-list-check"></i>
                                  </button>
                              </li>
                          </ul>
                          <div className="dropdown flex-shrink-0">
                              <button className="btn border" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-filter-3-line me-1"></i> Filters</button>
                              <div className="dropdown-menu dropdown-menu-end p-4 w-96">
                                  <h6 className="mb-4">Filter Inventory</h6>
                                  <form id="inventoryFilterForm">
                                      <div className="mb-4">
                                          <label className="form-label mb-2">Warehouse</label>
                                          <div id="filterWarehouse"></div>
                                      </div>
                                      <div className="mb-4">
                                          <label className="form-label mb-2">Inventory Status</label>
                                          <div className="d-flex flex-wrap gap-3">
                                              <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" id="statusInStock" />
                                                  <label className="form-check-label" htmlFor="statusInStock">In Stock</label>
                                              </div>
                                              <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" id="statusLow" />
                                                  <label className="form-check-label" htmlFor="statusLow">Low Stock</label>
                                              </div>
                                              <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" id="statusOut" />
                                                  <label className="form-check-label" htmlFor="statusOut">Out of Stock</label>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="mb-4">
                                          <label className="form-label mb-2">Stock Level</label>
                                          <div className="d-flex gap-3">
                                              <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" id="stockHigh" />
                                                  <label className="form-check-label" htmlFor="stockHigh">High</label>
                                              </div>
                                              <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" id="stockMedium" />
                                                  <label className="form-check-label" htmlFor="stockMedium">Medium</label>
                                              </div>
                                              <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" id="stockLow" />
                                                  <label className="form-check-label" htmlFor="stockLow">Low</label>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="mb-4">
                                          <label className="form-label mb-2">Stock Value Range</label>
                                          <div id="slider"></div>
                                      </div>
                                      <div className="mb-4">
                                          <label className="form-label mb-2">Last Updated</label>
                                          <div id="lastUpdate"></div>
                                      </div>

                                      <div className="d-flex justify-content-end gap-2 pt-2">
                                          <button type="reset" className="btn btn-light btn-sm">Reset</button>
                                          <button type="submit" className="btn btn-primary btn-sm">Apply Filters</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addInventoryModal"><i className="ri-add-line me-1"></i> Add Valuation</button>
                      </div>
                  </div>
              </div>
              <div className="card-body">
                  <div className="tab-content" id="view-tabContent">
                      <div className="tab-pane fade show active" id="grid-view" role="tabpanel" aria-labelledby="grid-view-tab" tabIndex="0">
                          <div className="row">
                              <div className="col-md-6 col-xl-4 col-xxl-3">
                                  <div className="card">
                                      <div className="d-flex flex-wrap gap-3 align-items-center border-bottom p-4">
                                          <div className="avatar text-muted bg-light size-11 rounded fw-medium">CW</div>
                                          <div className="flex-grow-1">
                                              <h6 className="mb-0">Central Warehouse</h6>
                                              <p className="text-muted">Warehouse ID: CW-001</p>
                                          </div>
                                          <span className="badge bg-success-subtle text-success border border-success-subtle">Open</span>
                                      </div>
                                      <div className="px-4 py-6">
                                          <div className="row g-5">
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Low Stock:</p>
                                                  <p className="fw-medium">18 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Out of Stock:</p>
                                                  <p className="fw-medium">6 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Last Updated:</p>
                                                  <p className="fw-medium">Today</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Stock Value:</p>
                                                  <p className="fw-medium">₹42.6L</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="d-flex flex-wrap flex-md-nowrap gap-2 bg-light bg-opacity-50 p-4">
                                          <button type="button" className="btn bg-body-secondary border w-100"><i className="ri-eye-line me-1"></i> View</button>
                                          <button type="button" className="btn btn-primary w-100"><i className="ri-edit-line me-1"></i> Manage</button>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-xl-4 col-xxl-3">
                                  <div className="card">
                                      <div className="d-flex flex-wrap gap-3 align-items-center border-bottom p-4">
                                          <div className="avatar text-muted bg-light size-11 rounded fw-medium">NW</div>
                                          <div className="flex-grow-1">
                                              <h6 className="mb-0">North Warehouse</h6>
                                              <p className="text-muted">Warehouse ID: NW-002</p>
                                          </div>
                                          <span className="badge bg-success-subtle text-success border border-success-subtle">Open</span>
                                      </div>
                                      <div className="px-4 py-6">
                                          <div className="row g-5">
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Low Stock:</p>
                                                  <p className="fw-medium">12 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Out of Stock:</p>
                                                  <p className="fw-medium">4 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Last Updated:</p>
                                                  <p className="fw-medium">Today</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Stock Value:</p>
                                                  <p className="fw-medium">₹31.2L</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="d-flex flex-wrap flex-md-nowrap gap-2 bg-light bg-opacity-50 p-4">
                                          <button type="button" className="btn bg-body-secondary border w-100"><i className="ri-eye-line me-1"></i> View</button>
                                          <button type="button" className="btn btn-primary w-100"><i className="ri-edit-line me-1"></i> Manage</button>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-xl-4 col-xxl-3">
                                  <div className="card">
                                      <div className="d-flex flex-wrap gap-3 align-items-center border-bottom p-4">
                                          <div className="avatar text-muted bg-light size-11 rounded fw-medium">SW</div>
                                          <div className="flex-grow-1">
                                              <h6 className="mb-0">South Warehouse</h6>
                                              <p className="text-muted">Warehouse ID: SW-003</p>
                                          </div>
                                          <span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle">At Risk</span>
                                      </div>
                                      <div className="px-4 py-6">
                                          <div className="row g-5">
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Low Stock:</p>
                                                  <p className="fw-medium">26 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Out of Stock:</p>
                                                  <p className="fw-medium">11 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Last Updated:</p>
                                                  <p className="fw-medium">Yesterday</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Stock Value:</p>
                                                  <p className="fw-medium">₹24.8L</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="d-flex flex-wrap flex-md-nowrap gap-2 bg-light bg-opacity-50 p-4">
                                          <button type="button" className="btn bg-body-secondary border w-100"><i className="ri-eye-line me-1"></i> View</button>
                                          <button type="button" className="btn btn-primary w-100"><i className="ri-edit-line me-1"></i> Manage</button>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-xl-4 col-xxl-3">
                                  <div className="card">
                                      <div className="d-flex flex-wrap gap-3 align-items-center border-bottom p-4">
                                          <div className="avatar text-muted bg-light size-11 rounded fw-medium">EW</div>
                                          <div className="flex-grow-1">
                                              <h6 className="mb-0">East Warehouse</h6>
                                              <p className="text-muted">Warehouse ID: EW-004</p>
                                          </div>
                                          <span className="badge bg-success-subtle text-success border border-success-subtle">Open</span>
                                      </div>
                                      <div className="px-4 py-6">
                                          <div className="row g-5">
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Low Stock:</p>
                                                  <p className="fw-medium">9 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Out of Stock:</p>
                                                  <p className="fw-medium">2 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Last Updated:</p>
                                                  <p className="fw-medium">Today</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Stock Value:</p>
                                                  <p className="fw-medium">₹38.5L</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="d-flex flex-wrap flex-md-nowrap gap-2 bg-light bg-opacity-50 p-4">
                                          <button type="button" className="btn bg-body-secondary border w-100"><i className="ri-eye-line me-1"></i> View</button>
                                          <button type="button" className="btn btn-primary w-100"><i className="ri-edit-line me-1"></i> Manage</button>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-xl-4 col-xxl-3">
                                  <div className="card">
                                      <div className="d-flex flex-wrap gap-3 align-items-center border-bottom p-4">
                                          <div className="avatar text-muted bg-light size-11 rounded fw-medium">WW</div>
                                          <div className="flex-grow-1">
                                              <h6 className="mb-0">West Warehouse</h6>
                                              <p className="text-muted">Warehouse ID: WW-005</p>
                                          </div>
                                          <span className="badge bg-danger-subtle text-danger border border-danger-subtle">Critical</span>
                                      </div>
                                      <div className="px-4 py-6">
                                          <div className="row g-5">
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Low Stock:</p>
                                                  <p className="fw-medium">34 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Out of Stock:</p>
                                                  <p className="fw-medium">18 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Last Updated:</p>
                                                  <p className="fw-medium">2 Days Ago</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Stock Value:</p>
                                                  <p className="fw-medium">₹19.4L</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="d-flex flex-wrap flex-md-nowrap gap-2 bg-light bg-opacity-50 p-4">
                                          <button type="button" className="btn bg-body-secondary border w-100"><i className="ri-eye-line me-1"></i> View</button>
                                          <button type="button" className="btn btn-primary w-100"><i className="ri-edit-line me-1"></i> Manage</button>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-xl-4 col-xxl-3">
                                  <div className="card">
                                      <div className="d-flex flex-wrap gap-3 align-items-center border-bottom p-4">
                                          <div className="avatar text-muted bg-light size-11 rounded fw-medium">RW</div>
                                          <div className="flex-grow-1">
                                              <h6 className="mb-0">Regional Warehouse</h6>
                                              <p className="text-muted">Warehouse ID: RW-006</p>
                                          </div>
                                          <span className="badge bg-success-subtle text-success border border-success-subtle">Open</span>
                                      </div>
                                      <div className="px-4 py-6">
                                          <div className="row g-5">
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Low Stock:</p>
                                                  <p className="fw-medium">7 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Out of Stock:</p>
                                                  <p className="fw-medium">1 Item</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Last Updated:</p>
                                                  <p className="fw-medium">Today</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Stock Value:</p>
                                                  <p className="fw-medium">₹46.9L</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="d-flex flex-wrap flex-md-nowrap gap-2 bg-light bg-opacity-50 p-4">
                                          <button type="button" className="btn bg-body-secondary border w-100"><i className="ri-eye-line me-1"></i> View</button>
                                          <button type="button" className="btn btn-primary w-100"><i className="ri-edit-line me-1"></i> Manage</button>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-xl-4 col-xxl-3">
                                  <div className="card">
                                      <div className="d-flex flex-wrap gap-3 align-items-center border-bottom p-4">
                                          <div className="avatar text-muted bg-light size-11 rounded fw-medium">BW</div>
                                          <div className="flex-grow-1">
                                              <h6 className="mb-0">Backup Warehouse</h6>
                                              <p className="text-muted">Warehouse ID: BW-007</p>
                                          </div>
                                          <span className="badge bg-danger-subtle text-danger border border-danger-subtle">Critical</span>
                                      </div>
                                      <div className="px-4 py-6">
                                          <div className="row g-5">
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Low Stock:</p>
                                                  <p className="fw-medium">3 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Out of Stock:</p>
                                                  <p className="fw-medium">0 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Last Updated:</p>
                                                  <p className="fw-medium">Today</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Stock Value:</p>
                                                  <p className="fw-medium">₹12.8L</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="d-flex flex-wrap flex-md-nowrap gap-2 bg-light bg-opacity-50 p-4">
                                          <button type="button" className="btn bg-body-secondary border w-100"><i className="ri-eye-line me-1"></i> View</button>
                                          <button type="button" className="btn btn-primary w-100"><i className="ri-edit-line me-1"></i> Manage</button>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-xl-4 col-xxl-3">
                                  <div className="card">
                                      <div className="d-flex flex-wrap gap-3 align-items-center border-bottom p-4">
                                          <div className="avatar text-muted bg-light size-11 rounded fw-medium">TW</div>
                                          <div className="flex-grow-1">
                                              <h6 className="mb-0">Transit Warehouse</h6>
                                              <p className="text-muted">Warehouse ID: TW-008</p>
                                          </div>
                                          <span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle">At Risk</span>
                                      </div>
                                      <div className="px-4 py-6">
                                          <div className="row g-5">
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Low Stock:</p>
                                                  <p className="fw-medium">22 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Out of Stock:</p>
                                                  <p className="fw-medium">9 Items</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Last Updated:</p>
                                                  <p className="fw-medium">Yesterday</p>
                                              </div>
                                              <div className="col-6">
                                                  <p className="text-muted mb-1">Stock Value:</p>
                                                  <p className="fw-medium">₹27.3L</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="d-flex flex-wrap flex-md-nowrap gap-2 bg-light bg-opacity-50 p-4">
                                          <button type="button" className="btn bg-body-secondary border w-100"><i className="ri-eye-line me-1"></i> View</button>
                                          <button type="button" className="btn btn-primary w-100"><i className="ri-edit-line me-1"></i> Manage</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row align-items-center g-3 mt-3">
                              <div className="col-md-6">
                                  <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-8</b> of <b className="ms-1">27</b> Results</p>
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
                      <div className="tab-pane fade" id="list-view" role="tabpanel" aria-labelledby="list-view-tab" tabIndex="0">
                          <div className="table-responsive">
                              <table className="table table-borderless align-middle text-nowrap">
                                  <thead>
                                      <tr className="bg-light border-bottom">
                                          <th className="text-muted fw-medium">Warehouse</th>
                                          <th className="text-muted fw-medium">Warehouse ID</th>
                                          <th className="text-muted fw-medium">Status</th>
                                          <th className="text-muted fw-medium">Low Stock</th>
                                          <th className="text-muted fw-medium">Out of Stock</th>
                                          <th className="text-muted fw-medium">Last Updated</th>
                                          <th className="text-muted fw-medium">Stock Value</th>
                                          <th className="text-muted fw-medium">Actions</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <div className="avatar text-muted bg-light size-11 rounded fw-medium">CW</div>
                                                  <h6 className="mb-0">Central Warehouse</h6>
                                              </div>
                                          </td>
                                          <td>CW-001</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Open</span></td>
                                          <td>18 Items</td>
                                          <td>6 Items</td>
                                          <td>Today</td>
                                          <td>₹42.6L</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-1">
                                                  <button type="button" className="btn btn-icon size-8 btn-light me-1"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-icon size-8 btn-sub-primary"><i className="ri-edit-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>

                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <div className="avatar text-muted bg-light size-11 rounded fw-medium">NW</div>
                                                  <h6 className="mb-0">North Warehouse</h6>
                                              </div>
                                          </td>
                                          <td>NW-002</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Open</span></td>
                                          <td>12 Items</td>
                                          <td>4 Items</td>
                                          <td>Today</td>
                                          <td>₹31.2L</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-1">
                                                  <button type="button" className="btn btn-icon size-8 btn-light me-1"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-icon size-8 btn-sub-primary"><i className="ri-edit-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>

                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <div className="avatar text-muted bg-light size-11 rounded fw-medium">SW</div>
                                                  <h6 className="mb-0">South Warehouse</h6>
                                              </div>
                                          </td>
                                          <td>SW-003</td>
                                          <td><span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle">At Risk</span></td>
                                          <td>26 Items</td>
                                          <td>11 Items</td>
                                          <td>Yesterday</td>
                                          <td>₹24.8L</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-1">
                                                  <button type="button" className="btn btn-icon size-8 btn-light me-1"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-icon size-8 btn-sub-primary"><i className="ri-edit-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>

                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <div className="avatar text-muted bg-light size-11 rounded fw-medium">EW</div>
                                                  <h6 className="mb-0">East Warehouse</h6>
                                              </div>
                                          </td>
                                          <td>EW-004</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Open</span></td>
                                          <td>9 Items</td>
                                          <td>2 Items</td>
                                          <td>Today</td>
                                          <td>₹38.5L</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-1">
                                                  <button type="button" className="btn btn-icon size-8 btn-light me-1"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-icon size-8 btn-sub-primary"><i className="ri-edit-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>

                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <div className="avatar text-muted bg-light size-11 rounded fw-medium">WW</div>
                                                  <h6 className="mb-0">West Warehouse</h6>
                                              </div>
                                          </td>
                                          <td>WW-005</td>
                                          <td><span className="badge bg-danger-subtle text-danger border border-danger-subtle">Critical</span></td>
                                          <td>34 Items</td>
                                          <td>18 Items</td>
                                          <td>2 Days Ago</td>
                                          <td>₹19.4L</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-1">
                                                  <button type="button" className="btn btn-icon size-8 btn-light me-1"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-icon size-8 btn-sub-primary"><i className="ri-edit-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>

                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <div className="avatar text-muted bg-light size-11 rounded fw-medium">RW</div>
                                                  <h6 className="mb-0">Regional Warehouse</h6>
                                              </div>
                                          </td>
                                          <td>RW-006</td>
                                          <td><span className="badge bg-success-subtle text-success border border-success-subtle">Open</span></td>
                                          <td>7 Items</td>
                                          <td>1 Item</td>
                                          <td>Today</td>
                                          <td>₹46.9L</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-1">
                                                  <button type="button" className="btn btn-icon size-8 btn-light me-1"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-icon size-8 btn-sub-primary"><i className="ri-edit-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>

                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <div className="avatar text-muted bg-light size-11 rounded fw-medium">BW</div>
                                                  <h6 className="mb-0">Backup Warehouse</h6>
                                              </div>
                                          </td>
                                          <td>BW-007</td>
                                          <td><span className="badge bg-danger-subtle text-danger border border-danger-subtle">Critical</span></td>
                                          <td>3 Items</td>
                                          <td>0 Items</td>
                                          <td>Today</td>
                                          <td>₹12.8L</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-1">
                                                  <button type="button" className="btn btn-icon size-8 btn-light me-1"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-icon size-8 btn-sub-primary"><i className="ri-edit-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <div className="avatar text-muted bg-light size-11 rounded fw-medium">TW</div>
                                                  <h6 className="mb-0">Transit Warehouse</h6>
                                              </div>
                                          </td>
                                          <td>TW-008</td>
                                          <td><span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle">At Risk</span></td>
                                          <td>22 Items</td>
                                          <td>9 Items</td>
                                          <td>Yesterday</td>
                                          <td>₹27.3L</td>
                                          <td>
                                              <div className="d-flex align-items-center gap-1">
                                                  <button type="button" className="btn btn-icon size-8 btn-light me-1"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-icon size-8 btn-sub-primary"><i className="ri-edit-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <div className="row align-items-center g-3">
                              <div className="col-md-6">
                                  <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-8</b> of <b className="ms-1">27</b> Results</p>
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
          </div>

          <div className="modal fade" id="addInventoryModal" tabIndex="-1" aria-labelledby="addInventoryModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h6 className="modal-title" id="addInventoryModalLabel">Add Valuation</h6>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                          <form id="inventoryValuationForm">
                              <input type="hidden" id="inventoryValuationId" />
                              <div className="row g-3">
                                  <div className="col-12">
                                      <label htmlFor="productName" className="form-label">
                                          Product Name <span className="text-danger">*</span>
                                      </label>
                                      <input type="text" className="form-control" id="productName" placeholder="Blouse Top" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="productSku" className="form-label">SKU <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="productSku" placeholder="BLC-500" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="stockQuantity" className="form-label">Stock Quantity <span className="text-danger">*</span></label>
                                      <input type="number" className="form-control" id="stockQuantity" placeholder="10" required />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="warehouseSelect" className="form-label">Warehouse <span className="text-danger">*</span></label>
                                      <div id="warehouseSelect"></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="supplierSelect" className="form-label">Supplier</label>
                                      <div id="supplierSelect"></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="inventoryStatusSelect" className="form-label">Inventory Status</label>
                                      <div id="inventoryStatusSelect"></div>
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="inventoryNotes" className="form-label">Valuation Notes</label>
                                      <textarea className="form-control" id="inventoryNotes" rows="3" placeholder="Remarks related to inventory valuation"></textarea>
                                  </div>
                              </div>
                              <div className="d-flex gap-2 mt-7">
                                  <button type="button" className="btn btn-light w-100" data-bs-dismiss="modal">Cancel</button>
                                  <button type="submit" className="btn btn-primary w-100" id="saveValuationBtn">Save Valuation</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
