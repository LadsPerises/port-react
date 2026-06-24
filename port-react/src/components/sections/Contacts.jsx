import React, { useState } from 'react';
import { useTranslation } from '../../contexts/LanguageContext';
import { FaLocationDot, FaEnvelope, FaPhone, FaClock, FaPaperPlane, FaSpinner } from 'react-icons/fa6';

export default function Contacts() {
    const { t, lang } = useTranslation();
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contactos" className="section-padding contacts-section" style={{ padding: '80px 0' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span className="section-tag" style={{ color: 'var(--accent-cyan)' }}>{t('contacts_tag')}</span>
                    <h2 className="section-title text-white">{t('contacts_title')}</h2>
                    <div className="title-underline" style={{ width: '60px', height: '4px', background: 'var(--primary-grad)', margin: '15px auto 0' }}></div>
                </div>

                <div className="contacts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px' }}>
                    <div className="contacts-info">
                        <h3 style={{ marginBottom: '15px' }}>{t('contacts_h3')}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>{t('contacts_p')}</p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <FaLocationDot size="1.5em" color="var(--accent-cyan)" />
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('c_addr')}</span>
                                    <span>Porto do Soyo, Soyo, Província do Zaire, Angola</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <FaEnvelope size="1.5em" color="var(--accent-cyan)" />
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('c_email')}</span>
                                    <span>geral@portodosoyo.co.ao</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <FaPhone size="1.5em" color="var(--accent-cyan)" />
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('c_phone')}</span>
                                    <span>+244 232 630 110 / +244 923 456 789</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <FaClock size="1.5em" color="var(--accent-cyan)" />
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('c_hours')}</span>
                                    <span>{t('c_hours_val')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contacts-form-card" style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ marginBottom: '20px' }}>{t('form_title')}</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('form_name')}</label>
                                    <input type="text" required style={{ width: '100%', padding: '10px', background: 'var(--bg-main)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('form_email')}</label>
                                    <input type="email" required style={{ width: '100%', padding: '10px', background: 'var(--bg-main)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('form_sub')}</label>
                                <input type="text" required style={{ width: '100%', padding: '10px', background: 'var(--bg-main)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('form_msg')}</label>
                                <textarea rows="4" required style={{ width: '100%', padding: '10px', background: 'var(--bg-main)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }}></textarea>
                            </div>
                            <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ width: '100%', padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                {status === 'loading' ? <><FaSpinner className="fa-spin" /> {lang === 'pt' ? 'A enviar...' : 'Sending...'}</> : <>{t('form_btn')} <FaPaperPlane /></>}
                            </button>
                            {status === 'success' && (
                                <div style={{ background: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-cyan)', padding: '10px', borderRadius: '6px', textAlign: 'center', marginTop: '10px' }}>
                                    {lang === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!'}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                
                {/* SVG Map mock */}
                <div style={{ background: '#020d24', borderRadius: '15px', position: 'relative', overflow: 'hidden', height: '300px' }}>
                    <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(0,0,0,0.6)', padding: '15px', borderRadius: '8px', zIndex: 10 }}>
                        <h4>{t('map_title')}</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t('map_desc')}</p>
                    </div>
                    <svg viewBox="0 0 1000 300" style={{ width: '100%', height: '100%' }}>
                        <path d="M 0 150 Q 200 130 300 180 T 600 170 T 800 210 T 1000 160" fill="none" stroke="#0052a3" strokeWidth="6" opacity="0.6"/>
                        <path d="M 300 0 Q 320 80 300 130 T 260 170 T 200 180 L 0 160" fill="none" stroke="#00f2fe" strokeWidth="8" strokeLinecap="round"/>
                        <circle cx="235" cy="170" r="5" fill="#ff4d4d" />
                        <text x="255" y="174" fill="#ffffff" fontWeight="bold" fontSize="12">Porto do Soyo</text>
                    </svg>
                </div>
            </div>
        </section>
    );
}
