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
        <section id="tracker" className="section-padding ops-section" style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span className="section-tag" style={{ color: 'var(--accent-cyan)' }}>{t('ops_tag')}</span>
                    <h2 className="section-title text-white">{t('ops_title')}</h2>
                    <div className="title-underline" style={{ width: '60px', height: '4px', background: 'var(--primary-grad)', margin: '15px auto 0' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    <div className="weather-widget" style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '20px' }}>{t('weather_title')}</h3>
                        <FaCloudSun size="4em" color="var(--accent-cyan)" />
                        <div style={{ fontSize: '3rem', fontWeight: 'bold', margin: '20px 0' }}>{weather.temp}°C</div>
                        <p style={{ color: 'var(--text-secondary)' }}>{weather.descKey}</p>
                        <hr style={{ borderColor: 'var(--border-color)', margin: '20px 0' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                            <span>{t('w_wind')}: {weather.wind}</span>
                            <span>{t('w_tide')}: {weather.tide}</span>
                        </div>
                    </div>

                    <div className="tracker-widget" style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border-color)', gridColumn: 'span 2' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h3>{t('tracker_title')}</h3>
                            <div>
                                <button className={`btn ${tab === 'docked' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setTab('docked')} style={{ marginRight: '10px' }}>Atracados</button>
                                <button className={`btn ${tab === 'arrivals' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setTab('arrivals')}>Chegadas</button>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {list.map((v, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', background: 'var(--bg-main)', borderRadius: '8px' }}>
                                    <FaShip size="2em" color="var(--accent-blue)" />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{v.name} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>({v.flag})</span></div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            {tab === 'docked' ? `${v.type} • ${v.loc}` : `${v.type} • De: ${v.origin}`}
                                        </div>
                                    </div>
                                    <div style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>
                                        {tab === 'docked' ? v.status : v.eta}
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
