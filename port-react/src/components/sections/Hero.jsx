import React from 'react';
import { useTranslation } from '../../contexts/LanguageContext';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section id="inicio" className="responsive-hero" style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end', /* Aligned to bottom like reference */
            alignItems: 'center',
            textAlign: 'left',
            color: '#fff',
            overflow: 'hidden',
            padding: '0 0 80px 0' /* Padding at the bottom */
        }}>
            {/* Fullscreen Background Image */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: "url('/images/hero_seaport.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -2,
                backgroundColor: '#143c79'
            }}></div>

            {/* Overlay to darken the whole image and provide text contrast at the bottom */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to top, rgba(15, 45, 90, 0.98) 0%, rgba(15, 45, 90, 0.8) 50%, rgba(2, 11, 30, 0.65) 100%)',
                zIndex: -1
            }}></div>

            <div className="container responsive-hero-content" style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '1440px', margin: '0 auto', padding: '0 5%', width: '100%' }}>
                
                {/* Main Headline (Massive, uppercase, bold) */}
                <h1 className="responsive-hero-title" style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: '900',
                    lineHeight: '1.1',
                    textTransform: 'uppercase',
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                    margin: '0',
                    letterSpacing: '-1px',
                    textShadow: '0 4px 15px rgba(0,0,0,0.6)'
                }}>
                    {t('hero_title_1')} <br />
                    {t('hero_title_2')}
                </h1>
                
                {/* Thin Colored Separator Line */}
                <div style={{
                    width: '100%',
                    height: '3px',
                    backgroundColor: '#0086e1', /* Azul claro oficial */
                    marginTop: '30px',
                    marginBottom: '30px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
                }}></div>

                {/* Solid Industrial Button */}
                <a className="responsive-hero-button" href="#servicos" style={{
                    display: 'inline-block',
                    background: '#0086e1', /* Azul claro oficial */
                    color: '#ffffff',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    padding: '16px 40px',
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    letterSpacing: '2px',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0, 134, 225, 0.4)'
                }}
                onMouseOver={e => e.target.style.background = '#143c79'} /* Azul escuro no hover */
                onMouseOut={e => e.target.style.background = '#0086e1'}
                >
                    Leia Mais
                </a>
            </div>
        </section>
    );
}
