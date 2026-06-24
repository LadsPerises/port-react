import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer style={{ padding: '60px 0 20px', background: 'var(--bg-nav)', borderTop: '1px solid var(--border-color)', marginTop: '40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                    <div>
                        <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '20px' }}>PORTO DO SOYO</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>{t('footer_about')}</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>{t('footer_links')}</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '10px' }}><a href="#inicio" style={{ color: 'var(--text-secondary)' }}>{t('f_link_home')}</a></li>
                            <li style={{ marginBottom: '10px' }}><a href="#servicos" style={{ color: 'var(--text-secondary)' }}>{t('f_link_serv')}</a></li>
                            <li style={{ marginBottom: '10px' }}><a href="#contactos" style={{ color: 'var(--text-secondary)' }}>{t('f_link_cont')}</a></li>
                        </ul>
                    </div>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                    &copy; {new Date().getFullYear()} Porto do Soyo E.P. {t('f_copy')}
                </div>
            </div>
        </footer>
    );
}
