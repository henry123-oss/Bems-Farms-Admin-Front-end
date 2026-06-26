import { useParams, Link } from 'react-router-dom'

const MOCK = {
  id: 'C-001', name: 'Amara Obi', email: 'amara@email.com', phone: '0801 234 5678',
  address: '14 Awolowo Road, Victoria Island, Lagos', joined: 'January 15, 2025',
  tier: 'Gold', points: 1240, totalOrders: 18, totalSpent: '₦248,000', lastOrder: '2026-06-25',
  avatar: 'AO', notes: 'Prefers lactose-free options. Regular Friday orders.',
}

const ORDERS = [
  { id: 'BF-2026-000124', date: 'Jun 25, 2026', items: 4, total: '₦18,500', status: 'delivered' },
  { id: 'BF-2026-000101', date: 'Jun 18, 2026', items: 2, total: '₦9,200',  status: 'delivered' },
  { id: 'BF-2026-000089', date: 'Jun 11, 2026', items: 5, total: '₦31,000', status: 'delivered' },
  { id: 'BF-2026-000067', date: 'Jun 04, 2026', items: 3, total: '₦14,500', status: 'refunded'  },
]

const statusColor = { delivered: 'success', pending: 'warning', refunded: 'danger', dispatched: 'info' }

export default function CustomerDetail() {
  const { id } = useParams()
  const c = MOCK

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center gap-3 mb-5">
        <Link to="/customers" className="btn btn-sm btn-outline-light border">
          <i className="ri-arrow-left-line"></i>
        </Link>
        <div>
          <h4 className="fs-xl mb-0">{c.name}</h4>
          <p className="text-muted mb-0 fs-sm">Customer ID: {c.id}</p>
        </div>
        <div className="ms-auto d-flex gap-2">
          <button className="btn btn-outline-light border btn-sm">
            <i className="ri-pencil-line me-1"></i>Edit
          </button>
          <Link to={`/orders?customer=${c.id}`} className="btn btn-primary btn-sm">
            <i className="ri-shopping-cart-2-line me-1"></i>New Order
          </Link>
        </div>
      </div>

      <div className="row g-4">
        {/* Profile card */}
        <div className="col-xl-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <div className="avatar size-16 rounded-circle bg-warning-subtle text-warning d-flex align-items-center justify-content-center fw-bold fs-3 mx-auto mb-3">
                {c.avatar}
              </div>
              <h5 className="fw-semibold mb-0">{c.name}</h5>
              <p className="text-muted fs-sm mb-2">{c.email}</p>
              <span className="badge bg-warning-subtle text-warning mb-3">{c.tier} Member</span>
              <div className="d-flex justify-content-center gap-4 mt-2">
                <div className="text-center">
                  <h5 className="fw-bold mb-0">{c.totalOrders}</h5>
                  <p className="text-muted fs-xs mb-0">Orders</p>
                </div>
                <div className="text-center">
                  <h5 className="fw-bold mb-0">{c.totalSpent}</h5>
                  <p className="text-muted fs-xs mb-0">Spent</p>
                </div>
                <div className="text-center">
                  <h5 className="fw-bold mb-0">{c.points}</h5>
                  <p className="text-muted fs-xs mb-0">Points</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-0">
            <div className="card-header"><h6 className="fw-semibold mb-0">Contact Details</h6></div>
            <div className="card-body d-flex flex-column gap-3">
              <div className="d-flex gap-2 align-items-start">
                <i className="ri-mail-line text-muted mt-1"></i>
                <span className="fs-sm">{c.email}</span>
              </div>
              <div className="d-flex gap-2 align-items-start">
                <i className="ri-phone-line text-muted mt-1"></i>
                <span className="fs-sm">{c.phone}</span>
              </div>
              <div className="d-flex gap-2 align-items-start">
                <i className="ri-map-pin-line text-muted mt-1"></i>
                <span className="fs-sm">{c.address}</span>
              </div>
              <div className="d-flex gap-2 align-items-start">
                <i className="ri-calendar-line text-muted mt-1"></i>
                <span className="fs-sm">Member since {c.joined}</span>
              </div>
              {c.notes && (
                <div className="d-flex gap-2 align-items-start">
                  <i className="ri-sticky-note-line text-muted mt-1"></i>
                  <span className="fs-sm text-muted fst-italic">{c.notes}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Orders history */}
        <div className="col-xl-8">
          <div className="card mb-0">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h6 className="fw-semibold mb-0">Order History</h6>
              <Link to="/orders" className="link link-custom fs-sm">View all →</Link>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover table-nowrap mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Items</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {ORDERS.map(o => (
                      <tr key={o.id}>
                        <td>
                          <Link to={`/orders/${o.id}`} className="fw-medium link link-custom fs-sm">{o.id}</Link>
                        </td>
                        <td className="text-muted">{o.date}</td>
                        <td>{o.items}</td>
                        <td className="fw-semibold">{o.total}</td>
                        <td>
                          <span className={`badge bg-${statusColor[o.status]}-subtle text-${statusColor[o.status]}`}>
                            {o.status.charAt(0).toUpperCase() + o.status.slice(1)}
                          </span>
                        </td>
                        <td>
                          <Link to={`/orders/${o.id}`} className="btn btn-sm btn-outline-light border">
                            <i className="ri-eye-line"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
