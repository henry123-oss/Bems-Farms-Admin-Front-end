import { Link } from 'react-router-dom'

export default function BulkImport() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Bulk Import</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Products</a></li>
                  <li className="breadcrumb-item active">Bulk Import</li>
              </ul>
          </div>
          <div className="row">
              <div className="col-12">
                  <div className="card">
                      <div className="card-header">
                          <h5 className="card-title mb-0">Product Bulk Import</h5>
                      </div>
                      <div className="card-body">
                          <div className="alert alert-secondary mb-5">
                              <h6 className="mb-3">
                                  Step 1: Prepare Your Product File
                              </h6>
                              <ol className="mb-0 ps-5">
                                  <li className="mb-2">Download the product import template and open it in Excel or Sheets</li>
                                  <li className="mb-2">Fill in product details according to the sample file instructions</li>
                                  <li className="mb-2">Ensure required fields like SKU, name, price, and stock are filled</li>
                                  <li>Save the completed file in CSV, XLS, or XLSX format</li>
                              </ol>
                          </div>
                          <div className="mb-6">
                              <button type="button" className="btn btn-primary"><i className="ri-download-line me-1"></i> Download CSV</button>
                          </div>
                          <div className="alert alert-secondary mb-5">
                              <h6 className="mb-2">
                                  Step 2: Category & Brand Mapping
                              </h6>
                              <ol className="mb-0 ps-5">
                                  <li className="mb-2">Category ID and Brand ID must be provided as numeric values</li>
                                  <li className="mb-2">Only existing categories and brands will be accepted during import</li>
                                  <li>Use the reference files below to find correct Category and Brand IDs</li>
                              </ol>
                          </div>
                          <div className="d-flex gap-2 flex-wrap mt-3">
                              <button type="button" className="btn btn-primary"><i className="ri-download-line me-1"></i> Variants</button>
                              <button type="button" className="btn btn-primary"><i className="ri-download-line me-1"></i> Products</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-12">
                  <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                          <h5 className="card-title mb-0">Import History</h5>
                          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#uploadCsvModal"><i className="ri-upload-line me-1"></i>Upload CSV</button>
                      </div>
                      <div className="card-body pt-0">
                          <div className="table-card table-responsive">
                              <table className="table table-borderless align-middle text-nowrap">
                                  <thead className="bg-light border-bottom">
                                      <tr>
                                          <th className="fw-medium text-muted">File Name</th>
                                          <th className="fw-medium text-muted">Import Type</th>
                                          <th className="fw-medium text-muted">Uploaded By</th>
                                          <th className="fw-medium text-muted">Status</th>
                                          <th className="fw-medium text-muted">Date</th>
                                          <th className="fw-medium text-muted">Action</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="data:image/png;base64,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" alt="File" className="size-7" />
                                                  <a href="#" className="fw-medium text-reset">products_jan.xlsx</a>
                                              </div>
                                          </td>
                                          <td>Product Import</td>
                                          <td>Admin</td>
                                          <td>
                                              <span className="bg-success-subtle text-success border border-success-subtle badge">Success</span>
                                          </td>
                                          <td>12 Jan 2025</td>
                                          <td>
                                              <div className="d-flex gap-2">
                                                  <button type="button" className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="data:image/png;base64,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" alt="File" className="size-7" />
                                                  <a href="#" className="fw-medium text-reset">variants_feb.csv</a>
                                              </div>
                                          </td>
                                          <td>Variant Import</td>
                                          <td>Store Manager</td>
                                          <td>
                                              <span className="bg-success-subtle text-success border border-success-subtle badge">Success</span>
                                          </td>
                                          <td>08 Feb 2025</td>
                                          <td>
                                              <div className="d-flex gap-2">
                                                  <button type="button" className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="data:image/png;base64,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" alt="File" className="size-7" />
                                                  <a href="#" className="fw-medium text-reset">price_update.xls</a>
                                              </div>
                                          </td>
                                          <td>Product Update</td>
                                          <td>Admin</td>
                                          <td>
                                              <span className="bg-danger-subtle text-danger border border-danger-subtle badge">Failed</span>
                                          </td>
                                          <td>22 Feb 2025</td>
                                          <td>
                                              <div className="d-flex gap-2">
                                                  <button type="button" className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="data:image/png;base64,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" alt="File" className="size-7" />
                                                  <a href="#" className="fw-medium text-reset">category_import.csv</a>
                                              </div>
                                          </td>
                                          <td>Category Import</td>
                                          <td>Inventory Team</td>
                                          <td>
                                              <span className="bg-info-subtle text-info border border-info-subtle badge">Processing</span>
                                          </td>
                                          <td>01 Mar 2025</td>
                                          <td>
                                              <div className="d-flex gap-2">
                                                  <button type="button" className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center gap-2">
                                                  <img src="data:image/png;base64,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" alt="File" className="size-7" />
                                                  <a href="#" className="fw-medium text-reset">supplier_products.xlsx</a>
                                              </div>
                                          </td>
                                          <td>Supplier Import</td>
                                          <td>Warehouse Admin</td>
                                          <td>
                                              <span className="bg-success-subtle text-success border border-success-subtle badge">Success</span>
                                          </td>
                                          <td>10 Mar 2025</td>
                                          <td>
                                              <div className="d-flex gap-2">
                                                  <button type="button" className="btn btn-sub-secondary size-8 btn-icon"><i className="ri-eye-line"></i></button>
                                                  <button type="button" className="btn btn-sub-danger size-8 btn-icon" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i></button>
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <div className="row align-items-center g-3">
                              <div className="col-md-6">
                                  <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-10</b> of <b className="ms-1">18</b> Results</p>
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
              </div>
          </div>


          <div className="modal fade" id="uploadCsvModal" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header border-bottom-0 pb-2">
                          <div>
                              <h6 className="modal-title mb-1">Import Products</h6>
                              <p className="text-muted">Upload a CSV file to import product information</p>
                          </div>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                          <div className="border border-dashed rounded p-4 text-center mb-3">
                              <img src="../assets/format-files-w64c4rM8.png" alt="Files" className="h-14 mb-2" />
                              <h6 className="fw-semibold mb-1">Drag CSV here to import product information</h6>
                              <p className="text-muted small mb-3">or click to browse (max 5 MB)</p>
                              <div className="text-center">
                                  <input type="file" id="bulkFileInput" className="d-none" accept=".csv,.xls,.xlsx" />
                                  <button type="button" className="btn btn-light border px-4" onclick="document.getElementById('bulkFileInput').click()">Browse File</button>
                              </div>
                          </div>
                          <div className="position-relative text-center my-4">
                              <div className="position-absolute top-50 start-0 border-top w-100 border-dashed"></div>
                              <p className="bg-body-secondary text-muted p-2 position-relative d-inline-block">OR import from Google Sheet</p>
                          </div>
                          <div className="d-flex gap-3">
                              <div className="input-group">
                                  <span className="input-group-text">https://</span>
                                  <input type="text" className="form-control" placeholder="Enter sheet link" />
                              </div>
                              <button className="btn btn-outline-light border">Upload</button>
                          </div>
                          <div className="d-flex justify-content-between gap-2 mt-6">
                              <button type="button" className="btn btn-outline-light border w-100" data-bs-dismiss="modal">Cancel</button>
                              <button type="button" className="btn btn-primary w-100">Import Products</button>
                          </div>
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
                      <h5 className="mb-4 lh-base">Are you sure you want to delete this File?</h5>
                      <input type="hidden" id="deleteSubCategoryId" />
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
