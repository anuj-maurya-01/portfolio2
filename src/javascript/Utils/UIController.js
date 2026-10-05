export default class UIController {
    constructor() {
        this.data = {
            summary: {
                title: 'Professional Summary',
                html: `
                    <p class="panel-desc">Detail-oriented and highly driven <strong>Computer Science and Engineering undergraduate</strong> with hands-on experience in building scalable end-to-end Machine Learning systems and responsive Full-Stack web applications.</p>
                    <div class="panel-highlights">
                        <div class="highlight-item"><span class="icon">🚀</span> <span>Core Competencies: Predictive modeling, data pipeline engineering, technical problem-solving.</span></div>
                        <div class="highlight-item"><span class="icon">💡</span> <span>Community Leadership: Organizing tech events, running workshops, peer-to-peer coding bootcamps.</span></div>
                        <div class="highlight-item"><span class="icon">📍</span> <span>Based in Prayagraj, UP, India</span></div>
                    </div>
                `
            },
            experience: {
                title: 'Experience',
                html: `
                    <div class="panel-exp-list">
                        <div class="panel-exp-card">
                            <div class="card-header">
                                <span class="exp-role">Campus Mantri (Ambassador)</span>
                                <span class="exp-date">July 2026 – Present</span>
                            </div>
                            <div class="exp-org">GeeksforGeeks • Prayagraj, UP</div>
                            <ul class="exp-bullets">
                                <li>Serving as primary brand representative and community liaison on campus.</li>
                                <li>Spearheading competitive programming contests and technical workshops.</li>
                                <li>Coordinating with student teams to design technical peer-learning initiatives.</li>
                            </ul>
                        </div>

                        <div class="panel-exp-card">
                            <div class="card-header">
                                <span class="exp-role">Core Team Member</span>
                                <span class="exp-date">Dec. 2024 – Present</span>
                            </div>
                            <div class="exp-org">United College of Engineering and Research • Prayagraj, UP</div>
                            <ul class="exp-bullets">
                                <li>Collaborating on end-to-end planning and logistics for hackathons and tech fests.</li>
                                <li>Facilitating development round-tables and peer coding bootcamps.</li>
                            </ul>
                        </div>

                        <div class="panel-exp-card">
                            <div class="card-header">
                                <span class="exp-role">Research Intern (AI/ML)</span>
                                <span class="exp-date">May 2026 – June 2026</span>
                            </div>
                            <div class="exp-org">Innovation and Incubation Hub MNNIT Foundation • Prayagraj, UP</div>
                            <ul class="exp-bullets">
                                <li>Architected data preprocessing pipelines using Scikit-learn (outlier capping, scaling).</li>
                                <li>Conducted EDA & baseline ML models during AIML Summer Internship.</li>
                                <li>Evaluated classification metrics and mitigated dataset imbalances.</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            projects: {
                title: 'Featured Projects',
                html: `
                    <div class="panel-proj-list">
                        <div class="panel-proj-card">
                            <div class="proj-title">Employee Attrition Prediction System</div>
                            <div class="proj-tech">Python, Scikit-learn, XGBoost, Streamlit</div>
                            <p class="proj-desc">End-to-end ML solution to detect employee turnover risks utilizing the IBM HR Analytics dataset. Features ColumnTransformer preprocessing (IQR capping, Z-score, One-Hot), SMOTE oversampling, and 87.76% peak accuracy with XGBoost (88.9% recall).</p>
                        </div>
                        <div class="panel-proj-card">
                            <div class="proj-title">CPU Scheduling Visualizer</div>
                            <div class="proj-tech">React.js, JavaScript, HTML5, CSS3, Vercel</div>
                            <p class="proj-desc">Interactive web simulator visualizing classic CPU scheduling algorithms (FCFS, SJF, SRTF, Priority, Round Robin) with Gantt charts and real-time Waiting/Turnaround/Response time metrics.</p>
                        </div>
                    </div>
                `
            },
            education: {
                title: 'Education',
                html: `
                    <div class="panel-edu-list">
                        <div class="panel-edu-card">
                            <div class="edu-school">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</div>
                            <div class="edu-degree">Bachelor of Technology in Computer Science and Engineering</div>
                            <div class="edu-date">Sep. 2024 – Sep. 2028 | Lucknow, UP</div>
                            <div class="edu-details">Technical Writing & Poetry societies. Skills: Python, C, Markup Languages.</div>
                        </div>
                        <div class="panel-edu-card">
                            <div class="edu-school">Shri MahaPrabhu Public School</div>
                            <div class="edu-degree">Intermediate (Class XII) – Maths & Computer Science</div>
                            <div class="edu-date">Apr. 2023 – Apr. 2024 | Prayagraj, UP</div>
                            <div class="edu-details">Advanced Mathematics, Computer Science Fundamentals & Physics.</div>
                        </div>
                        <div class="panel-edu-card">
                            <div class="edu-school">Shri MahaPrabhu Public School</div>
                            <div class="edu-degree">High School (Class X) – Maths & Computer Science</div>
                            <div class="edu-date">Apr. 2021 – Apr. 2022 | Prayagraj, UP</div>
                            <div class="edu-details">Graduated with overall Grade: A.</div>
                        </div>
                    </div>
                `
            },
            certifications: {
                title: 'Certifications',
                html: `
                    <div class="panel-cert-grid">
                        <div class="cert-pill"><strong>Artificial Intelligence & Machine Learning</strong> — MNNIT Foundation (May 2026)</div>
                        <div class="cert-pill"><strong>Generative AI Virtual Internship</strong> — IBM (Aug. 2025)</div>
                        <div class="cert-pill"><strong>Devengers Promptwars 2026</strong> — Unstop (Jul. 2026)</div>
                        <div class="cert-pill"><strong>Cyber Job Simulation</strong> — Deloitte Australia / Forage (Apr. 2026)</div>
                        <div class="cert-pill"><strong>ChatGPT for Everyone</strong> — HCL Tech (Sep. 2025)</div>
                        <div class="cert-pill"><strong>Getting Started with Microsoft Excel</strong> — Microsoft (Aug. 2025)</div>
                        <div class="cert-pill"><strong>Google Ads For Beginners</strong> — Google (Aug. 2025)</div>
                    </div>
                `
            },
            skills: {
                title: 'Skills & Expertise',
                html: `
                    <div class="panel-skills-wrap">
                        <div class="skill-group">
                            <div class="group-title">Languages & Frameworks</div>
                            <div class="tags"><span class="tag">Python</span><span class="tag">JavaScript</span><span class="tag">React.js</span><span class="tag">HTML5</span><span class="tag">CSS3</span><span class="tag">SQL</span></div>
                        </div>
                        <div class="skill-group">
                            <div class="group-title">Domains & Methodologies</div>
                            <div class="tags"><span class="tag highlight">Machine Learning</span><span class="tag highlight">Cyber Security</span><span class="tag highlight">Full Stack Web Development</span><span class="tag highlight">Prompt Engineering</span></div>
                        </div>
                        <div class="skill-group">
                            <div class="group-title">Tools & Libraries</div>
                            <div class="tags"><span class="tag">Streamlit</span><span class="tag">Scikit-learn</span><span class="tag">XGBoost</span><span class="tag">Git</span><span class="tag">GitHub</span><span class="tag">Figma</span><span class="tag">Vercel</span></div>
                        </div>
                    </div>
                `
            },
            contact: {
                title: 'Get In Touch',
                html: `
                    <div class="panel-contact-box">
                        <p>Feel free to reach out for collaborations, ML research, or full-stack opportunities!</p>
                        <div class="contact-links">
                            <a href="mailto:anujmaurya0104@gmail.com" class="contact-btn">✉️ anujmaurya0104@gmail.com</a>
                            <a href="https://instagram.com/anuj_maurya.01" target="_blank" rel="noopener" class="contact-btn">📸 anuj_maurya.01 (Instagram)</a>
                            <a href="https://linkedin.com/in/anujmauryaucer" target="_blank" rel="noopener" class="contact-btn">💼 in/anujmauryaucer (LinkedIn)</a>
                            <a href="https://facebook.com/anujmaurya2007" target="_blank" rel="noopener" class="contact-btn">👤 anujmaurya2007 (Facebook)</a>
                            <a href="https://github.com/anujmaurya1004" target="_blank" rel="noopener" class="contact-btn">💻 github.com/anujmaurya1004</a>
                            <a href="tel:+919532156562" class="contact-btn">📞 +91 9532156562</a>
                        </div>
                    </div>
                `
            }
        }

        this.init()
    }

    init() {
        // Elements
        this.$quickPanel = document.querySelector('.js-quick-panel')
        this.$panelTitle = document.querySelector('.js-panel-title')
        this.$panelContent = document.querySelector('.js-panel-content')
        this.$closePanel = document.querySelector('.js-close-panel')

        this.$resumeModal = document.querySelector('.js-resume-modal')
        this.$openResume = document.querySelector('.js-open-resume')
        this.$closeResume = document.querySelector('.js-close-resume')
        this.$printResume = document.querySelector('.js-print-resume')

        this.$navBtns = document.querySelectorAll('.js-nav-btn')

        // Listeners
        if (this.$navBtns) {
            this.$navBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const target = e.currentTarget.getAttribute('data-target')
                    this.openQuickPanel(target)
                })
            })
        }

        if (this.$closePanel) {
            this.$closePanel.addEventListener('click', () => this.closeQuickPanel())
        }

        if (this.$openResume) {
            this.$openResume.addEventListener('click', () => this.openResumeModal())
        }

        if (this.$closeResume) {
            this.$closeResume.addEventListener('click', () => this.closeResumeModal())
        }

        if (this.$printResume) {
            this.$printResume.addEventListener('click', () => window.print())
        }

        if (this.$resumeModal) {
            this.$resumeModal.addEventListener('click', (e) => {
                if (e.target === this.$resumeModal) {
                    this.closeResumeModal()
                }
            })
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeQuickPanel()
                this.closeResumeModal()
            }
        })
    }

    openQuickPanel(key) {
        if (!this.data[key]) return
        const section = this.data[key]
        this.$panelTitle.textContent = section.title
        this.$panelContent.innerHTML = section.html
        this.$quickPanel.classList.add('is-open')
    }

    closeQuickPanel() {
        if (this.$quickPanel) {
            this.$quickPanel.classList.remove('is-open')
        }
    }

    openResumeModal() {
        if (this.$resumeModal) {
            this.$resumeModal.classList.add('is-open')
        }
    }

    closeResumeModal() {
        if (this.$resumeModal) {
            this.$resumeModal.classList.remove('is-open')
        }
    }
}
