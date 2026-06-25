import React, { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import logoWhite from '../assets/LogoWhite.png';

export default function Header() {
    const { lang, setLang, t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLang = (e) => {
        e.preventDefault();
        setLang(lang === 'pt' ? 'en' : 'pt');
        setMenuOpen(false);
    };

    const navStyle = {
        color: scrolled ? 'var(--text-primary)' : '#fff',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '0.95rem',
        whiteSpace: 'nowrap',
        transition: 'color 0.2s',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        fontFamily: 'inherit'
    };

    const goToSection = (id) => {
        navigate('/');
        setMenuOpen(false);
        window.setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
    };

    const goToRoute = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    return (
        <header style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%',
            zIndex: 1000,
            padding: scrolled ? '15px 0' : '30px 0',
            background: scrolled ? 'var(--bg-nav)' : 'transparent',
            boxShadow: scrolled ? 'var(--shadow)' : 'none',
            transition: 'all 0.3s ease',
            color: scrolled ? 'var(--text-primary)' : '#fff',
            backdropFilter: scrolled ? 'blur(14px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent'
        }}>
            <div className={`container header-container ${menuOpen ? 'open' : ''}`} style={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '0 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}>
                {/* Logo on the left */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                        width: '52px',
                        height: '52px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '10px',
                        background: scrolled ? 'var(--primary)' : 'transparent',
                        padding: scrolled ? '6px' : '0',
                        transition: 'all 0.3s ease',
                        filter: scrolled ? 'none' : 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.4))'
                    }}>
                        <img
                            src={logoWhite}
                            alt="Porto do Soyo, EP"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>

                <button
                    className="mobile-menu-toggle"
                    type="button"
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Right Navigation */}
                <nav className="site-nav" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ul className="site-nav-list" style={{ display: 'flex', gap: '25px', listStyle: 'none', margin: 0, padding: 0 }}>
                        <li><button type="button" className="nav-action-link" onClick={() => goToSection('inicio')} style={navStyle}>{t('f_link_home')}</button></li>
                        <li><button type="button" className="nav-action-link" onClick={() => goToSection('servicos')} style={navStyle}>{t('f_link_serv')}</button></li>
                        <li><button type="button" className="nav-action-link" onClick={() => goToSection('quem-somos')} style={navStyle}>{t('f_link_about')}</button></li>
                        <li><button type="button" className="nav-action-link" onClick={() => goToRoute('/noticias')} style={navStyle}>{lang === 'pt' ? 'Notícias' : 'News'}</button></li>
                        <li><button type="button" className="nav-action-link" onClick={() => goToRoute('/navios-atracados')} style={navStyle}>{lang === 'pt' ? 'Navios Atracados' : 'Berthed Vessels'}</button></li>
                        <li><button type="button" className="nav-action-link" onClick={() => goToSection('terminais')} style={navStyle}>{t('f_link_term')}</button></li>
                        <li><button type="button" className="nav-action-link" onClick={() => goToSection('legislacao')} style={navStyle}>{t('f_link_leg')}</button></li>
                        <li><button type="button" className="nav-action-link" onClick={() => goToSection('contactos')} style={navStyle}>{t('f_link_cont')}</button></li>
                        <li><button type="button" className="nav-action-link" onClick={toggleLang} style={{ ...navStyle, fontWeight: '800' }}>{lang === 'pt' ? 'EN' : 'PT'}</button></li>
                        <li>
                            <button
                                type="button"
                                className="theme-toggle-btn"
                                onClick={() => {
                                    toggleTheme();
                                    setMenuOpen(false);
                                }}
                                style={{
                                    color: scrolled ? 'var(--text-primary)' : '#fff',
                                    borderColor: scrolled ? 'var(--border-color)' : 'rgba(255, 255, 255, 0.3)',
                                    background: scrolled ? 'var(--accent-glow)' : 'rgba(255, 255, 255, 0.1)'
                                }}
                                aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
                                title={theme === 'light' ? 'Modo escuro' : 'Modo claro'}
                            >
                                {theme === 'light' ? <FaMoon /> : <FaSun />}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
