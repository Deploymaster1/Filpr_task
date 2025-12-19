import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { Link } from 'react-router-dom'

function Projects() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProjects()
    }, [])

    async function fetchProjects() {
        const { data } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false })

        if (data) setProjects(data)
        setLoading(false)
    }

    return (
        <div className="projects-page">
            <section className="hero" style={{ minHeight: '50vh', backgroundImage: 'url("https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&q=80&w=2000")' }}>
                <div className="hero-overlay" style={{ background: 'rgba(255, 255, 255, 0.4)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 style={{ color: 'var(--text-dark)', fontSize: '3.5rem', marginBottom: '1rem' }}>Our <span style={{ color: 'var(--primary)' }}>Portfolios</span></h1>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.8 }}>Showcasing our completed journeys and ongoing commitments to excellence across various industries.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Delivering Value Through <span style={{ color: 'var(--primary)' }}>Innovation</span></h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>We don't just complete projects; we build legacies. Our approach combines data-driven insights with creative problem-solving to ensure every milestone is a success.</p>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', gap: '1.5rem' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <h4 style={{ fontSize: '2rem', color: 'var(--primary)' }}>150+</h4>
                                    <p style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Completed</p>
                                </div>
                                <div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '1.5rem', textAlign: 'center' }}>
                                    <h4 style={{ fontSize: '2rem', color: 'var(--primary)' }}>98%</h4>
                                    <p style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Client ROI</p>
                                </div>
                                <div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '1.5rem', textAlign: 'center' }}>
                                    <h4 style={{ fontSize: '2rem', color: 'var(--primary)' }}>24/7</h4>
                                    <p style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Support</p>
                                </div>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Work" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                    </div>

                    {loading ? (
                        <p style={{ textAlign: 'center' }}>Loading projects...</p>
                    ) : (
                        <div className="card-grid">
                            {projects.length > 0 ? projects.map(project => (
                                <div key={project.id} className="glass glass-card" style={{ overflow: 'hidden' }}>
                                    <div style={{ overflow: 'hidden', height: '240px' }}>
                                        <img src={project.image_url} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                                    </div>
                                    <div className="card-content" style={{ padding: '2rem' }}>
                                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{project.name}</h3>
                                        <p style={{ lineHeight: '1.5', marginBottom: '1.5rem' }}>{project.description}</p>
                                        <button className="btn btn-primary" style={{ width: '100%' }}>Explore Case Study</button>
                                    </div>
                                </div>
                            )) : (
                                <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem', background: 'rgba(0,0,0,0.02)', borderRadius: '16px' }}>No projects available at the moment. Please check back later.</p>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Branding Banner */}
            <section className="section" style={{ background: '#f8fafc', overflow: 'hidden' }}>
                <div className="container">
                    <div className="glass" style={{ padding: '4rem', borderRadius: '32px', textAlign: 'center', background: 'white' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Interested in working with us?</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Let's turn your vision into a reality with our expert team.</p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Start a Conversation</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
