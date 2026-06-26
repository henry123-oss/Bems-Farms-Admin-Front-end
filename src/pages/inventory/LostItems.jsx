import { Link } from 'react-router-dom'

export default function LostItems() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Lost Items</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                  <li className="breadcrumb-item active">Lost Items</li>
              </ul>
          </div>

          <div className="mb-5 mt-2 d-flex justify-content-between align-items-center">
              <div className="dropdown">
                  <button type="button" className="btn btn-primary btn-sm h-9 px-4 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Export</button>
                  <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#" id="exportSelectedCSV">Export Selected (CSV)</a></li>
                      <li><a className="dropdown-item" href="#" id="exportPrint">Print Table</a></li>
                      <li><a className="dropdown-item" href="#" id="exportJSON">Export JSON</a></li>
                      <li><a className="dropdown-item" href="#" id="exportXML">Export XML</a></li>
                  </ul>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2">
                  <a href="#" className="avatar size-9 bg-warning-subtle rounded p-2">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANESURBVHic7ZtLaBNRFIa/O5nWakJpfaXWBwU1LkQQxI2gIIqvigtBN4JrwZUbQbAbF+5UBBHdiO5UFF8gIihoRVERtVqQLkRqrH3Z2odNjZ05LtxqZnLndm5a54Nswnn88+fezJnJRBESeXMmh5s6gi9bUCwAVNjcknQ+/Pv7jiv0vx8jnT2rdj84bKTXXwh1ENJ2bgfKvwqkjSv4lwEAn+5DcQTmr+5Q+16vMN4bcIICpP38EpR/hck4+FAI9L7OycVcr8ielOnqgQbgeYeAjOnGZTPYMY9Lb/vk6p5qk2WDDVBsNNkwEoMd9Yy+HJC722tNlQw2QJhnqpkRhj6l+fKuV27typooF2YFmPm2N8lofgbdz/NybefyqKWCDahUxnpc+p99kBvNa6KUmboGABS+OXQ/fSE3m9fplpjaBgCMDzp0tT6RW5ubddKnvgEAP4cV+Wd35ObW/eWmTg8DAIo/FJ8fXZJrmw+VkzZ9DACYGIeuxyfl+qZjYVMq2wCnqvwcrwj51pawJlS2AZkFenl+EbqetsjtbWuDQl29DjFRnwPfg5FO8H6Vl+t7MNp3GVhaKqyyDVAOzF3556WDm8nCq5Ihlb0FoiLFmqCQ6W1ACBIDbAuwTWKAbQG2SQywLcA22oOQ73v0fGyjMNyPiGgL+D78UzsXFDXVDisaq3FTep+l9goY+dbF2FBfpIOPjjBe9Pg6OKFdQduAlGv09nwkqlz9nay9BTL185lYlKMwPBBpFRQKPdq5AJmZDg11+pc0ES6GFHXZJuqyTfolgMaaEr8NxsB/fxZIDLAtwDaJAbYF2CaZBHVbJ5NgMgkmk2AyCU4HEgNsC7BNYoBtAbaJdRJ03CrmLFxG7dzFum2NE+sk6E/8or/zA+J7um2NE/sk6KRccCpn58U6CTquS322qaIePrU+CdqmctaiJRIDbAuwTWKAbQG2SQywLcA2iQGBEYLN276TTpg/TfXFoGNycNxiYEhgEVF271pGwZ3VHhQSYgX4p4ARE3pixUkJVekDgWFBAWrVwc84shf4YURYHKiUkG44qtafKP2oOCHPAmrlwXs4shrkAqg84EcWaRoFpGZ41MzuINO4UW04fTxM2m9+4hqehcgNDwAAAABJRU5ErkJggg==" alt="Document" className="img-fluid" />
                  </a>
                  <a href="#" className="avatar size-9 bg-success-subtle rounded p-2">
                      <img src="data:image/png;base64,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" alt="File" className="img-fluid" />
                  </a>
                  <a href="#" className="avatar size-9 bg-danger-subtle rounded p-2">
                      <img src="data:image/png;base64,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" alt="pdf" className="img-fluid" />
                  </a>
              </div>
          </div>
          <div className="card">
              <div className="card-header d-flex flex-wrap gap-3 align-items-center justify-content-between">
                  <div className="flex-shrink-0">
                      <div className="position-relative">
                          <input type="text" id="lostItemSearch" className="form-control ps-9" placeholder="Search for lost items..." />
                          <i data-lucide="search" className="size-4 icon-dark position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                      </div>
                  </div>
                  <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-2">
                      <div id="lostItemWarehouseFilter" className="w-56"></div>
                      <div className="position-relative w-52">
                          <input type="text" id="lostItemDate" className="form-control ps-9" data-datepicker data-date-format="dd-MM-yyyy" placeholder="Lost Date" />
                          <i data-lucide="calendar" className="size-4 icon-dark position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                      </div>
                      <div id="lostItemTypeFilter" className="w-56"></div>
                      <button type="button" className="btn btn-primary flex-shrink-0" data-bs-toggle="modal" data-bs-target="#addLostItemModal">
                          <i data-lucide="plus" className="me-1 size-4"></i> Add Lost Item
                      </button>
                  </div>
              </div>
              <div className="card-body pt-0">
                  <div className="table-card table-responsive">
                      <table className="table table-striped-even align-middle text-nowrap mb-0">
                          <thead>
                              <tr className="bg-light border-bottom">
                                  <th>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checAllData" />
                                      </div>
                                  </th>
                                  <th className="text-muted fw-medium">Date</th>
                                  <th className="text-muted fw-medium">Product Name</th>
                                  <th className="text-muted fw-medium">SKU</th>
                                  <th className="text-muted fw-medium">Category</th>
                                  <th className="text-muted fw-medium">Warehouse</th>
                                  <th className="text-muted fw-medium">Quantity</th>
                                  <th className="text-muted fw-medium">Unit Price</th>
                                  <th className="text-muted fw-medium">Total Value</th>
                                  <th className="text-muted fw-medium">Loss Type</th>
                                  <th className="text-muted fw-medium">Reason</th>
                                  <th className="text-muted fw-medium">Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checData6" />
                                      </div>
                                  </td>
                                  <td>14 Dec 2025</td>
                                  <td>iPad Pro 12.9</td>
                                  <td>IPD-12</td>
                                  <td>Electronics</td>
                                  <td>Main Warehouse</td>
                                  <td>2</td>
                                  <td>₹99,999</td>
                                  <td>₹1,99,998</td>
                                  <td>Damage</td>
                                  <td>Screen cracked</td>
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
                                          <input className="form-check-input" type="checkbox" id="checData7" />
                                      </div>
                                  </td>
                                  <td>13 Dec 2025</td>
                                  <td>Canon DSLR</td>
                                  <td>CAM-500</td>
                                  <td>Electronics</td>
                                  <td>Secondary Warehouse</td>
                                  <td>1</td>
                                  <td>₹55,000</td>
                                  <td>₹55,000</td>
                                  <td>Theft</td>
                                  <td>Camera stolen</td>
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
                                          <input className="form-check-input" type="checkbox" id="checData8" />
                                      </div>
                                  </td>
                                  <td>12 Dec 2025</td>
                                  <td>Leather Wallet</td>
                                  <td>LW-303</td>
                                  <td>Accessories</td>
                                  <td>Main Warehouse</td>
                                  <td>10</td>
                                  <td>₹1,200</td>
                                  <td>₹12,000</td>
                                  <td>Damage</td>
                                  <td>Scratched surface</td>
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
                                          <input className="form-check-input" type="checkbox" id="checData9" />
                                      </div>
                                  </td>
                                  <td>11 Dec 2025</td>
                                  <td>Gaming Chair</td>
                                  <td>GC-101</td>
                                  <td>Furniture</td>
                                  <td>Secondary Warehouse</td>
                                  <td>2</td>
                                  <td>₹8,500</td>
                                  <td>₹17,000</td>
                                  <td>Damage</td>
                                  <td>Broken armrest</td>
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
                                          <input className="form-check-input" type="checkbox" id="checData10" />
                                      </div>
                                  </td>
                                  <td>10 Dec 2025</td>
                                  <td>Bluetooth Headphones</td>
                                  <td>BH-900</td>
                                  <td>Electronics</td>
                                  <td>Main Warehouse</td>
                                  <td>5</td>
                                  <td>₹2,500</td>
                                  <td>₹12,500</td>
                                  <td>Theft</td>
                                  <td>Lost in transit</td>
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
                                          <input className="form-check-input" type="checkbox" id="checData11" />
                                      </div>
                                  </td>
                                  <td>09 Dec 2025</td>
                                  <td>Office Desk Lamp</td>
                                  <td>DL-202</td>
                                  <td>Furniture</td>
                                  <td>Secondary Warehouse</td>
                                  <td>3</td>
                                  <td>₹1,800</td>
                                  <td>₹5,400</td>
                                  <td>Damage</td>
                                  <td>Broken bulb holder</td>
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
                                          <input className="form-check-input" type="checkbox" id="checData12" />
                                      </div>
                                  </td>
                                  <td>08 Dec 2025</td>
                                  <td>Nike Sneakers</td>
                                  <td>NS-404</td>
                                  <td>Footwear</td>
                                  <td>Main Warehouse</td>
                                  <td>6</td>
                                  <td>₹4,000</td>
                                  <td>₹24,000</td>
                                  <td>Theft</td>
                                  <td>Missing from stock</td>
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
                                          <input className="form-check-input" type="checkbox" id="checData13" />
                                      </div>
                                  </td>
                                  <td>07 Dec 2025</td>
                                  <td>Hoodie Sweatshirt</td>
                                  <td>HS-101</td>
                                  <td>Clothing</td>
                                  <td>Secondary Warehouse</td>
                                  <td>8</td>
                                  <td>₹1,500</td>
                                  <td>₹12,000</td>
                                  <td>Damage</td>
                                  <td>Stain on fabric</td>
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
                                          <input className="form-check-input" type="checkbox" id="checData14" />
                                      </div>
                                  </td>
                                  <td>06 Dec 2025</td>
                                  <td>Samsung Smart TV</td>
                                  <td>STV-55</td>
                                  <td>Electronics</td>
                                  <td>Main Warehouse</td>
                                  <td>1</td>
                                  <td>₹55,000</td>
                                  <td>₹55,000</td>
                                  <td>Damage</td>
                                  <td>Screen malfunction</td>
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
                                          <input className="form-check-input" type="checkbox" id="checData15" />
                                      </div>
                                  </td>
                                  <td>05 Dec 2025</td>
                                  <td>Office Chair</td>
                                  <td>OC-303</td>
                                  <td>Furniture</td>
                                  <td>Secondary Warehouse</td>
                                  <td>4</td>
                                  <td>₹6,500</td>
                                  <td>₹26,000</td>
                                  <td>Damage</td>
                                  <td>Wheel broken</td>
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
                                          <input className="form-check-input" type="checkbox" id="checData16" />
                                      </div>
                                  </td>
                                  <td>04 Dec 2025</td>
                                  <td>MacBook Pro 16</td>
                                  <td>MBP-16</td>
                                  <td>Electronics</td>
                                  <td>Main Warehouse</td>
                                  <td>1</td>
                                  <td>₹2,50,000</td>
                                  <td>₹2,50,000</td>
                                  <td>Theft</td>
                                  <td>Stolen from storage</td>
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
                                          <input className="form-check-input" type="checkbox" id="checData17" />
                                      </div>
                                  </td>
                                  <td>03 Dec 2025</td>
                                  <td>Adidas Sports Bag</td>
                                  <td>ASB-202</td>
                                  <td>Accessories</td>
                                  <td>Secondary Warehouse</td>
                                  <td>5</td>
                                  <td>₹2,000</td>
                                  <td>₹10,000</td>
                                  <td>Damage</td>
                                  <td>Zipper torn</td>
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
                                          <input className="form-check-input" type="checkbox" id="checData18" />
                                      </div>
                                  </td>
                                  <td>02 Dec 2025</td>
                                  <td>Leather Jacket</td>
                                  <td>LJ-101</td>
                                  <td>Clothing</td>
                                  <td>Main Warehouse</td>
                                  <td>2</td>
                                  <td>₹7,500</td>
                                  <td>₹15,000</td>
                                  <td>Theft</td>
                                  <td>Missing from stock</td>
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
                          <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-13</b> of <b className="ms-1">17</b> Results</p>
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


          <div className="modal fade" id="addLostItemModal" tabIndex="-1" aria-labelledby="addLostItemModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h6 className="modal-title" id="addLostItemModalLabel">Add Lost Item</h6>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                          <form id="lostItemForm">
                              <input type="hidden" id="lostItemId" />
                              <div className="row g-3">
                                  <div className="col-12">
                                      <label htmlFor="lostItemCode" className="form-label">Item ID <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="lostItemCode" placeholder="LI-1001" required />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="lostItemProduct" className="form-label">Product <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="lostItemProduct" placeholder="Blouse Top" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="lostItemSku" className="form-label">SKU <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="lostItemSku" placeholder="BLC-500" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="addLostDate" className="form-label">Lost Date</label>
                                      <input type="text" id="addLostDate" className="form-control" data-datepicker data-date-format="dd-MM-yyyy" placeholder="Lost Date" />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="lostItemWarehouse" className="form-label">Warehouse <span className="text-danger">*</span></label>
                                      <div id="lostItemWarehouse" required></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="lostItemUser" className="form-label">Lost By</label>
                                      <div id="lostItemUser"></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="lostItemQty" className="form-label">Quantity <span className="text-danger">*</span></label>
                                      <input type="number" className="form-control" id="lostItemQty" placeholder="2" required />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="lostItemStatus" className="form-label">Status</label>
                                      <div id="lostItemStatus"></div>
                                  </div>
                              </div>
                              <div className="d-flex gap-2 mt-7">
                                  <button type="button" className="btn btn-light w-100" data-bs-dismiss="modal">Cancel</button>
                                  <button type="submit" className="btn btn-primary w-100" id="saveLostItemBtn">Save Item</button>
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
                      <h5 className="mb-4 lh-base">Are you sure you want to delete this Lost Item?</h5>
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
