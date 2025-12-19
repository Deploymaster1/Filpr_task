import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabase'
import { Logo } from '../components/Navbar'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault()
        setError('')

        const { data, error: queryError } = await supabase
            .from('admin_users')
            .select('*')
            .eq('email', email)
            .eq('password', password)
            .single()

        if (queryError || !data) {
            setError('Invalid credentials. Please check your email and password.')
        } else {
            localStorage.setItem('adminUser', JSON.stringify(data))
            navigate('/admin')
        }
    }

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="login-container" style={{ flex: 1, backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '1rem' }}>
                <div className="hero-overlay" style={{ background: 'rgba(248, 250, 252, 0.4)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
                <div className="login-box glass" style={{ position: 'relative', zIndex: 1, padding: '2.5rem', maxWidth: '420px', width: '100%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                        <Link to="/" className="nav-logo" style={{ fontSize: '1.8rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <Logo />
                            <span>ConsultPro</span>
                        </Link>
                        <h2 style={{ fontSize: '1.25rem', color: 'var(--text-dark)' }}>Admin Portal</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Access your management dashboard</p>
                    </div>

                    <div style={{ background: 'rgba(37, 99, 235, 0.06)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid rgba(37, 99, 235, 0.12)' }}>
                        <p style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '0.4rem' }}>Demo Access:</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.2rem', flexDirection: 'column' }}>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-dark)' }}>Id: <strong>admin@example.com</strong></p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-dark)' }}>Pass: <strong>admin123</strong></p>
                        </div>
                    </div>

                    {error && <div className="message error" style={{ padding: '0.7rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.85rem' }}>{error}</div>}

                    <form onSubmit={handleLogin}>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <label style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>Email</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ padding: '0.8rem' }}
                            />
                        </div>
                        <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                            <label style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ padding: '0.8rem' }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem', fontWeight: '600' }}>
                            Secure Login
                        </button>
                    </form>

                    <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                        <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500' }}>← Back to Website</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
