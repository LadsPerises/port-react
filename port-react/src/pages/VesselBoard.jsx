import React, { useState, useEffect, useMemo } from 'react';
import {
    FaShip, FaSearch, FaAnchor, FaWeightHanging, FaClock,
    FaCheckCircle, FaSpinner, FaArrowRight, FaExclamationTriangle,
    FaSyncAlt, FaWater, FaIndustry, FaTimes, FaChevronDown,
    FaChevronUp, FaDownload, FaEye, FaFlag, FaMapMarkerAlt
} from 'react-icons/fa';
import { MdLocalShipping, MdOutlineVerified } from 'react-icons/md';

/* ─── Static vessel data ─── */
const VESSELS = [
    {
        id: 'V001',
        name: 'LNG Soyo Carrier',
        imo: '9712345',
        flag: 'Bahamas',
        type: 'Gas Carrier',
        terminal: 'Terminal Angola LNG',
        berth: 'Berço LNG-1',
        status: 'loading',
        arrival: '2026-06-24T06:30',
        eta_departure: '2026-06-26T14:00',
        dwt: '89 400 DWT',
        loa: '285 m',
        draft: '11.8 m',
        agent: 'Sonamar Agência',
        cargo: 'GNL – Gás Natural Liquefeito',
        captain: 'Capt. A. Fernandes',
        grossTonnage: '75 200 GT',
    },
    {
        id: 'V002',
        name: 'Kwanda Express',
        imo: '9631402',
        flag: 'Angola',
        type: 'Offshore Supply',
        terminal: 'Base da Ilha do Kwanda',
        berth: 'Cais Kwanda K-3',
        status: 'docked',
        arrival: '2026-06-23T14:10',
        eta_departure: '2026-06-25T22:00',
        dwt: '4 200 DWT',
        loa: '82 m',
        draft: '5.2 m',
        agent: 'TotalEnergies Angola',
        cargo: 'Materiais Offshore / Provisions',
        captain: 'Capt. J. Baptista',
        grossTonnage: '3 150 GT',
    },
    {
        id: 'V003',
        name: 'Sogester Blue',
        imo: '9543217',
        flag: 'Panama',
        type: 'Container Ship',
        terminal: 'Terminal Sogester – Porto Central',
        berth: 'Cais PC-2',
        status: 'discharging',
        arrival: '2026-06-24T20:45',
        eta_departure: '2026-06-27T08:00',
        dwt: '22 800 DWT',
        loa: '178 m',
        draft: '9.4 m',
        agent: 'Sogester S.A.',
        cargo: 'Contentores – 1 840 TEU',
        captain: 'Capt. W. Santos',
        grossTonnage: '18 600 GT',
    },
    {
        id: 'V004',
        name: 'Cabinda Star',
        imo: '9401890',
        flag: 'Angola',
        type: 'RoPax Ferry',
        terminal: 'Terminal Fluvial de Passageiros',
        berth: 'Cais Ferry F-1',
        status: 'docked',
        arrival: '2026-06-25T08:00',
        eta_departure: '2026-06-25T22:30',
        dwt: '1 200 DWT',
        loa: '65 m',
        draft: '3.8 m',
        agent: 'EPS-EP Operações',
        cargo: 'Passageiros / Viaturas – 210 pax',
        captain: 'Capt. F. Lopes',
        grossTonnage: '980 GT',
    },
    {
        id: 'V005',
        name: 'Atlantic Tide',
        imo: '9782341',
        flag: 'Liberia',
        type: 'Oil Tanker',
        terminal: 'Terminal Angola LNG (ancoragem)',
        berth: 'Ancoragem A-2',
        status: 'anchored',
        arrival: '2026-06-25T09:00',
        eta_departure: '2026-06-28T00:00',
        dwt: '158 000 DWT',
        loa: '332 m',
        draft: '14.2 m',
        agent: 'Sonangol Logística',
        cargo: 'Petróleo Bruto – em espera',
        captain: 'Capt. M. Oliveira',
        grossTonnage: '82 400 GT',
    },
    {
        id: 'V006',
        name: 'Rio Congo Voyager',
        imo: '9123456',
        flag: 'Marshall Is.',
        type: 'General Cargo',
        terminal: 'Cais Comercial',
        berth: 'Berço CC-1',
        status: 'loading',
        arrival: '2026-06-25T04:30',
        eta_departure: '2026-06-26T18:00',
        dwt: '9 700 DWT',
        loa: '128 m',
        draft: '7.1 m',
        agent: 'Angonave',
        cargo: 'Carga Geral – Materiais de Construção',
        captain: 'Capt. S. Nkosi',
        grossTonnage: '7 850 GT',
    },
    {
        id: 'V007',
        name: 'Soyo Provider',
        imo: '9654321',
        flag: 'Angola',
        type: 'Offshore Supply',
        terminal: 'Base da Ilha do Kwanda',
        berth: 'Cais Kwanda K-5',
        status: 'docked',
        arrival: '2026-06-22T18:15',
        eta_departure: '2026-06-26T06:00',
        dwt: '3 600 DWT',
        loa: '76 m',
        draft: '4.9 m',
        agent: 'ENI Angola',
        cargo: 'Tubagens / Equipamentos Perfuração',
        captain: 'Capt. R. Cardoso',
        grossTonnage: '2 800 GT',
    },
    {
        id: 'V008',
        name: 'Zaire Spirit',
        imo: '9210987',
        flag: 'Cyprus',
        type: 'Bulk Carrier',
        terminal: 'Cais Comercial',
        berth: 'Berço CC-3',
        status: 'discharging',
        arrival: '2026-06-24T11:00',
        eta_departure: '2026-06-27T16:00',
        dwt: '45 200 DWT',
        loa: '226 m',
        draft: '12.1 m',
        agent: 'Transmarítima Angola',
        cargo: 'Clínquer / Cimento – 38 000 T',
        captain: 'Capt. G. Pereira',
        grossTonnage: '26 100 GT',
    },
];

