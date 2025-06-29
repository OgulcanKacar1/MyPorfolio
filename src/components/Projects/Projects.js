import React, { useState } from 'react';
import './Projects.css';
import { FaBolt, FaCircle, FaSquare, FaPlay, FaStar, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "My Portfolio",
            description: "Modern ve responsive kişisel portföy web sitesi. Kullanıcı dostu arayüz, projeler ve iletişim bilgileri.",
            image: "/api/placeholder/400/250",
            technologies: ["React", "Javascript"],
            category: "frontend",
            githubLink: "https://github.com/username/ecommerce",
            liveLink: "https://ecommerce-demo.com",
            status: "completed"
        },
        {
            id: 2,
            title: "Görev Yönetim Uygulaması",
            description: "Takım çalışması için geliştirilmiş görev takip ve proje yönetim uygulaması. Real-time güncellemeler.",
            image: "/api/placeholder/400/250",
            technologies: ["React", "Spring Boot", "PostgreSQL", "WebSocket"],
            category: "fullstack",
            githubLink: "https://github.com/username/task-manager",
            liveLink: "https://taskmanager-demo.com",
            status: "completed"
        },
        {
            id: 3,
            title: "Hava Durumu Uygulaması",
            description: "Gerçek zamanlı hava durumu bilgileri ve 7 günlük tahmin sunan modern weather app.",
            image: "/api/placeholder/400/250",
            technologies: ["React", "Weather API", "CSS3"],
            category: "frontend",
            githubLink: "https://github.com/username/weather-app",
            liveLink: "https://weather-demo.com",
            status: "completed"
        },
        {
            id: 4,
            title: "Blog Platformu",
            description: "Kişisel blog yazma ve paylaşma platformu. Markdown desteği ve yorum sistemi.",
            image: "/api/placeholder/400/250",
            technologies: ["React", "Node.js", "MySQL", "Markdown"],
            category: "fullstack",
            githubLink: "https://github.com/username/blog-platform",
            liveLink: "",
            status: "in-progress"
        },
        
    ];

    const categories = [
        { key: 'all', label: 'Tümü', icon: <FaCircle /> },
        { key: 'frontend', label: 'Frontend', icon: <FaSquare /> },
        { key: 'backend', label: 'Backend', icon: <FaPlay /> },
        { key: 'fullstack', label: 'Full Stack', icon: <FaStar /> }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return '#4CAF50';
            case 'in-progress': return '#FF9800';
            case 'planning': return '#2196F3';
            default: return '#757575';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'completed': return 'Tamamlandı';
            case 'in-progress': return 'Devam Ediyor';
            case 'planning': return 'Planlanıyor';
            default: return 'Bilinmiyor';
        }
    };

    return (
        <div className="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h1 className="projects-title">
                        <FaBolt className="title-icon" />
                        Projelerim
                    </h1>
                    <p className="projects-subtitle">
                        Çeşitli teknolojiler kullanarak geliştirdiğim projeler
                    </p>
                </div>

                <div className="filter-container">
                    {categories.map(category => (
                        <button
                            key={category.key}
                            className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category.key)}
                        >
                            <span className="filter-icon">{category.icon}</span>
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        {project.githubLink && (
                                            <a 
                                                href={project.githubLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link github"
                                            >
                                                <FaGithub /> GitHub
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a 
                                                href={project.liveLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link live"
                                            >
                                                <FaExternalLinkAlt /> Canlı Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span 
                                        className="project-status"
                                        style={{ backgroundColor: getStatusColor(project.status) }}
                                    >
                                        {getStatusText(project.status)}
                                    </span>
                                </div>
                                
                                <p className="project-description">{project.description}</p>
                                
                                <div className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="no-projects">
                        <h3>Bu kategoride henüz proje bulunmuyor</h3>
                        <p>Yakında yeni projeler eklenecek!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
