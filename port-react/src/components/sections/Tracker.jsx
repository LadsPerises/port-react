import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../contexts/LanguageContext';
import { FaCloudSun, FaShip } from 'react-icons/fa';

export default function Tracker() {
    const { t } = useTranslation();
    const [weather, setWeather] = useState({ temp: 30, descKey: 'Partly Cloudy', wind: '12 kt / WSW', tide: '1.4 m' });
    const [tab, setTab] = useState('docked');

    const dockedVessels = [
        { name: "LNG Soyo", flag: "Bahamas", type: "Gas Carrier", loc: "Terminal LNG", status: "loading" },
        { name: "Kwanda Express", flag: "Angola", type: "Offshore Supply", loc: "Cais Kwanda", status: "docked" },
        { name: "Sogester Blue", flag: "Panama", type: "Container Ship", loc: "Porto Central", status: "loading" }
    ];

    const expectedArrivals = [
        { name: "Atlantic Tide", flag: "Liberia", type: "Oil Tanker", eta: "Hoje, 19:40", origin: "Cabinda" },
        { name: "Soyo Voyager", flag: "Marshall Is.", type: "Gas Carrier", eta: "Amanhã, 08:30", origin: "Lisboa" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setWeather(prev => ({ ...prev, temp: Math.floor(Math.random() * 5) + 28 }));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const list = tab === 'docked' ? dockedVessels : expectedArrivals;

    return (
        <section id="tracker" style={{ padding: '120px 0', background: 'var(--bg-card)' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
                
                {/* Header Minimalista (Alinhado à esquerda) */}
                <div style={{ marginBottom: '60px', maxWidth: '800px' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '15px', display: 'block' }}>
                        {t('ops_tag')}
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '700', margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-1px', color: 'var(--text-primary)', lineHeight: '1.2' }}>
                        {t('ops_title')}
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    
                    {/* Clima - Clean White Card */}
                    <div style={{ background: '#ffffff', padding: '40px', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '30px', fontWeight: '600' }}>{t('weather_title')}</h3>
                        <FaCloudSun size="4em" color="var(--primary)" style={{ margin: '0 auto' }} />
                        <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--text-primary)', margin: '20px 0 10px', lineHeight: 1 }}>{weather.temp}°C</div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: '500' }}>{weather.descKey}</p>
                        
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '30px', paddingTop: '30px', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('w_wind')}</span>
                                <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{weather.wind}</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('w_tide')}</span>
                                <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{weather.tide}</span>
                            </div>
                        </div>
                    </div>

                    {/* Tracker - Clean Dashboard List */}
                    <div style={{ background: '#ffffff', padding: '40px', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow)', gridColumn: 'span 2' }}>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>{t('tracker_title')}</h3>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <button 
                                    onClick={() => setTab('docked')} 
                                    style={{ 
                                        background: 'none', border: 'none', padding: '0 0 5px 0', cursor: 'pointer',
                                        fontSize: '1rem', fontWeight: tab === 'docked' ? '700' : '500',
                                        color: tab === 'docked' ? 'var(--primary)' : 'var(--text-muted)',
                                        borderBottom: tab === 'docked' ? '2px solid var(--primary)' : '2px solid transparent',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    Atracados
                                </button>
                                <button 
                                    onClick={() => setTab('arrivals')} 
                                    style={{ 
                                        background: 'none', border: 'none', padding: '0 0 5px 0', cursor: 'pointer',
                                        fontSize: '1rem', fontWeight: tab === 'arrivals' ? '700' : '500',
                                        color: tab === 'arrivals' ? 'var(--primary)' : 'var(--text-muted)',
                                        borderBottom: tab === 'arrivals' ? '2px solid var(--primary)' : '2px solid transparent',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    Chegadas
                                </button>
                            </div>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {list.map((v, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 0', borderBottom: i < list.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                                    <div style={{ width: '45px', height: '45px', borderRadius: '8px', background: 'rgba(0, 134, 225, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <FaShip size="1.2em" color="var(--primary)" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                                            {v.name} <span style={{ fontSize: '0.8rem', fontWeight: '500', color: 'var(--text-muted)' }}>({v.flag})</span>
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            {tab === 'docked' ? `${v.type} • ${v.loc}` : `${v.type} • De: ${v.origin}`}
                                        </div>
                                    </div>
                                    <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.95rem' }}>
                                        {tab === 'docked' ? v.status.toUpperCase() : v.eta}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
