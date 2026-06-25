import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { FaCalendarAlt, FaArrowRight, FaTag, FaSearch } from 'react-icons/fa';

const newsData = [
    {
        id: 1,
        category: { pt: 'Infraestrutura', en: 'Infrastructure' },
        date: '18 Jun. 2026',
        title: { pt: 'Porto do Soyo inicia expansão do Terminal de Contentores', en: 'Port of Soyo begins Container Terminal expansion' },
        excerpt: { pt: 'O projeto de expansão vai aumentar a capacidade de movimentação de contentores em 40%, reforçando a posição do porto como hub estratégico da região noroeste de Angola.', en: 'The expansion project will increase container handling capacity by 40%, strengthening the port\'s position as a strategic hub for northwestern Angola.' },
        image: '/images/Gemini_Generated_Image_pgn6dpgn6dpgn6dp.jpg',
        featured: true
    },
    {
        id: 2,
        category: { pt: 'Operações', en: 'Operations' },
        date: '10 Jun. 2026',
        title: { pt: 'Novo serviço de transporte fluvial Soyo–Cabinda aumenta frequências', en: 'New Soyo–Cabinda river transport service increases frequency' },
        excerpt: { pt: 'A partir de julho, a EPS-EP passa a operar três rotações diárias na ligação fluvial entre o Soyo e Cabinda, respondendo ao crescimento da procura.', en: 'From July onwards, EPS-EP will operate three daily rotations on the river link between Soyo and Cabinda, responding to growing demand.' },
        image: '/images/Gemini_Generated_Image_pg2lw2pg2lw2pg2l.jpg',
        featured: false
    },
    {
        id: 3,
        category: { pt: 'Offshore', en: 'Offshore' },
        date: '2 Jun. 2026',
        title: { pt: 'Base da Ilha do Kwanda recebe certificação ambiental internacional', en: 'Kwanda Island Base receives international environmental certification' },
        excerpt: { pt: 'A Base do Kwanda foi certificada com a norma ISO 14001:2015, reafirmando o compromisso da EPS-EP com a sustentabilidade nas operações de suporte offshore.', en: 'The Kwanda Base has been certified with ISO 14001:2015, reaffirming EPS-EP\'s commitment to sustainability in offshore support operations.' },
        image: '/images/Gemini_Generated_Image_pi8wiipi8wiipi8w.jpg',
        featured: false
    },
    {
        id: 4,
        category: { pt: 'Institucional', en: 'Institutional' },
        date: '25 Mai. 2026',
        title: { pt: 'EPS-EP participa na Conferência Marítima de Angola 2026', en: 'EPS-EP participates in Angola Maritime Conference 2026' },
        excerpt: { pt: 'A delegação da Empresa Portuária do Soyo marcou presença na maior conferência marítima do país, apresentando o roadmap de modernização do porto para 2026-2030.', en: 'The Port of Soyo delegation attended the country\'s largest maritime conference, presenting the port modernization roadmap for 2026-2030.' },
        image: '/images/Gemini_Generated_Image_pi8wiipi8wiipi8w (1).jpg',
        featured: false
    },
    {
        id: 5,
        category: { pt: 'Logística', en: 'Logistics' },
        date: '14 Mai. 2026',
        title: { pt: 'Sistema digital de gestão de armazéns entra em operação', en: 'Digital warehouse management system goes live' },
        excerpt: { pt: 'A implementação do novo WMS (Warehouse Management System) permite o rastreamento em tempo real de todas as mercadorias armazenadas nos pátios e armazéns do porto.', en: 'The implementation of the new WMS (Warehouse Management System) enables real-time tracking of all goods stored in the port\'s yards and warehouses.' },
        image: '/images/Gemini_Generated_Image_pi8wiipi8wiipi8w (2).jpg',
        featured: false
    },
    {
        id: 6,
        category: { pt: 'Parceria', en: 'Partnership' },
        date: '5 Mai. 2026',
        title: { pt: 'Acordo de cooperação com Porto de Luanda reforça rede nacional', en: 'Cooperation agreement with Port of Luanda strengthens national network' },
        excerpt: { pt: 'O memorando de entendimento assinado entre a EPS-EP e a ANPG visa otimizar o fluxo de mercadorias entre os portos angolanos, criando sinergias operacionais.', en: 'The memorandum of understanding signed between EPS-EP and ANPG aims to optimize the flow of goods between Angolan ports, creating operational synergies.' },
        image: '/images/hero_drone.png',
        featured: false
    },
];

const categories = {
    pt: ['Todos', 'Infraestrutura', 'Operações', 'Offshore', 'Institucional', 'Logística', 'Parceria'],
    en: ['All', 'Infrastructure', 'Operations', 'Offshore', 'Institutional', 'Logistics', 'Partnership']
};

