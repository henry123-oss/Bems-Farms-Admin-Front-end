import { Link } from 'react-router-dom'

const CUSTOMERS = [
  { id: 'C-001', name: 'Amara Obi',      email: 'amara@email.com',  points: 1240, tier: 'Gold',   spent: '₦248,000', joined: 'Jan 2025', redeemed: 400 },
  { id: 'C-002', name: 'Tunde Adeyemi',  email: 'tunde@email.com',  points: 870,  tier: 'Silver', spent: '₦174,000', joined: 'Mar 2025', redeemed: 130 },
  { id: 'C-003', name: 'Mrs. Okonkwo',   email: 'okonkwo@email.com',points: 2100, tier: 'Platinum',spent: '₦420,000',joined: 'Nov 2024', redeemed: 900 },
  { id: 'C-004', name: 'Kemi Balogun',   email: 'kemi@email.com',   points: 310,  tier: 'Bronze', spent: '₦62,000',  joined: 'May 2025', redeemed: 0 },
  { id: 'C-005', name: 'Seun Abiodun',   email: 'seun@email.com',   points: 590,  tier: 'Silver', spent: '₦118,000', joined: 'Feb 2025', redeemed: 60 },
]

const tierColor = { Platinum: 'primary', Gold: 'warning', Silver: 'secondary', Bronze: 'danger' }

export default function LoyaltyPoints() {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <div>
          <h4 className="fs-xl mb-1">Loyalty Points</h4>
          <p className="text-muted mb-0">Track and manage customer reward points and tiers.</p>
        </div>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#awardPointsModal">
          <i className="ri-gift-line me-1"></i>Award Points
        </button>
      </div>

      {/* Tier summary */}
      <div className="row g-4 mb-5">
        {[
          { tier: 'Platinum', min: '₦300k+', points: '2,000+', count: 1, color: 'primary' },
          { tier: 'Gold',     min: '₦200k+', points: '1,000+', count: 1, color: 'warning' },
          { tier: 'Silver',   min: '₦100k+', points: '500+',   count: 2, color: 'secondary' },
          { tier: 'Bronze',   min: 'New',     points: '0–499',  count: 1, color: 'danger' },
        ].map(t => (
          <div className="col-sm-6 col-xl-3" key={t.tier}>
            <div className={`card mb-0 border-top border-${t.color} border-3`}>
              <div className="card-body py-3">
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <span className={`badge bg-${t.color}-subtle text-${t.color} fs-sm`}>{t.tier}</span>
                  <span className="fw-bold fs-4">{t.count}</span>
                </div>
                <p className="text-muted fs-xs mb-0">Spend: {t.min} · Points: {t.points}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Points config */}
      <div className="card mb-4">
        <div className="card-header"><h6 className="fw-semibold mb-0">Points Configuration</h6></div>
        <div className="card-body">
          <div className="row g-4">
            <div className="col-md-4">
              <label className="form-label">Points per ₦1,000 spent</label>
              <input type="number" className="form-control" defaultValue="5" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Points value (₦ per point)</label>
              <input type="number" className="form-control" defaultValue="1" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Min. points to redeem</label>
              <input type="number" className="form-control" defaultValue="100" />
            </div>
          </div>
          <div className="text-end mt-3">
            <button className="btn btn-primary btn-sm">Save Configuration</button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card mb-0">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h6 className="fw-semibold mb-0">Customer Points</h6>
          <input type="text" className="form-control form-control-sm w-auto" placeholder="Search..." />
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-nowrap mb-0">
              <thead className="table-light">
                <tr>
                  <th>Customer</th>
                  <th>Tier</th>
                  <th>Points Balance</th>
                  <th>Points Redeemed</th>
                  <th>Total Spent</th>
                  <th>Member Since</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {CUSTOMERS.map(c => (
                  <tr key={c.id}>
                    <td>
                      <Link to={`/customers/${c.id}`} className="fw-medium link link-custom">{c.name}</Link>
                      <br /><small className="text-muted">{c.email}</small>
                    </td>
                    <td>
                      <span className={`badge bg-${tierColor[c.tier]}-subtle text-${tierColor[c.tier]}`}>{c.tier}</span>
                    </td>
                    <td className="fw-bold text-primary">{c.points.toLocaleString()} pts</td>
                    <td className="text-muted">{c.redeemed.toLocaleString()} pts</td>
                    <td className="fw-medium">{c.spent}</td>
                    <td className="text-muted">{c.joined}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-light border">
                        <i className="ri-gift-line me-1"></i>Award
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Award Points Modal */}
      <div className="modal fade" id="awardPointsModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">Award Points</h6>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label">Customer</label>
                  <select className="form-select">
                    {CUSTOMERS.map(c => <option key={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Points to Award</label>
                  <input type="number" className="form-control" placeholder="0" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Reason</label>
                  <input type="text" className="form-control" placeholder="e.g. Birthday bonus" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Award Points</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
