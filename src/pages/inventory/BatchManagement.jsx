import { Link } from 'react-router-dom'

export default function BatchManagement() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Batch Management</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                  <li className="breadcrumb-item active">Batch Management</li>
              </ul>
          </div>
          <div className="card mb-3">
              <div className="card-header border-bottom">
                  <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between mb-4">
                      <h5 className="card-title mb-0">Batch Management List</h5>
                      <div className="d-flex flex-wrap align-items-center gap-2">
                          <a href="#" className="avatar size-10 bg-warning-subtle rounded p-2">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANESURBVHic7ZtLaBNRFIa/O5nWakJpfaXWBwU1LkQQxI2gIIqvigtBN4JrwZUbQbAbF+5UBBHdiO5UFF8gIihoRVERtVqQLkRqrH3Z2odNjZ05LtxqZnLndm5a54Nswnn88+fezJnJRBESeXMmh5s6gi9bUCwAVNjcknQ+/Pv7jiv0vx8jnT2rdj84bKTXXwh1ENJ2bgfKvwqkjSv4lwEAn+5DcQTmr+5Q+16vMN4bcIICpP38EpR/hck4+FAI9L7OycVcr8ielOnqgQbgeYeAjOnGZTPYMY9Lb/vk6p5qk2WDDVBsNNkwEoMd9Yy+HJC722tNlQw2QJhnqpkRhj6l+fKuV27typooF2YFmPm2N8lofgbdz/NybefyqKWCDahUxnpc+p99kBvNa6KUmboGABS+OXQ/fSE3m9fplpjaBgCMDzp0tT6RW5ubddKnvgEAP4cV+Wd35ObW/eWmTg8DAIo/FJ8fXZJrmw+VkzZ9DACYGIeuxyfl+qZjYVMq2wCnqvwcrwj51pawJlS2AZkFenl+EbqetsjtbWuDQl29DjFRnwPfg5FO8H6Vl+t7MNp3GVhaKqyyDVAOzF3556WDm8nCq5Ihlb0FoiLFmqCQ6W1ACBIDbAuwTWKAbQG2SQywLcA22oOQ73v0fGyjMNyPiGgL+D78UzsXFDXVDisaq3FTep+l9goY+dbF2FBfpIOPjjBe9Pg6OKFdQduAlGv09nwkqlz9nay9BTL185lYlKMwPBBpFRQKPdq5AJmZDg11+pc0ES6GFHXZJuqyTfolgMaaEr8NxsB/fxZIDLAtwDaJAbYF2CaZBHVbJ5NgMgkmk2AyCU4HEgNsC7BNYoBtAbaJdRJ03CrmLFxG7dzFum2NE+sk6E/8or/zA+J7um2NE/sk6KRccCpn58U6CTquS322qaIePrU+CdqmctaiJRIDbAuwTWKAbQG2SQywLcA2iQGBEYLN276TTpg/TfXFoGNycNxiYEhgEVF271pGwZ3VHhQSYgX4p4ARE3pixUkJVekDgWFBAWrVwc84shf4YURYHKiUkG44qtafKP2oOCHPAmrlwXs4shrkAqg84EcWaRoFpGZ41MzuINO4UW04fTxM2m9+4hqehcgNDwAAAABJRU5ErkJggg==" alt="Document" className="img-fluid" />
                          </a>
                          <a href="#" className="avatar size-10 bg-success-subtle rounded p-2">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAdhAAAHYQGVw7i2AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABWpJREFUeJztm2tsFFUYhp8zO9vullLaCqW1BYMVAlEqCKZcJBJACsZoQEsqikaTIqiIRowhMaGoQCCKiRKjBCFcFI2SEFPQKHJRLg13RYillBpKKZReKKXd7V7m+KMwWilhdndmZwn7/Ptmz5nz7rsz53znshDn9kZEVLukRLk799xLUsoCFLqZpEknKT2tPjEluafZ91WQDZqUGw6PKSmNyIB+64o/RjDHLGH/Jyk15Q9XWkqeVfeXQrzgCLfynZ/PTFIT2AQoJmrqhNOVeEF1J/a26v4CBoUt3pUssgHVRD12MCD8Xy+gRdZ/xAbCssf3ViFugN0C7CZugN0C7CZugN0C7Oa2N0DP5HouKshSUQdKBUPpcXtjQ46je3JYjQoJwqkiHGFn4qah5iwvdPu9ntVAkQSQxioGPD4CnsbIGk9ykZCeCsK+pFL1eT0lAorsaDzQ5sV3paYtqAWvdPl5Rs9L7Vfa6qzUoAqYamUDN0MIkRRsa08S6vXdUdDnPxUMBDKsbF8BLJtuGkEgkFd8BC+2QlCLevuxMwoENLTm9qg3GzsGANIfjHqbMWUAmsEhyEQMrehM6p/Pi8Mf0+OVB75n26kD15VLSezGZ0+8hXp1fD9aW8HinetMkmoNhgzYWXWEdycU0ze1o7/MTunFztOHCWidH9nZ+VMYlzsMAE1Kluxab7Jc8zH0CngDPhZuX63HuenZFN43rlOZdHcKxQ8+rsdrDpVy5NxJk2Rah+E+YEv5XnZVHdXjeWOeJsHh1OPXR08jOcENQF1rE0t//dJEmdYRUif4zs8r8WsBoOM1eHZIAQAZ3dJ4buhkvdyCbau43N5qokzrCMmAioZqvjhYqsdzRxXiUhOYnT8Fl5oAwL4zf7L5xG/mqrSQkIfBD3dvpK61CYDeyenMGVnI8w90/Pr+YIB5P65AGp1RxQAhG9DS3sb7O9bq8ZsPFZHkdAGwomwTlQ015qmLAmElQt8e205Z9fFO12ouX+STfd+ZIiqahLW1JZH83VTLiD736tcCWhBNhjGZkZBY7UHzdXSuTu+/iyTe5lraetSHI9EwYT0BeZn3MG3w+E7X7krN5NWRT5kiKpqEbIAiBMsmvYxydRWntHyv/tmcEU/SLy3LPHVRIGQDnrm/gCFZ/QE4dr6SWZuXUdFQDUCimsCSgtnmKrSYkAxIdXdn/tgZevzB7o0EtCBLd23Qr43tN5TJA0aYp9BiQjJg/sMzSHenAHC8roqfKvYDsKV8Hwdr/tLLvTehGLcz0USZ1mHYgMGZuXrqC/DRnm/0hEciWfDLKj3O6ZHB3FHTTJZqDYYMEAiWTJyF4+pxgpP11Wz9T+cHcKimnB9OlunxK/lTyb0j20Sp1mDIgKK8CQzPHqjHy/d8jSavT3cX7VirT5acDpXFj8wySaZ1GEqE9p89wcQ1b+jx8QunuyxX2VjDuFWvdXr/nYqqmxKLGDKgstF4fn9tSLxViK1FURuIGwBcsFVBQEPasBx+DRUpNiHk23YJkE0eZLDrDRGHX0rNr1m4OaqgOt2uhX6vpw8w3bqGukY2etCqmm64Je9oCYx2tFg6grToG/O9lj2a6fCLQUYPSIhL7f2DZ5s/DWtDU4L0BpG+zl9OKAI1NSn0+4VPS9gnE7Km5w/zX/YclCbu6DrcCShu580LmkdLbBx2FgIlUY32lwciPO2tdneZsAIsEIqNR2Qiqq0IRIR/OrGbeCJktwC7iRtgtwC7iRsQbkWhiFtnB/TGyLANUDW1CsMHa2MTCafDPq3cfOyMNzkvpy8w1ERNUUWRYl5EidB5X9+ZvZ3VvwshxwuI6iwmEqSgHo31tV+VbbVbSxy7+Qd8NJoSYxNhVwAAAABJRU5ErkJggg==" alt="File" className="img-fluid" />
                          </a>
                          <a href="#" className="avatar size-10 bg-danger-subtle rounded p-2">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAHYAAAB2AH6XKZyAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABalJREFUeJztmltsFFUYgL8zu1touzRAFdoupaVdWlt4MCmSaCDBJzFq9AFNxEjUoMGgDaBpIASUu0oMMSpEiYAQ1OAFpaigD1RQSAyXgAoutrW0tk3psr277e7sHB/abltb2p1Lu0vp97I7Z+b8559v58w5c2YFFlCdm5uLZlsqpHhACpkJTLAibm/+lTLQoAa3zK0o3WhlXGGmslywwF77z/U3paAQsFuU04C0aSHKAwEm22yvWSnBsICzBQWOlCb/N0LwoFXJDEabFqIsEECApRIUoxVTmtu3j9TJ90YCvlBow6+Z7vVWxDMkoNY9K1/AS1YkYAQrJRgSoAm5DKTNbONm6JZwNitng5k4RrvAQjONWoUEvMHgejNXgm4BsvPGmWG0QasxeyXoFlCbVhAPxBlpbLgwcyUYHgViDaNXwqgRAD1Xgh4Jo0oA6Jcw6gSAPgmjUgBELmHUCoDIJIxqATC0hFEvAAaXcMsIsAlTSxc9k6UZM9f1Lr9lBIwXCsl2c2suEvCp6sbeEoZ1FcdqXHYHKTY7KtJcIKk8D2yCW0wAdHYFm7mVPACt+8st0wWGizEB0U4g2owJiHYC0ea2FxAeBo9Ny3ZLITeBvGOwChdlg80ZMD0MWUacEKTYHdgNzhTDAqQiP0TK+4esISStmsmJiMVIIN1hbJmypwtoMsuifEacoDT+g0Q8Exw3ZQqpjz6CYncAIKVGR10d3p9OEvA19A3qdOJ6fBG28ePDZR319dw4fZr2mtp+sVMefoiE9PQB2w21t1P9+Reora2RpqqLiAW4VxaS/tTifuUhvx/P5q1UHjgYLpv+zBJyil7td6xUVcre20npjneg61dzut3cvfPdQdtW4hz8/cHuSFPVRcQCbPHxADSeO0+Lx4NQbCTNzidp9mzyN2+ko95L3bHjfY5tufInjRcuAALnTDeT7pmDe0UhwcYmru3ZC4AS33mVqK2t1B4p7teuDASpLT5q6iQHQ/fDUO2Ro1zbu69zQwjuWruGzBeW4l5RGBbQjffkKTxbtoW3M557lrzX15H98nIq9+9HqqHwvoDPxx+r1xo7CxOYmwdISdn7uwCYkJ/Xp88PROW+j1Fb24hLnkxCRmy8XTP9OCyUrvFXSuQQd2OpaQQbfNididjiE/rsc0ycSM6aor7HqyFqvjpMW1m52TRviikBQlFwr1oJQNNvv6N1dBiO5UhKIuvFZf3K411pXFrxiuG4Q6FbgOuJRUyaOwchFJy5OSRmZ4GUlL69w1QiweZmqg5+0rdQk9R8edhU3KHQLSBpVj5Js/LD28HmZq6s30D9iRJTiQQbG7m67S1TMYygfxQoPorvlzMAdHi9+E6f0TVJsSUkAqAFA3qbHhZ0C2g8e56qTz411FjyffcSlzyZUHs7/soqQzGsZlgXRZPy80hf/CQACRnTmb7kaQCqPztEyO8fzqYjJmIBMhTq+lQjPjZ5/jyS58/rs+/GqZ/xbH2jp0DrWqANaUSDiAVUHjiI1CR1x38c8tiaw1+TkJGBEucIl6nNLdSfKKHu+A/h5wCAFo+Hio/20HTxks7UrSG8ivD9tBkViNj585MenIpCVty4yCtIrrlKL2dCr6mwUGi4aYUYRzHxoiQsQEq5GkS1JRmNIOMUwVSH8Xu5bnU1aQUJMtHfZrjFWGCgLnC7MiYg2glEmzEB0U4g2owJiHYC0WZMgN4KqTXn/IDxxb9YQPRM+3ULEJ3vIistTWikkVR0fzXUBSTiO8uSiQJC6cnfkAChqLuAoVdGYhOvX/Uf6t4wJMDl8XiEkIO/0YxdirLLy5u6NwyPAqlpU4sE4ltrchoZhJA7XH9d3tu7zLAAUVKiprrufAzEdgFB8+kNKy1IuTzt6pVV/99hyZ99qrLyZio2ZSloC0FkAklWxDWJV0CZhiy2a47dKWWXrg900H+lNAM+Nwaw1AAAAABJRU5ErkJggg==" alt="pdf" className="img-fluid" />
                          </a>
                          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addBatchModal">
                              <i data-lucide="plus" className="me-1 size-4"></i> Add Batch
                          </button>
                      </div>
                  </div>
                  <div className="d-flex justify-content-between flex-wrap gap-3">
                      <div className="position-relative flex-shrink-0">
                          <input type="text" className="form-control ps-9" placeholder="Search for..." />
                          <i data-lucide="search" className="size-4 icon-dark position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                      </div>
                      <div className="d-flex gap-2 flex-wrap flex-md-nowrap">
                          <div id="batchWarehouseFilter" className="min-w-52"></div>
                          <div className="position-relative min-w-52">
                              <input type="text" id="batchMfgDate" className="form-control ps-9" data-datepicker data-date-format="dd-MM-yyyy" placeholder="MFG date" required />
                              <i data-lucide="calendar" className="size-4 icon-dark position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                          </div>
                          <div id="batchStatusFilter" className="min-w-52"></div>
                          <div id="batchExpiryFilter" className="min-w-52"></div>
                      </div>
                  </div>
              </div>
              <div className="card-body pt-0">
                  <div className="table-card table-responsive">
                      <table className="table table-borderless align-middle text-nowrap mb-0">
                          <thead>
                              <tr className="bg-light border-bottom">
                                  <th>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checAllData" />
                                      </div>
                                  </th>
                                  <th className="fw-medium text-muted">Batch ID</th>
                                  <th className="fw-medium text-muted">Product</th>
                                  <th className="fw-medium text-muted">SKU</th>
                                  <th className="fw-medium text-muted">Warehouse</th>
                                  <th className="fw-medium text-muted">Supplier</th>
                                  <th className="fw-medium text-muted">MFG</th>
                                  <th className="fw-medium text-muted">Expiry</th>
                                  <th className="fw-medium text-muted">Qty</th>
                                  <th className="fw-medium text-muted">Status</th>
                                  <th className="fw-medium text-muted">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checData1" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">BT-90231</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <div className="avatar size-9 border rounded-1 p-1">
                                              <img src="../assets/img-01-BBWp8t8E.png" loading="lazy" alt="Product" className="img-fluid" />
                                          </div>
                                          <a href="#" className="text-reset fw-medium">Blouse top</a>
                                      </div>
                                  </td>
                                  <td>PCM-500</td>
                                  <td>Main Warehouse</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-1-xhBXJtq9.png" loading="lazy" alt="Avatar" className="img-fluid size-8 rounded" />
                                          <a href="#" className="text-reset">Rohan Patel</a>
                                      </div>
                                  </td>
                                  <td>10 Aug 2025</td>
                                  <td>10 Feb 2026</td>
                                  <td>1,200</td>
                                  <td><span className="bg-success-subtle text-success border border-success-subtle badge">Active</span></td>
                                  <td>
                                      <div className="dropdown">
                                          <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center edit-product"><i className="ri-pencil-line"></i> Edit</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checData2" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">BT-90232</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <div className="avatar size-9 border rounded-1 p-1">
                                              <img src="../assets/img-02-ClVfz9I5.png" loading="lazy" alt="Product" className="img-fluid" />
                                          </div>
                                          <a href="#" className="text-reset fw-medium">Cotton T-Shirt</a>
                                      </div>
                                  </td>
                                  <td>CTS-101</td>
                                  <td>Store Warehouse 01</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-2-CroG7YJ0.png" loading="lazy" alt="Avatar" className="img-fluid size-8 rounded" />
                                          <a href="#" className="text-reset">Ankit Sharma</a>
                                      </div>
                                  </td>
                                  <td>05 Sep 2025</td>
                                  <td>05 Mar 2026</td>
                                  <td>850</td>
                                  <td><span className="bg-success-subtle text-success border border-success-subtle badge">Active</span></td>
                                  <td>
                                      <div className="dropdown">
                                          <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checData3" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">BT-90233</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <div className="avatar size-9 border rounded-1 p-1">
                                              <img src="../assets/img-03-oTTY_McP.png" loading="lazy" alt="Product" className="img-fluid" />
                                          </div>
                                          <a href="#" className="text-reset fw-medium">Denim Jeans</a>
                                      </div>
                                  </td>
                                  <td>DNM-204</td>
                                  <td>Main Warehouse</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-3-Bz6g7hsE.png" loading="lazy" alt="Avatar" className="img-fluid size-8 rounded" />
                                          <a href="#" className="text-reset">Neha Verma</a>
                                      </div>
                                  </td>
                                  <td>18 Jul 2025</td>
                                  <td>18 Jan 2026</td>
                                  <td>420</td>
                                  <td><span className="bg-warning-subtle text-warning border border-warning-subtle badge">Expiring Soon</span></td>
                                  <td>
                                      <div className="dropdown">
                                          <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checData4" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">BT-90234</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <div className="avatar size-9 border rounded-1 p-1">
                                              <img src="../assets/img-04-DZ4OtBxS.png" loading="lazy" alt="Product" className="img-fluid" />
                                          </div>
                                          <a href="#" className="text-reset fw-medium">Leather Wallet</a>
                                      </div>
                                  </td>
                                  <td>LWT-330</td>
                                  <td>Outlet Store 02</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-4-7l52E1Lo.png" loading="lazy" alt="Avatar" className="img-fluid size-8 rounded" />
                                          <a href="#" className="text-reset">Suresh Mehta</a>
                                      </div>
                                  </td>
                                  <td>12 Jan 2024</td>
                                  <td>12 Jan 2025</td>
                                  <td>0</td>
                                  <td><span className="bg-danger-subtle text-danger border border-danger-subtle badge">Expired</span></td>
                                  <td>
                                      <div className="dropdown">
                                          <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checData5" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">BT-90235</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <div className="avatar size-9 border rounded-1 p-1">
                                              <img src="../assets/img-05-DPzi-ptA.png" loading="lazy" alt="Product" className="img-fluid" />
                                          </div>
                                          <a href="#" className="text-reset fw-medium">Sports Shoes</a>
                                      </div>
                                  </td>
                                  <td>SHO-450</td>
                                  <td>Main Warehouse</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-5-BsT8d_Co.png" loading="lazy" alt="Avatar" className="img-fluid size-8 rounded" />
                                          <a href="#" className="text-reset">Kunal Desai</a>
                                      </div>
                                  </td>
                                  <td>20 Oct 2025</td>
                                  <td>20 Apr 2026</td>
                                  <td>670</td>
                                  <td><span className="bg-success-subtle text-success border border-success-subtle badge">Active</span></td>
                                  <td>
                                      <div className="dropdown">
                                          <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checData6" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">BT-90236</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <div className="avatar size-9 border rounded-1 p-1">
                                              <img src="../assets/img-06-DdkuSG6a.png" loading="lazy" alt="Product" className="img-fluid" />
                                          </div>
                                          <a href="#" className="text-reset fw-medium">Formal Shirt</a>
                                      </div>
                                  </td>
                                  <td>FSH-210</td>
                                  <td>Store Warehouse 02</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-6-BIO7_TUU.png" loading="lazy" alt="Avatar" className="img-fluid size-8 rounded" />
                                          <a href="#" className="text-reset">Pooja Malhotra</a>
                                      </div>
                                  </td>
                                  <td>02 Nov 2025</td>
                                  <td>02 May 2026</td>
                                  <td>540</td>
                                  <td><span className="bg-success-subtle text-success border border-success-subtle badge">Active</span></td>
                                  <td>
                                      <div className="dropdown">
                                          <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checData7" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">BT-90237</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <div className="avatar size-9 border rounded-1 p-1">
                                              <img src="../assets/img-07-9mjzrP7h.png" loading="lazy" alt="Product" className="img-fluid" />
                                          </div>
                                          <a href="#" className="text-reset fw-medium">Handbag</a>
                                      </div>
                                  </td>
                                  <td>HBG-120</td>
                                  <td>Outlet Store 01</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-7-BMyy-xCq.png" loading="lazy" alt="Avatar" className="img-fluid size-8 rounded" />
                                          <a href="#" className="text-reset">Aarti Joshi</a>
                                      </div>
                                  </td>
                                  <td>15 Jun 2025</td>
                                  <td>15 Dec 2025</td>
                                  <td>95</td>
                                  <td><span className="bg-warning-subtle text-warning border border-warning-subtle badge">Expiring Soon</span></td>
                                  <td>
                                      <div className="dropdown">
                                          <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checData8" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">BT-90238</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <div className="avatar size-9 border rounded-1 p-1">
                                              <img src="../assets/img-08-BXmGY-HZ.png" loading="lazy" alt="Product" className="img-fluid" />
                                          </div>
                                          <a href="#" className="text-reset fw-medium">Perfume Spray</a>
                                      </div>
                                  </td>
                                  <td>PRF-890</td>
                                  <td>Main Warehouse</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-8-BAGm131G.png" loading="lazy" alt="Avatar" className="img-fluid size-8 rounded" />
                                          <a href="#" className="text-reset">Ritika Sen</a>
                                      </div>
                                  </td>
                                  <td>28 Mar 2024</td>
                                  <td>28 Mar 2025</td>
                                  <td>0</td>
                                  <td><span className="bg-danger-subtle text-danger border border-danger-subtle badge">Expired</span></td>
                                  <td>
                                      <div className="dropdown">
                                          <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checData9" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">BT-90239</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <div className="avatar size-9 border rounded-1 p-1">
                                              <img src="../assets/img-09-CqG2QIp1.png" loading="lazy" alt="Product" className="img-fluid" />
                                          </div>
                                          <a href="#" className="text-reset fw-medium">Wireless Earbuds</a>
                                      </div>
                                  </td>
                                  <td>EAR-777</td>
                                  <td>Electronics Hub</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-9-DB-6OyMr.png" loading="lazy" alt="Avatar" className="img-fluid size-8 rounded" />
                                          <a href="#" className="text-reset">Mohit Bansal</a>
                                      </div>
                                  </td>
                                  <td>05 Dec 2025</td>
                                  <td>05 Dec 2027</td>
                                  <td>1,050</td>
                                  <td><span className="bg-success-subtle text-success border border-success-subtle badge">Active</span></td>
                                  <td>
                                      <div className="dropdown">
                                          <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div className="form-check check-primary">
                                          <input className="form-check-input" type="checkbox" id="checData10" />
                                      </div>
                                  </td>
                                  <td><a href="#" className="link link-custom-primary fw-medium">BT-90240</a></td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <div className="avatar size-9 border rounded-1 p-1">
                                              <img src="../assets/img-10-DqnuMbAd.png" loading="lazy" alt="Product" className="img-fluid" />
                                          </div>
                                          <a href="#" className="text-reset fw-medium">Smart Watch</a>
                                      </div>
                                  </td>
                                  <td>SWT-990</td>
                                  <td>Electronics Hub</td>
                                  <td>
                                      <div className="d-flex align-items-center gap-2">
                                          <img src="../assets/user-10-CzpspsdB.png" loading="lazy" alt="Avatar" className="img-fluid size-8 rounded" />
                                          <a href="#" className="text-reset">Ishaan Khanna</a>
                                      </div>
                                  </td>
                                  <td>01 Jan 2026</td>
                                  <td>01 Jan 2028</td>
                                  <td>320</td>
                                  <td><span className="bg-success-subtle text-success border border-success-subtle badge">Active</span></td>
                                  <td>
                                      <div className="dropdown">
                                          <a href="#" className="link link-custom-primary" data-bs-toggle="dropdown"><i className="ri-more-2-fill"></i></a>
                                          <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-eye-line"></i> Overview</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center"><i className="ri-pencil-line"></i> Edit</a></li>
                                              <li><a href="#" className="dropdown-item d-flex gap-3 align-items-center text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                          </ul>
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className="row align-items-center g-3 mt-3">
                      <div className="col-md-6">
                          <p className="text-muted text-center text-md-start mb-0">Showing <b className="me-1">1-10</b> of <b className="ms-1">27</b> Results</p>
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


          <div className="modal fade" id="addBatchModal" tabIndex="-1" aria-labelledby="addBatchModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h6 className="modal-title" id="addBatchModalLabel">Add New Batch</h6>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                          <form id="batchForm">
                              <input type="hidden" id="batchId" />
                              <div className="row g-3">
                                  <div className="col-12">
                                      <label htmlFor="batchCode" className="form-label">Batch ID <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="batchCode" placeholder="BT-90231" required />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="batchProduct" className="form-label">Product <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="batchProduct" placeholder="Blouse Top" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="batchSku" className="form-label">SKU <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="batchSku" placeholder="PCM-500" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="batchWarehouse" className="form-label">Warehouse <span className="text-danger">*</span></label>
                                      <div id="batchWarehouse" required></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="batchSupplier" className="form-label">Supplier</label>
                                      <div id="batchSupplier"></div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="batchQty" className="form-label">Quantity <span className="text-danger">*</span></label>
                                      <input type="number" className="form-control" id="batchQty" placeholder="1200" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="batchMfgDate" className="form-label">Manufacturing Date</label>
                                      <input type="text" id="batchMfgDate" className="form-control" data-datepicker data-date-format="dd-MM-yyyy" placeholder="Choose date" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="batchExpiryDate" className="form-label">Expiry Date</label>
                                      <input type="text" id="batchExpiryDate" className="form-control" data-datepicker data-date-format="dd-MM-yyyy" placeholder="Choose date" required />
                                  </div>
                                  <div className="col-md-12">
                                      <label htmlFor="batchStatus" className="form-label">Status</label>
                                      <div id="batchStatus"></div>
                                  </div>
                              </div>
                              <div className="d-flex gap-2 mt-7">
                                  <button type="button" className="btn btn-light w-100" data-bs-dismiss="modal">Cancel</button>
                                  <button type="submit" className="btn btn-primary w-100" id="saveBatchBtn">Save Batch</button>
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
                      <h5 className="mb-4 lh-base">Are you sure you want to delete this Batch?</h5>
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
