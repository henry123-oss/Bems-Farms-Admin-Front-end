export default function DeliveryZones() {
  const ZONES = [
    { id: 1, name: 'Victoria Island', drivers: 2, fee: '₦800', minOrder: '₦3,000', eta: '20–35 min', color: 'success', active: true },
    { id: 2, name: 'Lekki Phase 1', drivers: 1, fee: '₦600', minOrder: '₦2,500', eta: '25–40 min', color: 'info', active: true },
    { id: 3, name: 'Lekki Phase 2', drivers: 1, fee: '₦1,000', minOrder: '₦4,000', eta: '35–55 min', color: 'info', active: true },
    { id: 4, name: 'Ikeja / GRA', drivers: 1, fee: '₦1,200', minOrder: '₦4,500', eta: '40–60 min', color: 'primary', active: true },
    { id: 5, name: 'Surulere', drivers: 1, fee: '₦1,000', minOrder: '₦4,000', eta: '35–50 min', color: 'warning', active: false },
    { id: 6, name: 'Yaba / Mainland', drivers: 1, fee: '₦900', minOrder: '₦3,500', eta: '30–50 min', color: 'secondary', active: true },
  ]

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <div>
          <h4 className="fs-xl mb-1">Delivery Zones</h4>
          <p className="text-muted mb-0">Configure delivery coverage areas, fees, and ETAs.</p>
        </div>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addZoneModal">
          <i className="ri-add-line me-1"></i>Add Zone
        </button>
      </div>

      <div className="row g-4">
        {ZONES.map(zone => (
          <div className="col-md-6 col-xl-4" key={zone.id}>
            <div className={`card mb-0 border-start border-${zone.color} border-3`}>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h6 className="fw-semibold mb-0">{zone.name}</h6>
                  <div className="form-check form-switch mb-0">
                    <input className="form-check-input" type="checkbox" defaultChecked={zone.active} />
                  </div>
                </div>
                <div className="d-flex flex-column gap-1 fs-sm">
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Delivery Fee</span>
                    <span className="fw-semibold text-success">{zone.fee}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Min. Order</span>
                    <span className="fw-medium">{zone.minOrder}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">ETA</span>
                    <span className="fw-medium">{zone.eta}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Drivers Assigned</span>
                    <span className="fw-medium">{zone.drivers}</span>
                  </div>
                </div>
                <div className="d-flex gap-2 mt-4">
                  <button className="btn btn-sm btn-outline-light border flex-grow-1">
                    <i className="ri-pencil-line me-1"></i>Edit
                  </button>
                  <button className="btn btn-sm btn-outline-danger border flex-grow-1">
                    <i className="ri-delete-bin-line me-1"></i>Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Zone Modal */}
      <div className="modal fade" id="addZoneModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">Add Delivery Zone</h6>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label">Zone Name</label>
                  <input type="text" className="form-control" placeholder="e.g. Ajah / Sangotedo" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Delivery Fee (₦)</label>
                  <input type="number" className="form-control" placeholder="0" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Min. Order (₦)</label>
                  <input type="number" className="form-control" placeholder="0" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">ETA (min)</label>
                  <input type="text" className="form-control" placeholder="e.g. 30–50 min" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select className="form-select">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Save Zone</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
