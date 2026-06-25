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
                
                {/* Hero Badge */}
                <span style={{
                    color: 'var(--accent-cyan)',
                    fontWeight: '700',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    marginBottom: '15px',
                    display: 'block',
                    textShadow: '0 2px 5px rgba(0,0,0,0.5)'
                }}>
                    {t('hero_badge')}
                </span>

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
                    {t('hero_title_2')} <br />
                    <span style={{ color: 'var(--accent-cyan)' }}>{t('hero_title_3')}</span>
                </h1>
                
                {/* Thin Colored Separator Line */}
                <div style={{
                    width: '60px', /* Reduced width to match modern design */
                    height: '4px',
                    backgroundColor: 'var(--accent-cyan)',
                    marginTop: '25px',
                    marginBottom: '25px',
                    boxShadow: '0 2px 5px rgba(0,242,254,0.3)',
                    borderRadius: '2px'
                }}></div>

                {/* Hero Description */}
                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    maxWidth: '650px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '40px',
                    textShadow: '0 2px 5px rgba(0,0,0,0.5)'
                }}>
                    {t('hero_desc')}
                </p>

                {/* Solid Industrial Button */}
                <button
                    className="responsive-hero-button"
                    onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{
                        display: 'inline-block',
                        background: '#0086e1',
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
                        boxShadow: '0 4px 15px rgba(0, 134, 225, 0.4)',
                        borderRadius: '0'
                    }}
                    onMouseOver={e => e.currentTarget.style.background = '#143c79'}
                    onMouseOut={e => e.currentTarget.style.background = '#0086e1'}
                >
                    {t('hero_btn_explore')}
                </button>
            </div>
        </section>
    );
}
