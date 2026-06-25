import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaBolt, FaCalendarAlt, FaLeaf, FaShip } from 'react-icons/fa';
import { useTranslation } from '../../contexts/LanguageContext';

const previewNews = [
    {
        id: 1,
        tag: { pt: 'Operações', en: 'Operations' },
        title: {
            pt: 'Porto do Soyo regista recorde de navios no 1.º trimestre',
            en: 'Port of Soyo records vessel traffic milestone in Q1'
        },
        excerpt: {
            pt: 'O trimestre marcou um novo pico operacional, com mais atracações no Porto Central e na Base Logística do Kwanda.',
            en: 'The quarter marked a new operational peak, with increased calls at the Central Port and Kwanda Logistics Base.'
        },
        date: { pt: '15 Março 2026', en: 'March 15, 2026' },
        icon: <FaShip />,
        gradient: 'linear-gradient(135deg, #0086e1 0%, #00f2fe 100%)'
    },
    {
        id: 2,
        tag: { pt: 'Energia', en: 'Energy' },
        title: {
            pt: 'Terminal Angola LNG reforça rotas de exportação energética',
            en: 'Angola LNG Terminal strengthens energy export routes'
        },
        excerpt: {
            pt: 'A operação amplia a ligação do Soyo aos mercados internacionais e consolida Angola como fornecedor estratégico de gás.',
            en: 'The operation expands Soyo’s link to international markets and strengthens Angola’s role as a strategic gas supplier.'
        },
        date: { pt: '02 Fevereiro 2026', en: 'February 02, 2026' },
        icon: <FaBolt />,
        gradient: 'linear-gradient(135deg, #1a2e56 0%, #0052a3 100%)'
    },
    {
        id: 3,
        tag: { pt: 'Sustentabilidade', en: 'Sustainability' },
        title: {
            pt: 'EPS-EP lança programa Porto Verde no Rio Congo',
            en: 'EPS-EP launches Green Port program on the Congo River'
        },
        excerpt: {
            pt: 'A iniciativa introduz medidas ambientais para redução da pegada carbónica e recolha de resíduos marítimos.',
            en: 'The initiative introduces environmental measures to reduce carbon footprint and improve maritime waste collection.'
        },
        date: { pt: '20 Janeiro 2026', en: 'January 20, 2026' },
        icon: <FaLeaf />,
        gradient: 'linear-gradient(135deg, #0a3d62 0%, #4facfe 100%)'
    }
];

export default function NewsPreview() {
    const { lang } = useTranslation();
    const navigate = useNavigate();

    return (
        <section id="noticias-preview" style={{ padding: '120px 0', background: 'var(--bg-main)' }}>
            <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 5%' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '12px' }}>
                        {lang === 'pt' ? 'Actualidade' : 'Updates'}
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text-primary)', margin: 0, fontWeight: '800', letterSpacing: '-1px' }}>
                        {lang === 'pt' ? 'Notícias & Destaques' : 'News & Highlights'}
                    </h2>
                    <div style={{ width: '74px', height: '4px', background: 'var(--primary-grad)', borderRadius: '999px', margin: '18px auto 0' }} />
                </div>

                <div className="responsive-news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '30px' }}>
                    {previewNews.map((item) => (
                        <article
                            key={item.id}
                            onClick={() => navigate(`/noticias/${item.id}`)}
                            className="responsive-service-card"
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '18px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow)',
                                cursor: 'pointer',
                                transition: 'var(--transition)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-6px)';
                                e.currentTarget.style.borderColor = 'var(--border-hover)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                            }}
                        >
                            <div style={{ height: '210px', background: item.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '3rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 25% 20%, rgba(255,255,255,0.24), transparent 36%)' }} />
                                <div style={{ position: 'relative', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.28))' }}>{item.icon}</div>
                            </div>
                            <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <span style={{ alignSelf: 'flex-start', background: 'var(--accent-glow)', color: 'var(--accent-cyan)', border: '1px solid var(--border-color)', borderRadius: '999px', padding: '5px 12px', fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                                    {item.tag[lang]}
                                </span>
                                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.22rem', lineHeight: 1.35, margin: '18px 0 12px', fontWeight: '800' }}>
                                    {item.title[lang]}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 26px', flex: 1 }}>
                                    {item.excerpt[lang]}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '18px', borderTop: '1px solid var(--border-color)', paddingTop: '18px' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.86rem', display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                                        <FaCalendarAlt /> {item.date[lang]}
                                    </span>
                                    <span style={{ color: 'var(--accent-cyan)', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                        {lang === 'pt' ? 'Ler mais' : 'Read more'} <FaArrowRight />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '42px' }}>
                    <button
                        type="button"
                        onClick={() => navigate('/noticias')}
                        style={{
                            background: 'var(--primary-grad)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '14px 26px',
                            fontWeight: '800',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-glow)'
                        }}
                    >
                        {lang === 'pt' ? 'Ver todas as notícias' : 'View all news'}
                    </button>
                </div>
            </div>
        </section>
    );
}
