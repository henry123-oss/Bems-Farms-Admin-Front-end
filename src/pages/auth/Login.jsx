import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import toast from 'react-hot-toast'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)

  // Auth pages have no sidebar — set body class and clean up
  useEffect(() => {
    document.body.classList.add('sidebar-hidden')
    return () => document.body.classList.remove('sidebar-hidden')
  }, [])

  // Re-init lucide icons
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons()
  })

  const fill = (creds) => setForm(creds)

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
          <div className="py-12 w-100">
            <div className="row">
              <div className="col-md-8 col-lg-6 col-xl-12 col-xxl-9 mx-auto">

                {/* Logo */}
                <div className="mb-3 px-5 px-md-7">
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="avatar size-10 rounded bg-success text-white d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
                      style={{ fontSize: 16 }}
                    >
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
                    <p className="text-muted fs-sm mb-6">Sign in to your Bems Farms admin portal</p>

                    <form onSubmit={handleSubmit}>
                      <div className="row g-5 mt-1">
                        <div className="col-12 mt-0">
                          <label htmlFor="emailInput" className="form-label">Email Address</label>
                          <input
                            type="email"
                            id="emailInput"
                            placeholder="admin@bemsfarms.com"
                            className="form-control"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                          />
                        </div>

                        <div className="col-12">
                          <label htmlFor="passwordInput" className="form-label">Password</label>
                          <div className="position-relative">
                            <input
                              type={showPw ? 'text' : 'password'}
                              id="passwordInput"
                              className="form-control pe-8"
                              placeholder="Enter your password"
                              required
                              value={form.password}
                              onChange={(e) => setForm({ ...form, password: e.target.value })}
                            />
                            <div
                              className="position-absolute top-50 end-0 me-3 translate-middle-y text-muted cursor-pointer"
                              onClick={() => setShowPw((v) => !v)}
                              style={{ cursor: 'pointer' }}
                            >
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
                          <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                          >
                            {loading && (
                              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            )}
                            {loading ? 'Signing in…' : 'Sign In'}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Demo credentials */}
                <div className="card bg-transparent border-0 mb-0">
                  <div className="card-body p-5 p-md-7">

                    <div className="d-flex mb-1 justify-content-between align-items-center">
                      <h6 className="mb-0">Superadmin</h6>
                      <p className="fs-sm text-muted mb-0">Full system access</p>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
                      <div className="row g-0 border rounded flex-grow-1">
                        <div className="col-md-8 border-bottom border-bottom-md-0 border-end">
                          <p className="px-3 py-2 mb-0 fs-sm">admin@bemsfarms.com</p>
                        </div>
                        <div className="col-md-4">
                          <p className="px-3 py-2 mb-0 fs-sm">admin123</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sub-primary flex-shrink-0"
                        onClick={() => fill({ email: 'admin@bemsfarms.com', password: 'admin123' })}
                      >
                        Fill
                      </button>
                    </div>

                    <div className="d-flex mb-1 justify-content-between align-items-center">
                      <h6 className="mb-0">Staff</h6>
                      <p className="fs-sm text-muted mb-0">Sales &amp; POS access</p>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <div className="row g-0 border rounded flex-grow-1">
                        <div className="col-md-8 border-bottom border-bottom-md-0 border-end">
                          <p className="px-3 py-2 mb-0 fs-sm">staff@bemsfarms.com</p>
                        </div>
                        <div className="col-md-4">
                          <p className="px-3 py-2 mb-0 fs-sm">staff123</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sub-primary flex-shrink-0"
                        onClick={() => fill({ email: 'staff@bemsfarms.com', password: 'staff123' })}
                      >
                        Fill
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ── Right panel: marketing ── */}
        <div className="col-12 col-xl-7 col-xxl-8 my-auto d-none d-xl-block">
          <div className="py-12 px-4 px-lg-16 px-xxl-28 me-xxl-80">
            <h2 className="mb-7">Manage Bems Farms<br />from One Powerful Dashboard</h2>
            <p className="text-muted fs-lg mb-12 mb-md-20">
              Track inventory, manage orders, handle deliveries and reward loyal customers — all in one place.
            </p>
            <div className="row g-4 g-md-6">
              {[
                { icon: 'ri-shopping-cart-2-line', label: 'Orders' },
                { icon: 'ri-archive-stack-line', label: 'Inventory' },
                { icon: 'ri-bar-chart-grouped-line', label: 'Reports' },
                { icon: 'ri-truck-line', label: 'Deliveries' },
                { icon: 'ri-robot-line', label: 'Chef Bems AI' },
                { icon: 'ri-heart-line', label: 'Loyalty Points' },
              ].map(({ icon, label }) => (
                <div className="col-md-4" key={label}>
                  <div className="card border-0 mb-0">
                    <div className="card-body py-8 text-center">
                      <div className="avatar size-14 rounded bg-success-subtle text-success d-flex align-items-center justify-content-center mx-auto mb-5">
                        <i className={`${icon} fs-1`}></i>
                      </div>
                      <h6 className="mb-0 fs-17">{label}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
