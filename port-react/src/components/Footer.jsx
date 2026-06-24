import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer style={{ padding: '80px 0 30px', background: 'var(--bg-main)', borderTop: '1px solid var(--border-color)' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', marginBottom: '60px' }}>
                    <div>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '25px', fontSize: '1.2rem', fontWeight: '800', letterSpacing: '1px' }}>PORTO DO SOYO</h4>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem', maxWidth: '350px' }}>{t('footer_about')}</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '25px', fontSize: '1.1rem', fontWeight: '700' }}>{t('footer_links')}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '15px' }}>
                                <a href="#inicio" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
                                    {t('f_link_home')}
                                </a>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <a href="#servicos" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
                                    {t('f_link_serv')}
                                </a>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <a href="#contactos" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
                                    {t('f_link_cont')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '30px', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Empresa Portuária do Soyo E.P. | {t('f_copy')}
                </div>
            </div>
        </footer>
    );
}
