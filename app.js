/* ==========================================================================
   PORTO DO SOYO PORTAL - LÓGICA E INTERATIVIDADE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Inicializar Componentes
    initNavbar();
    initTheme();
    initLanguage();
    initStatsCounter();
    initWeatherSimulator();
    initShipTracker();
    initContactForm();
    initHeroCarousel();
    // Novas funcionalidades premium
    initParticles();
    initReadingProgress();
    initBackToTop();
    initScrollReveal();
}

/* ==========================================================================
   IDIOMAS (TRADUÇÃO DINÂMICA)
   ========================================================================== */

const translations = {
    pt: {
        // Hero
        hero_badge: "Porta de Entrada para o Desenvolvimento de Angola",
        hero_title_1: "Liderando a",
        hero_title_2: "do Soyo para o Mundo",
        hero_desc: "Administramos com excelência, segurança e sustentabilidade os complexos portuários estratégicos do Zaire, provendo suporte vital para o comércio regional e a indústria petrolífera nacional.",
        hero_btn_explore: "Explorar Serviços",
        hero_btn_tracker: "Painel de Navios",
        hero_badge_1: "Hub Logístico e Comercial",
        slide1_title1: "Liderando a",
        slide1_title2: "do Soyo para o Mundo",
        slide1_desc: "Administramos com excelência, segurança e sustentabilidade os complexos portuários estratégicos do Zaire, provendo suporte vital para o comércio regional e a indústria petrolífera nacional.",
        hero_badge_2: "Infraestrutura Energética Global",
        slide2_title1: "Terminal",
        slide2_title2: "Exportando Energia",
        slide2_desc: "Operações de águas profundas de alta tecnologia para o escoamento global de gás natural liquefeito, posicionando Angola na vanguarda do setor de gás mundial.",
        slide2_btn: "Conhecer Terminal",
        hero_badge_3: "Conectividade Regional Marítima",
        slide3_title1: "Terminal Fluvial",
        slide3_title2: "Integração de Fronteiras",
        slide3_desc: "Promovemos a mobilidade segura de passageiros e carga geral através da cabotagem fluvial e marítima regular, unindo regiões e estimulando o comércio local.",
        slide3_btn: "Ver Horários",
        quick_1_title: "Rastreamento e Escalas",
        quick_1_desc: "Consulte navios atracados e chegadas previstas no Soyo.",
        quick_2_title: "Terminal Fluvial (Ferry)",
        quick_2_desc: "Horários e tarifas da ligação marítimo-fluvial Soyo-Cabinda.",
        quick_3_title: "Regulamentos e Ética",
        quick_3_desc: "Aceda à legislação e código de ética da empresa pública.",
        quick_4_title: "Suporte e Contactos",
        quick_4_desc: "Entre em contacto direto com a nossa equipa administrativa.",
        // Stats
        stat_terminals: "Terminais Operativos",
        stat_depth: "Calado no Canal",
        stat_cargo: "Ton. de Carga Anual",
        stat_ships: "Navios Anuais",
        // Quem Somos
        about_tag: "A Instituição",
        about_title: "Quem Somos",
        tab_name_company: "Empresa Portuária do Soyo",
        tab_name_history: "A nossa História",
        tab_name_pca: "Mensagem do PCA",
        tab_name_board: "Conselho de Administração",
        
        company_title: "Comprometidos com o Futuro Marítimo",
        company_p1: "A Empresa Portuária do Soyo, E.P. (EPS-EP) é uma pessoa colectiva pública de direito angolano, criada através do Decreto Conjunto n.º 65/79 de 28 de Dezembro. Atuamos sob a tutela do Ministério dos Transportes e somos responsáveis pela administração, coordenação, fiscalização e exploração económica das infraestruturas e terminais portuários sob nossa jurisdição.",
        company_p2: "Nossa missão consiste em prover serviços de excelência para a navegação e movimentação de cargas, atuando de forma alinhada com as melhores práticas de sustentabilidade ambiental, impulsionando a economia do país e fortalecendo a segurança de nossas águas e instalações.",
        
        val_safety_title: "Segurança Máxima",
        val_safety_desc: "Garantia absoluta na proteção das tripulações, cargas e instalações.",
        val_eff_title: "Eficiência Operacional",
        val_eff_desc: "Tecnologia e agilidade para reduzir custos e prazos de atracação.",
        val_sust_title: "Sustentabilidade",
        val_sust_desc: "Preservação ambiental das áreas costeiras e do rio Congo.",
        
        hist_1_title: "Fundação Oficial",
        hist_1_desc: "A instituição é oficialmente constituída em 28 de Dezembro pelo Decreto Conjunto n.º 65/79, para organizar a atividade marítima no Soyo, Zaire.",
        hist_2_title: "Apoio à Indústria Petrolífera",
        hist_2_desc: "A Base da Ilha do Kwanda surge como um forte complexo logístico dedicado às multinacionais do petróleo e gás natural, expandindo a infraestrutura portuária.",
        hist_3_title: "Era do Gás Natural (LNG)",
        hist_3_desc: "Início das operações de exportação do terminal Angola LNG, colocando o Soyo em uma posição de relevância energética mundial.",
        hist_4_title: "Modernização Digital",
        hist_4_desc: "Forte investimento em modernização digital, concessões estratégicas (ex: Sogester) e sistemas inteligentes de controle marítimo para aumentar a competitividade regional.",
        
        pca_role: "Presidente do Conselho de Administração",
        pca_message_1: "\"O Porto do Soyo desempenha um papel fulcral no desenvolvimento socioeconómico da Província do Zaire e de toda a República de Angola. O nosso foco estratégico reside na reestruturação e modernização tecnológica das nossas infraestruturas, garantindo eficiência de classe mundial para as petrolíferas e importadores comerciais.\"",
        pca_message_2: "\"Procuramos criar pontes entre a inovação digital, a descarbonização das operações marítimas e a capacitação contínua do nosso capital humano. Trabalhamos diariamente para consolidar o Soyo como um porto competitivo, seguro, eficiente e um orgulho nacional no panorama portuário internacional.\"",
        
        board_title: "Liderança e Governança",
        board_pca: "Presidente do Conselho de Administração (PCA)",
        board_admin_exec: "Administrador Executivo (Finanças, RH e TI)",
        board_admin_non_exec: "Administrador Não Executivo",
        
        // Serviços
        services_tag: "O que fazemos",
        services_title: "Serviços Portuários",
        serv_1_title: "Pilotagem e Praticagem",
        serv_1_short: "Condução segura de navios na foz do rio Congo e canais de acesso com práticos certificados.",
        serv_2_title: "Reboque e Amarração",
        serv_2_short: "Manobras de atracação e desatracação suportadas por rebocadores de alta capacidade tratora (Bollard Pull).",
        serv_3_title: "Movimentação de Cargas",
        serv_3_short: "Carga e descarga de contentores, carga geral e especializada com alta tecnologia e segurança.",
        serv_4_title: "Armazenagem e Logística",
        serv_4_short: "Instalações amplas para armazenamento coberto e a céu aberto, sob forte vigilância e controle digital.",
        serv_5_title: "Transporte Fluvial de Passageiros",
        serv_5_short: "Ligação de cabotagem fluvial de passageiros e viaturas entre o Soyo e Cabinda.",
        serv_6_title: "Apoio à Indústria Offshore",
        serv_6_short: "Base logística integrada (Ilha do Kwanda) e suporte logístico para a exploração de petróleo e gás.",
        serv_more: "Saber mais",
        modal_contact: "Requisitar Serviço",
        
        // Terminais
        terminals_tag: "Nossa Infraestrutura",
        terminals_title: "Terminais Portuários",
        t_draft: "Calado Máximo",
        t_berths: "Comprimento de Cais",
        t_operator: "Operador / Gestor",
        t_cargo: "Principal Carga",
        
        // Operações / Tracker
        ops_tag: "Operações em Tempo Real",
        ops_title: "Painel de Tráfego & Clima",
        weather_title: "Clima no Porto (Soyo)",
        weather_cond: "Parcialmente Nublado",
        w_wind: "Vento",
        w_tide: "Maré",
        w_vis: "Visibilidade",
        update_live: "Atualizado ao vivo",
        tracker_title: "Controlo de Navios",
        tracker_simulate: "Simular Entrada de Navio",
        
        // Legislação
        leg_tag: "Transparência e Conduta",
        leg_title: "Legislação e Ética",
        leg_card1_title: "Legislação Portuária",
        leg_card1_desc: "Aceda às normas, regulamentos, decretos presidenciais e portarias governamentais vigentes que regulam e fiscalizam o tráfego e as operações de marinha mercante e mercadorias no Porto do Soyo.",
        leg_card2_title: "Código de Ética e Conduta",
        leg_card2_desc: "Consulte as diretrizes e regras comportamentais dos colaboradores e parceiros da Empresa Portuária do Soyo E.P. Fomentamos transparência, integridade administrativa e responsabilidade profissional.",
        leg_view: "Visualizar Documento",
        pdf_down: "Descarregar PDF",
        
        // Contactos
        contacts_tag: "Fale Connosco",
        contacts_title: "Contactos e Suporte",
        contacts_h3: "Sede Administrativa",
        contacts_p: "Estamos prontos para atendê-lo e fornecer suporte sobre atracação, taxas, tráfego de passageiros ou parcerias logísticas.",
        c_addr: "Endereço",
        c_email: "E-mail Corporativo",
        c_phone: "Telefone / Apoio",
        c_hours: "Horário de Atendimento",
        c_hours_val: "Segunda a Sexta: 08:00 - 15:30 (Terminais: 24/7)",
        form_title: "Enviar Mensagem",
        form_name: "Nome Completo",
        form_email: "E-mail Corporativo",
        form_sub: "Assunto / Motivo",
        form_msg: "Escreva sua mensagem...",
        form_btn: "Enviar Mensagem",
        map_title: "Localização Estratégica",
        map_desc: "Foz do Rio Congo, Atlântico Sul",
        
        // Footer
        footer_about: "Empresa Portuária do Soyo E.P. Administrando caminhos marítimos e apoiando o desenvolvimento energético e logístico de Angola com eficiência e transparência.",
        footer_links: "Links Rápidos",
        footer_inst: "Governo",
        f_link_home: "Início",
        f_link_about: "Quem Somos",
        f_link_serv: "Serviços",
        f_link_term: "Terminais",
        f_link_track: "Painel de Operações",
        f_link_leg: "Legislação e Ética",
        f_link_cont: "Contactos de Apoio",
        f_copy: "Todos os direitos reservados."
    },
    en: {
        // Hero
        hero_badge: "Gateway to the Development of Angola",
        hero_title_1: "Leading the",
        hero_title_2: "from Soyo to the World",
        hero_desc: "We manage Zaire's strategic port complexes with excellence, safety, and sustainability, providing vital support for regional commerce and the national oil industry.",
        hero_btn_explore: "Explore Services",
        hero_btn_tracker: "Vessel Panel",
        hero_badge_1: "Logistics & Commercial Hub",
        slide1_title1: "Leading the",
        slide1_title2: "from Soyo to the World",
        slide1_desc: "We manage Zaire's strategic port complexes with excellence, safety, and sustainability, providing vital support for regional commerce and the national oil industry.",
        hero_badge_2: "Global Energy Infrastructure",
        slide2_title1: "Terminal",
        slide2_title2: "Exporting Energy",
        slide2_desc: "High-tech deepwater operations for global Liquefied Natural Gas (LNG) export, positioning Angola at the forefront of the global gas sector.",
        slide2_btn: "Explore Terminal",
        hero_badge_3: "Maritime Regional Connectivity",
        slide3_title1: "Fluvial Terminal",
        slide3_title2: "Border Integration",
        slide3_desc: "We promote safe mobility for passengers and general cargo through regular river and sea cabotage, joining regions and boosting local commerce.",
        slide3_btn: "View Timetable",
        quick_1_title: "Tracking & Schedules",
        quick_1_desc: "Check docked vessels and scheduled arrivals in Soyo.",
        quick_2_title: "Fluvial Terminal (Ferry)",
        quick_2_desc: "Schedules and fares for the Soyo-Cabinda ferry connection.",
        quick_3_title: "Regulations & Ethics",
        quick_3_desc: "Access the public company's legislation and code of ethics.",
        quick_4_title: "Support & Contacts",
        quick_4_desc: "Get in direct contact with our administrative team.",
        // Stats
        stat_terminals: "Operating Terminals",
        stat_depth: "Channel Draft",
        stat_cargo: "Annual Cargo Tons",
        stat_ships: "Annual Vessels",
        // Quem Somos
        about_tag: "The Institution",
        about_title: "About Us",
        tab_name_company: "Soyo Port Authority",
        tab_name_history: "Our History",
        tab_name_pca: "Chairman's Message",
        tab_name_board: "Board of Directors",
        
        company_title: "Committed to the Maritime Future",
        company_p1: "The Empresa Portuária do Soyo, E.P. (EPS-EP) is an Angolan public corporate entity, established by Joint Decree No. 65/79 of December 28. Operating under the supervision of the Ministry of Transport, we are responsible for the administration, coordination, inspection, and economic exploitation of the port infrastructures and terminals under our jurisdiction.",
        company_p2: "Our mission is to provide excellent services for navigation and cargo handling, working in alignment with the best environmental sustainability practices, boosting the country's economy, and strengthening the security of our waters and facilities.",
        
        val_safety_title: "Maximum Safety",
        val_safety_desc: "Absolute guarantee in protecting crews, cargo, and facilities.",
        val_eff_title: "Operational Efficiency",
        val_eff_desc: "Technology and agility to reduce costs and docking times.",
        val_sust_title: "Sustainability",
        val_sust_desc: "Environmental preservation of coastal areas and the Congo River.",
        
        hist_1_title: "Official Foundation",
        hist_1_desc: "The institution is officially constituted on December 28 by Joint Decree No. 65/79, to organize maritime activity in Soyo, Zaire.",
        hist_2_title: "Support for the Oil Industry",
        hist_2_desc: "The Kwanda Island Base emerges as a strong logistical complex dedicated to oil and gas multinationals, expanding port infrastructure.",
        hist_3_title: "Natural Gas Era (LNG)",
        hist_3_desc: "Start of export operations of the Angola LNG terminal, putting Soyo in a position of global energy relevance.",
        hist_4_title: "Digital Modernization",
        hist_4_desc: "Strong investment in digital modernization, strategic concessions (e.g. Sogester), and intelligent maritime control systems to increase regional competitiveness.",
        
        pca_role: "Chairman of the Board of Directors",
        pca_message_1: "\"The Port of Soyo plays a central role in the socioeconomic development of Zaire Province and the entire Republic of Angola. Our strategic focus lies in restructuring and technologically modernizing our infrastructure, ensuring world-class efficiency for oil companies and commercial importers.\"",
        pca_message_2: "\"We seek to build bridges between digital innovation, decarbonization of maritime operations, and continuous training of our human capital. We work daily to consolidate Soyo as a competitive, safe, and efficient port, and a source of national pride on the international port scene.\"",
        
        board_title: "Leadership and Governance",
        board_pca: "Chairman of the Board (PCA)",
        board_admin_exec: "Executive Director (Finance, HR & IT)",
        board_admin_non_exec: "Non-Executive Director",
        
        // Serviços
        services_tag: "What we do",
        services_title: "Port Services",
        serv_1_title: "Pilotage and Navigation",
        serv_1_short: "Safe guiding of vessels in the Congo River mouth and access channels by certified pilots.",
        serv_2_title: "Tugboat and Mooring",
        serv_2_short: "Berthing and unberthing maneuvers supported by modern tugboats with high Bollard Pull capacity.",
        serv_3_title: "Cargo Handling",
        serv_3_short: "Loading and unloading of containers, general and specialized cargo with high technology and safety.",
        serv_4_title: "Storage and Logistics",
        serv_4_short: "Ample facilities for covered and open-air storage, under tight security and digital control.",
        serv_5_title: "River Passenger Transport",
        serv_5_short: "Regular river cabotage connection for passengers and vehicles between Soyo and Cabinda.",
        serv_6_title: "Offshore Industry Support",
        serv_6_short: "Integrated logistics base (Kwanda Island) and supply support for oil and gas exploration.",
        serv_more: "Learn more",
        modal_contact: "Request Service",
        
        // Terminais
        terminals_tag: "Our Infrastructure",
        terminals_title: "Port Terminals",
        t_draft: "Maximum Draft",
        t_berths: "Berth Length",
        t_operator: "Operator / Manager",
        t_cargo: "Primary Cargo",
        
        // Operações / Tracker
        ops_tag: "Real-Time Operations",
        ops_title: "Traffic & Weather Panel",
        weather_title: "Port Weather (Soyo)",
        weather_cond: "Partly Cloudy",
        w_wind: "Wind",
        w_tide: "Tide",
        w_vis: "Visibility",
        update_live: "Updated live",
        tracker_title: "Vessel Control",
        tracker_simulate: "Simulate Vessel Entry",
        
        // Legislação
        leg_tag: "Transparency & Conduct",
        leg_title: "Legislation & Ethics",
        leg_card1_title: "Port Legislation",
        leg_card1_desc: "Access the laws, regulations, presidential decrees, and government ordinances in force regulating and supervising merchant shipping and goods traffic in the Port of Soyo.",
        leg_card2_title: "Code of Ethics & Conduct",
        leg_card2_desc: "Check the behavior guidelines and rules for employees and partners of Empresa Portuária do Soyo E.P. We promote transparency, administrative integrity, and professional responsibility.",
        leg_view: "View Document",
        pdf_down: "Download PDF",
        
        // Contactos
        contacts_tag: "Contact Us",
        contacts_title: "Contacts & Support",
        contacts_h3: "Administrative Head Office",
        contacts_p: "We are ready to assist you and provide support regarding docking, fees, passenger traffic, or logistics partnerships.",
        c_addr: "Address",
        c_email: "Corporate Email",
        c_phone: "Phone / Support",
        c_hours: "Office Hours",
        c_hours_val: "Monday to Friday: 08:00 - 15:30 (Terminals: 24/7)",
        form_title: "Send Message",
        form_name: "Full Name",
        form_email: "Corporate Email",
        form_sub: "Subject / Reason",
        form_msg: "Write your message...",
        form_btn: "Send Message",
        map_title: "Strategic Location",
        map_desc: "Congo River Mouth, South Atlantic",
        
        // Footer
        footer_about: "Empresa Portuária do Soyo E.P. Managing maritime pathways and supporting Angola's energy and logistic development with efficiency and transparency.",
        footer_links: "Quick Links",
        footer_inst: "Government",
        f_link_home: "Home",
        f_link_about: "About Us",
        f_link_serv: "Services",
        f_link_term: "Terminals",
        f_link_track: "Operations Panel",
        f_link_leg: "Legislation & Ethics",
        f_link_cont: "Support Contacts",
        f_copy: "All rights reserved."
    }
};