export default function News() {
    const { lang } = useTranslation();
    const [activeCategory, setActiveCategory] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    const cats = categories[lang];
    const allLabel = cats[0];

    const filtered = newsData.filter(n => {
        const matchCat = activeCategory === 0 || n.category[lang] === cats[activeCategory];
        const matchSearch = searchQuery === '' ||
            n.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
            n.excerpt[lang].toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    const featured = filtered.find(n => n.featured);
    const rest = filtered.filter(n => !n.featured);

    return (
        <main style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
            
            {/* Hero */}
            <div style={{
                position: 'relative',
                paddingTop: '160px',
                paddingBottom: '80px',
                background: '#020b1e',
                overflow: 'hidden',
                color: '#fff'
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'url("/images/hero_seaport.png")',
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    opacity: 0.12, zIndex: 0
                }}></div>
                {/* Gradient overlay */}
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%',
                    background: 'linear-gradient(to bottom, transparent, #020b1e)',
                    zIndex: 1
                }}></div>
                <div style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', padding: '0 5%' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '15px' }}>
                        {lang === 'pt' ? 'Sala de Imprensa' : 'Press Room'}
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-1px', lineHeight: 1.1, maxWidth: '700px' }}>
                        {lang === 'pt' ? 'Notícias & Media' : 'News & Media'}
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', lineHeight: 1.6 }}>
                        {lang === 'pt' ? 'As últimas novidades, comunicados e acontecimentos da Empresa Portuária do Soyo.' : 'The latest news, press releases and events from Porto do Soyo.'}
                    </p>
                </div>
            </div>

            {/* Filters & Search */}
            <div style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: '80px', zIndex: 100 }}>
                <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap', paddingTop: '16px', paddingBottom: '16px' }}>
                    {/* Category Pills */}
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {cats.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(i)}
                                style={{
                                    padding: '8px 18px',
                                    borderRadius: '50px',
                                    border: '1px solid',
                                    borderColor: activeCategory === i ? 'var(--primary)' : 'var(--border-color)',
                                    background: activeCategory === i ? 'var(--primary)' : 'transparent',
                                    color: activeCategory === i ? '#fff' : 'var(--text-secondary)',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    {/* Search */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-main)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '10px 16px', minWidth: '250px' }}>
                        <FaSearch color="var(--text-muted)" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder={lang === 'pt' ? 'Pesquisar notícias...' : 'Search news...'}
                            style={{ border: 'none', outline: 'none', background: 'transparent', color: 'var(--text-primary)', fontSize: '0.95rem', width: '100%' }}
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '60px 5% 100px' }}>
                {filtered.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-secondary)' }}>
                        <p style={{ fontSize: '1.2rem' }}>{lang === 'pt' ? 'Nenhuma notícia encontrada.' : 'No news found.'}</p>
                    </div>
                ) : (
                    <>
                        {/* Featured Article */}
                        {featured && (
                            <div style={{
                                display: 'grid', gridTemplateColumns: '1fr 1fr',
                                gap: '0', borderRadius: '20px', overflow: 'hidden',
                                marginBottom: '50px', boxShadow: 'var(--shadow)',
                                border: '1px solid var(--border-color)'
                            }}
                            className="news-featured"
                            >
                                <div style={{ position: 'relative', minHeight: '450px', overflow: 'hidden' }}>
                                    <img src={featured.image} alt={featured.title[lang]}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    <div style={{
                                        position: 'absolute', top: '20px', left: '20px',
                                        background: 'var(--primary)', color: '#fff',
                                        padding: '6px 14px', borderRadius: '50px',
                                        fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase'
                                    }}>
                                        {lang === 'pt' ? 'Destaque' : 'Featured'}
                                    </div>
                                </div>
                                <div style={{ background: 'var(--bg-card)', padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                        <span style={{ background: 'rgba(0,134,225,0.1)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700' }}>
                                            <FaTag style={{ marginRight: '5px', fontSize: '0.7rem' }} />{featured.category[lang]}
                                        </span>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <FaCalendarAlt /> {featured.date}
                                        </span>
                                    </div>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '20px', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
                                        {featured.title[lang]}
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '35px' }}>
                                        {featured.excerpt[lang]}
                                    </p>
                                    <button style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '10px',
                                        background: 'var(--primary)', color: '#fff', border: 'none',
                                        padding: '14px 28px', borderRadius: '10px', cursor: 'pointer',
                                        fontWeight: '700', fontSize: '1rem', alignSelf: 'flex-start',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,134,225,0.4)'; }}
                                    onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                    >
                                        {lang === 'pt' ? 'Ler Mais' : 'Read More'} <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Grid of remaining articles */}
                        {rest.length > 0 && (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
                                {rest.map(article => (
                                    <article key={article.id} style={{
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: 'var(--shadow)',
                                        transition: 'all 0.3s',
                                        cursor: 'pointer',
                                        display: 'flex', flexDirection: 'column'
                                    }}
                                    onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                                    onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                                    >
                                        <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                            <img src={article.image} alt={article.title[lang]}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                                onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
                                                onMouseOut={e => e.target.style.transform = 'scale(1)'}
                                            />
                                        </div>
                                        <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                                                <span style={{ background: 'rgba(0,134,225,0.1)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.78rem', fontWeight: '700' }}>
                                                    {article.category[lang]}
                                                </span>
                                                <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                    <FaCalendarAlt size="0.8em" /> {article.date}
                                                </span>
                                            </div>
                                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px', letterSpacing: '-0.3px', lineHeight: 1.3 }}>
                                                {article.title[lang]}
                                            </h3>
                                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '25px', flex: 1 }}>
                                                {article.excerpt[lang]}
                                            </p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>
                                                {lang === 'pt' ? 'Ler artigo completo' : 'Read full article'} <FaArrowRight size="0.85em" />
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    );
}
