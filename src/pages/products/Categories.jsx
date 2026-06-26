import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Categories</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Products</a></li>
                  <li className="breadcrumb-item active">Categories</li>
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
                          <div className="d-flex gap-3 flex-wrap ms-auto flex-md-nowrap">
                              <div id="Categories" className="min-w-44"></div>
                              <div id="Status"></div>
                              <button type="button" className="btn btn-primary d-flex align-items-center gap-1 flex-shrink-0" data-bs-toggle="modal" data-bs-target="#addCategoryModal" id="addCategoriesBtn"><i data-lucide="plus" className="size-4"></i> Add Categories</button>
                          </div>
                      </div>
                      <div className="card-body pt-0">
                          <div className="table-card table-responsive">
                              <table className="table align-middle text-nowrap mb-0">
                                  <thead>
                                      <tr className="bg-light border-bottom">
                                          <th>
                                              <div className="form-check check-primary">
                                                  <input className="form-check-input" type="checkbox" aria-label="checkbox" id="checAllData" />
                                                  <label className="form-check-label d-none" htmlFor="checAllData">Check All Data</label>
                                              </div>
                                          </th>
                                          <th className="fw-medium text-muted sortable" data-column="category">Category</th>
                                          <th className="fw-medium text-muted sortable" data-column="code">Code</th>
                                          <th className="fw-medium text-muted sortable" data-column="products">Products</th>
                                          <th className="fw-medium text-muted sortable" data-column="status">Status</th>
                                          <th className="fw-medium text-muted sortable" data-column="created">Created</th>
                                          <th className="fw-medium text-muted">Action</th>
                                      </tr>
                                  </thead>
                                  <tbody id="variantTableBody">

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


          <div className="modal fade" id="addCategoryModal" tabIndex="-1" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h6 className="modal-title" id="addCategoryModalLabel">Add New Category</h6>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          <form id="categoryForm">
                              <input type="hidden" id="categoryId" />
                              <div className="mb-3">
                                  <label htmlFor="categoryName" className="form-label">Category Name <span className="text-danger">*</span></label>
                                  <input type="text" className="form-control" id="categoryName" placeholder="e.g., Electronics" required />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="categoryCode" className="form-label">Code <span className="text-danger">*</span></label>
                                  <input type="text" className="form-control" id="categoryCode" placeholder="e.g., ELE-001" required />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="categoryProducts" className="form-label">Products Count</label>
                                  <input type="number" className="form-control" id="categoryProducts" min="0" defaultValue="0" />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="categoryStatus" className="form-label">Status</label>
                                  <div id="categoryStatus"></div>
                              </div>
                              <div className="d-flex gap-2 mt-7">
                                  <button type="button" className="btn btn-light w-100" data-bs-dismiss="modal">Close</button>
                                  <button type="submit" className="btn btn-primary w-100" id="saveCategoryBtn" form="categoryForm">Add Category</button>
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
                      <h5 className="mb-4 lh-base">Are you sure you want to delete this Category?</h5>
                      <input type="hidden" id="deleteCategoryId" />
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