let currentLang = 'pt';

function initLanguage() {
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    
    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langBtn.parentElement.classList.toggle('open');
    });

    document.addEventListener('click', () => {
        langBtn.parentElement.classList.remove('open');
    });

    // Switch lang
    langDropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    
    // Update active state in menu
    const langDropdown = document.getElementById('lang-dropdown');
    langDropdown.querySelectorAll('a').forEach(link => {
        if (link.getAttribute('data-lang') === lang) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Update main button label
    const langBtn = document.getElementById('lang-btn');
    langBtn.querySelector('span').innerText = lang.toUpperCase();

    // Translate DOM elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    // Translate dynamic elements
    updateTerminalsLanguage();
    updateVesselStatusLanguage();
}


/* ==========================================================================
   NAVBAR & ROLAGEM
   ========================================================================== */

function initNavbar() {
    const navbar = document.querySelector('.navbar-wrapper');
    const hamburger = document.getElementById('hamburger-menu');
    const navContainer = document.querySelector('.navbar-container');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll event navbar shrink
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        highlightNavLink();
    });

    // Hamburger Mobile Menu
    hamburger.addEventListener('click', () => {
        navContainer.classList.toggle('open');
        hamburger.classList.toggle('active');
        
        // Close menu animation
        if (hamburger.classList.contains('active')) {
            hamburger.children[0].style.transform = 'rotate(45deg) translate(6px, 5px)';
            hamburger.children[1].style.opacity = '0';
            hamburger.children[2].style.transform = 'rotate(-45deg) translate(6px, -5px)';
        } else {
            hamburger.children[0].style.transform = 'none';
            hamburger.children[1].style.opacity = '1';
            hamburger.children[2].style.transform = 'none';
        }
    });

    // Close menu when clicking nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('open');
            hamburger.classList.remove('active');
            hamburger.children[0].style.transform = 'none';
            hamburger.children[1].style.opacity = '1';
            hamburger.children[2].style.transform = 'none';
        });
    });
}

function highlightNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let scrollPos = window.scrollY + 200;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            const currentId = '#' + section.getAttribute('id');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}


/* ==========================================================================
   TEMA ESCURO / CLARO
   ========================================================================== */

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.className = 'fa-solid fa-sun';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        if (document.body.classList.contains('light-theme')) {
            themeIcon.className = 'fa-solid fa-sun';
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.className = 'fa-solid fa-moon';
            localStorage.setItem('theme', 'dark');
        }
    });
}


/* ==========================================================================
   CONTADORES ESTATÍSTICOS HERO
   ========================================================================== */

function initStatsCounter() {
    const statsSection = document.querySelector('.hero-stats-panel');
    const stats = document.querySelectorAll('.stat-number');
    let started = false;

    // Intersection Observer to start when visible
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !started) {
            stats.forEach(stat => startCount(stat));
            started = true;
        }
    }, { threshold: 0.2 });

    observer.observe(statsSection);
}

function startCount(el) {
    const target = parseInt(el.getAttribute('data-target'));
    let current = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 16ms per frame (~60fps)

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.innerText = target;
            clearInterval(timer);
        } else {
            el.innerText = Math.floor(current);
        }
    }, 16);
}


/* ==========================================================================
   QUEM SOMOS - TROCA DE ABAS
   ========================================================================== */

