import { Link } from 'react-router-dom'

export default function StockAlerts() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Alerts</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                  <li className="breadcrumb-item active">Alerts</li>
              </ul>
          </div>
          <div className="row row-cols-1 row-cols-md-3 row-cols-xxl-5">
              <div className="col">
                  <div className="card card-stat card-low">
                      <div className="card-body">
                          <div className="size-10 avatar bg-light text-muted rounded float-end">
                              <i data-lucide="arrow-up-right" className="size-5"></i>
                          </div>
                          <div className="size-10 avatar bg-danger-subtle text-danger rounded mb-4">
                              <i data-lucide="x" className="size-5"></i>
                          </div>
                          <h6 className="fs-16 fw-medium mb-6">Out of Stock</h6>
                          <h3 className="font-base lh-1">142</h3>
                          <p className="text-muted">Compared to last month</p>
                      </div>
                  </div>
              </div>
              <div className="col">
                  <div className="card card-stat card-low">
                      <div className="card-body">
                          <div className="size-10 avatar bg-light text-muted rounded float-end">
                              <i data-lucide="arrow-up-right" className="size-5"></i>
                          </div>
                          <div className="size-10 avatar bg-warning-subtle text-warning rounded mb-4">
                              <i data-lucide="alert-circle" className="size-5"></i>
                          </div>
                          <h6 className="fs-16 fw-medium mb-6">Low Stock</h6>
                          <h3 className="font-base lh-1">342</h3>
                          <p className="text-muted">Needs restocking soon</p>
                      </div>
                  </div>
              </div>
              <div className="col">
                  <div className="card card-stat card-low">
                      <div className="card-body">
                          <div className="size-10 avatar bg-light text-muted rounded float-end">
                              <i data-lucide="arrow-up-right" className="size-5"></i>
                          </div>
                          <div className="size-10 avatar bg-info-subtle text-info rounded mb-4">
                              <i data-lucide="package" className="size-5"></i>
                          </div>
                          <h6 className="fs-16 fw-medium mb-6">Pending Orders</h6>
                          <h3 className="font-base lh-1">129</h3>
                          <p className="text-muted">Orders awaiting processing</p>
                      </div>
                  </div>
              </div>
              <div className="col">
                  <div className="card card-stat card-low">
                      <div className="card-body">
                          <div className="size-10 avatar bg-light text-muted rounded float-end">
                              <i data-lucide="arrow-up-right" className="size-5"></i>
                          </div>
                          <div className="size-10 avatar bg-danger-subtle text-danger rounded mb-4">
                              <i data-lucide="truck" className="size-5"></i>
                          </div>
                          <h6 className="fs-16 fw-medium mb-6">Failed Deliveries</h6>
                          <h3 className="font-base lh-1">17</h3>
                          <p className="text-muted">Check delivery exceptions</p>
                      </div>
                  </div>
              </div>
              <div className="col">
                  <div className="card card-stat card-low">
                      <div className="card-body">
                          <div className="size-10 avatar bg-light text-muted rounded float-end">
                              <i data-lucide="arrow-up-right" className="size-5"></i>
                          </div>
                          <div className="size-10 avatar bg-primary-subtle text-primary rounded mb-4">
                              <i data-lucide="server" className="size-5"></i>
                          </div>
                          <h6 className="fs-16 fw-medium mb-6">System Alerts</h6>
                          <h3 className="font-base lh-1">54</h3>
                          <p className="text-muted">Critical notifications pending</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="card">
              <div className="card-header d-flex flex-wrap gap-4 justify-content-between align-items-center">
                  <h6 className="mb-0">Inventory Alert List</h6>
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                      <div className="position-relative flex-shrink-0">
                          <input type="text" id="lostItemSearch" className="form-control ps-9" placeholder="Search for lost items..." />
                          <i data-lucide="search" className="size-4 icon-dark position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                      </div>
                      <div id="alertTypeFilter" className="w-48"></div>
                      <div id="severityFilter" className="w-48"></div>
                      <div id="categoryFilter" className="w-52"></div>
                      <button type="button" className="btn btn-primary flex-shrink-0" data-bs-toggle="modal" data-bs-target="#addInventoryModal"><i data-lucide="plus" className="me-1 size-4"></i> Add Alert</button>
                  </div>
              </div>
              <div className="card-body pt-0">
                  <div className="table-card table-responsive">
                      <table className="table align-middle text-nowrap mb-0">
                          <thead>
                              <tr className="bg-light border-bottom">
                                  <th>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checkAllAlerts" />
                                      </div>
                                  </th>
                                  <th className="text-muted fw-medium">Alert Date</th>
                                  <th className="text-muted fw-medium">Product Name</th>
                                  <th className="text-muted fw-medium">SKU</th>
                                  <th className="text-muted fw-medium">Severity</th>
                                  <th className="text-muted fw-medium">Warehouse</th>
                                  <th className="text-muted fw-medium">Current Stock</th>
                                  <th className="text-muted fw-medium">Threshold</th>
                                  <th className="text-muted fw-medium">Alert Type</th>
                                  <th className="text-muted fw-medium">Suggested Action</th>
                                  <th className="text-muted fw-medium">Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" />
                                      </div>
                                  </td>
                                  <td>14 Dec 2025</td>
                                  <td>iPhone 15</td>
                                  <td>APL-IP15</td>
                                  <td>
                                      <span className="bg-body-tertiary text-body-secondary border border-dark-subtle badge">Critical</span>
                                  </td>
                                  <td>Main Warehouse</td>
                                  <td className="text-muted fw-medium">5</td>
                                  <td>20</td>
                                  <td><span className="badge bg-danger-subtle text-danger border border-danger-subtle">Low Stock</span></td>
                                  <td>Reorder Immediately</td>
                                  <td>
                                      <div className="dropdown">
                                          <button type="button" className="btn btn-outline-light border btn-sm px-3 h-8 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Export</button>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a className="dropdown-item" href="#" id="exportPrint">Print PDF</a></li>
                                              <li><a className="dropdown-item" href="#" id="exportJSON">Export CSV</a></li>
                                              <li><a className="dropdown-item" href="#" id="exportXML">Export XML</a></li>
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
                                  <td>13 Dec 2025</td>
                                  <td>Samsung Galaxy S24</td>
                                  <td>SAM-S24</td>
                                  <td>
                                      <span className="bg-body-tertiary text-body-secondary border border-dark-subtle badge">
                                          Critical
                                      </span>
                                  </td>
                                  <td>Main Warehouse</td>
                                  <td className="text-muted fw-medium">2</td>
                                  <td>15</td>
                                  <td>
                                      <span className="badge bg-danger-subtle text-danger border border-danger-subtle">
                                          Low Stock
                                      </span>
                                  </td>
                                  <td>Reorder Immediately</td>
                                  <td>
                                      <div className="dropdown">
                                          <button type="button" className="btn btn-outline-light border btn-sm px-3 h-8 dropdown-toggle" data-bs-toggle="dropdown">
                                              Export
                                          </button>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a className="dropdown-item" href="#">Print PDF</a></li>
                                              <li><a className="dropdown-item" href="#">Export CSV</a></li>
                                              <li><a className="dropdown-item" href="#">Export XML</a></li>
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
                                  <td>12 Dec 2025</td>
                                  <td>Amul Milk 1L</td>
                                  <td>AML-MILK</td>
                                  <td>
                                      <span className="bg-body-tertiary text-body-secondary border border-dark-subtle badge">
                                          Warning
                                      </span>
                                  </td>
                                  <td>Secondary Warehouse</td>
                                  <td className="text-muted fw-medium">30</td>
                                  <td>—</td>
                                  <td>
                                      <span className="badge bg-warning-subtle text-warning border border-warning-subtle">
                                          Expiring Soon
                                      </span>
                                  </td>
                                  <td>Apply Discount</td>
                                  <td>
                                      <div className="dropdown">
                                          <button type="button" className="btn btn-outline-light border btn-sm px-3 h-8 dropdown-toggle" data-bs-toggle="dropdown">
                                              Export
                                          </button>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a className="dropdown-item" href="#">Print PDF</a></li>
                                              <li><a className="dropdown-item" href="#">Export CSV</a></li>
                                              <li><a className="dropdown-item" href="#">Export XML</a></li>
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
                                  <td>11 Dec 2025</td>
                                  <td>Bluetooth Headphones</td>
                                  <td>BH-900</td>
                                  <td>
                                      <span className="bg-body-tertiary text-body-secondary border border-dark-subtle badge">
                                          Warning
                                      </span>
                                  </td>
                                  <td>Main Warehouse</td>
                                  <td className="text-muted fw-medium">8</td>
                                  <td>12</td>
                                  <td>
                                      <span className="badge bg-danger-subtle text-danger border border-danger-subtle">
                                          Low Stock
                                      </span>
                                  </td>
                                  <td>Schedule Reorder</td>
                                  <td>
                                      <div className="dropdown">
                                          <button type="button" className="btn btn-outline-light border btn-sm px-3 h-8 dropdown-toggle" data-bs-toggle="dropdown">
                                              Export
                                          </button>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a className="dropdown-item" href="#">Print PDF</a></li>
                                              <li><a className="dropdown-item" href="#">Export CSV</a></li>
                                              <li><a className="dropdown-item" href="#">Export XML</a></li>
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
                                  <td>10 Dec 2025</td>
                                  <td>HP Laser Printer</td>
                                  <td>HP-LPR-01</td>
                                  <td>
                                      <span className="bg-body-tertiary text-body-secondary border border-dark-subtle badge">
                                          Critical
                                      </span>
                                  </td>
                                  <td>Central Warehouse</td>
                                  <td className="text-muted fw-medium">0</td>
                                  <td>5</td>
                                  <td>
                                      <span className="badge bg-danger-subtle text-danger border border-danger-subtle">
                                          Out of Stock
                                      </span>
                                  </td>
                                  <td>Create Purchase Order</td>
                                  <td>
                                      <div className="dropdown">
                                          <button type="button" className="btn btn-outline-light border btn-sm px-3 h-8 dropdown-toggle" data-bs-toggle="dropdown">
                                              Export
                                          </button>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a className="dropdown-item" href="#">Print PDF</a></li>
                                              <li><a className="dropdown-item" href="#">Export CSV</a></li>
                                              <li><a className="dropdown-item" href="#">Export XML</a></li>
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
                                  <td>09 Dec 2025</td>
                                  <td>Logitech Wireless Mouse</td>
                                  <td>LOG-M185</td>
                                  <td>
                                      <span className="bg-body-tertiary text-body-secondary border border-dark-subtle badge">
                                          Warning
                                      </span>
                                  </td>
                                  <td>Main Warehouse</td>
                                  <td className="text-muted fw-medium">12</td>
                                  <td>25</td>
                                  <td>
                                      <span className="badge bg-danger-subtle text-danger border border-danger-subtle">
                                          Low Stock
                                      </span>
                                  </td>
                                  <td>Reorder Soon</td>
                                  <td>
                                      <div className="dropdown">
                                          <button type="button" className="btn btn-outline-light border btn-sm px-3 h-8 dropdown-toggle" data-bs-toggle="dropdown">
                                              Export
                                          </button>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a className="dropdown-item" href="#">Print PDF</a></li>
                                              <li><a className="dropdown-item" href="#">Export CSV</a></li>
                                              <li><a className="dropdown-item" href="#">Export XML</a></li>
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
                                  <td>08 Dec 2025</td>
                                  <td>A4 Printing Paper (500 Sheets)</td>
                                  <td>PPR-A4-500</td>
                                  <td>
                                      <span className="bg-body-tertiary text-body-secondary border border-dark-subtle badge">
                                          Normal
                                      </span>
                                  </td>
                                  <td>Central Warehouse</td>
                                  <td className="text-muted fw-medium">60</td>
                                  <td>40</td>
                                  <td>
                                      <span className="badge bg-info-subtle text-info border border-info-subtle">
                                          Stock OK
                                      </span>
                                  </td>
                                  <td>No Action Required</td>
                                  <td>
                                      <div className="dropdown">
                                          <button type="button" className="btn btn-outline-light border btn-sm px-3 h-8 dropdown-toggle" data-bs-toggle="dropdown">
                                              Export
                                          </button>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a className="dropdown-item" href="#">Print PDF</a></li>
                                              <li><a className="dropdown-item" href="#">Export CSV</a></li>
                                              <li><a className="dropdown-item" href="#">Export XML</a></li>
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
                                  <td>07 Dec 2025</td>
                                  <td>Dettol Hand Sanitizer 500ml</td>
                                  <td>DTL-SAN-500</td>
                                  <td>
                                      <span className="bg-body-tertiary text-body-secondary border border-dark-subtle badge">
                                          Warning
                                      </span>
                                  </td>
                                  <td>Secondary Warehouse</td>
                                  <td className="text-muted fw-medium">18</td>
                                  <td>30</td>
                                  <td>
                                      <span className="badge bg-danger-subtle text-danger border border-danger-subtle">
                                          Low Stock
                                      </span>
                                  </td>
                                  <td>Reorder Soon</td>
                                  <td>
                                      <div className="dropdown">
                                          <button type="button" className="btn btn-outline-light border btn-sm px-3 h-8 dropdown-toggle" data-bs-toggle="dropdown">
                                              Export
                                          </button>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a className="dropdown-item" href="#">Print PDF</a></li>
                                              <li><a className="dropdown-item" href="#">Export CSV</a></li>
                                              <li><a className="dropdown-item" href="#">Export XML</a></li>
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
                                  <td>06 Dec 2025</td>
                                  <td>Lenovo ThinkPad Charger</td>
                                  <td>LNV-CHG-65W</td>
                                  <td>
                                      <span className="bg-body-tertiary text-body-secondary border border-dark-subtle badge">
                                          Critical
                                      </span>
                                  </td>
                                  <td>Main Warehouse</td>
                                  <td className="text-muted fw-medium">3</td>
                                  <td>10</td>
                                  <td>
                                      <span className="badge bg-danger-subtle text-danger border border-danger-subtle">
                                          Low Stock
                                      </span>
                                  </td>
                                  <td>Immediate Reorder</td>
                                  <td>
                                      <div className="dropdown">
                                          <button type="button" className="btn btn-outline-light border btn-sm px-3 h-8 dropdown-toggle" data-bs-toggle="dropdown">
                                              Export
                                          </button>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a className="dropdown-item" href="#">Print PDF</a></li>
                                              <li><a className="dropdown-item" href="#">Export CSV</a></li>
                                              <li><a className="dropdown-item" href="#">Export XML</a></li>
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
                                  <td>05 Dec 2025</td>
                                  <td>Tata Salt 1kg</td>
                                  <td>TTS-SALT-1KG</td>
                                  <td>
                                      <span className="bg-body-tertiary text-body-secondary border border-dark-subtle badge">
                                          Normal
                                      </span>
                                  </td>
                                  <td>Central Warehouse</td>
                                  <td className="text-muted fw-medium">120</td>
                                  <td>50</td>
                                  <td>
                                      <span className="badge bg-info-subtle text-info border border-info-subtle">
                                          Stock OK
                                      </span>
                                  </td>
                                  <td>No Action Required</td>
                                  <td>
                                      <div className="dropdown">
                                          <button type="button" className="btn btn-outline-light border btn-sm px-3 h-8 dropdown-toggle" data-bs-toggle="dropdown">
                                              Export
                                          </button>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a className="dropdown-item" href="#">Print PDF</a></li>
                                              <li><a className="dropdown-item" href="#">Export CSV</a></li>
                                              <li><a className="dropdown-item" href="#">Export XML</a></li>
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className="row align-items-center g-3 mt-3">
                      <div className="col-md-6">
                          <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-11</b> of <b className="ms-1">17</b> Results</p>
                      </div>
                      <div className="col-md-6">
                          <nav aria-label="Page navigation example">
                              <ul className="pagination justify-content-center justify-content-md-end mb-0">
                                  <li className="page-item disabled"><a className="page-link" href="#"><i data-lucide="chevron-left" className="size-4"></i> Previous</a></li>
                                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                                  <li className="page-item disabled"><a className="page-link" href="#">Next <i data-lucide="chevron-right" className="size-4"></i></a></li>
                              </ul>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>


          <div className="modal fade" id="addInventoryModal" tabIndex="-1" aria-labelledby="addInventoryModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h6 className="modal-title" id="addInventoryModalLabel">Add Inventory</h6>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                          <form id="inventoryForm">
                              <input type="hidden" id="inventoryId" />
                              <div className="row g-3">
                                  <div className="col-12">
                                      <label htmlFor="inventoryProduct" className="form-label">Product <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="inventoryProduct" placeholder="Blouse Top" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="inventorySku" className="form-label">SKU <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="inventorySku" placeholder="BLC-500" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="inventoryQty" className="form-label">Quantity <span className="text-danger">*</span></label>
                                      <input type="number" className="form-control" id="inventoryQty" placeholder="10" required />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="inventoryWarehouse" className="form-label">Warehouse <span className="text-danger">*</span></label>
                                      <div id="inventoryWarehouse"></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="inventorySupplier" className="form-label">Supplier</label>
                                      <div id="inventorySupplier"></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="inventoryStatus" className="form-label">Status</label>
                                      <div id="inventoryStatus"></div>
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="inventoryNotes" className="form-label">Notes</label>
                                      <textarea className="form-control" id="inventoryNotes" rows="2" placeholder="Optional notes about inventory"></textarea>
                                  </div>
                              </div>
                              <div className="d-flex gap-2 mt-7">
                                  <button type="button" className="btn btn-light w-100" data-bs-dismiss="modal">Cancel</button>
                                  <button type="submit" className="btn btn-primary w-100" id="saveInventoryBtn">Save Inventory</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
