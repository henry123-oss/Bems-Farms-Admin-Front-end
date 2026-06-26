import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

/* ─── Feature cards data ─── */
const FEATURES = [
  {
    icon: 'ri-shopping-bag-3-line',
    color: 'bg-primary',
    title: 'Fast Sales & Billing',
    desc: 'Process orders instantly at the counter or online. Apply discounts, taxes, and complete sales in seconds.',
  },
  {
    icon: 'ri-archive-stack-line',
    color: 'bg-indigo',
    title: 'Inventory Control',
    desc: 'Track fresh produce stock levels, manage categories, and get low-stock alerts before you run out.',
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    color: 'bg-success',
    title: 'Reports & Analytics',
    desc: 'View real-time sales, profit insights, and business performance across all channels.',
  },
  {
    icon: 'ri-store-2-line',
    color: 'bg-warning',
    title: 'Store Management',
    desc: 'Manage staff roles, permissions, and multiple farm locations from one admin panel.',
  },
]

const SERVICES = [
  { icon: 'ri-truck-line', color: 'bg-secondary', title: 'Delivery Management', desc: 'Schedule, track, and optimise every delivery. Know where your drivers are in real time.' },
  { icon: 'ri-bar-chart-3-line', color: 'bg-primary', title: 'Real-Time Reports', desc: 'Track sales, revenue, and performance instantly through powerful admin dashboards.' },
  { icon: 'ri-archive-stack-line', color: 'bg-success', title: 'Inventory Management', desc: 'Batch tracking, FEFO rotation, expiry alerts, and stock adjustments built for perishables.' },
  { icon: 'ri-robot-line', color: 'bg-info', title: 'Chef Bems AI', desc: 'AI-powered recipe suggestions and business insights tailored to your farm produce availability.' },
  { icon: 'ri-heart-3-line', color: 'bg-danger', title: 'Loyalty Points', desc: 'Reward customers automatically. Build retention with points, tiers, and redemption rules.' },
  { icon: 'ri-user-3-line', color: 'bg-primary', title: 'Customer Management', desc: 'Full customer profiles, order history, dietary preferences, and segmented marketing lists.' },
]

const FAQS = [
  { q: 'Is Bems Farms Admin suitable for a farm-to-table business?', a: 'Absolutely. It was built specifically for Bems Farms — tracking fresh produce inventory with batch/expiry management, farm-to-door deliveries, and loyalty rewards for repeat customers.' },
  { q: 'Can staff access only their relevant modules?', a: 'Yes. Role-based permissions let you give superadmin, manager, cashier, or delivery driver access to exactly what they need — nothing more.' },
  { q: 'How does Chef Bems AI work?', a: 'Chef Bems AI analyses your current inventory to suggest recipes, flag what\'s near expiry, and surface business insights so you can make smarter purchasing and menu decisions.' },
  { q: 'Is there a mobile app?', a: 'The admin system is fully responsive and works on tablets and phones. A dedicated mobile app is on the product roadmap.' },
  { q: 'When will the backend API be ready?', a: 'The frontend is available now in demo mode. The Node.js + Express backend is being built in parallel and will plug in seamlessly.' },
]

