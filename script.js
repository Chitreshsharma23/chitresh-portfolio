/**
 * script.js v4 (Updated with Back-to-Top Logic)
 * ---
 * Vanilla JavaScript for interactivity, DOM manipulation, and logic.
 * Reads data from data.js.
 */

document.addEventListener('DOMContentLoaded', () => {
    const data = portfolioData; // Global variable from data.js
    const root = document.documentElement;
    const body = document.body;
    const navbar = document.getElementById('navbar');
    let isDark = localStorage.getItem('theme') === 'dark';

    // --- Utility Functions ---
    function getLucideIcon(iconName, size = 24, classNames = 'theme-accent') {
        return `<i data-lucide="${iconName}" size="${size}" class="${classNames}"></i>`;
    }

    function formatBio(text) {
        return text.split('**').map((part, idx) => {
            if (idx % 2 === 1) {
                return `<strong class="theme-accent">${part}</strong>`;
            }
            return part;
        }).join('');
    }

    // --- Theme Toggling Logic ---
    const themeToggleButtons = document.querySelectorAll('#theme-toggle-mobile, #theme-toggle-desktop');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    function updateTheme() {
        root.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        const iconType = isDark ? 'sun' : 'moon';
        themeToggleButtons.forEach(btn => {
            btn.innerHTML = getLucideIcon(iconType, 20);
        });

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    updateTheme();

    themeToggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            isDark = !isDark;
            updateTheme();
        });
    });

    // --- Mobile Menu Logic ---
    mobileMenuButton.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('hidden');
        menuIcon.setAttribute('data-lucide', isOpen ? 'menu' : 'x');
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });

    // --- DOM Rendering Functions ---
    function renderPortfolio() {
        const socialLinksData = [
            { icon: 'github', url: data.personalInfo.githubURL },
            { icon: 'linkedin', url: data.personalInfo.linkedinURL },
            { icon: 'mail', url: `mailto:${data.personalInfo.email}` }
        ];

        // Navigation
        const desktopNav = document.getElementById('desktop-nav');
        const mobileNav = document.getElementById('mobile-menu');
        let desktopHtml = `<button id="theme-toggle-desktop" class="p-2 rounded-full theme-accent-bg theme-accent hover:scale-110 transition-transform">${getLucideIcon(isDark ? 'sun' : 'moon', 20)}</button>`;
        let mobileHtml = '';

        data.navLinks.forEach(link => {
            desktopHtml += `<a href="#${link.targetId}" class="nav-link text-sm font-medium transition-colors relative group theme-text-secondary hover:theme-text">${link.label}<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full"></span></a>`;
            mobileHtml += `<a href="#${link.targetId}" class="block w-full text-left py-2 theme-text-secondary hover:theme-accent transition-colors">${link.label}</a>`;
        });
        
        desktopNav.innerHTML = desktopHtml;
        mobileNav.innerHTML = `<div class="md:hidden mt-4 pb-4 space-y-4">${mobileHtml}</div>`;

        // Hero Section
        document.getElementById('hero-role').textContent = data.personalInfo.role;
        const availabilityFlag = document.getElementById('availability-flag');
        if (data.isAvailable) {
            availabilityFlag.textContent = '🚀 Available for New Projects/Opportunities';
            availabilityFlag.classList.remove('hidden');
        } else {
            availabilityFlag.classList.add('hidden');
        }

        const socialHero = document.getElementById('social-links-hero');
        socialHero.innerHTML = socialLinksData.map(({ icon, url }) => `
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="p-3 rounded-full theme-card-bg border theme-border hover:theme-accent-bg transition-all transform hover:scale-110">
                ${getLucideIcon(icon, 20, 'theme-accent')}
            </a>
        `).join('');

        // About Section
        document.getElementById('about-name').textContent = data.personalInfo.name;
        document.getElementById('about-role').textContent = data.personalInfo.role;
        document.getElementById('bio-summary').innerHTML = formatBio(data.aboutMe.bioSummary);

        const journeyHighlightsGrid = document.getElementById('journey-highlights');
        journeyHighlightsGrid.innerHTML = data.aboutMe.journeyHighlights.map(item => `
            <div class="flex flex-col items-center text-center p-4 rounded-xl theme-card-bg border theme-border hover:shadow-xl transition-all h-full">
                <div class="p-3 rounded-full theme-accent-bg mb-3">
                    ${getLucideIcon(item.icon, 24)}
                </div>
                <div class="font-semibold theme-text mb-1">${item.title}</div>
                <p class="text-xs theme-text-secondary">${item.description}</p>
            </div>
        `).join('');

        const aboutStats = document.getElementById('about-stats');
        aboutStats.innerHTML = data.aboutMe.keyStats.map(stat => `
            <div class="p-6 rounded-xl theme-card-bg border theme-border text-center hover:shadow-lg transition-all">
                <div class="text-3xl font-bold theme-accent">${stat.value}</div>
                <div class="text-sm theme-text-secondary mt-1">${stat.unit}</div>
            </div>
        `).join('');
        
        const skillsPreview = document.getElementById('skills-grid-preview');
        skillsPreview.innerHTML = data.aboutMe.keySkills.slice(0, 4).map(skill => `
            <div class="space-y-2 p-3 theme-card-bg border theme-border rounded-lg">
                <div class="flex justify-between text-sm">
                    <span class="theme-text font-medium">${skill.name}</span>
                    <span class="theme-accent">${skill.level}%</span>
                </div>
                <div class="h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-primary rounded-full" style="width: ${skill.level}%;"></div>
                </div>
            </div>
        `).join('');

        // Projects Section
        const projectsGrid = document.getElementById('projects-grid');
        projectsGrid.innerHTML = data.projects.map(project => `
            <div class="group rounded-2xl overflow-hidden theme-card-bg border theme-border shadow-lg hover:shadow-2xl transition-all ${project.featured ? 'md:col-span-2' : ''}">
                <div class="aspect-video overflow-hidden">
                    <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.onerror=null; this.src='https://via.placeholder.com/800x450/4C1D95/FFFFFF?text=VLSI+Project+Image'"/>
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-3 theme-text">${project.title}</h3>
                    <p class="theme-text-secondary mb-4">${project.shortDescription}</p>
                    <div class="flex flex-wrap gap-2 mb-4">${project.techStack.map(tech => `<span class="px-3 py-1 text-xs rounded-full theme-accent-bg theme-accent font-medium">${tech}</span>`).join('')}</div>
                    <div class="flex flex-wrap gap-4">
                        ${project.links ? project.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 theme-accent-bg theme-accent rounded-lg hover:scale-105 transition-transform text-sm font-medium">${getLucideIcon('external-link', 16, 'theme-accent')} ${link.label}</a>`).join('') : ''}
                        ${project.githubRepoUrl && project.githubRepoUrl !== '#' ? `<a href="${project.githubRepoUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 border theme-border rounded-lg hover:theme-accent-bg transition-colors text-sm font-medium theme-text-secondary hover:theme-accent">${getLucideIcon('github', 16, 'theme-text-secondary hover:theme-accent')} Code</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');

        // Achievements Section
        const achievementsGrid = document.getElementById('achievements-grid');
        achievementsGrid.innerHTML = data.achievements.map(a => `
            <div class="p-6 rounded-2xl theme-card-bg border theme-border shadow-lg hover:shadow-xl transition-all">
                <div class="flex items-start gap-4">
                    <div class="p-3 rounded-xl theme-accent-bg">${getLucideIcon(a.iconClass, 24)}</div>
                    <div class="flex-1">
                        <h3 class="text-xl font-bold mb-2 theme-text">${a.title}</h3>
                        <p class="text-sm theme-accent mb-2">${a.organization}</p>
                        <p class="text-sm theme-text-secondary mb-3">${a.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-xs theme-text-secondary">${a.date}</span>
                            ${a.proofUrl !== "#" ? `<a href="${a.proofUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-1 text-xs theme-accent-bg theme-accent rounded-lg hover:scale-105 transition-transform font-medium">${getLucideIcon('file-text', 14, 'theme-accent')} View ${a.proofType}</a>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Skills Section
        const skillsGrid = document.getElementById('skills-grid');
        skillsGrid.innerHTML = data.aboutMe.keySkills.map(skill => `
            <div class="space-y-2">
                <div class="flex justify-between text-sm">
                    <span class="theme-text font-medium">${skill.name}</span>
                    <span class="theme-accent">${skill.level}%</span>
                </div>
                <div class="h-3 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden transition-all duration-300" data-skill-level="${skill.level}">
                    <div class="h-full bg-gradient-primary rounded-full transition-all duration-1000" style="width: 0%;"></div>
                </div>
            </div>
        `).join('');

        // Testimonials
        const testimonialsGrid = document.getElementById('testimonials-grid');
        testimonialsGrid.innerHTML = data.testimonials.map(t => `
            <div class="p-8 rounded-2xl theme-card-bg border theme-border shadow-lg hover:shadow-xl transition-all">
                <p class="theme-text-secondary italic mb-6 text-lg">"${t.quote}"</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <img src="${t.avatarUrl || 'https://via.placeholder.com/48'}" alt="${t.clientName}" class="w-12 h-12 rounded-full object-cover border-2 border-purple-500"/>
                        <div>
                            <div class="font-semibold theme-text">${t.clientName}</div>
                            <div class="text-sm theme-text-secondary">${t.clientTitle}</div>
                        </div>
                    </div>
                    ${t.logoUrl ? `<img src="${t.logoUrl}" alt="Logo" class="h-9 opacity-70" onerror="this.onerror=null; this.src='https://via.placeholder.com/32/9333ea/FFFFFF?text=LOGO'">` : ''}
                </div>
            </div>
        `).join('');

        // Footer
        document.getElementById('footer-text').textContent = `© ${new Date().getFullYear()} ${data.personalInfo.name}. Crafted with precision and passion.`;

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        document.getElementById('theme-toggle-desktop').addEventListener('click', () => {
            isDark = !isDark;
            updateTheme();
        });
    }

    // --- Interactivity and Snappiness ---

    window.scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuIcon.setAttribute('data-lucide', 'menu');
            }
        }
    }
    
    // Scroll-Based Section Highlighting
    const sections = data.navLinks.map(link => document.getElementById(link.targetId));
    let activeSection = 'hero';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSection = entry.target.id;
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            const targetId = link.getAttribute('href')?.substring(1);
            if (targetId === activeSection) {
                link.classList.add('active');
            }
        });
    }, { rootMargin: '-100px 0px -60% 0px' });

    sections.forEach(section => { if (section) observer.observe(section); });

    // Skill Bar Animation
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('[data-skill-level] > div');
                skillBars.forEach(bar => {
                    const level = bar.parentElement.getAttribute('data-skill-level');
                    bar.style.width = `${level}%`;
                });
                skillObserver.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 }); 
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) skillObserver.observe(skillsSection);

    // Global Scroll Effects (Parallax, Header Shadow, AND BACK TO TOP)
    const heroImage = document.querySelector('#hero img');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Parallax hero
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrollY * 0.1}px) scale(1.0)`; 
            heroImage.style.transition = 'none'; 
        }
        
        // Header Shadow
        if (scrollY > 10) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }

        // --- NEW: Back to Top Arrow Logic ---
        if (scrollY > 400) {
            backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            backToTopBtn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
        } else {
            backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            backToTopBtn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
        }
    });

    // Fade-in on Scroll
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); 
    document.querySelectorAll('.fade-in').forEach(el => fadeInObserver.observe(el));

    // Form Handling
    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('contact-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.textContent = "Sending...";
        submitButton.disabled = true;
        contactStatus.classList.remove('hidden');
        contactStatus.textContent = "Processing...";

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
        }).then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                contactStatus.textContent = "Message sent successfully! I'll be in touch soon.";
                form.reset();
            } else {
                contactStatus.textContent = "Oops! There was an error sending your message.";
            }
        }).catch(error => {
            contactStatus.textContent = "Error connecting to the service.";
        }).finally(() => {
            submitButton.textContent = "Send Message";
            submitButton.disabled = false;
            setTimeout(() => { contactStatus.classList.add('hidden'); }, 5000);
        });
    });

    // --- Initialize ---
    renderPortfolio();
    updateTheme(); 
});
