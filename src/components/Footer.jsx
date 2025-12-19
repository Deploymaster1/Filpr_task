import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabase'
import { Logo } from './Navbar'

function Footer() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('')

    // Newsletter subscribe karne ke liye function
    const handleSubscribe = async (e) => {
        e.preventDefault()
        setStatus('Subscribing...')
        // Supabase mein email insert
        const { error } = await supabase.from('newsletter_subscriptions').insert([{ email }])
        if (error) {
            setStatus('Error or already subscribed.')
        } else {
            setStatus('Success! Thank you.')
            // Successful hone par input khaali kar do
            setEmail('')
        }
        setTimeout(() => setStatus(''), 4000)
    }

    return (
        <footer className="footer" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600")' }}>
            <div className="footer-overlay" style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.85))' }}></div> {/* Reduced overlay opacity for clarity */}

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* Newsletter Bar at the Top */}
                <div className="newsletter-bar glass" style={{ padding: '2rem 3rem', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.1)' }}>
                    <div style={{ maxWidth: '450px' }}>
                        <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Stay Ahead of the Curve</h3>
                        <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Subscribe to our newsletter for exclusive industry insights and strategic updates.</p>
                    </div>
                    <form className="newsletter-form" onSubmit={handleSubscribe} style={{ flex: 1, maxWidth: '500px', marginLeft: '2rem', display: 'flex', gap: '1rem' }}>
                        <input
                            type="email"
                            placeholder="Your professional email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ padding: '1rem 1.5rem', fontSize: '1rem' }}
                        />
                        <button type="submit" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Subscribe Now</button>
                    </form>
                    {status && <p style={{ position: 'absolute', bottom: '0.5rem', right: '3rem', fontSize: '0.85rem', color: status.includes('Success') ? '#10b981' : '#f43f5e' }}>{status}</p>}
                </div>

                <div className="footer-content" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr' }}>
                    <div className="footer-column">
                        <Link to="/" className="nav-logo" style={{ color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Logo />
                            <span>ConsultPro</span>
                        </Link>
                        <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>Empowering businesses through cutting-edge consultation and strategic sales-focused marketing solutions.</p>
                    </div>

                    <div className="footer-column">
                        <h4 style={{ color: 'white' }}>Expertise</h4>
                        <ul className="footer-links">
                            <li><Link to="/projects">Strategy</Link></li>
                            <li><Link to="/projects">Consulting</Link></li>
                            <li><Link to="/projects">Marketing</Link></li>
                            <li><Link to="/projects">Sales ROI</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 style={{ color: 'white' }}>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/projects">Portfolios</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 style={{ color: 'white' }}>Connect</h4>
                        <ul className="footer-links">
                            <li><a href="https://linkedin.com">LinkedIn</a></li>
                            <li><a href="https://twitter.com">Twitter</a></li>
                            <li><a href="https://instagram.com">Instagram</a></li>
                            <li><a href="https://facebook.com">Facebook</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom" style={{ marginTop: '3rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ color: '#64748b' }}>&copy; 2025 ConsultPro Global. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
