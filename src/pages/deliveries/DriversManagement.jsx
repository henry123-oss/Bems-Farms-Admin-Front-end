import { Link } from 'react-router-dom'

const DRIVERS = [
  { id: 'DRV-001', name: 'Emeka Nwosu', phone: '0801 234 5678', zone: 'Victoria Island', vehicle: 'Motorcycle — KJA 201 BC', deliveries: 48, rating: 4.8, status: 'active', avatar: 'EN' },
  { id: 'DRV-002', name: 'Chidi Obi', phone: '0812 345 6789', zone: 'Lekki Phase 1–2', vehicle: 'Motorcycle — LND 456 KJ', deliveries: 62, rating: 4.9, status: 'active', avatar: 'CO' },
  { id: 'DRV-003', name: 'Femi Adekunle', phone: '0803 456 7890', zone: 'Ikeja / GRA', vehicle: 'Bicycle — N/A', deliveries: 31, rating: 4.5, status: 'active', avatar: 'FA' },
  { id: 'DRV-004', name: 'Tolu Balogun', phone: '0815 567 8901', zone: 'Surulere', vehicle: 'Motorcycle — LSR 789 AB', deliveries: 19, rating: 4.3, status: 'off_duty', avatar: 'TB' },
  { id: 'DRV-005', name: 'Ade Williams', phone: '0809 678 9012', zone: 'Yaba / Mainland', vehicle: 'Motorcycle — YBA 012 CD', deliveries: 27, rating: 4.6, status: 'suspended', avatar: 'AW' },
]

const statusColor = { active: 'success', off_duty: 'secondary', suspended: 'danger' }
const statusLabel = { active: 'Active', off_duty: 'Off Duty', suspended: 'Suspended' }

function Stars({ rating }) {
  return (
    <span className="text-warning fs-sm">
      {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
      <span className="text-muted ms-1">{rating}</span>
    </span>
  )
}

export default function DriversManagement() {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <div>
          <h4 className="fs-xl mb-1">Drivers Management</h4>
          <p className="text-muted mb-0">Manage delivery drivers, zones, and performance.</p>
        </div>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addDriverModal">
          <i className="ri-add-line me-1"></i>Add Driver
        </button>
      </div>

      <div className="row g-4">
        {DRIVERS.map(driver => (
          <div className="col-md-6 col-xl-4" key={driver.id}>
            <div className="card mb-0">
              <div className="card-body">
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div className="avatar size-11 rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center fw-bold flex-shrink-0">
                    {driver.avatar}
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-semibold mb-0">{driver.name}</h6>
                      <span className={`badge bg-${statusColor[driver.status]}-subtle text-${statusColor[driver.status]}`}>
                        {statusLabel[driver.status]}
                      </span>
                    </div>
                    <p className="text-muted fs-sm mb-0">{driver.id} · {driver.phone}</p>
                  </div>
                </div>
                <div className="d-flex flex-column gap-1 fs-sm mb-4">
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Zone</span>
                    <span className="fw-medium">{driver.zone}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Vehicle</span>
                    <span className="fw-medium">{driver.vehicle}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Deliveries</span>
                    <span className="fw-medium">{driver.deliveries} this month</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">Rating</span>
                    <Stars rating={driver.rating} />
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-light border flex-grow-1">
                    <i className="ri-map-pin-line me-1"></i>Track
                  </button>
                  <button className="btn btn-sm btn-outline-light border flex-grow-1">
                    <i className="ri-pencil-line me-1"></i>Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Driver Modal */}
      <div className="modal fade" id="addDriverModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">Add Driver</h6>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Driver's name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control" placeholder="+234 000 000 0000" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Delivery Zone</label>
                  <select className="form-select">
                    <option>Victoria Island</option>
                    <option>Lekki Phase 1–2</option>
                    <option>Ikeja / GRA</option>
                    <option>Surulere</option>
                    <option>Yaba / Mainland</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Vehicle</label>
                  <input type="text" className="form-control" placeholder="Type — Plate no." />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Add Driver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