export default function Landing() {
  const navigate = useNavigate()

  /* Landing page has no sidebar — set body class */
  useEffect(() => {
    document.body.classList.add('sidebar-hidden')
    document.documentElement.setAttribute('data-bs-theme', 'light')
    return () => document.body.classList.remove('sidebar-hidden')
  }, [])

  /* Re-init Lucide icons */
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons()
  })

  return (
    <>
      {/* ═══ NAVBAR ═══ */}
      <nav className="navbar navbar-expand-lg navbar-preview py-1" id="navbarInvoice">
        <div className="container-xl gx-12">
          <a href="#home" className="logos d-flex align-items-center gap-2 text-decoration-none">
            <div
              className="avatar size-8 rounded bg-success text-white d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
              style={{ fontSize: 13 }}
            >BF</div>
            <span className="fw-bold text-white fs-5">Bems Farms</span>
          </a>

          <button
            className="navbar-toggler avatar ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#landingNav"
            aria-controls="landingNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ri-menu-2-line fs-lg"></i>
            <i className="ri-close-line fs-lg"></i>
          </button>

          <div className="collapse navbar-collapse" id="landingNav">
            <ul className="navbar-nav mx-auto px-5">
              {['#home', '#features', '#about-us', '#services', '#faq', '#contact'].map((href) => (
                <li className="nav-item" key={href}>
                  <a className="nav-link" href={href}>
                    {href.replace('#', '').replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ms-2">
            <button className="btn btn-primary started-btn" onClick={() => navigate('/login')}>
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section
        className="hero-section position-relative min-vh-100 overflow-hidden banner-bg bg-body"
        id="home"
      >
        {/* Green gradient overlay instead of video (no video asset needed) */}
        <div
          className="hero-video position-absolute top-0 bottom-0 start-0 end-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10,179,156,0.85) 0%, rgba(64,81,137,0.85) 100%)',
          }}
        />
        {/* Subtle animated circles */}
        <div
          className="position-absolute rounded-circle"
          style={{ width: 500, height: 500, background: 'rgba(255,255,255,0.04)', top: '-10%', right: '-10%' }}
        />
        <div
          className="position-absolute rounded-circle"
          style={{ width: 300, height: 300, background: 'rgba(255,255,255,0.05)', bottom: '5%', left: '-5%' }}
        />

        <div className="container gx-8 position-relative py-56 py-lg-80 mt-5 mt-lg-0">
          <div className="row align-items-center text-center justify-content-center mt-n16">
            <div className="col-11 col-xxl-8 text-white">
              <span className="badge bg-success-subtle text-success fs-sm fw-medium mb-5 px-4 py-2">
                🌿 Farm-to-Table Management Platform
              </span>
              <h1 className="fw-semibold mb-7 display-4">
                Run Bems Farms Smarter — <br className="d-none d-md-block" />
                <span className="text-warning">From Farm to Doorstep</span>
              </h1>
              <p className="fs-16 mb-8 opacity-90">
                Manage inventory, orders, deliveries, and loyal customers from one powerful admin system.
                Built specifically for Bems Farms' farm-to-table operations.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button className="btn btn-primary btn-lg started-btn px-7" onClick={() => navigate('/login')}>
                  Enter Admin <i className="ri-arrow-right-line ms-1"></i>
                </button>
                <a href="#features" className="btn btn-outline-light btn-lg px-7">
                  Explore Features
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURE CARDS (overlapping hero) ═══ */}
      <section className="mt-n28 mt-md-n36 mt-lg-n56 feature-section bg-body" id="features">
        <div className="container gx-8 px-xxl-28">
          <div className="row g-5 gx-xl-7">
            {FEATURES.map(({ icon, color, title, desc }) => (
              <div className="col-12 col-md-6 col-xl-3" key={title}>
                <div className="card h-100 mb-0 text-center feature-card position-relative overflow-hidden">
                  <div className={`size-44 circle-blur blur-2xl rounded-circle ${color} position-absolute top-0 start-0 z-3`}></div>
                  <div className="card-body p-6 d-flex flex-column align-items-center">
                    <div className={`avatar size-14 rounded-3 ${color} text-white d-flex align-items-center justify-content-center mb-7`}>
                      <i className={`${icon} fs-2`}></i>
                    </div>
                    <h5 className="fw-medium mb-4">{title}</h5>
                    <p className="text-muted fs-16 mb-5">{desc}</p>
                    <a href="#services" className="link mt-auto">
                      Learn More <i className="ri-arrow-right-line ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="py-16 py-lg-24 bg-body about-us-section" id="about-us">
        <div className="container gx-8 px-xxl-28">
          <div className="row align-items-center g-5">
            <div className="col-xl-6">
              {/* Illustrative icon grid in place of image */}
              <div className="row g-4 p-4">
                {[
                  { icon: 'ri-leaf-line', color: 'bg-success-subtle text-success', label: 'Fresh Produce' },
                  { icon: 'ri-truck-line', color: 'bg-primary-subtle text-primary', label: 'Deliveries' },
                  { icon: 'ri-shopping-bag-3-line', color: 'bg-warning-subtle text-warning', label: 'Orders' },
                  { icon: 'ri-robot-line', color: 'bg-info-subtle text-info', label: 'Chef Bems AI' },
                  { icon: 'ri-heart-3-line', color: 'bg-danger-subtle text-danger', label: 'Loyalty' },
                  { icon: 'ri-bar-chart-grouped-line', color: 'bg-secondary-subtle text-secondary', label: 'Analytics' },
                ].map(({ icon, color, label }) => (
                  <div className="col-4" key={label}>
                    <div className={`card mb-0 text-center p-3 ${color.split(' ')[0]}`} style={{ border: 'none' }}>
                      <i className={`${icon} ${color} fs-1 mb-2`}></i>
                      <p className="fs-xs fw-medium mb-0 text-muted">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="pt-8 ps-xxl-8">
                <h2 className="display-5 about-title lh-base text-secondary fw-medium mb-6">
                  Everything You Need to Run <span className="text-primary">Bems Farms Smarter</span>
                </h2>
                <p className="text-muted mb-7 pb-7 border-bottom lh-lg fs-17">
                  Bems Farms Admin is a complete farm-to-table management system — from fast billing at the counter
                  to real-time inventory tracking, Chef Bems AI-powered insights, delivery routing, and a loyalty
                  programme that keeps customers coming back for more.
                </p>
                <div className="row justify-content-between gy-5 gx-md-9">
                  <div className="col-md-6">
                    <h5 className="display-5 mb-3 text-secondary">100%</h5>
                    <p className="text-muted lh-lg fs-16">Perishable-aware inventory — FEFO rotation and expiry alerts built in.</p>
                  </div>
                  <div className="col-md-6">
                    <h5 className="display-5 mb-3 text-secondary">Real-time</h5>
                    <p className="text-muted lh-lg fs-16">Live order tracking, stock levels, and delivery status in one view.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COUNTER STRIP ═══ */}
      <section className="py-12 py-md-16 bg-secondary counter-section">
        <div className="container text-white">
          <div className="row gy-16 gy-md-10">
            {[
              { icon: 'ri-store-2-line', count: '1', label: 'Central Hub' },
              { icon: 'ri-shopping-bag-3-line', count: '500+', label: 'Orders / Month' },
              { icon: 'ri-user-3-line', count: '1,200+', label: 'Loyal Customers' },
              { icon: 'ri-truck-line', count: '95%', label: 'On-Time Delivery' },
            ].map(({ icon, count, label }, i) => (
              <div key={label} className={`col-md-6 col-xl-3 ${i < 3 ? 'border-end-md border-white-50' : ''}`}>
                <div className="d-flex justify-content-center align-items-center gap-6">
                  <div className="size-16 bg-body-secondary rounded-circle avatar text-secondary d-flex align-items-center justify-content-center">
                    <i className={`${icon} fs-4 text-white`}></i>
                  </div>
                  <div>
                    <h2 className="fs-1 mb-2">{count}</h2>
                    <p className="fs-17 opacity-75">{label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-16 py-lg-24 bg-body-secondary" id="services">
        <div className="container gx-8 px-xxl-28">
          <div className="row gx-8 justify-content-center text-center mb-12">
            <div className="col-md-10 col-lg-8">
              <div className="d-flex align-items-center justify-content-center mb-3 main-title">
                <div className="w-16 left-line"></div>
                <span className="text-uppercase text-secondary fw-medium sub-title d-block px-4">Our Modules</span>
                <div className="w-16 right-line"></div>
              </div>
              <h2 className="fs-1 mb-0">Everything Bems Farms Needs</h2>
            </div>
          </div>
          <div className="row g-5 g-xl-7">
            {SERVICES.map(({ icon, color, title, desc }) => (
              <div className="col-md-6 col-xl-4" key={title}>
                <div className="card h-100 mb-0 service-card position-relative overflow-hidden">
                  <div className={`size-44 circle-blur blur-2xl rounded-circle ${color} position-absolute bottom-50 start-50 z-3`}></div>
                  <div className="card-body p-7 d-flex gap-6">
                    <div className={`avatar size-12 rounded-3 service-icon ${color} text-white flex-shrink-0`}>
                      <i className={`${icon} fs-4`}></i>
                    </div>
                    <div className="overflow-hidden">
                      <h5 className="fw-medium mb-4 text-truncate">{title}</h5>
                      <p className="text-muted fs-16 line-clamp-3">{desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="choose-us-section py-16 py-lg-24 bg-body" id="why-us">
        <div className="container gx-8 px-xxl-28">
          <div className="bg-body-secondary rounded-3 p-6 p-xl-12">
            <div className="row align-items-center gy-10 gx-lg-5 justify-content-between">
              <div className="col-lg-7 position-relative">
                <span className="text-primary text-uppercase fw-medium fs-16 sub-title d-block mb-5">Why Choose Bems Farms Admin</span>
                <h2 className="fs-1 lh-base fw-medium text-secondary mb-5">
                  Built for Fresh Produce — Not Generic Retail
                </h2>
                <p className="text-muted lh-lg fs-17 mb-8">
                  Most POS systems ignore perishables, expiry tracking, and farm-to-door logistics.
                  Bems Farms Admin was designed from the ground up for a fresh food business —
                  FEFO inventory, delivery zone management, Chef AI, and loyalty all in one place.
                </p>
                <button className="btn btn-primary" onClick={() => navigate('/login')}>
                  Get Started <i data-lucide="arrow-right" className="size-4 ms-1"></i>
                </button>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="card mb-0 p-6">
                  <ul className="list-unstyled mb-0 vstack gap-4">
                    {[
                      'Perishable inventory with FEFO rotation',
                      'Delivery scheduling & driver tracking',
                      'Chef Bems AI recipe & insight engine',
                      'Customer loyalty points & tiers',
                      'Role-based staff access control',
                      'Real-time dashboards & reports',
                    ].map((item) => (
                      <li key={item} className="d-flex align-items-center gap-3">
                        <div className="avatar size-7 rounded-circle bg-success-subtle text-success flex-shrink-0">
                          <i className="ri-check-line"></i>
                        </div>
                        <span className="fs-sm text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 py-lg-24 bg-body-secondary" id="faq">
        <div className="container gx-8 px-xxl-28">
          <div className="row gx-8 justify-content-center text-center mb-12">
            <div className="col-md-10 col-lg-8">
              <div className="d-flex align-items-center justify-content-center mb-3 main-title">
                <div className="w-16 left-line"></div>
                <span className="text-uppercase text-secondary fw-medium sub-title d-block px-4">FAQ</span>
                <div className="w-16 right-line"></div>
              </div>
              <h2 className="fs-1 mb-0">Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="landingFaq">
                {FAQS.map(({ q, a }, i) => (
                  <div className="accordion-item border mb-3 rounded-3 overflow-hidden" key={i}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button fw-medium ${i !== 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${i}`}
                        aria-expanded={i === 0}
                        aria-controls={`faq${i}`}
                      >
                        {q}
                      </button>
                    </h2>
                    <div
                      id={`faq${i}`}
                      className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                      data-bs-parent="#landingFaq"
                    >
                      <div className="accordion-body text-muted">{a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section
        className="py-16 py-lg-24 text-white text-center"
        id="contact"
        style={{ background: 'linear-gradient(135deg, #0ab39c 0%, #405189 100%)' }}
      >
        <div className="container">
          <h2 className="fw-bold mb-5 display-5">Ready to Manage Bems Farms?</h2>
          <p className="fs-17 opacity-90 mb-8 mx-auto" style={{ maxWidth: 560 }}>
            Sign in to the admin portal and start managing orders, inventory, and deliveries today.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button className="btn btn-light btn-lg px-7 fw-semibold" onClick={() => navigate('/login')}>
              <i className="ri-login-box-line me-2"></i>Sign In to Admin
            </button>
            <a href="mailto:hello@bemsfarms.com" className="btn btn-outline-light btn-lg px-7">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <div className="main-footer">
        <div className="w-100">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <ul className="d-flex align-items-center mb-0 list-unstyled gap-4">
                <li>
                  <a href="#home" className="fw-medium link link-custom-primary">Home</a>
                </li>
                <li>
                  <a href="#features" className="fw-medium link link-custom-primary">Features</a>
                </li>
                <li>
                  <a href="#services" className="fw-medium link link-custom-primary">Services</a>
                </li>
                <li>
                  <a href="mailto:hello@bemsfarms.com" className="fw-medium link link-custom-primary">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 text-muted text-center text-lg-end">
              &copy; {new Date().getFullYear()} Bems Farms. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
