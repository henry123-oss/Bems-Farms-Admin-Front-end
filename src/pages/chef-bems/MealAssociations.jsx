import { Link } from 'react-router-dom'

const ASSOCIATIONS = [
  { meal: 'Jollof Rice', sku: 'MEAL-001', components: ['Long Grain Rice', 'Tomato Paste', 'Bell Peppers', 'Onions', 'Seasoning Cubes'], pairings: ['Fried Chicken', 'Moin Moin', 'Fried Plantain'], categories: ['Rice Dishes', 'Nigerian'] },
  { meal: 'Egusi Soup', sku: 'MEAL-002', components: ['Melon Seeds', 'Palm Oil', 'Assorted Meat', 'Spinach', 'Crayfish'], pairings: ['Eba', 'Pounded Yam', 'Semo'], categories: ['Soups', 'Nigerian'] },
  { meal: 'Vegetable Stir-fry', sku: 'MEAL-003', components: ['Broccoli', 'Carrots', 'Bell Peppers', 'Olive Oil', 'Garlic'], pairings: ['Brown Rice', 'Grilled Protein'], categories: ['Healthy', 'Vegetarian'] },
  { meal: 'Grilled Tilapia', sku: 'MEAL-004', components: ['Fresh Tilapia', 'Lemon', 'Garlic', 'Herbs', 'Olive Oil'], pairings: ['Garden Salad', 'Plantain', 'Jollof Rice'], categories: ['Seafood', 'Healthy', 'Low-Carb'] },
]

export default function MealAssociations() {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <div>
          <h4 className="fs-xl mb-1">Meal Associations</h4>
          <p className="text-muted mb-0">Map meals to their components and AI-powered pairing recommendations.</p>
        </div>
        <button className="btn btn-primary">
          <i className="ri-add-line me-1"></i>Add Association
        </button>
      </div>

      <div className="row g-4">
        {ASSOCIATIONS.map(item => (
          <div className="col-xl-6" key={item.sku}>
            <div className="card mb-0">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div>
                    <h6 className="fw-semibold mb-0">{item.meal}</h6>
                    <span className="text-muted fs-xs">{item.sku}</span>
                  </div>
                  <div className="d-flex gap-1">
                    {item.categories.map(cat => (
                      <span key={cat} className="badge bg-primary-subtle text-primary fs-xs">{cat}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-muted fs-xs fw-medium mb-2">
                    <i className="ri-leaf-line me-1"></i>INGREDIENTS / COMPONENTS
                  </p>
                  <div className="d-flex flex-wrap gap-1">
                    {item.components.map(c => (
                      <span key={c} className="badge bg-success-subtle text-success">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-muted fs-xs fw-medium mb-2">
                    <i className="ri-robot-line me-1"></i>AI PAIRINGS
                  </p>
                  <div className="d-flex flex-wrap gap-1">
                    {item.pairings.map(p => (
                      <span key={p} className="badge bg-info-subtle text-info">{p}</span>
                    ))}
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-light border flex-grow-1">
                    <i className="ri-pencil-line me-1"></i>Edit
                  </button>
                  <button className="btn btn-sm btn-outline-light border flex-grow-1">
                    <i className="ri-robot-line me-1"></i>Re-train AI
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
