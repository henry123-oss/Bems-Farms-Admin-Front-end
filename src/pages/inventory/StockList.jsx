import { Link } from 'react-router-dom'

export default function StockList() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Stock List</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                  <li className="breadcrumb-item active">Stock List</li>
              </ul>
          </div>
          <div className="row">
              <div className="col-12">
                  <div className="card">
                      <div className="card-header d-flex flex-wrap gap-3 justify-content-between align-items-center">
                          <div className="flex-shrink-0">
                              <label htmlFor="searchProductInput" className="form-label d-none">Search</label>
                              <div className="position-relative">
                                  <input type="text" className="form-control ps-9" id="searchProductInput" placeholder="Search for..." />
                                  <i data-lucide="search" className="size-4 icon-dark position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                              </div>
                          </div>
                          <div className="d-flex flex-wrap flex-md-nowrap gap-2">
                              <div id="Status" className="min-w-52"></div>
                              <div id="categoryOptions" className="min-w-52"></div>
                              <div className="dropdown flex-shrink-0">
                                  <button className="btn btn-outline-light border d-flex align-items-center" type="button" id="filterDropdownButton" data-bs-toggle="dropdown" aria-expanded="false" title="dropdown-button">
                                      <i data-lucide="filter" className="size-4 me-1"></i> Filters
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3 w-64" aria-labelledby="filterDropdownButton">
                                      <h6 className="mb-3">Filter Options</h6>
                                      <form action="#!" id="filterForm">
                                          <div className="mb-4">
                                              <label className="form-label">Stock Quantity</label>
                                              <div className="d-flex gap-2">
                                                  <input type="number" className="form-control h-9" placeholder="Min" />
                                                  <input type="number" className="form-control h-9" placeholder="Max" />
                                              </div>
                                          </div>
                                          <h6 className="mb-2 fs-sm">Stock Status</h6>
                                          <div className="d-flex flex-column gap-2 mb-4">
                                              <div className="form-check">
                                                  <input className="form-check-input mt-0" type="checkbox" id="inStock" />
                                                  <label className="form-check-label" htmlFor="inStock">In Stock</label>
                                              </div>
                                              <div className="form-check">
                                                  <input className="form-check-input mt-0" type="checkbox" id="lowStock" />
                                                  <label className="form-check-label" htmlFor="lowStock">Low Stock</label>
                                              </div>
                                              <div className="form-check">
                                                  <input className="form-check-input mt-0" type="checkbox" id="outStock" />
                                                  <label className="form-check-label" htmlFor="outStock">Out of Stock</label>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-center justify-content-end gap-2 mt-4">
                                              <button type="reset" className="btn btn-light btn-sm">Reset</button>
                                              <button type="submit" className="btn btn-primary btn-sm">Apply</button>
                                          </div>
                                      </form>
                                  </ul>
                              </div>
                              <button type="button" className="btn btn-primary d-flex align-items-center gap-1 flex-shrink-0" data-bs-toggle="modal" data-bs-target="#addProductModal" id="addProductBtn"><i data-lucide="plus" className="size-4"></i> Add Product</button>
                          </div>
                      </div>
                      <div className="card-body pt-0">
                          <div className="table-card table-responsive">
                              <table className="table align-middle text-nowrap mb-0">
                                  <thead>
                                      <tr className="bg-light border-bottom">
                                          <th>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" id="checAllData" />
                                              </div>
                                          </th>
                                          <th className="fw-medium text-muted sortable" data-column="product">Product</th>
                                          <th className="fw-medium text-muted sortable" data-column="sku">SKU</th>
                                          <th className="fw-medium text-muted sortable" data-column="category">Category</th>
                                          <th className="fw-medium text-muted sortable" data-column="stock">Stock</th>
                                          <th className="fw-medium text-muted sortable" data-column="reorderLevel">Reorder Level</th>
                                          <th className="fw-medium text-muted sortable" data-column="status">Status</th>
                                          <th className="fw-medium text-muted sortable" data-column="cost">Cost (₹)</th>
                                          <th className="fw-medium text-muted sortable" data-column="price">Price (₹)</th>
                                          <th className="fw-medium text-muted sortable" data-column="lastUpdated">Last Updated</th>
                                          <th className="fw-medium text-muted">Action</th>
                                      </tr>
                                  </thead>
                                  <tbody id="inventoryTableBody">

                                  </tbody>
                              </table>
                          </div>
                          <div className="row align-items-center g-3 mt-2">
                              <div className="col-md-6">
                                  <p className="text-muted text-center text-md-start mb-0" id="paginationInfo">
                                      Showing <b className="me-1">1-0</b> of <b className="ms-1">0</b> Results
                                  </p>
                              </div>
                              <div className="col-md-6">
                                  <nav aria-label="Page navigation example">
                                      <ul className="pagination justify-content-center justify-content-md-end mb-0" id="pagination">

                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div className="modal fade" id="addProductModal" tabIndex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content overflow-hidden">
                      <div className="h-24 rounded-top-2 pattern-bg"></div>
                      <div className="modal-body position-relative">
                          <form id="productForm">
                              <input type="hidden" id="productId" />
                              <div className="text-center mb-2">
                                  <label className="avatar border bg-body-secondary size-24 rounded p-3 mt-n20 cursor-pointer position-relative d-inline-block overflow-hidden" htmlFor="imageInput" id="imagePreviewLabel">
                                      <img id="imagePreview" src="#" className="w-100 h-100 object-fit-cover d-none" />
                                      <div id="uploadIcon" className="d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0">
                                          <i className="ri-upload-cloud-2-line fs-2xl text-muted"></i>
                                      </div>
                                      <input type="file" id="imageInput" className="d-none" accept="image/*" />
                                  </label>
                              </div>
                              <div className="row g-3">
                                  <div className="col-12">
                                      <label htmlFor="productName" className="form-label">Product Name <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="productName" placeholder="e.g., Apple iPhone 15" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="sku" className="form-label">SKU <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="sku" placeholder="e.g., APL-15" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="stock" className="form-label">Stock <span className="text-danger">*</span></label>
                                      <input type="number" className="form-control" id="stock" min="0" placeholder="0" required />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="category" className="form-label">Category <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="category" placeholder="e.g., Electronics" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="reorderLevel" className="form-label">Reorder Level</label>
                                      <input type="number" className="form-control" id="reorderLevel" min="0" placeholder="0" />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="status" className="form-label">Status</label>
                                      <div id="statusSelect"></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="cost" className="form-label">Cost (₹) <span className="text-danger">*</span></label>
                                      <input type="number" className="form-control" id="cost" min="0" step="0.01" placeholder="0" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="price" className="form-label">Price (₹) <span className="text-danger">*</span></label>
                                      <input type="number" className="form-control" id="price" min="0" step="0.01" placeholder="0" required />
                                  </div>
                              </div>

                              <div className="d-flex gap-2 mt-7">
                                  <button type="button" className="btn btn-light w-100" data-bs-dismiss="modal">Close</button>
                                  <button type="submit" className="btn btn-primary w-100" id="saveProductBtn">Save Product</button>
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
                      <h5 className="mb-4 lh-base">Are you sure you want to delete this Product?</h5>
                      <input type="hidden" id="deleteWarrantyId" />
                      <div className="d-flex justify-content-center align-items-center gap-2">
                          <button type="button" className="btn btn-danger" id="confirmDeleteBtn">Delete</button>
                          <button type="button" className="btn btn-link text-reset" data-bs-dismiss="modal">Cancel</button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
