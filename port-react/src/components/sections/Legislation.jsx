import React, { useState } from 'react';
import { useTranslation } from '../../contexts/LanguageContext';
import { FaFilePdf, FaGavel, FaTimes, FaFileInvoice, FaDownload } from 'react-icons/fa';

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
        <section id="legislacao" className="section-padding leg-section" style={{ padding: '80px 0' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span className="section-tag" style={{ color: 'var(--accent-cyan)' }}>{t('leg_tag')}</span>
                    <h2 className="section-title text-white">{t('leg_title')}</h2>
                    <div className="title-underline" style={{ width: '60px', height: '4px', background: 'var(--primary-grad)', margin: '15px auto 0' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    <div className="leg-card" style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                        <FaFilePdf size="3em" color="var(--accent-cyan)" style={{ marginBottom: '20px' }} />
                        <h3 style={{ marginBottom: '15px' }}>{t('leg_card1_title')}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: 1.6 }}>{t('leg_card1_desc')}</p>
                        <button className="btn btn-primary" onClick={() => openDoc('legislacao')}>
                            <FaFilePdf /> {t('leg_view')}
                        </button>
                    </div>

                    <div className="leg-card" style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                        <FaGavel size="3em" color="var(--accent-cyan)" style={{ marginBottom: '20px' }} />
                        <h3 style={{ marginBottom: '15px' }}>{t('leg_card2_title')}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: 1.6 }}>{t('leg_card2_desc')}</p>
                        <button className="btn btn-primary" onClick={() => openDoc('etica')}>
                            <FaFilePdf /> {t('leg_view')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal de PDF */}
            {modalOpen && activeDoc && (
                <div className="custom-modal open" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="modal-card pdf-viewer-card" style={{ background: 'var(--bg-main)', padding: '40px', borderRadius: '12px', width: '90%', maxWidth: '800px', height: '80vh', display: 'flex', flexDirection: 'column', position: 'relative', border: '1px solid var(--border-color)' }}>
                        <button onClick={() => setModalOpen(false)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: '1.5rem', cursor: 'pointer' }}><FaTimes /></button>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <FaFileInvoice size="2em" color="var(--accent-cyan)" />
                            <h3>Visualizador de Documentos</h3>
                        </div>
                        
                        <div style={{ flex: 1, overflowY: 'auto', background: '#fff', color: '#000', padding: '40px', borderRadius: '8px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                                <h4>REPÚBLICA DE ANGOLA</h4>
                                <h5>MINISTÉRIO DOS TRANSPORTES</h5>
                                <hr style={{ margin: '20px 0' }}/>
                                <h3 style={{ marginTop: '20px' }}>{activeDoc.title[lang]}</h3>
                            </div>
                            <div>
                                {activeDoc.text[lang].map((p, idx) => (
                                    <p key={idx} style={{ marginBottom: '15px', textAlign: 'justify', lineHeight: 1.6 }}>{p}</p>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Página 1 de 1</span>
                            <button className="btn btn-outline" onClick={() => alert('Download simulado com sucesso!')}>
                                <FaDownload /> {t('pdf_down')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
