
import React from 'react';
import './Home.css';
import { 
    FaRocket, 
    FaCode, 
    FaGraduationCap, 
    FaChevronDown,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaLightbulb
} from 'react-icons/fa';

const Home = () => {
    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const stats = [
        { number: "3.66", label: "GPA", icon: <FaGraduationCap /> },
        { number: "2+", label: "Yıl Deneyim", icon: <FaRocket /> },
        { number: "4+", label: "Proje", icon: <FaLightbulb /> },
        { number: "6+", label: "Teknoloji", icon: <FaCode /> }
    ];

    // Gerçek projeler
    const activeProjects = [
        {
            name: "My Portfolio",
            status: "completed",
            tech: "React"
        },
        {
            name: "Proje Yönetim Sistemi",
            status: "completed", 
            tech: "Spring Boot + React"
        },
        {
            name: "Veteriner Yönetim Sistemi",
            status: "completed",
            tech: "Spring Boot + React"
        },
        {
            name: "Restoran Yönetim Sistemi",
            status: "completed",
            tech: "JavaFX + MSSQL"
        }
    ];

    return (
        <div className="home">
            <div className="home-container">
                <div className="hero-section">
                    <div className="hero-content">
                        <div className="greeting">
                            <span className="emoji">👋</span>
                            <span className="greeting-text">Merhaba, Ben</span>
                        </div>
                        <h1 className="hero-title">
                            <span className="name">Oğulcan Kacar</span>
                            <span className="role">Backend Developer</span>
                        </h1>
                        <p className="hero-description">
                            Işık Üniversitesi YBS 4. sınıf öğrencisiyim. Java ve Spring Boot ile 
                            enterprise seviyede backend çözümleri geliştiren, problem çözmeyi seven 
                            ve sürekli öğrenmeye odaklı bir geliştiriciyim.
                        </p>

                        <div className="social-links">
                            <a href="https://linkedin.com/in/ogulcan-kacarr" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/OgulcanKacar1" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="mailto:ogulcankacarr@gmail.com">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="floating-card">
                            <div className="card-header">
                                <FaRocket className="card-icon" />
                                <span>Projelerim</span>
                            </div>
                            <div className="card-content">
                                {activeProjects.map((project, index) => (
                                    <div key={index} className="project-line">
                                        <span className={`dot ${project.status}`}></span>
                                        <div className="project-info">
                                            <span className="project-name">{project.name}</span>
                                            <span className="project-tech">{project.tech}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stats-section">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default Home;