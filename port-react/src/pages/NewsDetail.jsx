import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';
import { FaCalendarAlt, FaTag, FaArrowLeft, FaArrowRight, FaShare } from 'react-icons/fa';

// Full article content database
const allNews = [
    {
        id: 1,
        category: { pt: 'Infraestrutura', en: 'Infrastructure' },
        date: '18 Jun. 2026',
        readTime: { pt: '4 min de leitura', en: '4 min read' },
        title: { pt: 'Porto do Soyo inicia expansão do Terminal de Contentores', en: 'Port of Soyo begins Container Terminal expansion' },
        subtitle: { pt: 'Projeto de €85 milhões vai transformar a capacidade logística da região noroeste de Angola', en: '€85 million project will transform logistics capacity of northwestern Angola' },
        image: '/images/Gemini_Generated_Image_pgn6dpgn6dpgn6dp.jpg',
        featured: true,
        content: {
            pt: `
A Empresa Portuária do Soyo (EPS-EP) deu início formal ao processo de expansão do seu Terminal de Contentores, num projeto de investimento avaliado em 85 milhões de euros que vai transformar radicalmente a infraestrutura portuária da região noroeste de Angola.

**Uma nova era para a logística angolana**

O projeto, aprovado pelo Conselho de Administração da EPS-EP em parceria com o Ministério dos Transportes de Angola, prevê o aumento da capacidade de movimentação de contentores em 40%, passando dos atuais 120.000 TEUs anuais para 170.000 TEUs até ao final de 2027.

A expansão contempla a construção de dois novos berços de atracação com 350 metros de comprimento cada, a aquisição de quatro portêineres de nova geração (Ship-to-Shore cranes) e a implementação de um sistema automatizado de gestão de pátio (ARMG - Automated Rail-Mounted Gantry cranes).

**Impacto regional e nacional**

O Administrador-Executivo da EPS-EP, Dr. António Sebastião, afirmou que "este investimento consolida o papel estratégico do Porto do Soyo como porta de entrada privilegiada para as cadeias de abastecimento que servem a indústria petrolífera do Zaire e do Cabinda, mas também para as exportações agrícolas e industriais da região."

O projeto deverá criar diretamente 320 novos postos de trabalho qualificados durante a fase de construção e cerca de 180 empregos permanentes após a conclusão das obras.

**Calendário de obras**

A primeira fase das obras, que contempla a dragagem do canal de acesso para os 14 metros de profundidade, teve início em maio de 2026. A segunda fase, de construção dos berços e instalação dos equipamentos, está prevista para arrancar no primeiro trimestre de 2027, com conclusão total esperada para o quarto trimestre do mesmo ano.

**Sustentabilidade no centro do projeto**

Em linha com os compromissos ambientais da EPS-EP, o novo terminal vai incorporar painéis solares fotovoltaicos com capacidade de 2,5 MWp para alimentar os portêineres elétricos, reduzindo as emissões de CO₂ em cerca de 30% face à configuração atual.
            `,
            en: `
Porto do Soyo (EPS-EP) has formally launched the expansion process of its Container Terminal, in an investment project valued at €85 million that will radically transform the port infrastructure of northwestern Angola.

**A new era for Angolan logistics**

The project, approved by EPS-EP's Board of Directors in partnership with Angola's Ministry of Transport, foresees a 40% increase in container handling capacity, rising from the current 120,000 TEUs per year to 170,000 TEUs by end of 2027.

The expansion includes the construction of two new berthing facilities of 350 meters each, the acquisition of four next-generation Ship-to-Shore cranes and the implementation of an automated yard management system (ARMG - Automated Rail-Mounted Gantry cranes).

**Regional and national impact**

EPS-EP's Executive Administrator, Dr. António Sebastião, stated that "this investment consolidates the strategic role of Port of Soyo as the privileged gateway for supply chains serving the oil industry in Zaire and Cabinda, as well as agricultural and industrial exports from the region."

The project is expected to directly create 320 new skilled jobs during the construction phase and approximately 180 permanent positions after the works are completed.

**Construction timeline**

The first phase of works, which includes dredging the access channel to 14 meters depth, began in May 2026. The second phase, covering berth construction and equipment installation, is scheduled to start in the first quarter of 2027, with full completion expected in the fourth quarter of the same year.

**Sustainability at the core**

In line with EPS-EP's environmental commitments, the new terminal will incorporate photovoltaic solar panels with a capacity of 2.5 MWp to power the electric cranes, reducing CO₂ emissions by approximately 30% compared to the current setup.
            `
        }
    },
    {
        id: 2,
        category: { pt: 'Operações', en: 'Operations' },
        date: '10 Jun. 2026',
        readTime: { pt: '3 min de leitura', en: '3 min read' },
        title: { pt: 'Novo serviço de transporte fluvial Soyo–Cabinda aumenta frequências', en: 'New Soyo–Cabinda river transport service increases frequency' },
        subtitle: { pt: 'A partir de julho, passam a existir três ligações diárias entre as duas cidades, reduzindo o tempo de viagem para 90 minutos', en: 'From July, there will be three daily connections between the two cities, reducing travel time to 90 minutes' },
        image: '/images/Gemini_Generated_Image_pg2lw2pg2lw2pg2l.jpg',
        featured: false,
        content: {
            pt: `
A Empresa Portuária do Soyo (EPS-EP) anuncia o reforço do serviço de transporte fluvial que liga o Soyo a Cabinda, com o aumento das frequências diárias de uma para três rotações, a partir de 1 de julho de 2026.

**Resposta ao crescimento da procura**

A decisão surge na sequência de um crescimento de 65% na procura registado no primeiro semestre de 2026, impulsionado pelo aumento da atividade económica nas duas cidades e pela crescente mobilidade de profissionais da indústria petrolífera.

Os novos horários contemplam partidas às 06h30, 12h00 e 17h30 a partir do Soyo, com chegada a Cabinda após 90 minutos de viagem. A regresso terá saídas às 08h30, 14h00 e 19h30.

**Frota renovada**

Para suportar as novas frequências, a EPS-EP incorporou dois novos catamarãs de alta velocidade, cada um com capacidade para 180 passageiros, ar-condicionado, serviço de bordo e sistemas de comunicação de emergência de última geração. A frota passa assim a contar com quatro embarcações nesta rota.

**Tarifas e reservas**

As tarifas mantêm-se inalteradas, com um bilhete simples a 4.500 Kwanzas para passageiros individuais. Empresas com contratos de volume podem beneficiar de tarifas corporativas negociadas diretamente com a EPS-EP.
            `,
            en: `
Porto do Soyo (EPS-EP) announces the reinforcement of the river transport service linking Soyo to Cabinda, with an increase in daily frequencies from one to three rotations, starting July 1, 2026.

**Response to growing demand**

The decision follows a 65% increase in demand recorded in the first half of 2026, driven by growing economic activity in both cities and increased mobility of oil industry professionals.

The new schedules include departures at 06:30, 12:00 and 17:30 from Soyo, arriving in Cabinda after a 90-minute journey. Return trips depart at 08:30, 14:00 and 19:30.

**Renewed fleet**

To support the new frequencies, EPS-EP has incorporated two new high-speed catamarans, each with capacity for 180 passengers, air conditioning, onboard service and state-of-the-art emergency communication systems. The fleet now comprises four vessels on this route.

**Fares and bookings**

Fares remain unchanged, with a single ticket at 4,500 Kwanzas for individual passengers. Companies with volume contracts can benefit from corporate rates negotiated directly with EPS-EP.
            `
        }
    },
    {
        id: 3,
        category: { pt: 'Offshore', en: 'Offshore' },
        date: '2 Jun. 2026',
        readTime: { pt: '3 min de leitura', en: '3 min read' },
        title: { pt: 'Base da Ilha do Kwanda recebe certificação ambiental internacional', en: 'Kwanda Island Base receives international environmental certification' },
        subtitle: { pt: 'A certificação ISO 14001:2015 reconhece os padrões de gestão ambiental implementados nas operações offshore', en: 'ISO 14001:2015 certification recognizes the environmental management standards implemented in offshore operations' },
        image: '/images/Gemini_Generated_Image_pi8wiipi8wiipi8w.jpg',
        featured: false,
        content: {
            pt: `
A Base da Ilha do Kwanda, principal centro de apoio logístico para a indústria petrolífera em Angola, recebeu oficialmente a certificação ambiental ISO 14001:2015, conferida pela entidade certificadora internacional Bureau Veritas.

**O que representa esta certificação**

A norma ISO 14001:2015 é o padrão internacional de referência para sistemas de gestão ambiental. A sua obtenção demonstra que a Base do Kwanda tem implementados processos rigorosos de identificação, avaliação e controlo dos seus impactos ambientais, em conformidade com a legislação angolana e os requisitos internacionais das principais operadoras petrolíferas.

**Medidas implementadas**

Entre as principais medidas que contribuíram para a certificação destacam-se: o sistema de contenção e tratamento de efluentes oleosos com taxa de recuperação de 99,8%; a gestão integrada de resíduos sólidos com reciclagem de 78% dos materiais; a monitorização contínua da qualidade do ar e da água na área envolvente; e o plano de resposta a emergências ambientais com simulacros trimestrais.

**Reconhecimento do setor**

A diretora da Base do Kwanda, Engenheira Filomena Cardoso, afirmou que "esta certificação é o resultado de anos de investimento numa cultura organizacional que coloca a proteção ambiental ao mesmo nível da segurança operacional. É o nosso compromisso com as gerações futuras e com a preservação do ecossistema único da foz do Rio Congo."

A certificação tem validade de três anos, com auditorias de vigilância anuais.
            `,
            en: `
The Kwanda Island Base, Angola's main logistics support center for the oil industry, has officially received the ISO 14001:2015 environmental certification, awarded by international certification body Bureau Veritas.

**What this certification means**

The ISO 14001:2015 standard is the international benchmark for environmental management systems. Its achievement demonstrates that the Kwanda Base has rigorous processes in place for identifying, assessing and controlling its environmental impacts, in compliance with Angolan legislation and the international requirements of major oil operators.

**Measures implemented**

Among the key measures that contributed to certification are: the oily effluent containment and treatment system with a 99.8% recovery rate; integrated solid waste management with 78% materials recycling; continuous air and water quality monitoring in the surrounding area; and an environmental emergency response plan with quarterly drills.

**Industry recognition**

The Director of the Kwanda Base, Engineer Filomena Cardoso, stated that "this certification is the result of years of investment in an organizational culture that places environmental protection at the same level as operational safety. It is our commitment to future generations and to preserving the unique ecosystem of the Congo River estuary."

The certification is valid for three years, with annual surveillance audits.
            `
        }
    },
    {
        id: 4,
        category: { pt: 'Institucional', en: 'Institutional' },
        date: '25 Mai. 2026',
        readTime: { pt: '2 min de leitura', en: '2 min read' },
        title: { pt: 'EPS-EP participa na Conferência Marítima de Angola 2026', en: 'EPS-EP participates in Angola Maritime Conference 2026' },
        subtitle: { pt: 'Porto do Soyo apresentou o seu roadmap de modernização 2026–2030 perante líderes do setor marítimo nacional e internacional', en: 'Port of Soyo presented its 2026–2030 modernization roadmap to national and international maritime sector leaders' },
        image: '/images/Gemini_Generated_Image_pi8wiipi8wiipi8w (1).jpg',
        featured: false,
        content: {
            pt: `
A delegação da Empresa Portuária do Soyo (EPS-EP) participou na 12.ª edição da Conferência Marítima de Angola, realizada em Luanda, onde apresentou o ambicioso plano de modernização da infraestrutura portuária para o período 2026–2030.

**O Roadmap de Modernização**

O plano de modernização, denominado "Soyo 2030", contempla um investimento total de 220 milhões de dólares distribuído por cinco eixos estratégicos: expansão da capacidade de contentores, modernização do terminal offshore da ilha do Kwanda, digitalização operacional, transição energética verde e desenvolvimento de capital humano.

**Acordos e parcerias**

À margem da conferência, a EPS-EP assinou protocolos de cooperação com os portos de Namibe e do Lobito, criando as bases para uma rede portuária nacional mais coesa e eficiente. Foram também estabelecidos contactos com operadores portuários internacionais de Singapura e dos Emirados Árabes Unidos, interessados em parcerias técnicas.

**Visão para o futuro**

"O Porto do Soyo está destinado a ser um hub de referência na costa ocidental africana. A nossa localização estratégica na foz do Rio Congo, combinada com as reservas petrolíferas do pré-sal e o potencial agroindustrial do interior, fazem-nos únicos," afirmou o Presidente do Conselho de Administração da EPS-EP.

A próxima conferência está agendada para 2027 e o Porto do Soyo será o anfitrião.
            `,
            en: `
The delegation of Porto do Soyo (EPS-EP) participated in the 12th edition of the Angola Maritime Conference, held in Luanda, where it presented an ambitious port infrastructure modernization plan for the period 2026–2030.

**The Modernization Roadmap**

The modernization plan, called "Soyo 2030", involves a total investment of $220 million across five strategic axes: container capacity expansion, modernization of the Kwanda Island offshore terminal, operational digitalization, green energy transition and human capital development.

**Agreements and partnerships**

On the sidelines of the conference, EPS-EP signed cooperation protocols with the ports of Namibe and Lobito, laying the groundwork for a more cohesive and efficient national port network. Contacts were also established with international port operators from Singapore and the United Arab Emirates, interested in technical partnerships.

**Vision for the future**

"Port of Soyo is destined to be a reference hub on the West African coast. Our strategic location at the mouth of the Congo River, combined with pre-salt oil reserves and the agroindustrial potential of the interior, makes us unique," said the Chairman of EPS-EP's Board of Directors.

The next conference is scheduled for 2027 and Port of Soyo will be the host.
            `
        }
    },
    {
        id: 5,
        category: { pt: 'Logística', en: 'Logistics' },
        date: '14 Mai. 2026',
        readTime: { pt: '3 min de leitura', en: '3 min read' },
        title: { pt: 'Sistema digital de gestão de armazéns entra em operação', en: 'Digital warehouse management system goes live' },
        subtitle: { pt: 'Novo WMS permite rastreamento em tempo real de toda a mercadoria nos pátios e armazéns, reduzindo erros em 90%', en: 'New WMS enables real-time tracking of all goods in yards and warehouses, reducing errors by 90%' },
        image: '/images/Gemini_Generated_Image_pi8wiipi8wiipi8w (2).jpg',
        featured: false,
        content: {
            pt: `
A Empresa Portuária do Soyo concluiu com sucesso a implementação do novo sistema de gestão de armazéns (WMS – Warehouse Management System), que entrou em produção em 1 de maio de 2026, transformando radicalmente os processos de logística interna do porto.

**O que muda na prática**

O novo sistema permite o rastreamento em tempo real de todas as mercadorias existentes nos pátios e armazéns cobertos do porto, através de uma combinação de tecnologias RFID (Radio-Frequency Identification), leitores de código de barras e sensores IoT instalados nas empilhadeiras e gruas.

Cada caixa, palete ou unidade de carga passa a ter um identificador digital único que regista automaticamente todos os seus movimentos: receção, armazenagem, picking, separação e expedição. Os clientes podem acompanhar o estado das suas mercadorias em tempo real através de um portal web dedicado.

**Resultados preliminares**

Nas primeiras duas semanas de operação, o sistema já demonstrou resultados expressivos: redução de 90% nos erros de localização de mercadoria, diminuição de 35% no tempo médio de entrega de cargas e eliminação quase total das contagens físicas de inventário, que passaram a ser automáticas.

**Integração com sistemas externos**

O WMS está integrado com os sistemas dos principais despachantes e operadores logísticos que operam no porto, bem como com as plataformas de despacho aduaneiro da Alfândega angolana, criando um ecossistema digital de comércio sem fricção.
            `,
            en: `
Porto do Soyo successfully completed the implementation of the new Warehouse Management System (WMS), which went live on May 1, 2026, radically transforming the port's internal logistics processes.

**What changes in practice**

The new system enables real-time tracking of all goods in the port's yards and covered warehouses, through a combination of RFID (Radio-Frequency Identification) technologies, barcode readers and IoT sensors installed on forklifts and cranes.

Each box, pallet or cargo unit now has a unique digital identifier that automatically records all its movements: receipt, storage, picking, sorting and dispatch. Customers can monitor the status of their goods in real time through a dedicated web portal.

**Preliminary results**

In the first two weeks of operation, the system has already demonstrated significant results: a 90% reduction in cargo location errors, a 35% decrease in average cargo delivery time and near-total elimination of physical inventory counts, which are now automatic.

**Integration with external systems**

The WMS is integrated with the systems of the main customs brokers and logistics operators working at the port, as well as with the Angolan Customs clearance platforms, creating a frictionless digital trade ecosystem.
            `
        }
    },
    {
        id: 6,
        category: { pt: 'Parceria', en: 'Partnership' },
        date: '5 Mai. 2026',
        readTime: { pt: '2 min de leitura', en: '2 min read' },
        title: { pt: 'Acordo de cooperação com Porto de Luanda reforça rede nacional', en: 'Cooperation agreement with Port of Luanda strengthens national network' },
        subtitle: { pt: 'Memorando de entendimento cria sinergias operacionais e otimiza o fluxo de mercadorias entre os dois principais portos de Angola', en: 'Memorandum of understanding creates operational synergies and optimizes cargo flow between Angola\'s two main ports' },
        image: '/images/hero_drone.png',
        featured: false,
        content: {
            pt: `
A Empresa Portuária do Soyo (EPS-EP) e a Administração do Porto de Luanda (APL) assinaram um Memorando de Entendimento (MOU) que estabelece as bases de uma cooperação estratégica destinada a otimizar o fluxo de mercadorias e reforçar a complementaridade operacional entre os dois principais portos angolanos.

**Objetivos do acordo**

O MOU contempla quatro áreas principais de cooperação: partilha de dados e sistemas de informação, para facilitar a rastreabilidade das mercadorias em trânsito; harmonização de procedimentos operacionais e tarifários; programas conjuntos de formação profissional; e desenvolvimento de uma plataforma digital de gestão de navios partilhada entre os dois portos.

**Benefícios para os clientes**

Na prática, os operadores e carregadores que trabalham com ambos os portos vão beneficiar de processos mais ágeis de transferência de mercadoria, documentação partilhada e tempos de espera reduzidos. Está prevista a criação de um "bilhete único" documental para mercadorias que transitem entre Luanda e Soyo.

**Visão de longo prazo**

O Ministro dos Transportes de Angola, presente na cerimónia de assinatura, afirmou que "este é o primeiro passo para a criação de uma rede portuária nacional verdadeiramente integrada, que permita a Angola tirar pleno proveito da sua posição geográfica privilegiada como porta de entrada da África Central."

A vigência do MOU é de cinco anos, com renovação automática salvo denúncia por qualquer das partes.
            `,
            en: `
Porto do Soyo (EPS-EP) and the Administration of the Port of Luanda (APL) signed a Memorandum of Understanding (MOU) establishing the basis for strategic cooperation aimed at optimizing cargo flow and strengthening operational complementarity between Angola's two main ports.

**Objectives of the agreement**

The MOU covers four main areas of cooperation: data and information system sharing, to facilitate traceability of goods in transit; harmonization of operational and tariff procedures; joint professional training programs; and development of a shared digital ship management platform between the two ports.

**Benefits for clients**

In practice, operators and shippers working with both ports will benefit from more agile cargo transfer processes, shared documentation and reduced waiting times. A documentary "single ticket" is planned for goods in transit between Luanda and Soyo.

**Long-term vision**

Angola's Minister of Transport, present at the signing ceremony, stated that "this is the first step towards creating a truly integrated national port network, enabling Angola to fully leverage its privileged geographic position as the gateway to Central Africa."

The MOU has a five-year term, with automatic renewal unless terminated by either party.
            `
        }
    }
];

