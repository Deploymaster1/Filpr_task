import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabase'
import { Logo } from '../components/Navbar'

function Home() {
    const [formData, setFormData] = useState({ full_name: '', email: '', mobile_number: '', city: '' })
    const [status, setStatus] = useState('')

    // Form submit handle karne ke liye function
    const handleEnquiry = async (e) => {
        e.preventDefault()
        setStatus('Sending...')
        // Supabase mein data insert kar rahe hain
        const { error } = await supabase.from('contact_forms').insert([formData])
        if (error) {
            setStatus('Error sending enquiry.')
        } else {
            setStatus('Success! We will contact you soon.')
            // Form reset kar dena successful hone par
            setFormData({ full_name: '', email: '', mobile_number: '', city: '' })
        }
        // 4 seconds baad message hata dena
        setTimeout(() => setStatus(''), 4000)
    }

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000")' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1>Consultation, Sales & <span style={{ color: 'var(--primary)' }}>Marketing</span></h1>
                        <p>Elevate your business with data-driven strategies and premium consultation services tailored for the modern enterprise.</p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link to="/projects" className="btn btn-primary">View Our Work</Link>
                            <Link to="/contact" className="btn glass">Learn More</Link>
                        </div>
                    </div>

                    <div className="hero-form glass">
                        <h3>Get a Free Quote</h3>
                        {status && <div className={`message ${status.includes('Success') ? 'success' : 'error'}`} style={{ padding: '0.8rem', marginBottom: '1rem', borderRadius: '8px', textAlign: 'center' }}>{status}</div>}
                        <form onSubmit={handleEnquiry}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={formData.full_name}
                                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    value={formData.mobile_number}
                                    onChange={(e) => setFormData({ ...formData, mobile_number: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Get Quick Quote</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Branding */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Why Choose Us?</h2>
                    <div className="features-grid">
                        <div className="feature-card glass">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500" alt="ROI" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }} />
                            <h3>Potential ROI</h3>
                            <p>We focus on high-impact strategies that deliver measurable results and sustainable growth for our clients.</p>
                        </div>
                        <div className="feature-card glass">
                            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=500" alt="Design" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }} />
                            <h3>Design Excellence</h3>
                            <p>Our creative team ensures your brand stands out with modern, premium aesthetics and functional design.</p>
                        </div>
                        <div className="feature-card glass">
                            <img src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=500" alt="Marketing" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }} />
                            <h3>Marketing Mastery</h3>
                            <p>From digital campaigns to traditional outreach, we optimize your presence across all channels.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotional Banner */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Ready to Scale Your Business?</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2.5rem' }}>Join 500+ successful enterprises that trust ConsultPro for their growth journey.</p>
                    <Link to="/contact" className="btn btn-accent" style={{ background: 'white', color: 'var(--primary)', fontSize: '1.1rem' }}>Contact Us Today</Link>
                </div>
            </section>
        </div>
    )
}

export default Home
