import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import api from '../lib/api'

const AuthContext = createContext(null)

// ── DEV BYPASS ────────────────────────────────────────────────────
// Remove this block once the real Express backend is running.
const DEV_USERS = {
  'admin@bemsfarms.com': {
    password: 'admin123',
    user: { id: 'dev-1', first_name: 'Admin', last_name: 'Seun', email: 'admin@bemsfarms.com', role: 'superadmin' },
  },
  'staff@bemsfarms.com': {
    password: 'staff123',
    user: { id: 'dev-2', first_name: 'Kemi', last_name: 'Balogun', email: 'staff@bemsfarms.com', role: 'store_staff' },
  },
}
const DEV_MODE = import.meta.env.VITE_API_URL?.includes('localhost') || !import.meta.env.VITE_API_URL
// ─────────────────────────────────────────────────────────────────

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('bems_user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })
  const [loading, setLoading] = useState(true)

  // Verify token on mount
  useEffect(() => {
    const token = localStorage.getItem('bems_token')
    if (!token) { setLoading(false); return }

    // Dev mode: token is a dev sentinel — just restore user from storage
    if (DEV_MODE && token === 'dev-token') {
      setLoading(false)
      return
    }

    api.get('/auth/me')
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem('bems_token')
        localStorage.removeItem('bems_user')
        setUser(null)
      })
      .finally(() => setLoading(false))
  }, [])

  const login = useCallback(async (email, password) => {
    // ── Dev bypass ──────────────────────────────────────────────
    if (DEV_MODE) {
      const match = DEV_USERS[email.toLowerCase()]
      if (match && match.password === password) {
        localStorage.setItem('bems_token', 'dev-token')
        localStorage.setItem('bems_user', JSON.stringify(match.user))
        setUser(match.user)
        return match.user
      }
      throw { response: { data: { message: 'Invalid credentials (dev mode)' } } }
    }
    // ── Production ──────────────────────────────────────────────
    const res = await api.post('/auth/login', { email, password })
    const { token, user: userData } = res.data
    localStorage.setItem('bems_token', token)
    localStorage.setItem('bems_user', JSON.stringify(userData))
    setUser(userData)
    return userData
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('bems_token')
    localStorage.removeItem('bems_user')
    setUser(null)
  }, [])

  const hasRole = useCallback(
    (...roles) => user && roles.includes(user.role),
    [user]
  )

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, hasRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
