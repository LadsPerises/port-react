import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaFacebookF, FaSearch } from 'react-icons/fa';
import { useTranslation } from '../contexts/LanguageContext';

export default function Header() {
    const { lang, setLang, t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLang = (e) => {
        e.preventDefault();
        setLang(lang === 'pt' ? 'en' : 'pt');
    };

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
            <div className="container" style={{
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
                    <svg viewBox="0 0 100 100" width="40" height="40" style={{ filter: scrolled ? 'none' : 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.4))' }}>
                        <circle cx="50" cy="50" r="45" fill="none" stroke={scrolled ? 'var(--primary)' : '#fff'} strokeWidth="4" />
                        <path d="M50,15 L50,80 M30,60 L70,60 M30,40 C35,25 65,25 70,40 M20,50 C35,55 65,55 80,50" fill="none" stroke={scrolled ? 'var(--primary)' : '#fff'} strokeWidth="4" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="8" fill={scrolled ? 'var(--primary)' : '#fff'} />
                    </svg>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '1px', lineHeight: 1, color: scrolled ? 'var(--text-primary)' : '#fff' }}>PORTO DO SOYO</span>
                        <span style={{ fontSize: '0.7rem', letterSpacing: '1px', opacity: 0.8, color: scrolled ? 'var(--text-secondary)' : '#fff' }}>EMPRESA PORTUÁRIA</span>
                    </div>
                </div>

                {/* Right Navigation */}
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ul style={{ display: 'flex', gap: '25px', listStyle: 'none', margin: 0, padding: 0 }}>
                        <li><a href="/#inicio" style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}>{t('f_link_home')}</a></li>
                        <li><a href="/#servicos" style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}>{t('f_link_serv')}</a></li>
                        <li><a href="/#quem-somos" style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}>{t('f_link_about')}</a></li>
                        <li><a href="/noticias" style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}>Notícias & Media</a></li>
                        <li><a href="/#terminais" style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}>Sistemas de Informação</a></li>
                        <li><a href="/#contactos" style={{ color: scrolled ? 'var(--text-primary)' : '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}>{t('f_link_cont')}</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
