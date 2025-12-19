import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabase'
import { Logo } from '../components/Navbar'

function Admin() {
    const [activeTab, setActiveTab] = useState('projects')
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        // Page load pe check karo user logged in hai ya nahi
        checkUser()
    }, [])

    function checkUser() {
        // Local storage se user ka data nikal rahe hain
        const adminUser = localStorage.getItem('adminUser')
        if (!adminUser) {
            // Agar data nahi hai toh login pe bhej do
            navigate('/login')
        } else {
            setUser(JSON.parse(adminUser))
        }
    }

    function handleLogout() {
        // Logout ke waqt data hata do
        localStorage.removeItem('adminUser')
        navigate('/login')
    }

    const navItems = [
        { id: 'projects', label: 'Projects', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> },
        { id: 'clients', label: 'Clients', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
        { id: 'contacts', label: 'Inquiries', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
        { id: 'newsletter', label: 'Newsletter', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><path d="M4 10h16"></path><path d="M4 14h16"></path><path d="M4 18h16"></path></svg> },
    ]

    return (
        <div className="admin-container" style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
            {/* Admin Sidebar */}
            <aside className="admin-sidebar glass" style={{ width: '280px', height: '100vh', position: 'fixed', left: 0, top: 0, borderRadius: 0, borderRight: '1px solid var(--glass-border)', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <Link to="/" className="nav-logo" style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <Logo />
                        ConsultPro
                    </Link>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Operations Portal</p>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '0.8rem 1.2rem',
                                border: 'none',
                                borderRadius: '12px',
                                background: activeTab === item.id ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
                                color: activeTab === item.id ? 'white' : 'var(--text-dark)',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                fontWeight: '600',
                                textAlign: 'left',
                                boxShadow: activeTab === item.id ? '0 10px 15px -3px rgba(37, 99, 235, 0.3)' : 'none'
                            }}
                        >
                            <span style={{ opacity: activeTab === item.id ? 1 : 0.6 }}>{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                    <div className="glass" style={{ padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>👤</div>
                            <div style={{ overflow: 'hidden' }}>
                                <p style={{ fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.email?.split('@')[0]}</p>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Administrator</p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #fee2e2', background: '#fff1f2', color: '#991b1b', cursor: 'pointer', fontWeight: '600', transition: 'var(--transition)' }}
                        onMouseOver={(e) => e.target.style.background = '#ffe4e6'}
                        onMouseOut={(e) => e.target.style.background = '#fff1f2'}
                    >
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main style={{ marginLeft: '280px', flex: 1, padding: '3rem', minWidth: 0 }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.2rem', color: 'var(--text-dark)', letterSpacing: '-0.5px' }}>
                            {navItems.find(i => i.id === activeTab)?.label}
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Management Dashboard & Integration</p>
                    </div>
                </header>

                <div className="admin-content-card glass" style={{ padding: '2.5rem', minHeight: '80vh', background: 'white', borderRadius: '24px' }}>
                    {activeTab === 'projects' && <ProjectsManager />}
                    {activeTab === 'clients' && <ClientsManager />}
                    {activeTab === 'contacts' && <ContactsViewer />}
                    {activeTab === 'newsletter' && <NewsletterViewer />}
                </div>
            </main>
        </div>
    )
}

// Sub-components with updated styles
function ProjectsManager() {
    const [projects, setProjects] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [editingProject, setEditingProject] = useState(null)
    const [formData, setFormData] = useState({ image_url: '', name: '', description: '' })

    useEffect(() => { fetchProjects() }, [])

    async function fetchProjects() {
        const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
        if (data) setProjects(data)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (editingProject) {
            await supabase.from('projects').update(formData).eq('id', editingProject.id)
        } else {
            await supabase.from('projects').insert([formData])
        }
        setShowModal(false)
        setFormData({ image_url: '', name: '', description: '' })
        setEditingProject(null)
        fetchProjects()
    }

    async function handleDelete(id) {
        if (confirm('Delete this project?')) {
            await supabase.from('projects').delete().eq('id', id)
            fetchProjects()
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.2rem' }}>Total Projects: {projects.length}</h3>
                <button className="btn btn-primary" onClick={() => setShowModal(true)} style={{ boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)' }}>
                    + New Project
                </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.8rem' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            <th style={{ padding: '0 1.5rem 1rem' }}>Display</th>
                            <th>Identity</th>
                            <th>Description</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(project => (
                            <tr key={project.id} style={{ background: '#f8fafc', transition: 'var(--transition)' }}>
                                <td style={{ padding: '1rem 1.5rem', borderRadius: '16px 0 0 16px' }}>
                                    <img src={project.image_url} alt="" style={{ width: '80px', height: '55px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }} />
                                </td>
                                <td style={{ fontWeight: '700', color: 'var(--text-dark)', fontSize: '1rem' }}>{project.name}</td>
                                <td style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '300px' }}>{project.description.slice(0, 80)}...</td>
                                <td style={{ padding: '1rem 1.5rem', borderRadius: '0 16px 16px 0' }}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button onClick={() => { setEditingProject(project); setFormData(project); setShowModal(true) }} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--primary)', fontWeight: '600' }}>Edit</button>
                                        <button onClick={() => handleDelete(project.id)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#f43f5e', fontWeight: '600' }}>Remove</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal glass" style={{ padding: '3.5rem', background: 'white', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>{editingProject ? 'Modify Project' : 'Register New Project'}</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.6rem', display: 'block' }}>Media Asset URL</label>
                                <input type="text" value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} placeholder="https://unsplash.com/..." required />
                            </div>
                            <div className="form-group">
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.6rem', display: 'block' }}>Project Title</label>
                                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Project Alpha" required />
                            </div>
                            <div className="form-group">
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.6rem', display: 'block' }}>Overview & Scope</label>
                                <textarea style={{ minHeight: '120px' }} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Detailed description of the project achievements..." required />
                            </div>
                            <div className="modal-buttons" style={{ display: 'flex', gap: '1.2rem', marginTop: '2.5rem' }}>
                                <button type="button" className="btn" style={{ flex: 1, background: '#f1f5f9', color: '#64748b' }} onClick={() => { setShowModal(false); setEditingProject(null) }}>Discard</button>
                                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>{editingProject ? 'Commit Changes' : 'Initialize Project'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

function ClientsManager() {
    const [clients, setClients] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [editingClient, setEditingClient] = useState(null)
    const [formData, setFormData] = useState({ image_url: '', name: '', description: '', designation: '' })

    useEffect(() => { fetchClients() }, [])
    async function fetchClients() {
        const { data } = await supabase.from('clients').select('*').order('created_at', { ascending: false })
        if (data) setClients(data)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (editingClient) {
            await supabase.from('clients').update(formData).eq('id', editingClient.id)
        } else {
            await supabase.from('clients').insert([formData])
        }
        setShowModal(false); setEditingClient(null); fetchClients()
    }

    async function handleDelete(id) {
        if (confirm('Delete this endorsement?')) {
            await supabase.from('clients').delete().eq('id', id)
            fetchClients()
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.2rem' }}>Endorsing Partners: {clients.length}</h3>
                <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                    + New Endorsement
                </button>
            </div>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.8rem' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                            <th style={{ padding: '0 1.5rem 1rem' }}>Partner</th>
                            <th>Position</th>
                            <th>Internal Statement</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <tr key={client.id} style={{ background: '#f8fafc' }}>
                                <td style={{ padding: '1rem 1.5rem', borderRadius: '16px 0 0 16px', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                                    <img src={client.image_url} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} />
                                    <span style={{ fontWeight: '700', color: 'var(--text-dark)' }}>{client.name}</span>
                                </td>
                                <td style={{ fontWeight: '500', color: 'var(--primary)', fontSize: '0.9rem' }}>{client.designation}</td>
                                <td style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>"{client.description.slice(0, 60)}..."</td>
                                <td style={{ padding: '1rem 1.5rem', borderRadius: '0 16px 16px 0' }}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button onClick={() => { setEditingClient(client); setFormData(client); setShowModal(true) }} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--primary)', fontWeight: '600' }}>Edit</button>
                                        <button onClick={() => handleDelete(client.id)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#f43f5e', fontWeight: '600' }}>Remove</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal glass" style={{ padding: '3.5rem', background: 'white' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>{editingClient ? 'Edit Partner' : 'New Strategic Partner'}</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group"><label>Avatar URL</label><input type="text" value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} required /></div>
                            <div className="form-group"><label>Full Legal Name</label><input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /></div>
                            <div className="form-group"><label>Corporate Standing</label><input type="text" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} placeholder="Managing Director" required /></div>
                            <div className="form-group"><label>Testimonial / Insight</label><textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required /></div>
                            <div style={{ display: 'flex', gap: '1.2rem', marginTop: '2.5rem' }}>
                                <button type="button" className="btn" style={{ flex: 1, background: '#f1f5f9' }} onClick={() => setShowModal(false)}>Discard</button>
                                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Secure Endorsement</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

function ContactsViewer() {
    const [contacts, setContacts] = useState([])
    useEffect(() => { fetchContacts() }, [])
    async function fetchContacts() {
        const { data } = await supabase.from('contact_forms').select('*').order('submitted_at', { ascending: false })
        if (data) setContacts(data)
    }
    return (
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.8rem' }}>
                <thead>
                    <tr style={{ textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                        <th style={{ padding: '0 1.5rem 1rem' }}>Sourcing Identity</th>
                        <th>Channel Details</th>
                        <th>Region</th>
                        <th>Timeline</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(c => (
                        <tr key={c.id} style={{ background: '#f8fafc' }}>
                            <td style={{ padding: '1.2rem 1.5rem', fontWeight: '700', borderRadius: '16px 0 0 16px', color: 'var(--text-dark)' }}>{c.full_name}</td>
                            <td>
                                <div style={{ color: 'var(--primary)', fontWeight: '500' }}>{c.email}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{c.mobile_number}</div>
                            </td>
                            <td style={{ fontWeight: '500' }}>{c.city}</td>
                            <td style={{ padding: '1.2rem 1.5rem', borderRadius: '0 16px 16px 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{new Date(c.submitted_at).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function NewsletterViewer() {
    const [subscribers, setSubscribers] = useState([])
    useEffect(() => { fetchSubscribers() }, [])
    async function fetchSubscribers() {
        const { data } = await supabase.from('newsletter_subscriptions').select('*').order('subscribed_at', { ascending: false })
        if (data) setSubscribers(data)
    }
    return (
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.8rem' }}>
                <thead>
                    <tr style={{ textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                        <th style={{ padding: '0 1.5rem 1rem' }}>Active Subscriber Email</th>
                        <th>Subscription Sequence</th>
                    </tr>
                </thead>
                <tbody>
                    {subscribers.map(s => (
                        <tr key={s.id} style={{ background: '#f8fafc' }}>
                            <td style={{ padding: '1.5rem', fontWeight: '700', borderRadius: '16px 0 0 16px', color: 'var(--primary)' }}>{s.email}</td>
                            <td style={{ padding: '1.5rem', borderRadius: '0 16px 16px 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{new Date(s.subscribed_at).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin
