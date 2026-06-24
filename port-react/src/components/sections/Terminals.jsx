import React, { useState } from 'react';
import { useTranslation } from '../../contexts/LanguageContext';

export default function Terminals() {
    const { t, lang } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const terminalsData = [
        {
            name: "Porto Central do Soyo",
            draft: "7.0 m",
            cais: "350 m",
            op: "Sogester (Concessão)",
            cargo: "Carga Geral, Passageiros, Alimentar",
            desc: {
                pt: "Localizado na própria cidade do Soyo, este terminal é gerido estrategicamente com foco no tráfego comercial geral, transporte de cabotagem fluvial de passageiros (ligação Soyo-Cabinda) e movimentação de cargas gerais alimentícias e veículos. Passa por constante reestruturação para suportar navios de médio porte.",
                en: "Located directly in the city of Soyo, this terminal is strategically managed with a focus on general commercial traffic, river cabotage passenger transport (Soyo-Cabinda link), and handling of general food cargoes and vehicles. It undergoes constant restructuring to support medium-sized vessels."
            }
        },
        {
            name: "Base Logística do Kwanda",
            draft: "9.5 m",
            cais: "520 m",
            op: "Kwanda Suporte Logístico",
            cargo: "Material Petrolífero, Offshore Supply, Tubagens",
            desc: {
                pt: "Sediado na Ilha do Kwanda, este terminal serve de suporte logístico central a mais de 30 empresas petrolíferas multinacionais que operam em águas angolanas. Dispõe de excelentes oficinas, áreas de cimento para tubagens, instalações para fornecimento de lamas de perfuração, água potável e combustíveis pesados.",
                en: "Based on Kwanda Island, this terminal serves as a central logistic support hub for over 30 multinational oil companies operating in Angolan waters. It features excellent workshops, cement areas for tubings, facilities for supply of drilling mud, potable water, and heavy fuels."
            }
        },
        {
            name: "Terminal Angola LNG",
            draft: "12.5 m",
            cais: "400 m (Pier dedicado)",
            op: "Consórcio Angola LNG",
            cargo: "Gás Natural Liquefeito (LNG), Propano, Butano",
            desc: {
                pt: "O terminal de águas profundas de alta tecnologia para a exportação de Gás Natural Liquefeito (LNG). Construído na península de Kwanda, possui cais de atracação próprio e equipamentos criogénicos avançados, ligando o Soyo a mercados globais e constituindo um dos maiores empreendimentos industriais de Angola.",
                en: "The high-tech deepwater terminal for the export of Liquefied Natural Gas (LNG). Built on the Kwanda peninsula, it features its own berthing pier and advanced cryogenic loading equipment, connecting Soyo to global markets as one of Angola's largest industrial ventures."
            }
        }
    ];

    const activeTerminal = terminalsData[activeIndex];

    return (
        <section id="terminais" className="section-padding terminals-section" style={{ padding: '80px 0' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span className="section-tag" style={{ color: 'var(--accent-cyan)' }}>{t('terminals_tag')}</span>
                    <h2 className="section-title text-white">{t('terminals_title')}</h2>
                    <div className="title-underline" style={{ width: '60px', height: '4px', background: 'var(--primary-grad)', margin: '15px auto 0' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
                    <div className="terminal-selector" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {terminalsData.map((term, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => setActiveIndex(idx)}
                                style={{ padding: '20px', textAlign: 'left', background: activeIndex === idx ? 'var(--accent-glow)' : 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', cursor: 'pointer' }}
                            >
                                <span style={{ display: 'block', fontSize: '1.2rem', color: activeIndex === idx ? 'var(--accent-cyan)' : 'var(--text-primary)' }}>{term.name}</span>
                            </button>
                        ))}
                    </div>

                    <div className="terminal-details" style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>{activeTerminal.name}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', lineHeight: 1.6 }}>{activeTerminal.desc[lang]}</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div>
                                <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>{t('t_draft')}</span>
                                <p style={{ fontWeight: 'bold' }}>{activeTerminal.draft}</p>
                            </div>
                            <div>
                                <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>{t('t_berths')}</span>
                                <p style={{ fontWeight: 'bold' }}>{activeTerminal.cais}</p>
                            </div>
                            <div>
                                <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>{t('t_operator')}</span>
                                <p style={{ fontWeight: 'bold' }}>{activeTerminal.op}</p>
                            </div>
                            <div>
                                <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>{t('t_cargo')}</span>
                                <p style={{ fontWeight: 'bold' }}>{activeTerminal.cargo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