window.switchAboutTab = function(tabId) {
    // Buttons active switch
    const buttons = document.querySelectorAll('.about-tab-btn');
    buttons.forEach(btn => {
        if (btn.id === `tab-${tabId}-btn`) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Content Pane active switch
    const panes = document.querySelectorAll('.about-pane');
    panes.forEach(pane => {
        if (pane.id === `pane-${tabId}`) {
            pane.classList.add('active');
        } else {
            pane.classList.remove('active');
        }
    });
};


/* ==========================================================================
   SERVIÇOS - MODAL DE DETALHES
   ========================================================================== */

const servicesData = {
    pilotagem: {
        pt: {
            title: "Pilotagem e Praticagem",
            desc: "Serviço de alta responsabilidade técnica prestado por práticos certificados da EPS-EP. Conduzimos os navios com segurança na entrada, manobra e atracação ao longo dos canais de acesso fluviais do Rio Congo e nos portos sob jurisdição do Soyo.",
            specs: {
                "Disponibilidade": "24 Horas / 365 Dias",
                "Certificação": "Normas IMO e Min. Transportes",
                "Área de Atuação": "Canal do Rio Congo e Base do Kwanda",
                "VHF de Chamada": "Canal 16 / 14 (Soyo Pilot)"
            }
        },
        en: {
            title: "Pilotage & Navigation",
            desc: "High technical responsibility service provided by certified pilots from EPS-EP. We guide vessels safely through entrance, maneuvering, and docking operations along the river access channels of the Congo River and ports under Soyo jurisdiction.",
            specs: {
                "Availability": "24 Hours / 365 Days",
                "Certification": "IMO & Ministry of Transport Standards",
                "Operating Area": "Congo River Channel & Kwanda Base",
                "VHF Calling": "Channel 16 / 14 (Soyo Pilot)"
            }
        }
    },
    reboque: {
        pt: {
            title: "Reboque e Amarração",
            desc: "Dispomos de frota moderna de rebocadores com grande capacidade de tração estática (Bollard Pull) e equipas terrestres qualificadas para fixação segura dos cabos nos cabeços do cais (amarração).",
            specs: {
                "Equipamento": "Rebocadores ASD modernos",
                "Tração (BP)": "Até 60 Toneladas",
                "Equipas de Amarração": "Disponíveis nos 3 Terminais",
                "Vigilância de Cabos": "Contínua durante atracação"
            }
        },
        en: {
            title: "Tugboat & Mooring",
            desc: "We have a modern fleet of tugboats with high static traction capacity (Bollard Pull) and qualified land crews for the safe fixation of lines to the berth bollards (mooring).",
            specs: {
                "Equipment": "Modern ASD Tugboats",
                "Traction (BP)": "Up to 60 Tons",
                "Mooring Crews": "Available at all 3 Terminals",
                "Line Monitoring": "Continuous during berthing"
            }
        }
    },
    carga: {
        pt: {
            title: "Movimentação de Cargas",
            desc: "Operação eficiente de carga e descarga de navios mercantes. Manuseamos contentores, carga geral fracionada, granéis sólidos/líquidos e cargas de grandes dimensões (project cargo) com equipamentos mecânicos modernos.",
            specs: {
                "Equipamento": "Pórticos de Cais, Reach Stackers",
                "Capacidade Máxima": "Guindastes móveis até 100 Toneladas",
                "Segurança": "Certificação ISPS Code",
                "Regime Operacional": "Turnos de 24h a pedido"
            }
        },
        en: {
            title: "Cargo Handling",
            desc: "Efficient loading and unloading operations for merchant vessels. We handle containers, breakbulk general cargo, dry/liquid bulk, and oversized project cargo utilizing modern mechanical equipment.",
            specs: {
                "Equipment": "Quay Cranes, Reach Stackers",
                "Max Capacity": "Mobile cranes up to 100 Tons",
                "Security": "ISPS Code Certified",
                "Operational Regime": "24h shifts upon request"
            }
        }
    },
    logistica: {
        pt: {
            title: "Armazenagem e Logística",
            desc: "Instalações de armazenagem seguras com pátios asfaltados e armazéns cobertos para mercadorias de importação e exportação. Oferecemos monitorização eletrónica 24/7 e controle de inventário digital.",
            specs: {
                "Área Coberta": "Mais de 10.000 m²",
                "Área Descoberta": "Pátios de contentores com 30.000 m²",
                "Segurança": "Vigilância CCTV e Guarda Física 24h",
                "Controle": "Sistema WMS Integrado"
            }
        },
        en: {
            title: "Storage & Logistics",
            desc: "Secure storage facilities with paved yards and covered warehouses for import and export goods. We offer 24/7 electronic monitoring and digital inventory control.",
            specs: {
                "Covered Area": "Over 10,000 sqm",
                "Open Area": "Container yards with 30,000 sqm",
                "Security": "CCTV Surveillance & 24h Physical Guard",
                "Control": "Integrated WMS System"
            }
        }
    },
    fluvial: {
        pt: {
            title: "Transporte Fluvial de Passageiros",
            desc: "Serviço essencial de cabotagem ligando o Soyo a Cabinda por via fluvial e marítima. Operamos catamarãs modernos com ar-condicionado e todas as medidas de segurança salvaguardadas.",
            specs: {
                "Rota": "Terminal Fluvial do Soyo ↔ Cabinda",
                "Capacidade": "Ferry e Catamarãs até 150 Passageiros",
                "Frequência": "Viagens regulares semanais",
                "Transporte de Viaturas": "Disponível no terminal Ro-Ro"
            }
        },
        en: {
            title: "River Passenger Transport",
            desc: "Essential cabotage service linking Soyo to Cabinda by river and sea. We operate modern, air-conditioned catamarans with all safety measures fully safeguarded.",
            specs: {
                "Route": "Soyo Fluvial Terminal ↔ Cabinda",
                "Capacity": "Ferry and Catamarans up to 150 Passengers",
                "Frequency": "Regular weekly trips",
                "Vehicle Transport": "Available at Ro-Ro terminal"
            }
        }
    },
    offshore: {
        pt: {
            title: "Apoio à Indústria Offshore",
            desc: "A Base da Ilha do Kwanda é o principal centro de apoio logístico integrado do Zaire para as empresas petrolíferas e de gás em Angola. Suporta embarcações de suprimentos (OSVs) com combustíveis, água e lama de perfuração.",
            specs: {
                "Clientes Principais": "Chevron, Azule Energy, Total, Sonangol",
                "Infraestrutura": "Cais acostável de águas profundas",
                "Serviços Especiais": "Abastecimento de fluidos, lamas e tubagens",
                "Certificação": "Total conformidade ISPS Code Nível 1"
            }
        },
        en: {
            title: "Offshore Industry Support",
            desc: "The Kwanda Island Base is Zaire's main integrated logistics support center for oil and gas companies in Angola. It supports offshore supply vessels (OSVs) with fuel, water, and drilling mud.",
            specs: {
                "Main Clients": "Chevron, Azule Energy, Total, Sonangol",
                "Infrastructure": "Deepwater berthing quay",
                "Special Services": "Fluids, mud, and tubing supply",
                "Certification": "Full ISPS Code Level 1 Compliance"
            }
        }
    }
};

window.openServiceModal = function(serviceKey) {
    const modal = document.getElementById('service-modal');
    const data = servicesData[serviceKey][currentLang];
    
    document.getElementById('modal-service-title').innerText = data.title;
    document.getElementById('modal-service-desc').innerText = data.desc;
    
    const specsArea = document.getElementById('modal-service-specs');
    specsArea.innerHTML = '';
    
    for (const [key, value] of Object.entries(data.specs)) {
        const row = document.createElement('div');
        row.className = 'spec-row';
        row.innerHTML = `<span class="spec-label">${key}</span><span class="spec-val">${value}</span>`;
        specsArea.appendChild(row);
    }
    
    modal.classList.add('open');
};

window.closeServiceModal = function() {
    document.getElementById('service-modal').classList.remove('open');
};


/* ==========================================================================
   TERMINAIS - TROCA INTERATIVA
   ========================================================================== */

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

window.switchTerminal = function(index) {
    const data = terminalsData[index];
    
    // Switch Active Selectors
    const buttons = document.querySelectorAll('.terminal-sel-btn');
    buttons.forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update Details
    document.getElementById('term-details-name').innerText = data.name;
    document.getElementById('term-details-desc').innerText = data.desc[currentLang];
    document.getElementById('term-details-draft').innerText = data.draft;
    document.getElementById('term-details-cais').innerText = data.cais;
    document.getElementById('term-details-op').innerText = data.op;
    document.getElementById('term-details-cargo').innerText = data.cargo;
    
    // Update Overlay Info Card
    document.getElementById('overlay-title').innerText = data.name;
    document.getElementById('overlay-draft').innerText = `Calado: ${data.draft}`;
    document.getElementById('overlay-focus').innerText = `Foco: ${data.cargo.split(',')[0]}`;
};

function updateTerminalsLanguage() {
    // Refresh current terminal description based on lang
    const activeBtn = document.querySelector('.terminal-sel-btn.active');
    if (activeBtn) {
        const nameText = activeBtn.querySelector('.sel-name').innerText;
        const index = terminalsData.findIndex(t => t.name === nameText || t.desc.en.includes(nameText) || nameText.includes("LNG") && t.name.includes("LNG"));
        if (index !== -1) {
            switchTerminal(index);
        }
    }
}


/* ==========================================================================
   PAINEL DE OPERAÇÕES: CLIMA SIMULADO
   ========================================================================== */

const weatherConditions = [
    { desc: { pt: "Parcialmente Nublado", en: "Partly Cloudy" }, icon: "fa-solid fa-cloud-sun", tempRange: [28, 31] },
    { desc: { pt: "Céu Limpo", en: "Clear Sky" }, icon: "fa-solid fa-sun", tempRange: [29, 32] },
    { desc: { pt: "Aguaceiros Fracos", en: "Light Showers" }, icon: "fa-solid fa-cloud-rain", tempRange: [26, 28] },
    { desc: { pt: "Trovoada Ligeira", en: "Light Thunderstorm" }, icon: "fa-solid fa-cloud-bolt", tempRange: [25, 27] }
];

function initWeatherSimulator() {
    updateWeatherValues();
    // Loop de simulação a cada 10 segundos
    setInterval(updateWeatherValues, 10000);
}

function updateWeatherValues() {
    const randomCond = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const temp = Math.floor(Math.random() * (randomCond.tempRange[1] - randomCond.tempRange[0] + 1)) + randomCond.tempRange[0];
    const windSpeed = Math.floor(Math.random() * 8) + 8; // 8 - 15 kt
    const tide = (Math.random() * 0.4 + 1.2).toFixed(1); // 1.2 - 1.6 m
    
    document.getElementById('weather-temp').innerText = temp;
    document.getElementById('weather-desc').innerText = randomCond.desc[currentLang];
    document.getElementById('weather-icon').innerHTML = `<i class="${randomCond.icon}"></i>`;
    document.getElementById('weather-wind').innerText = `${windSpeed} kt / WSW`;
    document.getElementById('weather-tide').innerText = `Alta / High (${tide} m)`;
}


/* ==========================================================================
   PAINEL DE OPERAÇÕES: SHIP TRACKER (RASTREIO DE NAVIOS)
   ========================================================================== */

let dockedVessels = [
    { name: "LNG Soyo", flag: "Bahamas", type: "Gas Carrier", draft: "11.2 m", loc: "Terminal LNG", status: "loading" },
    { name: "Kwanda Express", flag: "Angola", type: "Offshore Supply", draft: "6.1 m", loc: "Cais Kwanda", status: "docked" },
    { name: "Sogester Blue", flag: "Panama", type: "Container Ship", draft: "7.0 m", loc: "Porto Central", status: "loading" },
    { name: "Cabinda Star", flag: "Angola", type: "Ferry", draft: "3.2 m", loc: "Porto Central", status: "docked" }
];

let expectedArrivals = [
    { name: "Atlantic Tide", flag: "Liberia", type: "Oil Tanker", eta: "Hoje, 19:40", origin: "Cabinda", status: "anchored" },
    { name: "Soyo Voyager", flag: "Marshall Is.", type: "Gas Carrier", eta: "Amanhã, 08:30", origin: "Lisboa", status: "anchored" },
    { name: "Zaire Horizon", flag: "Angola", type: "General Cargo", eta: "20 Junho, 14:15", origin: "Luanda", status: "anchored" }
];

let currentTrackerTab = 'docked';

function initShipTracker() {
    renderVesselsList();
    
    // Simulate vessel button
    document.getElementById('simulate-arrival-btn').addEventListener('click', simulateNewVessel);
}

window.switchTrackerTab = function(tabId) {
    currentTrackerTab = tabId;
    document.getElementById('btn-docked').classList.toggle('active', tabId === 'docked');
    document.getElementById('btn-arrivals').classList.toggle('active', tabId === 'arrivals');
    
    renderVesselsList();
};

function renderVesselsList() {
    const listArea = document.getElementById('vessels-list');
    listArea.innerHTML = '';
    
    const list = currentTrackerTab === 'docked' ? dockedVessels : expectedArrivals;
    
    list.forEach(vessel => {
        const item = document.createElement('div');
        item.className = 'vessel-item';
        
        let subText = currentTrackerTab === 'docked' 
            ? `${vessel.type} • Cais: ${vessel.loc}` 
            : `${vessel.type} • Origem/Origin: ${vessel.origin}`;
            
        let statusLabel = currentLang === 'pt' 
            ? (vessel.status === 'loading' ? 'A carregar' : vessel.status === 'docked' ? 'Atracado' : 'Fundeado')
            : (vessel.status === 'loading' ? 'Loading' : vessel.status === 'docked' ? 'Docked' : 'Anchored');
            
        item.innerHTML = `
            <div class="vessel-icon-circle"><i class="fa-solid fa-ship"></i></div>
            <div class="vessel-info">
                <div class="vessel-name-row">
                    <span class="vessel-name">${vessel.name}</span>
                    <span class="vessel-flag">${vessel.flag}</span>
                </div>
                <div class="vessel-details-row">
                    <span>${subText}</span>
                    <span class="vessel-status status-${vessel.status}">${statusLabel}</span>
                </div>
            </div>
        `;
        listArea.appendChild(item);
    });
}

function updateVesselStatusLanguage() {
    renderVesselsList();
}

const randomNames = ["Oceanic Pride", "Kwanza Tug", "Soyo Pioneer", "Zaire Wind", "DeepSea Carrier", "Gás de Angola"];
const randomFlags = ["Angola", "Panama", "Liberia", "Malta", "Bahamas", "Norway"];
const randomTypes = ["Container Ship", "Offshore Supply", "Gas Carrier", "Tugboat", "General Cargo"];
const randomLocations = ["Porto Central", "Cais Kwanda", "Terminal LNG"];

function simulateNewVessel() {
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)] + " " + (Math.floor(Math.random() * 90) + 10);
    const randomFlag = randomFlags[Math.floor(Math.random() * randomFlags.length)];
    const randomType = randomTypes[Math.floor(Math.random() * randomTypes.length)];
    
    if (currentTrackerTab === 'docked') {
        const randomLoc = randomLocations[Math.floor(Math.random() * randomLocations.length)];
        const newVessel = {
            name: randomName,
            flag: randomFlag,
            type: randomType,
            draft: (Math.random() * 5 + 4).toFixed(1) + " m",
            loc: randomLoc,
            status: Math.random() > 0.5 ? "loading" : "docked"
        };
        dockedVessels.unshift(newVessel); // Add to top
        if (dockedVessels.length > 6) dockedVessels.pop();
    } else {
        const now = new Date();
        now.setHours(now.getHours() + Math.floor(Math.random() * 4) + 1);
        const etaText = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        const newVessel = {
            name: randomName,
            flag: randomFlag,
            type: randomType,
            eta: `Hoje, ${etaText}`,
            origin: "Luanda",
            status: "anchored"
        };
        expectedArrivals.unshift(newVessel);
        if (expectedArrivals.length > 5) expectedArrivals.pop();
    }
    
    // Refresh with animations
    renderVesselsList();
    
    // Highlight first item
    const listArea = document.getElementById('vessels-list');
    if (listArea.firstChild) {
        listArea.firstChild.style.borderColor = 'var(--accent-cyan)';
        listArea.firstChild.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.2)';
    }
}