const STATUS_CONFIG = {
    docked:      { label: 'Atracado',       color: '#10b981', bg: 'rgba(16,185,129,0.12)',  icon: <FaAnchor /> },
    loading:     { label: 'A Carregar',     color: '#f59e0b', bg: 'rgba(245,158,11,0.12)',  icon: <FaSpinner /> },
    discharging: { label: 'A Descarregar',  color: '#6366f1', bg: 'rgba(99,102,241,0.12)', icon: <FaArrowRight /> },
    anchored:    { label: 'Ancorado',       color: '#64748b', bg: 'rgba(100,116,139,0.12)', icon: <FaWater /> },
};

const TYPE_ICONS = {
    'Gas Carrier':     <FaIndustry />,
    'Offshore Supply': <FaShip />,
    'Container Ship':  <MdLocalShipping />,
    'RoPax Ferry':     <FaShip />,
    'Oil Tanker':      <FaWeightHanging />,
    'General Cargo':   <MdLocalShipping />,
    'Bulk Carrier':    <FaWeightHanging />,
};

/* ── Subcomponents ── */

function StatusBadge({ status }) {
    const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.docked;
    return (
        <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            background: cfg.bg, color: cfg.color,
            padding: '4px 12px', borderRadius: '20px',
            fontSize: '0.73rem', fontWeight: '700', letterSpacing: '0.5px',
            border: `1px solid ${cfg.color}40`,
            textTransform: 'uppercase', whiteSpace: 'nowrap',
        }}>
            {cfg.icon}&nbsp;{cfg.label}
        </span>
    );
}

