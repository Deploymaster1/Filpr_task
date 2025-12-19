import { useState } from 'react'
import { supabase } from '../supabase'

function Contact() {
    const [formData, setFormData] = useState({ full_name: '', email: '', mobile_number: '', city: '' })
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('Sending...')
        const { error } = await supabase.from('contact_forms').insert([formData])
        if (error) {
            setStatus('Error sending message.')
        } else {
            setStatus('Success! Message sent.')
            setFormData({ full_name: '', email: '', mobile_number: '', city: '' })
        }
        setTimeout(() => setStatus(''), 4000)
    }

    return (
        <div className="contact-page">
            <section className="hero" style={{ minHeight: '50vh', backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000")' }}>
                <div className="hero-overlay" style={{ background: 'rgba(255, 255, 255, 0.4)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 style={{ color: 'var(--text-dark)', fontSize: '3.5rem', marginBottom: '1rem' }}>Contact <span style={{ color: 'var(--primary)' }}>Us</span></h1>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.8 }}>We're here to help you achieve your business goals. Reach out to us for any inquiries or consultations.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem' }}>
                        <div className="contact-info-box">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Let's Start Your <span style={{ color: 'var(--primary)' }}>Success</span> Story</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions. Fill out the form and we'll get back to you within 24 hours.</p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                                <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        Office
                                    </h4>
                                    <p style={{ fontSize: '0.9rem' }}>123 Business Park, Office 12, Vijay Nagar, Indore M.P.</p>
                                </div>

                                <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        Email
                                    </h4>
                                    <p style={{ fontSize: '0.9rem' }}>contact@consultpro.com</p>
                                </div>

                                <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        Phone
                                    </h4>
                                    <p style={{ fontSize: '0.9rem' }}>+91 12345-67890</p>
                                </div>

                                <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        Hours
                                    </h4>
                                    <p style={{ fontSize: '0.9rem' }}>Mon - Fri: 9am - 6pm</p>
                                </div>
                            </div>

                            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" alt="Office" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }} />
                        </div>

                        <div className="glass" style={{ padding: '4rem', borderRadius: '32px', height: 'fit-content', position: 'sticky', top: '120px' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Send Us a Message</h3>
                            {status && <p style={{ padding: '1rem', background: status.includes('Success') ? '#d1fae5' : '#fee2e2', color: status.includes('Success') ? '#065f46' : '#991b1b', borderRadius: '12px', marginBottom: '2rem', textAlign: 'center', fontWeight: '500' }}>{status}</p>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Full Name</label>
                                    <input
                                        type="text"
                                        value={formData.full_name}
                                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Email Address</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Mobile Number</label>
                                    <input
                                        type="tel"
                                        value={formData.mobile_number}
                                        onChange={(e) => setFormData({ ...formData, mobile_number: e.target.value })}
                                        placeholder="+1 (555) 000-0000"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>City</label>
                                    <input
                                        type="text"
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        placeholder="New York"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', padding: '1.2rem', fontSize: '1.1rem', fontWeight: '700' }}>Send Inquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
