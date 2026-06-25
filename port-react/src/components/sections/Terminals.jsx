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
        <section id="terminais" style={{ padding: '120px 0', background: 'var(--bg-main)' }}>
            <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 5%' }}>
                
                {/* Header Minimalista (Alinhado à esquerda como em Serviços) */}
                <div style={{ marginBottom: '60px', maxWidth: '800px' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '15px', display: 'block' }}>
                        {t('terminals_tag')}
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '700', margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-1px', color: 'var(--text-primary)', lineHeight: '1.2' }}>
                        {t('terminals_title')}
                    </h2>
                </div>

                <div className="responsive-terminals-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start' }}>
                    
                    {/* Lista de Terminais (Apenas texto limpo, sem caixas) */}
                    <div className="responsive-terminal-tabs" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {terminalsData.map((term, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => setActiveIndex(idx)}
                                style={{ 
                                    padding: '15px 0', 
                                    textAlign: 'left', 
                                    background: 'transparent', 
                                    border: 'none',
                                    borderBottom: '1px solid var(--border-color)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <span style={{ 
                                    fontSize: '1.2rem', 
                                    fontWeight: activeIndex === idx ? '700' : '400',
                                    color: activeIndex === idx ? 'var(--primary)' : 'var(--text-secondary)',
                                    transition: 'color 0.3s ease'
                                }}>
                                    {term.name}
                                </span>
                                {activeIndex === idx && (
                                    <span style={{ color: 'var(--primary)' }}>&rarr;</span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Detalhes do Terminal (Fundo limpo, tipografia forte) */}
                    <div style={{ padding: '20px 0' }}>
                        <h3 style={{ fontSize: '2.2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '20px', letterSpacing: '-0.5px' }}>
                            {activeTerminal.name}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.8 }}>
                            {activeTerminal.desc[lang]}
                        </p>
                        
                        <div className="responsive-terminal-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                            <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '15px' }}>
                                <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{t('t_draft')}</span>
                                <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>{activeTerminal.draft}</p>
                            </div>
                            <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '15px' }}>
                                <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{t('t_berths')}</span>
                                <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>{activeTerminal.cais}</p>
                            </div>
                            <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '15px' }}>
                                <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{t('t_operator')}</span>
                                <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>{activeTerminal.op}</p>
                            </div>
                            <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '15px' }}>
                                <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{t('t_cargo')}</span>
                                <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>{activeTerminal.cargo}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
