import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from '../contexts/LanguageContext';
import logoWhite from '../assets/LogoWhite.png';

export default function Header() {
    const { lang, setLang, t } = useTranslation();
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

    const closeMenu = () => setMenuOpen(false);

    return (
        <header style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%',
            zIndex: 1000,
            padding: scrolled ? '15px 0' : '30px 0',
            background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            boxShadow: scrolled ? '0 4px 15px rgba(0,0,0,0.05)' : 'none',
            transition: 'all 0.3s ease',
            color: scrolled ? 'var(--text-primary)' : '#fff',
            backdropFilter: scrolled ? 'blur(10px)' : 'none'
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
                        <li><a onClick={closeMenu} href="/#inicio" style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}>{t('f_link_home')}</a></li>
                        <li><a onClick={closeMenu} href="/#servicos" style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}>{t('f_link_serv')}</a></li>
                        <li><a onClick={closeMenu} href="/#quem-somos" style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}>{t('f_link_about')}</a></li>
                        <li><a onClick={closeMenu} href="/noticias" style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}>Notícias & Media</a></li>
                        <li><a onClick={closeMenu} href="/#terminais" style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}>Sistemas de Informação</a></li>
                        <li><a onClick={closeMenu} href="/#contactos" style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}>{t('f_link_cont')}</a></li>
                        <li><a href="#" onClick={toggleLang} style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '800', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }}>{lang === 'pt' ? 'EN' : 'PT'}</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
