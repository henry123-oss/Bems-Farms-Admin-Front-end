import { useState } from 'react'

const SAMPLE_CONVOS = [
  { id: 1, customer: 'Amara Obi', query: 'I am lactose intolerant, what dishes can I order?', reply: 'Based on your profile, I recommend our Jollof Rice with Grilled Chicken, Vegetable Stir-fry, and Egusi Soup (no dairy). All are clearly marked on your menu.', time: '10:24 AM', status: 'resolved' },
  { id: 2, customer: 'Tunde Adeyemi', query: 'Do you have low-carb options for someone with diabetes?', reply: 'Yes! Our Grilled Tilapia with Garden Salad, Peppersoup, and Ofada Rice (small portion) are great low-carb choices. I can also filter the full menu by glycemic index.', time: '9:48 AM', status: 'resolved' },
  { id: 3, customer: 'Kemi Balogun', query: 'I want a meal plan for the week — I am vegetarian.', reply: null, time: '11:02 AM', status: 'pending' },
]

export default function Conversations() {
  const [selected, setSelected] = useState(SAMPLE_CONVOS[0])
  const [reply, setReply] = useState('')

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <div>
          <h4 className="fs-xl mb-1">Chef Bems AI — Conversations</h4>
          <p className="text-muted mb-0">AI-powered dietary guidance conversations with customers.</p>
        </div>
        <span className="badge bg-success-subtle text-success fs-sm px-3 py-2">
          <i className="ri-robot-line me-1"></i>AI Active
        </span>
      </div>

      <div className="card mb-0">
        <div className="card-body p-0">
          <div className="row g-0" style={{minHeight: 500}}>
            {/* Conversation list */}
            <div className="col-lg-4 border-end">
              <div className="p-4 border-bottom">
                <input type="text" className="form-control form-control-sm" placeholder="Search conversations..." />
              </div>
              <div className="overflow-auto" style={{maxHeight: 460}}>
                {SAMPLE_CONVOS.map(c => (
                  <button key={c.id} onClick={() => setSelected(c)}
                    className={`w-100 text-start p-4 border-bottom border-0 bg-transparent ${selected?.id === c.id ? 'bg-light' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="avatar size-9 rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center fw-bold fs-sm flex-shrink-0">
                        {c.customer.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-grow-1 overflow-hidden">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fw-medium fs-sm">{c.customer}</span>
                          <span className="text-muted" style={{fontSize: 11}}>{c.time}</span>
                        </div>
                        <p className="text-muted fs-xs mb-0 text-truncate">{c.query}</p>
                      </div>
                      {c.status === 'pending' && <span className="badge bg-warning-subtle text-warning">New</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Conversation detail */}
            <div className="col-lg-8 d-flex flex-column">
              {selected ? (
                <>
                  <div className="p-4 border-bottom d-flex align-items-center gap-3">
                    <div className="avatar size-9 rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center fw-bold fs-sm">
                      {selected.customer.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-0">{selected.customer}</h6>
                      <span className="text-muted fs-xs">{selected.time}</span>
                    </div>
                    <span className={`ms-auto badge bg-${selected.status === 'resolved' ? 'success' : 'warning'}-subtle text-${selected.status === 'resolved' ? 'success' : 'warning'}`}>
                      {selected.status === 'resolved' ? 'Resolved' : 'Pending Reply'}
                    </span>
                  </div>
                  <div className="flex-grow-1 p-4 d-flex flex-column gap-3 overflow-auto" style={{maxHeight: 340}}>
                    {/* Customer message */}
                    <div className="d-flex gap-3">
                      <div className="avatar size-8 rounded-circle bg-light d-flex align-items-center justify-content-center fs-sm fw-bold flex-shrink-0">
                        {selected.customer.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="bg-light rounded p-3 fs-sm" style={{maxWidth: '75%'}}>
                        {selected.query}
                      </div>
                    </div>
                    {/* AI reply */}
                    {selected.reply && (
                      <div className="d-flex gap-3 flex-row-reverse">
                        <div className="avatar size-8 rounded-circle bg-success d-flex align-items-center justify-content-center text-white fs-sm flex-shrink-0">
                          <i className="ri-robot-line"></i>
                        </div>
                        <div className="bg-success-subtle rounded p-3 fs-sm text-success-emphasis" style={{maxWidth: '75%'}}>
                          {selected.reply}
                        </div>
                      </div>
                    )}
                    {!selected.reply && (
                      <div className="text-center text-muted py-4">
                        <i className="ri-robot-2-line fs-2 d-block mb-2"></i>
                        <span className="fs-sm">Compose a reply below or let the AI auto-respond.</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 border-top">
                    <div className="d-flex gap-2">
                      <textarea className="form-control form-control-sm" rows={2} placeholder="Type your reply or click AI Suggest..."
                        value={reply} onChange={e => setReply(e.target.value)} />
                      <div className="d-flex flex-column gap-2">
                        <button className="btn btn-sm btn-outline-success" title="AI Suggest">
                          <i className="ri-robot-line"></i>
                        </button>
                        <button className="btn btn-sm btn-primary" title="Send">
                          <i className="ri-send-plane-fill"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-grow-1 d-flex align-items-center justify-content-center text-muted">
                  Select a conversation
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
