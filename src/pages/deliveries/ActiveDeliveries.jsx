import { Link } from 'react-router-dom'

const DELIVERIES = [
  { id: 'DEL-001', order: 'BF-2026-000124', customer: 'Amara Obi', address: '14 Awolowo Road, VI, Lagos', driver: 'Emeka Nwosu', phone: '0801 234 5678', status: 'en_route', eta: '12 min', items: 4 },
  { id: 'DEL-002', order: 'BF-2026-000123', customer: 'Tunde Adeyemi', address: '22 Broad Street, Lagos Island', driver: 'Chidi Obi', phone: '0812 345 6789', status: 'picked_up', eta: '28 min', items: 2 },
  { id: 'DEL-003', order: 'BF-2026-000121', customer: 'Kemi Balogun', address: '7 Opebi Road, Ikeja', driver: 'Femi Adekunle', phone: '0803 456 7890', status: 'assigned', eta: '45 min', items: 1 },
  { id: 'DEL-004', order: 'BF-2026-000119', customer: 'Mrs. Okonkwo', address: '3 Lekki Phase 1', driver: 'Unassigned', phone: '—', status: 'pending', eta: '—', items: 6 },
]

const statusColor = { en_route: 'success', picked_up: 'info', assigned: 'primary', pending: 'warning' }
const statusLabel = { en_route: 'En Route', picked_up: 'Picked Up', assigned: 'Assigned', pending: 'Pending' }

export default function ActiveDeliveries() {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <div>
          <h4 className="fs-xl mb-1">Active Deliveries</h4>
          <p className="text-muted mb-0">Track and manage all ongoing deliveries in real time.</p>
        </div>
        <div className="d-flex gap-2">
          <Link to="/deliveries/drivers" className="btn btn-outline-light border">
            <i className="ri-user-location-line me-1"></i>Drivers
          </Link>
          <Link to="/orders" className="btn btn-primary">
            <i className="ri-add-line me-1"></i>New Delivery
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-4 mb-5">
        {[
          { label: 'En Route', count: 1, icon: 'ri-truck-line', color: 'success' },
          { label: 'Picked Up', count: 1, icon: 'ri-store-2-line', color: 'info' },
          { label: 'Assigned', count: 1, icon: 'ri-user-location-line', color: 'primary' },
          { label: 'Awaiting Driver', count: 1, icon: 'ri-time-line', color: 'warning' },
        ].map(({ label, count, icon, color }) => (
          <div className="col-sm-6 col-xl-3" key={label}>
            <div className="card mb-0">
              <div className="card-body d-flex align-items-center gap-3 py-3">
                <div className={`avatar size-10 rounded bg-${color}-subtle text-${color} d-flex align-items-center justify-content-center`}>
                  <i className={`${icon} fs-4`}></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-0">{count}</h5>
                  <p className="text-muted fs-xs mb-0">{label}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="card mb-0">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h6 className="fw-semibold mb-0">Today's Deliveries</h6>
          <div className="d-flex gap-2">
            <input type="text" className="form-control form-control-sm w-auto" placeholder="Search deliveries..." />
            <select className="form-select form-select-sm w-auto">
              <option>All Status</option>
              <option>En Route</option>
              <option>Picked Up</option>
              <option>Assigned</option>
              <option>Pending</option>
            </select>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-nowrap table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>Delivery ID</th>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Driver</th>
                  <th>ETA</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {DELIVERIES.map(d => (
                  <tr key={d.id}>
                    <td className="fw-medium">{d.id}</td>
                    <td><Link to={`/orders/${d.order}`} className="link link-custom fs-sm">{d.order}</Link></td>
                    <td>{d.customer}</td>
                    <td className="text-muted fs-sm" style={{maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis'}}>{d.address}</td>
                    <td>
                      {d.driver === 'Unassigned'
                        ? <span className="text-danger fs-sm">Unassigned</span>
                        : <span>{d.driver}<br /><small className="text-muted">{d.phone}</small></span>}
                    </td>
                    <td className="fw-medium">{d.eta}</td>
                    <td>
                      <span className={`badge bg-${statusColor[d.status]}-subtle text-${statusColor[d.status]}`}>
                        {statusLabel[d.status]}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex gap-1">
                        <button className="btn btn-sm btn-outline-light border" title="View">
                          <i className="ri-eye-line"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-light border" title="Assign Driver">
                          <i className="ri-user-add-line"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
