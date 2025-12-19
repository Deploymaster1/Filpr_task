import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function AppContent() {
    const location = useLocation()
    // Agar admin page ya login page hai toh navbar/footer nahi dikhana hai
    const isAdminPage = location.pathname.startsWith('/admin') || location.pathname === '/login'

    return (
        <div className="app-wrapper">
            {!isAdminPage && <Navbar />}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </main>
            {!isAdminPage && <Footer />}
        </div>
    )
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}

export default App
