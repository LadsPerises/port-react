import React, { useState } from 'react';
import { useTranslation } from '../../contexts/LanguageContext';
import { FaFilePdf, FaGavel, FaTimes, FaFileInvoice, FaDownload, FaArrowRight } from 'react-icons/fa';

export default function Legislation() {
    const { t, lang } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [activeDoc, setActiveDoc] = useState(null);

    const pdfTexts = {
        legislacao: {
            title: { pt: "Legislação Portuária de Angola", en: "Angolan Port Legislation" },
            text: {
                pt: [
                    "Decreto n.º 26/98 - Estabelece as regras de exploração portuária e as competências das entidades públicas gestoras de portos da República de Angola.",
                    "Este decreto confere à Empresa Portuária do Soyo E.P. a exclusividade da exploração das áreas de cais, terraplenos, armazéns e serviços anexos na sua área de jurisdição comercial marítimo-fluvial.",
                    "Lei n.º 11/13 das Empresas Públicas - Determina o enquadramento financeiro e o modelo de governança corporativa para empresas públicas angolanas.",
                    "Regulamento Tarifário Geral dos Portos - Define o regime de taxas de atracação, acostagem, armazenamento e manobra a serem praticados nas águas e docas sob tutela da administração do Soyo."
                ],
                en: [
                    "Decree No. 26/98 - Establishes the port exploitation rules and the responsibilities of the public port management entities in the Republic of Angola.",
                    "This decree grants the Soyo Port Company E.P. exclusive rights to exploit the wharves, warehouses, container yards, and annex services in its maritime-fluvial commercial jurisdiction.",
                    "Law No. 11/13 on Public Enterprises - Determines the financial framework and corporate governance model for Angolan public enterprises.",
                    "General Port Tariff Regulation - Defines the regime of docking, berthing, storage, and maneuvering fees to be applied in the waters and docks managed by the Soyo administration."
                ]
            }
        },
        etica: {
            title: { pt: "Código de Ética da Empresa Portuária do Soyo", en: "Code of Ethics - Soyo Port Company" },
            text: {
                pt: [
                    "1. Princípio da Integridade - Todos os diretores, funcionários e parceiros devem agir com honestidade profissional e lealdade na execução das manobras e negociação portuária.",
                    "2. Transparência Administrativa - Fica estritamente vedado qualquer ato de favorecimento ou facilitação de tráfego fora das taxas e rituais operacionais oficiais estabelecidos pelo conselho.",
                    "3. Responsabilidade Ambiental - Compromisso expresso com o controle de poluentes nas águas fluviais do Rio Congo. Qualquer acidente deve ser imediatamente reportado à fiscalização portuária.",
                    "4. Conduta Profissional - Fomento da cooperação, segurança no trabalho e capacitação contínua, visando o bem-estar e o fortalecimento do porto no mercado internacional."
                ],
                en: [
                    "1. Principle of Integrity - All directors, employees, and partners must act with professional honesty and loyalty in the execution of maneuvers and port negotiations.",
                    "2. Administrative Transparency - Any act of favoritism or traffic facilitation outside the official rates and operational procedures established by the board is strictly prohibited.",
                    "3. Environmental Responsibility - Express commitment to control pollutants in the Congo River waters. Any accident must be immediately reported to port inspection teams.",
                    "4. Professional Conduct - Promotion of cooperation, occupational safety, and continuous training, aiming at well-being and strengthening the port in the international market."
                ]
            }
        }
    };

    const openDoc = (key) => {
        setActiveDoc(pdfTexts[key]);
        setModalOpen(true);
    };

    return (
        <section id="legislacao" style={{ padding: '120px 0', background: 'var(--bg-main)' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
                
                {/* Header Minimalista (Alinhado à esquerda) */}
                <div style={{ marginBottom: '60px', maxWidth: '800px' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '15px', display: 'block' }}>
                        {t('leg_tag')}
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '700', margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-1px', color: 'var(--text-primary)', lineHeight: '1.2' }}>
                        {t('leg_title')}
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
                    
                    {/* Item 1: Sem cartão fechado, design de lista/artigo moderno */}
                    <div style={{ display: 'flex', gap: '25px', padding: '15px 0' }}>
                        <div style={{ flexShrink: 0, width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(0, 134, 225, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaFilePdf size="1.8em" color="var(--primary)" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: '700', marginBottom: '12px', letterSpacing: '-0.3px' }}>{t('leg_card1_title')}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '20px' }}>{t('leg_card1_desc')}</p>
                            <button 
                                onClick={() => openDoc('legislacao')}
                                style={{ 
                                    background: 'transparent', border: 'none', color: 'var(--primary)', fontWeight: '700', fontSize: '0.95rem',
                                    display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: 0, textTransform: 'uppercase', letterSpacing: '1px'
                                }}
                                onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
                                onMouseOut={e => e.currentTarget.style.color = 'var(--primary)'}
                            >
                                {t('leg_view')} <FaArrowRight size="0.8em" />
                            </button>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div style={{ display: 'flex', gap: '25px', padding: '15px 0' }}>
                        <div style={{ flexShrink: 0, width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(0, 134, 225, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaGavel size="1.8em" color="var(--primary)" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: '700', marginBottom: '12px', letterSpacing: '-0.3px' }}>{t('leg_card2_title')}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '20px' }}>{t('leg_card2_desc')}</p>
                            <button 
                                onClick={() => openDoc('etica')}
                                style={{ 
                                    background: 'transparent', border: 'none', color: 'var(--primary)', fontWeight: '700', fontSize: '0.95rem',
                                    display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: 0, textTransform: 'uppercase', letterSpacing: '1px'
                                }}
                                onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
                                onMouseOut={e => e.currentTarget.style.color = 'var(--primary)'}
                            >
                                {t('leg_view')} <FaArrowRight size="0.8em" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de PDF - Renovado para o Light Theme */}
            {modalOpen && activeDoc && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(5px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <div style={{ background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '800px', height: '85vh', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
                        
                        {/* Modal Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px 30px', borderBottom: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <FaFileInvoice size="1.5em" color="var(--primary)" />
                                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '600' }}>Visualizador de Documentos</h3>
                            </div>
                            <button onClick={() => setModalOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', fontSize: '1.2rem', cursor: 'pointer', display: 'flex' }}>
                                <FaTimes />
                            </button>
                        </div>
                        
                        {/* Modal Content / Paper */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '40px 50px', background: '#ffffff' }}>
                            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <h4 style={{ color: 'var(--text-primary)', margin: '0 0 5px 0', fontSize: '1.1rem' }}>REPÚBLICA DE ANGOLA</h4>
                                <h5 style={{ color: 'var(--text-secondary)', margin: 0, fontWeight: '500' }}>MINISTÉRIO DOS TRANSPORTES</h5>
                                <hr style={{ margin: '25px auto', width: '50px', borderColor: 'var(--primary)' }}/>
                                <h3 style={{ marginTop: '20px', color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '700', lineHeight: 1.4 }}>{activeDoc.title[lang]}</h3>
                            </div>
                            <div>
                                {activeDoc.text[lang].map((p, idx) => (
                                    <p key={idx} style={{ marginBottom: '20px', textAlign: 'justify', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '1.05rem' }}>{p}</p>
                                ))}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px', borderTop: '1px solid var(--border-color)', background: '#fafbfc', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Página 1 de 1</span>
                            <button 
                                onClick={() => alert('Download simulado com sucesso!')}
                                style={{ 
                                    background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-primary)', 
                                    padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
                                    fontWeight: '600', fontSize: '0.9rem', transition: 'all 0.2s'
                                }}
                                onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
                                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                            >
                                <FaDownload /> {t('pdf_down')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
