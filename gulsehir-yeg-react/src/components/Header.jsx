import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { path: '/', label: 'Anasayfa' },
        { path: '/about', label: 'Kurumsal' },
        { path: '/leader', label: 'LEADER Yaklaşımı' },
        { path: '/yeg-area', label: 'YEG Alanı' },
        { path: '/district', label: 'Gülşehir' },
        { path: '/strategy', label: 'Stratejimiz (YKS)' },
        { path: '/projects', label: 'Projeler' },
        { path: '/contact', label: 'İletişim' }
    ];

    return (
        <header>
            <div className="container branding-area">
                <Link to="/" className="logo-link">
                    <img src="/Users/suha/Desktop/Is/Resimler/logo.jpg" alt="Gülşehir YEG Logo" className="main-logo" />
                </Link>
                <img src="/Users/suha/Desktop/Is/Resimler/tkdk.png" alt="TKDK Logo" className="tkdk-logo" />
            </div>

            <div className="main-navigation">
                <div className="container navbar">
                    <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={isActive(item.path) ? 'active' : ''}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}
