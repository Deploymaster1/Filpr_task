import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { Link } from 'react-router-dom'

function Testimonials() {
    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchClients()
    }, [])

    async function fetchClients() {
        const { data } = await supabase
            .from('clients')
            .select('*')
            .order('created_at', { ascending: false })

        if (data) setClients(data)
        setLoading(false)
    }

    return (
        <div className="testimonials-page">
            <section className="hero" style={{ minHeight: '50vh', backgroundImage: 'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000")' }}>
                <div className="hero-overlay" style={{ background: 'rgba(255, 255, 255, 0.4)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 style={{ color: 'var(--text-dark)', fontSize: '3.5rem', marginBottom: '1rem' }}>Client <span style={{ color: 'var(--primary)' }}>Voices</span></h1>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.8 }}>Hear from the partners and brands who have transformed their business through our collaboration.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', marginBottom: '8rem' }}>
                        <div style={{ position: 'relative' }}>
                            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" alt="Meetings" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                            <div className="glass" style={{ position: 'absolute', bottom: '-30px', right: '-30px', padding: '2rem', borderRadius: '16px', maxWidth: '250px' }}>
                                <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.3rem' }}>500+</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Successful client integrations worldwide.</p>
                            </div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>A Partnership Built on <span style={{ color: 'var(--primary)' }}>Trust</span></h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>We believe in long-term relationships. Our clients aren't just names in a database; they are our partners in growth. We align our goals with theirs to ensure mutual success.</p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>From startups to Fortune 500 companies, our strategies are tailored to meet individual needs and exceed expectations.</p>
                            <Link to="/contact" className="btn btn-primary">Join Our Client Network</Link>
                        </div>
                    </div>

                    <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.2rem' }}>What They Say <span style={{ color: 'var(--primary)' }}>About Us</span></h2>

                    {loading ? (
                        <p style={{ textAlign: 'center' }}>Loading testimonials...</p>
                    ) : (
                        <div className="card-grid">
                            {clients.length > 0 ? clients.map(client => (
                                <div key={client.id} className="glass testimonial-card" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <div style={{ position: 'absolute', top: '20px', right: '30px', fontSize: '4rem', color: 'var(--primary)', opacity: 0.1, fontFamily: 'serif' }}>"</div>
                                    <div className="client-meta">
                                        <img src={client.image_url} alt={client.name} />
                                        <div className="client-info">
                                            <h4 style={{ fontWeight: '700' }}>{client.name}</h4>
                                            <p>{client.designation}</p>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--text-dark)', lineHeight: '1.7', opacity: 0.8 }}>
                                        "{client.description}"
                                    </p>
                                </div>
                            )) : (
                                <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem' }}>Our clients are busy being successful! Testimonials coming soon.</p>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Logo Cloud Placeholder */}
            <section className="section bg-white" style={{ borderTop: '1px solid #f1f5f9' }}>
                <div className="container">
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Trusted by Industry Leaders</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', opacity: 0.4, filter: 'grayscale(1)' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Logo" style={{ height: '30px' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Logo" style={{ height: '30px' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo" style={{ height: '30px' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Apple_logo_black.svg" alt="Logo" style={{ height: '30px' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="Logo" style={{ height: '30px' }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
