import React, { useState } from 'react';
import { useTranslation } from '../../contexts/LanguageContext';
import { FaLocationDot, FaEnvelope, FaPhone, FaClock, FaPaperPlane, FaSpinner } from 'react-icons/fa6';

export default function Contacts() {
    const { t, lang } = useTranslation();
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const inputStyle = {
        width: '100%',
        padding: '10px 0',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid var(--border-color)',
        color: 'var(--text-primary)',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s'
    };

    return (
        <section id="contactos" style={{ padding: '120px 0', background: 'var(--bg-card)' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
                
                {/* Header Minimalista */}
                <div style={{ marginBottom: '60px', maxWidth: '800px' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '15px', display: 'block' }}>
                        {t('contacts_tag')}
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '700', margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-1px', color: 'var(--text-primary)', lineHeight: '1.2' }}>
                        {t('contacts_title')}
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', marginBottom: '80px' }}>
                    
                    {/* Informações de Contacto */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '15px' }}>{t('contacts_h3')}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.6 }}>{t('contacts_p')}</p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'rgba(0, 134, 225, 0.1)', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <FaLocationDot size="1.2em" color="var(--primary)" />
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{t('c_addr')}</span>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Porto do Soyo, Soyo, Província do Zaire, Angola</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'rgba(0, 134, 225, 0.1)', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <FaEnvelope size="1.2em" color="var(--primary)" />
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{t('c_email')}</span>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>geral@portodosoyo.co.ao</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'rgba(0, 134, 225, 0.1)', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <FaPhone size="1.2em" color="var(--primary)" />
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{t('c_phone')}</span>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>+244 232 630 110 / +244 923 456 789</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'rgba(0, 134, 225, 0.1)', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <FaClock size="1.2em" color="var(--primary)" />
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{t('c_hours')}</span>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{t('c_hours_val')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulário Minimalista (Inputs Lineares) */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '25px' }}>{t('form_title')}</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('form_name')}</label>
                                    <input type="text" required style={inputStyle} onFocus={e => e.target.style.borderColor = 'var(--primary)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('form_email')}</label>
                                    <input type="email" required style={inputStyle} onFocus={e => e.target.style.borderColor = 'var(--primary)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'} />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('form_sub')}</label>
                                <input type="text" required style={inputStyle} onFocus={e => e.target.style.borderColor = 'var(--primary)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('form_msg')}</label>
                                <textarea rows="3" required style={{...inputStyle, resize: 'none'}} onFocus={e => e.target.style.borderColor = 'var(--primary)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'}></textarea>
                            </div>
                            <button type="submit" disabled={status === 'loading'} style={{ background: 'var(--primary)', color: '#fff', border: 'none', padding: '16px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = '#143c79'} onMouseOut={e => e.currentTarget.style.background = 'var(--primary)'}>
                                {status === 'loading' ? <><FaSpinner className="fa-spin" /> {lang === 'pt' ? 'A enviar...' : 'Sending...'}</> : <>{t('form_btn')} <FaPaperPlane /></>}
                            </button>
                            {status === 'success' && (
                                <div style={{ color: 'var(--primary)', fontWeight: '500', textAlign: 'center', marginTop: '10px' }}>
                                    {lang === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!'}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                
                {/* SVG Map mock - Minimalist Light Theme */}
                <div style={{ background: '#e0f2fe', borderRadius: '16px', position: 'relative', overflow: 'hidden', height: '350px' }}>
                    <div style={{ position: 'absolute', top: '30px', left: '30px', background: '#ffffff', padding: '20px', borderRadius: '12px', zIndex: 10, boxShadow: 'var(--shadow)', maxWidth: '280px' }}>
                        <h4 style={{ margin: '0 0 8px 0', color: 'var(--text-primary)', fontSize: '1.1rem' }}>{t('map_title')}</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>{t('map_desc')}</p>
                    </div>
                    {/* Representação super limpa de costa e água */}
                    <svg viewBox="0 0 1000 300" style={{ width: '100%', height: '100%', display: 'block' }}>
                        {/* Massa de Terra Branca */}
                        <path d="M 0 300 L 0 150 Q 200 130 300 180 T 600 170 T 800 210 T 1000 160 L 1000 300 Z" fill="#ffffff" />
                        {/* Linha costeira */}
                        <path d="M 0 150 Q 200 130 300 180 T 600 170 T 800 210 T 1000 160" fill="none" stroke="#bae6fd" strokeWidth="4" />
                        {/* Rio Congo saindo para o mar */}
                        <path d="M 300 0 Q 320 80 300 130 T 260 170 T 200 180 L 0 160" fill="none" stroke="#e0f2fe" strokeWidth="20" strokeLinecap="round"/>
                        {/* Indicador de Porto do Soyo */}
                        <circle cx="250" cy="170" r="6" fill="var(--primary)" />
                        <circle cx="250" cy="170" r="14" fill="var(--primary)" opacity="0.2" />
                        <text x="270" y="175" fill="var(--text-primary)" fontWeight="bold" fontSize="14">Porto do Soyo</text>
                    </svg>
                </div>
            </div>
        </section>
    );
}