/* ==========================================================================
   VISUALIZADOR MOCK DE LEGISLAÇÃO / CÓDIGO DE ÉTICA (PDF)
   ========================================================================== */

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

window.openPdfViewer = function(docKey) {
    const modal = document.getElementById('pdf-modal');
    const doc = pdfTexts[docKey];
    
    document.getElementById('pdf-doc-main-title').innerText = doc.title[currentLang];
    
    const linesArea = document.getElementById('pdf-content-stub-text');
    linesArea.innerHTML = '';
    
    doc.text[currentLang].forEach(pText => {
        const p = document.createElement('p');
        p.className = 'pdf-p text-justify';
        p.innerText = pText;
        linesArea.appendChild(p);
    });
    
    // Download link simulation
    const downloadBtn = document.getElementById('pdf-download-btn');
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert(currentLang === 'pt' ? 'Descarregamento de documento simulado com sucesso!' : 'Simulated document download initiated successfully!');
    });
    
    modal.classList.add('open');
};

window.closePdfViewer = function() {
    document.getElementById('pdf-modal').classList.remove('open');
};


/* ==========================================================================
   FORMULÁRIO DE CONTACTO E VALIDAÇÃO
   ========================================================================== */

function initContactForm() {
    // Scroll tracker logo click -> smooth scroll to top
    const logoLink = document.getElementById('logo-link');
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

window.handleFormSubmit = function(event) {
    event.preventDefault();
    
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value;
    
    const btn = document.getElementById('form-submit-btn');
    const feedback = document.getElementById('form-feedback');
    
    // Simulate loading
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${currentLang === 'pt' ? 'A enviar...' : 'Sending...'}`;
    
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        
        feedback.className = 'form-feedback success';
        feedback.innerText = currentLang === 'pt' 
            ? 'Mensagem enviada com sucesso! Entraremos em contacto brevemente.' 
            : 'Message sent successfully! We will get in touch with you shortly.';
            
        // Reset form
        document.getElementById('contact-form').reset();
        
        // Hide feedback after 5 seconds
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 5000);
    }, 1500);
};

/* ==========================================================================
   CARROSEL DINÂMICO HERO
   ================================================================佳
   ========================================================================== */

function initHeroCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.indicator-dot');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 6000; // 6 segundos por slide
    
    function showSlide(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    function startSlideShow() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startSlideShow();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startSlideShow();
        });
    }
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-slide'));
            showSlide(index);
            startSlideShow();
        });
    });
    
    startSlideShow();
}


/* ==========================================================================
   SISTEMA DE PARTÍCULAS HERO (CANVAS)
   ========================================================================== */

function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const PARTICLE_COUNT = 55;
    const MAX_DIST = 140;

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.35;
            this.vy = (Math.random() - 0.5) * 0.35;
            this.r = Math.random() * 1.8 + 0.5;
            this.alpha = Math.random() * 0.4 + 0.1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 242, 254, ${this.alpha})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    const opacity = (1 - dist / MAX_DIST) * 0.12;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(79, 172, 254, ${opacity})`;
                    ctx.lineWidth = 0.7;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        animId = requestAnimationFrame(animate);
    }
    animate();
}


/* ==========================================================================
   BARRA DE PROGRESSO DE LEITURA
   ========================================================================== */

function initReadingProgress() {
    const bar = document.getElementById('reading-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
    });
}


/* ==========================================================================
   BOTÃO VOLTAR AO TOPO
   ========================================================================== */

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


/* ==========================================================================
   SCROLL REVEAL (INTERSECTION OBSERVER)
   ========================================================================== */

function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal-up');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));

    // Also add reveal-up to major section elements dynamically
    document.querySelectorAll('.service-card, .quick-card, .stat-card, .leg-card, .board-member-card, .timeline-item').forEach((el, idx) => {
        if (!el.classList.contains('reveal-up')) {
            el.classList.add('reveal-up');
            el.setAttribute('data-delay', String((idx % 4) * 150));
            observer.observe(el);
        }
    });
}

