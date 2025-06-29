import React, { useState, useEffect } from 'react';
import './Projects.css';
import { FaBolt, FaCircle, FaSquare, FaPlay, FaStar, FaGithub, FaVideo, FaTimes } from 'react-icons/fa';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageErrors, setImageErrors] = useState(new Set());

    const openVideoModal = (videoUrl) => {
        setSelectedVideo(videoUrl);
        setIsModalOpen(true);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
        setIsModalOpen(false);
    };

    const handleImageError = (projectId) => {
        setImageErrors(prev => new Set([...prev, projectId]));
    };

    // ESC tuşu ile modalı kapatma
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.keyCode === 27) {
                closeVideoModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'hidden'; // Scroll'u engelle
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'unset'; // Scroll'u tekrar aktif et
        };
    }, [isModalOpen]);

    const projects = [
        {
            id: 1,
            title: "My Portfolio",
            description: "Modern ve responsive kişisel portföy web sitesi. Kullanıcı dostu arayüz, projeler ve iletişim bilgileri.",
            image: "/images/projects/my-portfolio.png",
            technologies: ["React", "Javascript"],
            category: "frontend",
            githubLink: "https://github.com/OgulcanKacar1/MyPorfolio",
            status: "completed"
        },
        {
            id: 2,
            title: "Proje Yönetim Sistemi",
            description: "Takım çalışması için geliştirilmiş görev takip ve proje yönetim uygulaması. Real-time güncellemeler.",
            image: "/images/projects/pms.png",
            technologies: ["React", "Spring Boot", "MySql"],
            category: "fullstack",
            githubLink: "https://github.com/OgulcanKacar1/project-management-system-api",
            videoUrl: "/videos/projects/OgulcanKacarJava.mp4",
            status: "completed"
        },
        {
            id: 3,
            title: "Veteriner Yönetim Bilgi Sistemi",
            description: "Veteriner hekimler için hasta yönetimi ve randevu takibi. Modern arayüz ve kullanıcı dostu deneyim.",
            image: "/images/projects/vys.jpg",
            technologies: ["React", "Spring Boot", "MySQL"],
            category: "fullstack",
            githubLink: "https://github.com/OgulcanKacar1/veterinary-management-system",
            videoUrl: "/videos/projects/vysTanitim.mp4",
            status: "completed"
        },
        {
            id: 4,
            title: "Restoran Yönetim Sistemi",
            description: "Restoran yönetimi için kapsamlı bir uygulama. Menü yönetimi, sipariş takibi ve müşteri yönetimi.",
            image: "/images/projects/rms.png",
            technologies: ["JavaFX", "Java", "MsSQL"],
            category: "fullstack",
            githubLink: "https://github.com/username/blog-platform",
            videoUrl: "/videos/projects/rmsTanitim.mp4", // Video henüz yok
            status: "completed"
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
                                {imageErrors.has(project.id) ? (
                                    <div className="image-fallback">
                                        <span className="fallback-icon">🖼️</span>
                                    </div>
                                ) : (
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        onError={() => handleImageError(project.id)}
                                    />
                                )}
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
                                        {project.videoUrl && (
                                            <button 
                                                onClick={() => openVideoModal(project.videoUrl)}
                                                className="project-link video"
                                            >
                                                <FaVideo /> Tanıtım Videosu
                                            </button>
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

                {/* Video Modal */}
                {isModalOpen && (
                    <div className="video-modal" onClick={closeVideoModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeVideoModal}>
                                <FaTimes />
                            </button>
                            <div className="video-container">
                                {selectedVideo ? (
                                    <video
                                        src={selectedVideo}
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                        preload="metadata"
                                        onError={(e) => {
                                            console.warn('Video yüklenemedi:', selectedVideo);
                                        }}
                                    >
                                        Video formatı desteklenmiyor
                                    </video>
                                ) : (
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        height: '300px',
                                        color: '#ffffff',
                                        fontSize: '1.2rem'
                                    }}>
                                        Video yükleniyor...
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
