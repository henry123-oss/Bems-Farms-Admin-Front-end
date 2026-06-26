import { Link } from 'react-router-dom'

export default function ActivityLog() {
  return (
    <div className="container-fluid">
      <div className="gap-2 page-heading mb-3 flex-column flex-md-row">
              <h6 className="flex-grow-1 mb-0">Activity Log</h6>
              <ul className="breadcrumb flex-shrink-0 mb-0">
                  <li className="breadcrumb-item"><a href="#">Customers</a></li>
                  <li className="breadcrumb-item active">Activity Log</li>
              </ul>
          </div>
          <div className="row">
              <div className="col-xxl-9">
                  <div className="card">
                      <div className="card-header d-flex flex-wrap gap-4 align-items-center justify-content-between">
                          <h5 className="card-title mb-0">Activity Log</h5>
                          <div className="d-flex flex-wrap gap-2">
                              <div className="position-relative w-44 flex-shrink-0">
                                  <input type="text" className="form-control ps-10" data-datepicker data-date-format="dd-MM-yyyy" placeholder="Start Date" />
                                  <i data-lucide="calendar" className="size-4 icon-dark position-absolute top-50 start-0 ms-4 translate-middle-y"></i>
                              </div>
                              <div className="position-relative w-44 flex-shrink-0">
                                  <input type="text" className="form-control ps-10" data-datepicker data-date-format="dd-MM-yyyy" placeholder="End Date" />
                                  <i data-lucide="calendar" className="size-4 icon-dark position-absolute top-50 start-0 ms-4 translate-middle-y"></i>
                              </div>
                              <div className="position-relative">
                                  <input type="text" id="lostItemSearch" className="form-control ps-10" placeholder="Search Customer..." />
                                  <i data-lucide="search" className="size-4 icon-dark position-absolute top-50 start-0 ms-4 translate-middle-y"></i>
                              </div>
                          </div>
                      </div>
                      <div className="card-body">
                          <div className="d-flex justify-content-between mb-5">
                              <p className="text-uppercase text-muted fs-sm">today</p>
                              <span className="bg-body-tertiary text-body-secondary border border-dark-subtle badge">5</span>
                          </div>
                          <ul className="changelog-timeline customer-activity mb-8">
                              <li className="timeline-item">
                                  <h6 className="text-end mb-3 mt-1 me-5 activity-time d-none d-md-block">21:00 PM</h6>
                                  <div className="me-6">
                                      <img src="../assets/user-45-B1WJJY3O.png" alt="Avatar" className="size-8 rounded-circle" />
                                  </div>
                                  <div className="flex-grow-1 p-3 border rounded activity-box">
                                      <div className="d-flex flex-wrap gap-2 align-items-center mb-5">
                                          <a href="#" className="text-reset fw-medium">
                                              John Doe <span className="text-muted fw-normal ms-2">Wholesale Buyer</span>
                                          </a>
                                          <a href="#" className="link link-underline-primary fs-sm">#CUS1025</a>
                                          <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">
                                              New Account
                                          </span>
                                      </div>
                                      <div className="fw-medium text-body mb-2">
                                          Customer account for John Doe was successfully created by staff at the billing desk after verification. The profile includes verified contact details, initial wallet configuration, default tax setup, and loyalty membership enrollment.
                                      </div>
                                      <p className="text-muted fs-sm">Account setup completed | System verification passed</p>
                                  </div>
                              </li>
                              <li className="timeline-item">
                                  <h6 className="text-end mb-3 mt-1 me-5 activity-time d-none d-md-block">13:30 PM</h6>
                                  <div className="me-6">
                                      <img src="../assets/user-2-CroG7YJ0.png" alt="Avatar" className="size-8 rounded-circle" />
                                  </div>
                                  <div className="flex-grow-1 p-3 border rounded activity-box">
                                      <div className="d-flex flex-wrap gap-2 align-items-center mb-5">
                                          <a href="#" className="text-reset fw-medium">
                                              Emily Johnson <span className="text-muted fw-normal ms-2">Wholesale Buyer</span>
                                          </a>
                                          <a href="#" className="link link-underline-primary fs-sm">#CUS1025</a>
                                          <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">
                                              Wallet Credit
                                          </span>
                                      </div>
                                      <div className="fw-medium text-body mb-2">
                                          Wallet balance was credited successfully during an in-store transaction processed by the cashier. The credited amount reflects a prepaid balance added for faster checkout and future purchases.
                                      </div>
                                      <p className="text-muted fs-sm">₹2,500 added | Payment verified and recorded</p>
                                  </div>
                              </li>
                              <li className="timeline-item">
                                  <h6 className="text-end mb-3 mt-1 me-5 activity-time d-none d-md-block">11:58 AM</h6>
                                  <div className="me-6">
                                      <img src="../assets/user-41-CwGi7RlE.png" alt="Avatar" className="size-8 rounded-circle" />
                                  </div>
                                  <div className="flex-grow-1 p-3 border rounded activity-box">
                                      <div className="d-flex flex-wrap gap-2 align-items-center mb-5">
                                          <a href="#" className="text-reset fw-medium">
                                              Michael Brown <span className="text-muted fw-normal ms-2">Wholesale Buyer</span>
                                          </a>
                                          <a href="#" className="link link-underline-primary fs-sm">#ORD-45821</a>
                                          <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">
                                              Order Completed
                                          </span>
                                      </div>
                                      <div className="fw-medium text-body mb-2">
                                          Purchase order was completed successfully at the POS counter with multiple items added to the cart. Payment was confirmed, invoice generated, and inventory stock updated automatically.
                                      </div>
                                      <p className="text-muted fs-sm">Invoice generated | Payment via UPI</p>
                                  </div>
                              </li>
                              <li className="timeline-item">
                                  <h6 className="text-end mb-3 mt-1 me-5 activity-time d-none d-md-block">11:23 AM</h6>
                                  <div className="me-6">
                                      <img src="../assets/user-3-Bz6g7hsE.png" alt="Avatar" className="size-8 rounded-circle" />
                                  </div>
                                  <div className="flex-grow-1 p-3 border rounded activity-box">
                                      <div className="d-flex flex-wrap gap-2 align-items-center mb-5">
                                          <a href="#" className="text-reset fw-medium">
                                              Sophia Williams <span className="text-muted fw-normal ms-2">Loyalty Member</span>
                                          </a>
                                          <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">
                                              Loyalty Points
                                          </span>
                                      </div>
                                      <div className="fw-medium text-body mb-2">
                                          Loyalty reward points were added to the customer account based on recent purchase history. These points contribute toward tier upgrades and future discount eligibility.
                                      </div>
                                      <p className="text-muted fs-sm">120 points tier: Silver</p>
                                  </div>
                              </li>
                              <li className="timeline-item">
                                  <h6 className="text-end mb-3 mt-1 me-5 activity-time d-none d-md-block">10:00 AM</h6>
                                  <div className="me-6">
                                      <img src="../assets/user-42-pc0HSHq-.png" alt="Avatar" className="size-8 rounded-circle" />
                                  </div>
                                  <div className="flex-grow-1 p-3 border rounded activity-box">
                                      <div className="d-flex flex-wrap gap-2 align-items-center mb-5">
                                          <a href="#" className="text-reset fw-medium">
                                              Daniel Anderson <span className="text-muted fw-normal ms-2">Retail Customer</span>
                                          </a>
                                          <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">
                                              Profile Updated
                                          </span>
                                      </div>
                                      <div className="fw-medium text-body mb-2">
                                          Customer profile information was updated by support staff through the admin panel. Changes include address details, contact preferences, and account verification data.
                                      </div>
                                      <p className="text-muted fs-sm">Address & contact details updated</p>
                                  </div>
                              </li>
                          </ul>
                          <div className="d-flex justify-content-between mb-5">
                              <p className="text-uppercase text-muted fs-sm">yesterday</p>
                              <span className="bg-body-tertiary text-body-secondary border border-dark-subtle badge">7</span>
                          </div>
                          <ul className="changelog-timeline customer-activity mb-8">
                              <li className="timeline-item">
                                  <h6 className="text-end mb-3 mt-1 me-5 activity-time d-none d-md-block">23:45 PM</h6>
                                  <div className="me-6">
                                      <img src="../assets/user-4-7l52E1Lo.png" alt="Avatar" className="size-8 rounded-circle" />
                                  </div>
                                  <div className="flex-grow-1 p-3 border rounded activity-box">
                                      <div className="d-flex flex-wrap gap-2 align-items-center mb-5">
                                          <a href="#" className="text-reset fw-medium">
                                              Olivia Martinez <span className="text-muted fw-normal ms-2">Wholesale Buyer</span>
                                          </a>
                                          <a href="#" className="link link-underline-primary fs-sm">#ORD-46002</a>
                                          <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">
                                              Refund Issued
                                          </span>
                                      </div>
                                      <div className="fw-medium text-body mb-2">
                                          Refund was processed successfully after the customer returned selected items from the order. The refunded amount was credited back to the wallet as per system policy.
                                      </div>
                                      <p className="text-muted fs-sm">₹650 refunded | Wallet balance updated</p>
                                  </div>
                              </li>
                              <li className="timeline-item">
                                  <h6 className="text-end mb-3 mt-1 me-5 activity-time d-none d-md-block">18:30 PM</h6>
                                  <div className="me-6">
                                      <img src="../assets/user-5-BsT8d_Co.png" alt="Avatar" className="size-8 rounded-circle" />
                                  </div>
                                  <div className="flex-grow-1 p-3 border rounded activity-box">
                                      <div className="d-flex flex-wrap gap-2 align-items-center mb-5">
                                          <a href="#" className="text-reset fw-medium">
                                              Robert Taylor <span className="text-muted fw-normal ms-2">Wholesale Buyer</span>
                                          </a>
                                          <a href="#" className="link link-underline-primary fs-sm">#ORD-46218</a>
                                          <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">
                                              Order Cancelled
                                          </span>
                                      </div>
                                      <div className="fw-medium text-body mb-2">
                                          Order was automatically cancelled by the system due to incomplete payment confirmation within the allowed time window. Reserved stock was released back to inventory.
                                      </div>
                                      <p className="text-muted fs-sm">Auto-cancelled | No charges applied</p>
                                  </div>
                              </li>
                              <li className="timeline-item">
                                  <h6 className="text-end mb-3 mt-1 me-5 activity-time d-none d-md-block">16:00 PM</h6>
                                  <div className="me-6">
                                      <img src="../assets/user-1-xhBXJtq9.png" alt="Avatar" className="size-8 rounded-circle" />
                                  </div>
                                  <div className="flex-grow-1 p-3 border rounded activity-box">
                                      <div className="d-flex flex-wrap gap-2 align-items-center mb-5">
                                          <a href="#" className="text-reset fw-medium">
                                              Emma Wilson <span className="text-muted fw-normal ms-2">Retail Customer</span>
                                          </a>
                                          <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">
                                              Address Added
                                          </span>
                                      </div>
                                      <div className="fw-medium text-body mb-2">
                                          A new delivery address was added to the customer profile to support faster checkout and accurate order fulfillment for future purchases.
                                      </div>
                                      <p className="text-muted fs-sm">Primary address updated</p>
                                  </div>
                              </li>
                              <li className="timeline-item">
                                  <h6 className="text-end mb-3 mt-1 me-5 activity-time d-none d-md-block">14:26 PM</h6>
                                  <div className="me-6">
                                      <img src="../assets/user-2-CroG7YJ0.png" alt="Avatar" className="size-8 rounded-circle" />
                                  </div>
                                  <div className="flex-grow-1 p-3 border rounded activity-box">
                                      <div className="d-flex flex-wrap gap-2 align-items-center mb-5">
                                          <a href="#" className="text-reset fw-medium">
                                              James Thompson <span className="text-muted fw-normal ms-2">Retail Customer</span>
                                          </a>
                                          <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">
                                              Payment Updated
                                          </span>
                                      </div>
                                      <div className="fw-medium text-body mb-2">
                                          Default payment method was updated by the customer from the self-service portal to ensure smoother checkout experience.
                                      </div>
                                      <p className="text-muted fs-sm">UPI set as default</p>
                                  </div>
                              </li>
                              <li className="timeline-item">
                                  <h6 className="text-end mb-3 mt-1 me-5 activity-time d-none d-md-block">14:00 PM</h6>
                                  <div className="me-6">
                                      <img src="../assets/user-6-BIO7_TUU.png" alt="Avatar" className="size-8 rounded-circle" />
                                  </div>
                                  <div className="flex-grow-1 p-3 border rounded activity-box">
                                      <div className="d-flex flex-wrap gap-2 align-items-center mb-5">
                                          <a href="#" className="text-reset fw-medium">
                                              Ava Rodriguez <span className="text-muted fw-normal ms-2">Verified Customer</span>
                                          </a>
                                          <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">
                                              KYC Verified
                                          </span>
                                      </div>
                                      <div className="fw-medium text-body mb-2">
                                          Customer identity verification was successfully completed after document review and system validation. The account now has full access to restricted features.
                                      </div>
                                      <p className="text-muted fs-sm">Verification completed | No discrepancies found</p>
                                  </div>
                              </li>
                              <li className="timeline-item">
                                  <h6 className="text-end mb-3 mt-1 me-5 activity-time d-none d-md-block">13:30 PM</h6>
                                  <div className="me-6">
                                      <img src="../assets/user-3-Bz6g7hsE.png" alt="Avatar" className="size-8 rounded-circle" />
                                  </div>
                                  <div className="flex-grow-1 p-3 border rounded activity-box">
                                      <div className="d-flex flex-wrap gap-2 align-items-center mb-5">
                                          <a href="#" className="text-reset fw-medium">
                                              William Harris <span className="text-muted fw-normal ms-2">Wholesale Buyer</span>
                                          </a>
                                          <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">
                                              Credit Limit
                                          </span>
                                      </div>
                                      <div className="fw-medium text-body mb-2">
                                          Credit limit for the customer account was updated after internal approval based on purchase history and payment behavior.
                                      </div>
                                      <p className="text-muted fs-sm">New limit applied | Approval recorded</p>
                                  </div>
                              </li>
                              <li className="timeline-item">
                                  <h6 className="text-end mb-3 mt-1 me-5 activity-time d-none d-md-block">11:58 AM</h6>
                                  <div className="me-6">
                                      <img src="../assets/user-1-xhBXJtq9.png" alt="Avatar" className="size-8 rounded-circle" />
                                  </div>
                                  <div className="flex-grow-1 p-3 border rounded activity-box">
                                      <div className="d-flex flex-wrap gap-2 align-items-center mb-5">
                                          <a href="#" className="text-reset fw-medium">
                                              Isabella Clark <span className="text-muted fw-normal ms-2">Retail Customer</span>
                                          </a>
                                          <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">
                                              Internal Note
                                          </span>
                                      </div>
                                      <div className="fw-medium text-body mb-2">
                                          Internal account note was added by the support team to record customer preferences and special handling instructions.
                                      </div>
                                      <p className="text-muted fs-sm">Visible to staff only</p>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="col-xxl-3">
                  <div className="card">
                      <div className="card-body">
                          <div className="d-flex flex-wrap align-items-center gap-3 mb-8">
                              <img src="../assets/user-45-B1WJJY3O.png" alt="Customer" className="rounded size-16" />
                              <div className="flex-grow-1">
                                  <h6 className="mb-1 fs-16">John Doe</h6>
                                  <p className="mb-2 text-muted">USD <span className="mx-1">|</span> Customer Since: Dec 2025</p>
                                  <span className="bg-primary-subtle text-primary border border-primary-subtle badge ms-auto">New Account</span>
                              </div>
                          </div>
                          <ul className="list-unstyled mb-5">
                              <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                                  <div className="d-flex align-items-center gap-2">
                                      <i className="ri-mail-line text-muted"></i>
                                      <span className="text-muted d-block">Email</span>
                                  </div>
                                  <a href="#" className="text-reset fw-medium ms-auto">john.doe@email.com</a>
                              </li>
                              <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                                  <div className="d-flex align-items-center gap-2">
                                      <i className="ri-phone-line text-muted"></i>
                                      <span className="text-muted d-block">Phone</span>
                                  </div>
                                  <p className="fw-medium ms-auto">+91 123 456 789</p>
                              </li>
                              <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                                  <div className="d-flex align-items-center gap-2">
                                      <i className="ri-map-pin-line text-muted"></i>
                                      <span className="text-muted d-block">Location</span>
                                  </div>
                                  <p className="fw-medium ms-auto">Ahmedabad, Gujarat</p>
                              </li>
                              <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                                  <div className="d-flex align-items-center gap-2">
                                      <i className="ri-wallet-3-line text-muted"></i>
                                      <span className="text-muted d-block">Wallet Balance</span>
                                  </div>
                                  <p className="fw-medium ms-auto">₹3,850</p>
                              </li>
                              <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                                  <div className="d-flex align-items-center gap-2">
                                      <i className="ri-user-line text-muted"></i>
                                      <span className="text-muted d-block">Customer Type</span>
                                  </div>
                                  <p className="fw-medium ms-auto">Wholesale Buyer</p>
                              </li>
                              <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                                  <div className="d-flex align-items-center gap-2">
                                      <i className="ri-vip-crown-line text-muted"></i>
                                      <span className="text-muted d-block">Loyalty Tier</span>
                                  </div>
                                  <p className="fw-medium ms-auto">Silver</p>
                              </li>
                          </ul>
                          <div className="p-3 rounded border mb-4">
                              <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
                                  <div>
                                      <h6 className="mb-0">Allow Promotional Messages</h6>
                                      <p className="text-muted">Receive promotional messages</p>
                                  </div>
                                  <div className="form-switch switch-light-primary">
                                      <input type="checkbox" id="switch-light-1" defaultChecked /><label className="label" htmlFor="switch-light-1"></label>
                                  </div>
                              </div>
                          </div>
                          <div className="p-3 rounded border mb-4">
                              <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
                                  <div>
                                      <h6 className="mb-0">Enable Loyalty Program</h6>
                                      <p className="text-muted">Allow customer to earn</p>
                                  </div>
                                  <div className="form-switch switch-light-primary">
                                      <input type="checkbox" id="switch-light-2" defaultChecked /><label className="label" htmlFor="switch-light-2"></label>
                                  </div>
                              </div>
                          </div>
                          <div className="p-3 rounded border">
                              <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
                                  <div>
                                      <h6 className="mb-0">Credit Purchase Enabled</h6>
                                      <p className="text-muted">Permit purchases using approved</p>
                                  </div>
                                  <div className="form-switch switch-light-primary">
                                      <input type="checkbox" id="switch-light-3" /><label className="label" htmlFor="switch-light-3"></label>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