function StatCard({ icon, value, label, color }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '14px', padding: '22px 24px',
                display: 'flex', alignItems: 'center', gap: '16px',
                backdropFilter: 'blur(10px)',
                transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: hovered ? `0 8px 30px ${color}30` : 'none',
                transition: 'transform 0.3s, box-shadow 0.3s',
            }}
        >
            <div style={{
                width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
                background: `${color}25`, color, fontSize: '1.3rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
                {icon}
            </div>
            <div>
                <div style={{ fontSize: '1.9rem', fontWeight: '800', color: '#ffffff', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>{label}</div>
            </div>
        </div>
    );
}

function VesselRow({ vessel, onClick, expanded }) {
    const cfg = STATUS_CONFIG[vessel.status] || STATUS_CONFIG.docked;
    const typeIcon = TYPE_ICONS[vessel.type] || <FaShip />;
    const arrivalDate = new Date(vessel.arrival);
    const etaDep = new Date(vessel.eta_departure);
    const now = new Date();
    const hoursInPort = Math.max(0, Math.floor((now - arrivalDate) / 3600000));
    const hoursLeft = Math.max(0, Math.floor((etaDep - now) / 3600000));
    const urgent = hoursLeft < 6;
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <div
                onClick={onClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    display: 'grid',
                    gridTemplateColumns: '2.5fr 1.6fr 1.4fr 1.3fr 1.2fr 0.5fr',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px 24px',
                    borderBottom: '1px solid var(--border-color)',
                    cursor: 'pointer',
                    background: expanded ? 'rgba(0,134,225,0.07)' : hovered ? 'rgba(0,134,225,0.04)' : 'transparent',
                    transition: 'background 0.2s',
                }}
            >
                {/* Name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                        width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                        background: `${cfg.color}18`, color: cfg.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.05rem',
                    }}>
                        {typeIcon}
                    </div>
                    <div>
                        <div style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.95rem' }}>{vessel.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                            IMO {vessel.imo} · {vessel.type}
                        </div>
                    </div>
                </div>

                {/* Berth */}
                <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>{vessel.berth}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <FaFlag style={{ fontSize: '0.65rem' }} /> {vessel.flag}
                    </div>
                </div>

                {/* Arrival */}
                <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                        {arrivalDate.toLocaleDateString('pt-AO', { day: '2-digit', month: 'short' })}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {arrivalDate.toLocaleTimeString('pt-AO', { hour: '2-digit', minute: '2-digit' })} · {hoursInPort}h no porto
                    </div>
                </div>

                {/* ETA Departure */}
                <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: urgent ? '#f59e0b' : 'var(--text-primary)' }}>
                        {etaDep.toLocaleDateString('pt-AO', { day: '2-digit', month: 'short' })}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: urgent ? '#f59e0b' : 'var(--text-muted)', marginTop: '2px' }}>
                        {etaDep.toLocaleTimeString('pt-AO', { hour: '2-digit', minute: '2-digit' })} · {hoursLeft}h restantes
                    </div>
                </div>

                {/* Status */}
                <div><StatusBadge status={vessel.status} /></div>

                {/* Expand toggle */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    {expanded ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </div>

            {/* Expanded detail panel */}
            {expanded && (
                <div style={{
                    padding: '24px 24px 28px',
                    background: 'rgba(0,134,225,0.05)',
                    borderBottom: '1px solid var(--border-color)',
                    animation: 'vbFadeIn 0.25s ease',
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '14px',
                    }}>
                        {[
                            { label: 'Agente Marítimo',       value: vessel.agent,        icon: <MdOutlineVerified /> },
                            { label: 'Comandante',             value: vessel.captain,      icon: <FaCheckCircle /> },
                            { label: 'Carga',                  value: vessel.cargo,        icon: <FaWeightHanging /> },
                            { label: 'Comprimento Total (LOA)',value: vessel.loa,          icon: <FaShip /> },
                            { label: 'DWT',                    value: vessel.dwt,          icon: <FaWeightHanging /> },
                            { label: 'Arqueação Bruta',        value: vessel.grossTonnage, icon: <FaAnchor /> },
                            { label: 'Calado Máximo',          value: vessel.draft,        icon: <FaWater /> },
                            { label: 'Terminal',               value: vessel.terminal,     icon: <FaMapMarkerAlt /> },
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                background: 'var(--bg-card)', borderRadius: '10px',
                                padding: '14px 16px', border: '1px solid var(--border-color)',
                            }}>
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    color: 'var(--text-muted)', fontSize: '0.7rem',
                                    textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px',
                                }}>
                                    {item.icon} {item.label}
                                </div>
                                <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.88rem' }}>
                                    {item.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

/* ── Main Page ── */
export default function VesselBoard() {
    const [search, setSearch] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [filterType, setFilterType] = useState('all');
    const [expandedId, setExpandedId] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(new Date());
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setLastUpdate(new Date()), 30000);
        return () => clearInterval(timer);
    }, []);

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => { setLastUpdate(new Date()); setRefreshing(false); }, 1200);
    };

    const types = useMemo(() => [...new Set(VESSELS.map(v => v.type))], []);

    const filtered = useMemo(() => VESSELS.filter(v => {
        const q = search.toLowerCase();
        const matchSearch = v.name.toLowerCase().includes(q)
            || v.imo.includes(q)
            || v.flag.toLowerCase().includes(q)
            || v.berth.toLowerCase().includes(q)
            || v.type.toLowerCase().includes(q);
        const matchStatus = filterStatus === 'all' || v.status === filterStatus;
        const matchType = filterType === 'all' || v.type === filterType;
        return matchSearch && matchStatus && matchType;
    }), [search, filterStatus, filterType]);

    const stats = useMemo(() => ({
        total:     VESSELS.length,
        docked:    VESSELS.filter(v => v.status === 'docked').length,
        operating: VESSELS.filter(v => v.status === 'loading' || v.status === 'discharging').length,
        anchored:  VESSELS.filter(v => v.status === 'anchored').length,
    }), []);

    const hasFilters = filterStatus !== 'all' || filterType !== 'all' || search;

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-main)', paddingBottom: '80px' }}>

            {/* ── Hero Banner ── */}
            <div style={{
                position: 'relative',
                paddingTop: '160px',
                paddingBottom: '80px',
                background: '#020b1e',
                overflow: 'hidden',
                color: '#fff',
                borderBottom: '1px solid var(--border-color)',
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'url("/images/hero_drone.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                    zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto', padding: '0 5%' }}>

                    {/* Title row */}
                    <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px',
                        marginBottom: '40px',
                    }}>
                        <div>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(0,242,254,0.1)', color: 'var(--accent-cyan)',
                                padding: '5px 16px', borderRadius: '20px',
                                fontSize: '0.72rem', fontWeight: '700', letterSpacing: '1.2px',
                                textTransform: 'uppercase', border: '1px solid rgba(0,242,254,0.2)',
                                marginBottom: '15px',
                            }}>
                                <span style={{
                                    width: '7px', height: '7px', borderRadius: '50%',
                                    background: '#10b981', display: 'inline-block',
                                    animation: 'vbPulse 1.5s infinite',
                                }} />
                                Dados em Tempo Real
                            </span>
                            <h1 style={{
                                fontFamily: 'var(--font-title)',
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: '800', color: '#ffffff',
                                margin: '0 0 20px 0', letterSpacing: '-1px', lineHeight: 1.1,
                            }}>
                                Navios Atracados no Porto do Soyo
                            </h1>
                            <p style={{ color: '#94a3b8', margin: 0, fontSize: '1.2rem', maxWidth: '600px', lineHeight: 1.6 }}>
                                Consulte em tempo real todos os navios presentes nos terminais e berços administrados pela EPS-EP.
                            </p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '10px', padding: '10px 16px',
                                color: '#e2e8f0', fontSize: '0.82rem',
                                backdropFilter: 'blur(10px)',
                                display: 'flex', alignItems: 'center', gap: '8px',
                            }}>
                                <FaClock style={{ color: 'var(--primary)' }} />
                                Atualizado às {lastUpdate.toLocaleTimeString('pt-AO', { hour: '2-digit', minute: '2-digit' })}
                            </div>
                            <button
                                onClick={handleRefresh}
                                disabled={refreshing}
                                style={{
                                    background: 'var(--primary)', color: '#ffffff', border: 'none',
                                    borderRadius: '10px', padding: '10px 20px', cursor: refreshing ? 'not-allowed' : 'pointer',
                                    fontSize: '0.85rem', fontWeight: '600',
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    opacity: refreshing ? 0.7 : 1, transition: 'opacity 0.2s',
                                }}
                            >
                                <FaSyncAlt style={{ animation: refreshing ? 'vbSpin 0.8s linear infinite' : 'none' }} />
                                {refreshing ? 'A atualizar...' : 'Atualizar'}
                            </button>
                            <button style={{
                                background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff',
                                border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '10px',
                                padding: '10px 18px', cursor: 'pointer',
                                fontSize: '0.85rem', fontWeight: '600',
                                display: 'flex', alignItems: 'center', gap: '8px',
                                backdropFilter: 'blur(10px)',
                            }}>
                                <FaDownload /> Exportar CSV
                            </button>
                        </div>
                    </div>

                    {/* Stat cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))', gap: '16px' }}>
                        <StatCard icon={<FaShip />}         value={stats.total}     label="Total no Porto"    color="#0086e1" />
                        <StatCard icon={<FaAnchor />}       value={stats.docked}    label="Atracados"         color="#10b981" />
                        <StatCard icon={<FaSpinner />}      value={stats.operating} label="Em Operação"       color="#f59e0b" />
                        <StatCard icon={<FaWater />}        value={stats.anchored}  label="Em Ancoragem"      color="#6366f1" />
                    </div>
                </div>
            </div>

            {/* ── Filters + Table ── */}
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 5% 0' }}>

                {/* Filter bar */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>

                    {/* Search input */}
                    <div style={{ position: 'relative', flex: '1 1 260px' }}>
                        <FaSearch style={{
                            position: 'absolute', left: '14px', top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'var(--text-muted)', fontSize: '0.85rem',
                        }} />
                        <input
                            type="text"
                            placeholder="Pesquisar por nome, IMO, bandeira ou berço..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{
                                width: '100%', padding: '11px 36px 11px 40px',
                                background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                                borderRadius: '10px', color: 'var(--text-primary)',
                                fontSize: '0.9rem', outline: 'none',
                                backdropFilter: 'blur(10px)', boxSizing: 'border-box',
                                transition: 'border-color 0.2s',
                            }}
                            onFocus={e => { e.target.style.borderColor = 'var(--primary)'; }}
                            onBlur={e => { e.target.style.borderColor = 'var(--border-color)'; }}
                        />
                        {search && (
                            <button onClick={() => setSearch('')} style={{
                                position: 'absolute', right: '12px', top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'none', border: 'none',
                                color: 'var(--text-muted)', cursor: 'pointer', padding: '2px',
                            }}><FaTimes /></button>
                        )}
                    </div>

                    {/* Status buttons */}
                    {[
                        { key: 'all',         label: 'Todos' },
                        { key: 'docked',      label: 'Atracado' },
                        { key: 'loading',     label: 'A Carregar' },
                        { key: 'discharging', label: 'A Descarregar' },
                        { key: 'anchored',    label: 'Ancorado' },
                    ].map(opt => (
                        <button
                            key={opt.key}
                            onClick={() => setFilterStatus(opt.key)}
                            style={{
                                padding: '9px 16px', borderRadius: '8px', cursor: 'pointer',
                                fontSize: '0.82rem', fontWeight: '600', border: '1px solid',
                                borderColor: filterStatus === opt.key ? 'var(--primary)' : 'var(--border-color)',
                                background: filterStatus === opt.key ? 'var(--primary)' : 'var(--bg-card)',
                                color: filterStatus === opt.key ? '#fff' : 'var(--text-secondary)',
                                transition: 'all 0.2s', backdropFilter: 'blur(8px)',
                            }}
                        >
                            {opt.label}
                        </button>
                    ))}

                    {/* Type dropdown */}
                    <select
                        value={filterType}
                        onChange={e => setFilterType(e.target.value)}
                        style={{
                            padding: '10px 14px', borderRadius: '10px',
                            background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                            color: 'var(--text-primary)', fontSize: '0.85rem',
                            cursor: 'pointer', outline: 'none', backdropFilter: 'blur(10px)',
                        }}
                    >
                        <option value="all">Todos os Tipos</option>
                        {types.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>

                {/* Result count */}
                <div style={{ marginBottom: '16px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: '700' }}>{filtered.length}</span>
                    {' '}navio{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
                    {hasFilters && (
                        <button
                            onClick={() => { setSearch(''); setFilterStatus('all'); setFilterType('all'); }}
                            style={{
                                marginLeft: '10px', background: 'none', border: 'none',
                                color: 'var(--primary)', cursor: 'pointer',
                                fontSize: '0.85rem', fontWeight: '600',
                            }}
                        >
                            Limpar filtros ×
                        </button>
                    )}
                </div>

                {/* Main table card */}
                <div style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                    borderRadius: '16px', overflow: 'hidden', backdropFilter: 'blur(12px)',
                }}>
                    {/* Column headers */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '2.5fr 1.6fr 1.4fr 1.3fr 1.2fr 0.5fr',
                        gap: '12px', padding: '13px 24px',
                        background: 'rgba(0,134,225,0.06)',
                        borderBottom: '1px solid var(--border-color)',
                        fontSize: '0.72rem', fontWeight: '700',
                        color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px',
                    }}>
                        <span>Navio</span>
                        <span>Berço / Localização</span>
                        <span>Chegada</span>
                        <span>Saída Prevista</span>
                        <span>Estado</span>
                        <span style={{ textAlign: 'right' }}><FaEye /></span>
                    </div>

                    {/* Rows */}
                    {filtered.length > 0 ? (
                        filtered.map(vessel => (
                            <VesselRow
                                key={vessel.id}
                                vessel={vessel}
                                expanded={expandedId === vessel.id}
                                onClick={() => setExpandedId(expandedId === vessel.id ? null : vessel.id)}
                            />
                        ))
                    ) : (
                        <div style={{ padding: '64px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>
                            <FaExclamationTriangle style={{ fontSize: '2.2rem', color: '#f59e0b', marginBottom: '14px' }} />
                            <div style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1rem' }}>Nenhum navio encontrado</div>
                            <div style={{ fontSize: '0.85rem', marginTop: '6px' }}>Tente ajustar os filtros ou a pesquisa.</div>
                        </div>
                    )}
                </div>

                {/* Operational notice */}
                <div style={{
                    marginTop: '24px', padding: '14px 20px',
                    background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)',
                    borderRadius: '10px', display: 'flex', gap: '10px', alignItems: 'flex-start',
                    color: 'var(--text-secondary)', fontSize: '0.82rem',
                }}>
                    <FaExclamationTriangle style={{ color: '#f59e0b', marginTop: '2px', flexShrink: 0 }} />
                    <span>
                        <strong style={{ color: 'var(--text-primary)' }}>Nota Operacional:</strong>{' '}
                        Os dados são atualizados de 30 em 30 minutos pelo Sistema de Controlo de Tráfego Marítimo da EPS-EP.
                        As horas de saída são estimativas sujeitas a alteração. Para informações urgentes, contacte a Capitania do Porto do Soyo.
                    </span>
                </div>
            </div>

            {/* Keyframe styles */}
            <style>{`
                @keyframes vbFadeIn {
                    from { opacity: 0; transform: translateY(-8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes vbSpin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes vbPulse {
                    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
                    50%      { opacity: 0.7; box-shadow: 0 0 0 5px rgba(16,185,129,0); }
                }
            `}</style>
        </main>
    );
}
