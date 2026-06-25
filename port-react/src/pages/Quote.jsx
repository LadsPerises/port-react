import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { FaPaperPlane, FaSpinner, FaShieldAlt, FaClock, FaShip } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

export default function Quote() {
    const { t, lang } = useTranslation();
    const [status, setStatus] = useState('idle');
    const [selectedService, setSelectedService] = useState('');
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.state && location.state.serviceId) {
            setSelectedService(location.state.serviceId);
        }
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                setStatus('idle');
                e.target.reset();
                setSelectedService('');
            }, 3000);
        }, 1500);
    };

    const inputStyle = {
        width: '100%',
        padding: '16px 20px',
        background: 'var(--bg-main)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        color: 'var(--text-primary)',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.3s ease',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '10px',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    };

    return (
        <main style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
            
            {/* Custom Hero for Quote Page */}
            <div style={{
                position: 'relative',
                paddingTop: '160px',
                paddingBottom: '80px',
                background: '#020b1e', // Dark premium blue
                overflow: 'hidden',
                color: '#fff'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'url("/images/hero_seaport.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                    zIndex: 0
                }}></div>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto', padding: '0 5%' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '15px' }}>
                        {lang === 'pt' ? 'Departamento Comercial' : 'Commercial Department'}
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>
                        {lang === 'pt' ? 'Impulsione o Seu Negócio' : 'Boost Your Business'}
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', lineHeight: 1.6 }}>
                        {lang === 'pt' ? 'Soluções logísticas completas e personalizadas para as necessidades específicas da sua operação.' : 'Complete and customized logistics solutions for the specific needs of your operation.'}
                    </p>
                </div>
            </div>

            <div className="container responsive-overlap-container" style={{ maxWidth: '1440px', margin: '-40px auto 100px', padding: '0 5%', position: 'relative', zIndex: 10 }}>
                <div className="responsive-quote-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'flex-start' }}>
                    
                    {/* Left Column: Value Proposition */}
                    <div className="responsive-panel" style={{ background: 'var(--bg-card)', padding: '50px', borderRadius: '24px', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '30px', letterSpacing: '-0.5px' }}>
                            {lang === 'pt' ? 'Porquê Escolher o Porto do Soyo?' : 'Why Choose Port of Soyo?'}
                        </h2>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'rgba(0, 134, 225, 0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <FaShieldAlt size="1.8em" color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>{lang === 'pt' ? 'Segurança Inegociável' : 'Non-negotiable Security'}</h4>
                                    <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{lang === 'pt' ? 'Monitorização 24/7 e protocolos internacionais de segurança (ISPS Code).' : '24/7 monitoring and international security protocols (ISPS Code).'}</p>
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'rgba(0, 134, 225, 0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <FaClock size="1.8em" color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>{lang === 'pt' ? 'Eficiência Operacional' : 'Operational Efficiency'}</h4>
                                    <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{lang === 'pt' ? 'Tempos de espera reduzidos e manuseamento rápido de carga.' : 'Reduced waiting times and fast cargo handling.'}</p>
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'rgba(0, 134, 225, 0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <FaShip size="1.8em" color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>{lang === 'pt' ? 'Infraestrutura de Ponta' : 'Cutting-edge Infrastructure'}</h4>
                                    <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{lang === 'pt' ? 'Equipamentos modernos para operações offshore, ro-ro e contentores.' : 'Modern equipment for offshore, ro-ro and container operations.'}</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid var(--border-color)' }}>
                            <p style={{ color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '10px' }}>{lang === 'pt' ? 'Precisa de ajuda imediata?' : 'Need immediate help?'}</p>
                            <a href="tel:+244232630110" style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '800', textDecoration: 'none' }}>+244 232 630 110</a>
                        </div>
                    </div>

                    {/* Right Column: Premium Form */}
                    <div className="responsive-panel responsive-quote-form" style={{ background: 'var(--bg-card)', padding: '50px', borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', border: '1px solid var(--border-color)', position: 'relative', top: '-80px' }}>
                        
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '10px', letterSpacing: '-0.5px' }}>
                            {lang === 'pt' ? 'Solicitar Cotação' : 'Request a Quote'}
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '35px', fontSize: '1.05rem', lineHeight: 1.6 }}>
                            {lang === 'pt' ? 'Preencha os detalhes e receberá uma proposta comercial adaptada às suas necessidades em 24h úteis.' : 'Fill in the details and you will receive a commercial proposal tailored to your needs within 24 business hours.'}
                        </p>

                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(22, 163, 74, 0.1)', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontSize: '3rem' }}>
                                    ✓
                                </div>
                                <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '15px' }}>
                                    {lang === 'pt' ? 'Recebemos o seu pedido!' : 'We received your request!'}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
                                    {lang === 'pt' ? 'A nossa equipa comercial já foi notificada e entrará em contacto muito em breve através dos contactos fornecidos.' : 'Our commercial team has been notified and will contact you very soon using the provided details.'}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <div className="responsive-form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', alignItems: 'end' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <label style={labelStyle}>{lang === 'pt' ? 'Nome / Responsável' : 'Name / Contact'}</label>
                                        <input type="text" required style={inputStyle} onFocus={e => {e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(0, 134, 225, 0.1)'}} onBlur={e => {e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.02)'}} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <label style={labelStyle}>{lang === 'pt' ? 'Empresa' : 'Company'}</label>
                                        <input type="text" required style={inputStyle} onFocus={e => {e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(0, 134, 225, 0.1)'}} onBlur={e => {e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.02)'}} />
                                    </div>
                                </div>
                                
                                <div className="responsive-form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', alignItems: 'end' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <label style={labelStyle}>{lang === 'pt' ? 'E-mail' : 'Email'}</label>
                                        <input type="email" required style={inputStyle} onFocus={e => {e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(0, 134, 225, 0.1)'}} onBlur={e => {e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.02)'}} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <label style={labelStyle}>{lang === 'pt' ? 'Telefone / WhatsApp' : 'Phone / WhatsApp'}</label>
                                        <input type="tel" required style={inputStyle} onFocus={e => {e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(0, 134, 225, 0.1)'}} onBlur={e => {e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.02)'}} />
                                    </div>
                                </div>

                                <div>
                                    <label style={labelStyle}>{lang === 'pt' ? 'Serviço de Interesse Principal' : 'Primary Service of Interest'}</label>
                                    <select 
                                        value={selectedService} 
                                        onChange={e => setSelectedService(e.target.value)}
                                        required 
                                        style={{...inputStyle, appearance: 'none', cursor: 'pointer', backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23475569%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 20px top 50%', backgroundSize: '12px auto'}}
                                        onFocus={e => {e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(0, 134, 225, 0.1)'}} onBlur={e => {e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.02)'}}
                                    >
                                        <option value="" disabled>{lang === 'pt' ? 'Escolha uma opção...' : 'Choose an option...'}</option>
                                        <option value="pilotagem">{lang === 'pt' ? 'Pilotagem e Praticagem' : 'Pilotage & Navigation'}</option>
                                        <option value="reboque">{lang === 'pt' ? 'Reboque e Amarração' : 'Tugboat & Mooring'}</option>
                                        <option value="carga">{lang === 'pt' ? 'Movimentação de Cargas' : 'Cargo Handling'}</option>
                                        <option value="logistica">{lang === 'pt' ? 'Armazenagem e Logística' : 'Storage & Logistics'}</option>
                                        <option value="fluvial">{lang === 'pt' ? 'Transporte Fluvial' : 'River Transport'}</option>
                                        <option value="offshore">{lang === 'pt' ? 'Apoio Offshore' : 'Offshore Support'}</option>
                                        <option value="outro">{lang === 'pt' ? 'Outro / Consultoria Logística' : 'Other / Logistics Consulting'}</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={labelStyle}>{lang === 'pt' ? 'Especificações (Volume, datas e necessidades)' : 'Specifications (Volume, dates and needs)'}</label>
                                    <textarea rows="5" required style={{...inputStyle, resize: 'none'}} onFocus={e => {e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(0, 134, 225, 0.1)'}} onBlur={e => {e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.02)'}}></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={status === 'loading'} 
                                    style={{ 
                                        background: 'var(--primary)', color: '#fff', border: 'none', 
                                        padding: '20px', borderRadius: '12px', cursor: 'pointer', 
                                        fontWeight: '700', fontSize: '1.2rem', letterSpacing: '0.5px', 
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', 
                                        marginTop: '10px', transition: 'all 0.3s',
                                        boxShadow: '0 8px 25px rgba(0, 134, 225, 0.4)'
                                    }} 
                                    onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 134, 225, 0.6)'; }} 
                                    onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 134, 225, 0.4)'; }}
                                >
                                    {status === 'loading' ? <><FaSpinner className="fa-spin" /> {lang === 'pt' ? 'A enviar...' : 'Sending...'}</> : <>{lang === 'pt' ? 'Enviar Pedido de Cotação' : 'Send Quote Request'} <FaPaperPlane /></>}
                                </button>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
                                    {lang === 'pt' ? 'Garantimos a total confidencialidade dos seus dados.' : 'We guarantee the complete confidentiality of your data.'}
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
