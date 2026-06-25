import React, { useState } from 'react';
import { useTranslation } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { FaCompass, FaAnchor, FaBoxes, FaWarehouse, FaShip, FaIndustry, FaTimes, FaInfoCircle } from 'react-icons/fa';

export default function Services() {
    const { t, lang } = useTranslation();
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [activeService, setActiveService] = useState(null);

    const services = [
        { id: 'pilotagem', icon: <FaCompass />, titleKey: 'serv_1_title', descKey: 'serv_1_short' },
        { id: 'reboque', icon: <FaAnchor />, titleKey: 'serv_2_title', descKey: 'serv_2_short' },
        { id: 'carga', icon: <FaBoxes />, titleKey: 'serv_3_title', descKey: 'serv_3_short' },
        { id: 'logistica', icon: <FaWarehouse />, titleKey: 'serv_4_title', descKey: 'serv_4_short' },
        { id: 'fluvial', icon: <FaShip />, titleKey: 'serv_5_title', descKey: 'serv_5_short' },
        { id: 'offshore', icon: <FaIndustry />, titleKey: 'serv_6_title', descKey: 'serv_6_short' }
    ];

    const servicesData = {
        pilotagem: {
            pt: { title: "Pilotagem e Praticagem", desc: "Serviço de alta responsabilidade técnica prestado por práticos certificados da EPS-EP. Conduzimos os navios com segurança na entrada, manobra e atracação ao longo dos canais de acesso fluviais do Rio Congo e nos portos sob jurisdição do Soyo." },
            en: { title: "Pilotage & Navigation", desc: "High technical responsibility service provided by certified pilots from EPS-EP. We guide vessels safely through entrance, maneuvering, and docking operations along the river access channels of the Congo River and ports under Soyo jurisdiction." }
        },
        reboque: {
            pt: { title: "Reboque e Amarração", desc: "Dispomos de frota moderna de rebocadores com grande capacidade de tração estática (Bollard Pull) e equipas terrestres qualificadas para fixação segura dos cabos nos cabeços do cais (amarração)." },
            en: { title: "Tugboat & Mooring", desc: "We have a modern fleet of tugboats with high static traction capacity (Bollard Pull) and qualified land crews for the safe fixation of lines to the berth bollards (mooring)." }
        },
        carga: {
            pt: { title: "Movimentação de Cargas", desc: "Operação eficiente de carga e descarga de navios mercantes. Manuseamos contentores, carga geral fracionada, granéis sólidos/líquidos e cargas de grandes dimensões (project cargo) com equipamentos mecânicos modernos." },
            en: { title: "Cargo Handling", desc: "Efficient loading and unloading operations for merchant vessels. We handle containers, breakbulk general cargo, dry/liquid bulk, and oversized project cargo utilizing modern mechanical equipment." }
        },
        logistica: {
            pt: { title: "Armazenagem e Logística", desc: "Instalações de armazenagem seguras com pátios asfaltados e armazéns cobertos para mercadorias de importação e exportação. Oferecemos monitorização eletrónica 24/7 e controle de inventário digital." },
            en: { title: "Storage & Logistics", desc: "Secure storage facilities with paved yards and covered warehouses for import and export goods. We offer 24/7 electronic monitoring and digital inventory control." }
        },
        fluvial: {
            pt: { title: "Transporte Fluvial de Passageiros", desc: "Serviço essencial de cabotagem ligando o Soyo a Cabinda por via fluvial e marítima. Operamos catamarãs modernos com ar-condicionado e todas as medidas de segurança salvaguardadas." },
            en: { title: "River Passenger Transport", desc: "Essential cabotage service linking Soyo to Cabinda by river and sea. We operate modern, air-conditioned catamarans with all safety measures fully safeguarded." }
        },
        offshore: {
            pt: { title: "Apoio à Indústria Offshore", desc: "A Base da Ilha do Kwanda é o principal centro de apoio logístico integrado do Zaire para as empresas petrolíferas e de gás em Angola. Suporta embarcações de suprimentos (OSVs) com combustíveis, água e lama de perfuração." },
            en: { title: "Offshore Industry Support", desc: "The Kwanda Island Base is Zaire's main integrated logistics support center for oil and gas companies in Angola. It supports offshore supply vessels (OSVs) with fuel, water, and drilling mud." }
        }
    };

    const openModal = (id) => {
        setActiveService({ id, ...servicesData[id] });
        setModalOpen(true);
    };

    return (
        <section id="servicos" style={{ padding: '120px 0', background: 'var(--bg-main)', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 2 }}>
                
                {/* Centered Header imitating the reference */}
                <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '15px', display: 'block' }}>
                        Nossos Serviços
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '700', margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-1px', color: 'var(--text-primary)', lineHeight: '1.2' }}>
                        Otimize as Suas Operações <br /> Com os Nossos Melhores Serviços
                    </h2>
                </div>

                {/* 4-Column Grid imitating the reference */}
                <div className="responsive-services-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                    gap: '20px' 
                }}>
                    {/* The 6 Real Services */}
                    {services.map(srv => (
                        <div 
                            className="responsive-service-card"
                            key={srv.id} 
                            onClick={() => openModal(srv.id)} 
                            style={{ 
                                cursor: 'pointer', 
                                display: 'flex', 
                                flexDirection: 'column',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '16px',
                                padding: '30px 25px',
                                boxShadow: 'var(--shadow)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
                                e.currentTarget.style.borderColor = 'var(--primary)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                            }}
                        >
                            <div style={{ 
                                fontSize: '1.1rem', 
                                color: 'var(--primary)', 
                                marginBottom: '25px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                borderRadius: '8px',
                                background: 'rgba(0, 134, 225, 0.1)'
                            }}>
                                {srv.icon}
                            </div>
                            
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '-0.3px', lineHeight: '1.4' }}>
                                {t(srv.titleKey)}
                            </h3>
                            
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: '500' }}>
                                Ver detalhes
                            </span>
                        </div>
                    ))}

                    {/* Placeholder Card (7th slot to match 4x2 grid) */}
                    <div style={{ display: 'none' }} className="placeholder-desktop-only"></div>

                    {/* Solid Action Card (8th slot mapped to project palette) */}
                    <div 
                        className="responsive-service-card responsive-service-cta"
                        onClick={() => document.getElementById('contactos')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{ 
                            cursor: 'pointer', 
                            display: 'flex', 
                            flexDirection: 'column',
                            justifyContent: 'center',
                            background: '#0086e1', /* Azul claro da paleta do projeto */
                            borderRadius: '16px',
                            padding: '30px 25px',
                            boxShadow: '0 10px 25px rgba(0, 134, 225, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px', letterSpacing: '-0.5px' }}>
                            +4 <br/> Mais
                        </h3>
                        
                        <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: '500' }}>
                            Soluções Personalizadas
                        </span>
                    </div>

                </div>
            </div>

            {/* Modal remains mostly the same, just adapted to light theme */}
            {modalOpen && activeService && (
                <div className="responsive-modal-backdrop" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(5px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <div className="responsive-modal-panel" style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: '16px', maxWidth: '600px', width: '100%', position: 'relative', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
                        <button onClick={() => setModalOpen(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--bg-main)', border: 'none', color: 'var(--text-secondary)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
                            <FaTimes />
                        </button>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <FaInfoCircle size="1.8em" color="var(--primary)" />
                            <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '-0.5px', margin: 0 }}>
                                {activeService[lang].title}
                            </h3>
                        </div>
                        
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '35px' }}>
                            {activeService[lang].desc}
                        </p>
                        
                        <button className="btn btn-primary" onClick={() => { setModalOpen(false); navigate('/cotacao', { state: { serviceId: activeService?.id } }); }} style={{ width: '100%', padding: '15px', borderRadius: '8px', fontSize: '1rem', background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer' }}>
                            {t('modal_contact')}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
