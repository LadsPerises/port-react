import React from 'react';
import { useTranslation } from '../../contexts/LanguageContext';

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="quem-somos" style={{ padding: '120px 0', background: 'var(--bg-main)', color: 'var(--text-primary)' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
                
                {/* 2-Column Main Layout (Text Left | Image+Grid Right) */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'stretch' }}>
                    
                    {/* Left Column: Text Content + Stats Grid */}
                    <div style={{ flex: '1.2 1 550px', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '30px' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '20px', display: 'block' }}>
                            {t('about_tag')}
                        </span>
                        
                        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: '700', margin: '0 0 30px 0', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.15', letterSpacing: '-1px' }}>
                            {t('about_title')}
                        </h2>
                        
                        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', fontWeight: '400', marginBottom: '40px' }}>
                            <p>{t('company_p1')}</p>
                        </div>

                        {/* Bottom 2x2 Grid (Stats / Highlights) - Moved to Left */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                            
                            {/* Card 1 */}
                            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: 'var(--shadow)' }}>
                                <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '5px', lineHeight: '1' }}>1979</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{t('hist_1_title')}</span>
                            </div>

                            {/* Card 2 */}
                            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: 'var(--shadow)' }}>
                                <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '5px', lineHeight: '1' }}>24/7</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Operações Contínuas</span>
                            </div>

                            {/* Card 3 */}
                            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: 'var(--shadow)' }}>
                                <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '5px', lineHeight: '1' }}>+40</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Anos de Experiência</span>
                            </div>

                            {/* Card 4 */}
                            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: 'var(--shadow)' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '5px', lineHeight: '1' }}>ADMIN</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{t('board_pca')}</span>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Image only */}
                    <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column' }}>
                        
                        {/* Top Image */}
                        <div style={{ 
                            width: '100%', 
                            height: '100%', 
                            minHeight: '400px',
                            borderRadius: '8px', 
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow)',
                            display: 'flex'
                        }}>
                            <img 
                                src="/images/about_office.png" 
                                alt="Administração do Porto do Soyo" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
