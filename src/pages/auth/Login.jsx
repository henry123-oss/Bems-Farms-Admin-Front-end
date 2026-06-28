import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { ROLE_META } from '../../lib/roles'
import toast from 'react-hot-toast'

const ROLES_ORDER = ['superadmin', 'manager', 'accountant', 'delivery_manager', 'cashier', 'kitchen_staff']

export default function Login() {
  const { login } = useAuth()
  const navigate  = useNavigate()
  const [form, setForm]   = useState({ email: '', password: '' })
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.body.classList.add('sidebar-hidden')
    return () => document.body.classList.remove('sidebar-hidden')
  }, [])

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons()
  })

  const fill = (email, password) => setForm({ email, password })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(form.email, form.password)
      toast.success('Welcome back!')
      navigate('/dashboard')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-wrapper position-relative container-fluid">
      <div className="row g-0 min-vh-100">

        {/* ── Left panel: form ── */}
        <div className="col-12 col-xl-4 d-flex align-items-center justify-content-center bg-body-secondary">
          <div className="py-8 w-100">
            <div className="row">
              <div className="col-md-8 col-lg-6 col-xl-12 col-xxl-9 mx-auto">

                {/* Logo */}
                <div className="mb-3 px-5 px-md-7">
                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar size-10 rounded bg-success text-white d-flex align-items-center justify-content-center fw-bold flex-shrink-0" style={{ fontSize: 16 }}>
                      BF
                    </div>
                    <div>
                      <div className="fw-bold text-dark" style={{ fontSize: 18, lineHeight: 1.2 }}>Bems Farms</div>
                      <div style={{ fontSize: 11, opacity: 0.6 }}>Farm-to-Table Management</div>
                    </div>
                  </div>
                </div>

                {/* Sign-in form */}
                <div className="card bg-transparent border-0 mb-0">
                  <div className="p-md-8 card-body">
                    <h5 className="text-gradient fw-bold text-uppercase mb-1">Welcome Back!</h5>
                    <p className="text-muted fs-sm mb-5">Sign in to your Bems Farms admin portal</p>

                    <form onSubmit={handleSubmit}>
                      <div className="row g-4">
                        <div className="col-12">
                          <label htmlFor="emailInput" className="form-label">Email Address</label>
                          <input
                            type="email" id="emailInput"
                            placeholder="email@bemsfarms.com"
                            className="form-control" required
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                          />
                        </div>

                        <div className="col-12">
                          <label htmlFor="passwordInput" className="form-label">Password</label>
                          <div className="position-relative">
                            <input
                              type={showPw ? 'text' : 'password'} id="passwordInput"
                              className="form-control pe-8"
                              placeholder="Enter your password" required
                              value={form.password}
                              onChange={e => setForm({ ...form, password: e.target.value })}
                            />
                            <div className="position-absolute top-50 end-0 me-3 translate-middle-y text-muted"
                              onClick={() => setShowPw(v => !v)} style={{ cursor: 'pointer' }}>
                              {showPw
                                ? <i data-lucide="eye-off" className="size-5"></i>
                                : <i data-lucide="eye" className="size-5"></i>
                              }
                            </div>
                          </div>
                        </div>

                        <div className="col-12 d-flex justify-content-between align-items-center">
                          <div className="form-check check-primary">
                            <input type="checkbox" id="rememberMe" className="form-check-input" />
                            <label htmlFor="rememberMe" className="form-check-label">Remember me</label>
                          </div>
                          <Link to="/forgot-password" className="fs-sm">Forgot Password?</Link>
                        </div>

                        <div className="col-12">
                          <button type="submit" disabled={loading}
                            className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2">
                            {loading && <span className="spinner-border spinner-border-sm" role="status"></span>}
                            {loading ? 'Signing in…' : 'Sign In'}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* ── Dev Role Quick-Fill ── */}
                <div className="card bg-transparent border-0 mb-0">
                  <div className="card-body px-5 px-md-7 pt-0 pb-6">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div style={{ height: 1, flex: 1, background: '#e2e8f0' }}></div>
                      <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                        Dev — Quick Sign In
                      </span>
                      <div style={{ height: 1, flex: 1, background: '#e2e8f0' }}></div>
                    </div>

                    <div className="row g-2">
                      {ROLES_ORDER.map(roleKey => {
                        const m = ROLE_META[roleKey]
                        return (
                          <div className="col-6" key={roleKey}>
                            <button
                              type="button"
                              onClick={() => fill(m.email, m.password)}
                              className="w-100 text-start rounded p-2 border-0"
                              style={{
                                background: form.email === m.email ? m.bg : '#f8fafc',
                                border: `1.5px solid ${form.email === m.email ? m.color : '#e2e8f0'}`,
                                transition: 'all 0.15s',
                                cursor: 'pointer',
                              }}
                            >
                              <div className="d-flex align-items-center gap-2">
                                <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                  style={{ width: 28, height: 28, background: m.bg }}>
                                  <i className={m.icon} style={{ color: m.color, fontSize: 13 }}></i>
                                </div>
                                <div className="overflow-hidden">
                                  <div className="fw-semibold text-truncate" style={{ fontSize: 12, color: m.color }}>{m.label}</div>
                                  <div className="text-truncate" style={{ fontSize: 10, color: '#94a3b8' }}>{m.description}</div>
                                </div>
                              </div>
                            </button>
                          </div>
                        )
                      })}
                    </div>

                    {form.email && (
                      <div className="mt-3 p-2 rounded" style={{ background: '#f1f5f9', border: '1px solid #e2e8f0' }}>
                        <div className="d-flex align-items-center justify-content-between">
                          <div style={{ fontSize: 11, color: '#64748b' }}>
                            <i className="ri-mail-line me-1"></i>{form.email}
                            <span className="mx-2">·</span>
                            <i className="ri-lock-line me-1"></i>{form.password}
                          </div>
                          <button type="submit" form="__none__"
                            onClick={handleSubmit}
                            className="btn btn-sm py-0 px-2"
                            style={{ fontSize: 11, background: '#0ea5e9', color: '#fff', border: 'none' }}
                            disabled={loading}>
                            {loading ? '…' : 'Go →'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ── Right panel: role overview ── */}
        <div className="col-12 col-xl-7 col-xxl-8 my-auto d-none d-xl-block">
          <div className="py-12 px-4 px-lg-16 px-xxl-28 me-xxl-80">
            <h2 className="mb-3">Manage Bems Farms<br />from One Powerful Dashboard</h2>
            <p className="text-muted fs-lg mb-8">
              Track inventory, manage orders, handle deliveries and reward loyal customers — all in one place.
            </p>

            {/* Role access overview */}
            <div className="row g-3">
              {ROLES_ORDER.map(roleKey => {
                const m = ROLE_META[roleKey]
                const access = {
                  superadmin:       ['Dashboard', 'POS', 'Products', 'Inventory', 'Orders', 'Deliveries', 'Customers', 'Staff', 'Finance', 'Reports', 'Chef Bems AI', 'Multi-Store', 'Settings'],
                  manager:          ['Dashboard', 'POS', 'Products', 'Inventory', 'Orders', 'Deliveries', 'Customers', 'Staff', 'Finance', 'Reports', 'Chef Bems AI', 'Settings'],
                  accountant:       ['Dashboard', 'Orders', 'Finance', 'Reports'],
                  delivery_manager: ['Dashboard', 'Orders', 'Deliveries'],
                  cashier:          ['Dashboard', 'POS', 'Orders', 'Customers'],
                  kitchen_staff:    ['Dashboard', 'Orders', 'Products', 'Inventory', 'Chef Bems AI'],
                }[roleKey]

                return (
                  <div className="col-md-4" key={roleKey}>
                    <div className="card border-0 mb-0 h-100">
                      <div className="card-body py-3 px-4">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                            style={{ width: 32, height: 32, background: m.bg }}>
                            <i className={m.icon} style={{ color: m.color, fontSize: 15 }}></i>
                          </div>
                          <div>
                            <div className="fw-semibold" style={{ fontSize: 13, color: m.color }}>{m.label}</div>
                            <div style={{ fontSize: 10, color: '#94a3b8' }}>{m.description}</div>
                          </div>
                        </div>
                        <div className="d-flex flex-wrap gap-1">
                          {access.map(a => (
                            <span key={a} className="badge rounded-pill" style={{ background: m.bg, color: m.color, fontSize: 10 }}>{a}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
