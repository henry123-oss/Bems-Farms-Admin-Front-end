import { useState } from 'react'

const RULES = [
  { id: 1, name: 'Lactose Intolerance', tags: ['dairy', 'milk', 'cheese', 'butter', 'cream'], exclude: ['Dairy'], active: true },
  { id: 2, name: 'Gluten Free', tags: ['wheat', 'barley', 'rye', 'bread', 'pasta'], exclude: ['Gluten'], active: true },
  { id: 3, name: 'Vegan', tags: ['meat', 'dairy', 'eggs', 'honey', 'fish'], exclude: ['Animal Products'], active: true },
  { id: 4, name: 'Vegetarian', tags: ['meat', 'poultry', 'fish', 'seafood'], exclude: ['Meat & Fish'], active: true },
  { id: 5, name: 'Low Carb / Keto', tags: ['rice', 'bread', 'potato', 'sugar', 'pasta'], exclude: ['High-Carb'], active: false },
  { id: 6, name: 'Nut Allergy', tags: ['peanut', 'groundnut', 'almond', 'cashew', 'walnut'], exclude: ['Nuts'], active: true },
]

export default function DietaryRules() {
  const [rules, setRules] = useState(RULES)

  const toggle = id => setRules(prev => prev.map(r => r.id === id ? {...r, active: !r.active} : r))

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <div>
          <h4 className="fs-xl mb-1">Dietary Rules</h4>
          <p className="text-muted mb-0">Configure ingredient exclusion rules for Chef Bems AI recommendations.</p>
        </div>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addRuleModal">
          <i className="ri-add-line me-1"></i>Add Rule
        </button>
      </div>

      <div className="row g-4">
        {rules.map(rule => (
          <div className="col-md-6 col-xl-4" key={rule.id}>
            <div className="card mb-0">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h6 className="fw-semibold mb-0">{rule.name}</h6>
                  <div className="form-check form-switch mb-0">
                    <input className="form-check-input" type="checkbox" checked={rule.active} onChange={() => toggle(rule.id)} />
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-muted fs-xs mb-1">Excluded Ingredients / Tags:</p>
                  <div className="d-flex flex-wrap gap-1">
                    {rule.tags.map(tag => (
                      <span key={tag} className="badge bg-danger-subtle text-danger">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-muted fs-xs mb-1">Product Categories Excluded:</p>
                  <div className="d-flex flex-wrap gap-1">
                    {rule.exclude.map(cat => (
                      <span key={cat} className="badge bg-warning-subtle text-warning">{cat}</span>
                    ))}
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-light border flex-grow-1">
                    <i className="ri-pencil-line me-1"></i>Edit
                  </button>
                  <button className="btn btn-sm btn-outline-danger border">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="modal fade" id="addRuleModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">Add Dietary Rule</h6>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label">Rule Name</label>
                  <input type="text" className="form-control" placeholder="e.g. Diabetic-Friendly" />
                </div>
                <div className="col-12">
                  <label className="form-label">Ingredient Tags to Exclude (comma-separated)</label>
                  <input type="text" className="form-control" placeholder="e.g. sugar, honey, starch" />
                </div>
                <div className="col-12">
                  <label className="form-label">Product Categories to Exclude</label>
                  <input type="text" className="form-control" placeholder="e.g. Sweets, Beverages" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Save Rule</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