function renderContent(text) {
    return text.trim().split('\n\n').map((block, i) => {
        if (block.startsWith('**') && block.endsWith('**')) {
            return <h3 key={i} style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', margin: '40px 0 15px', letterSpacing: '-0.3px' }}>{block.replace(/\*\*/g, '')}</h3>;
        }
        // Inline bold
        const parts = block.split(/\*\*(.*?)\*\*/g);
        return (
            <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.1rem', margin: '0 0 20px 0' }}>
                {parts.map((part, j) => j % 2 === 1 ? <strong key={j} style={{ color: 'var(--text-primary)', fontWeight: '700' }}>{part}</strong> : part)}
            </p>
        );
    });
}

export default function NewsDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { lang } = useTranslation();

    const article = allNews.find(n => n.id === parseInt(id));
    const related = allNews.filter(n => n.id !== parseInt(id)).slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <main style={{ background: 'var(--bg-main)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>{lang === 'pt' ? 'Artigo não encontrado' : 'Article not found'}</h2>
                    <button onClick={() => navigate('/noticias')} style={{ background: 'var(--primary)', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>
                        {lang === 'pt' ? 'Voltar às Notícias' : 'Back to News'}
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>

            {/* Hero Image */}
            <div style={{ position: 'relative', height: '520px', overflow: 'hidden' }}>
                <img src={article.image} alt={article.title[lang]}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(2,11,30,0.3) 0%, rgba(2,11,30,0.85) 100%)'
                }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '50px 5%', maxWidth: '1440px', margin: '0 auto' }}>
                    <div style={{ maxWidth: '900px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <span style={{ background: 'var(--primary)', color: '#fff', padding: '5px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                <FaTag style={{ marginRight: '6px', fontSize: '0.7rem' }} />{article.category[lang]}
                            </span>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <FaCalendarAlt /> {article.date}
                            </span>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>· {article.readTime[lang]}</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '800', color: '#fff', margin: '0 0 15px 0', letterSpacing: '-1px', lineHeight: 1.15 }}>
                            {article.title[lang]}
                        </h1>
                        <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.6 }}>
                            {article.subtitle[lang]}
                        </p>
                    </div>
                </div>
            </div>

            {/* Article Body */}
            <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 5%' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '60px', paddingTop: '60px', paddingBottom: '80px', alignItems: 'flex-start' }}>

                    {/* Main Article Text */}
                    <article>
                        {/* Back link */}
                        <button
                            onClick={() => navigate('/noticias')}
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem', padding: '0', marginBottom: '40px', transition: 'gap 0.2s' }}
                            onMouseOver={e => e.currentTarget.style.gap = '14px'}
                            onMouseOut={e => e.currentTarget.style.gap = '8px'}
                        >
                            <FaArrowLeft /> {lang === 'pt' ? 'Voltar às Notícias' : 'Back to News'}
                        </button>

                        <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '25px', marginBottom: '45px' }}>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: '500', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                                {article.subtitle[lang]}
                            </p>
                        </div>

                        <div>{renderContent(article.content[lang])}</div>

                        {/* Share */}
                        <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ color: 'var(--text-secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FaShare /> {lang === 'pt' ? 'Partilhar:' : 'Share:'}
                            </span>
                            {['LinkedIn', 'Facebook', 'Twitter'].map(s => (
                                <button key={s} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.85rem', transition: 'all 0.2s' }}
                                    onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
                                    onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}>
                                    {s}
                                </button>
                            ))}
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside style={{ position: 'sticky', top: '120px' }}>
                        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', marginBottom: '30px', boxShadow: 'var(--shadow)' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {lang === 'pt' ? 'Outros Artigos' : 'More Articles'}
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {related.map(r => (
                                    <div key={r.id} onClick={() => navigate(`/noticias/${r.id}`)} style={{ cursor: 'pointer', display: 'flex', gap: '15px', alignItems: 'flex-start', transition: 'opacity 0.2s' }}
                                        onMouseOver={e => e.currentTarget.style.opacity = '0.7'}
                                        onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                                        <img src={r.image} alt={r.title[lang]} style={{ width: '65px', height: '65px', objectFit: 'cover', borderRadius: '10px', flexShrink: 0 }} />
                                        <div>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700', display: 'block', marginBottom: '5px' }}>{r.category[lang]}</span>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600', margin: '0 0 4px 0', lineHeight: 1.3 }}>{r.title[lang]}</p>
                                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{r.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div style={{ background: 'var(--primary)', borderRadius: '20px', padding: '30px', textAlign: 'center' }}>
                            <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '800', marginBottom: '12px' }}>
                                {lang === 'pt' ? 'Precisa de Soluções Portuárias?' : 'Need Port Solutions?'}
                            </h4>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.6 }}>
                                {lang === 'pt' ? 'A nossa equipa está pronta para responder.' : 'Our team is ready to respond.'}
                            </p>
                            <button onClick={() => navigate('/cotacao')} style={{ background: '#fff', color: 'var(--primary)', border: 'none', padding: '12px 24px', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', width: '100%', fontSize: '0.95rem', transition: 'transform 0.2s' }}
                                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                                {lang === 'pt' ? 'Solicitar Cotação' : 'Request a Quote'} <FaArrowRight style={{ marginLeft: '5px' }} />
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
