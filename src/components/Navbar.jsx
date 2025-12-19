import { Link } from 'react-router-dom'

export const Logo = () => (
    <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="var(--primary)" />
            <path d="M10 22L16 10L22 22H10Z" fill="white" />
            <circle cx="21" cy="11" r="4" fill="var(--accent)" />
        </svg>
    </div>
)

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Logo />
                <span>ConsultPro</span>
            </Link>
            {/* Yeh navigation links hain jo har page pe dikhenge */}
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* Admin login button thoda alag dikhna chahiye */}
                <li><Link to="/login" className="nav-cta">Admin Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
