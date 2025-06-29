import React, { useState } from 'react';
import './About.css';
import { 
    FaUser, 
    FaGraduationCap, 
    FaCode, 
    FaHeart, 
    FaRocket, 
    FaBrain,
    FaDatabase,
    FaMobile,
    FaServer,
    FaMusic,
    FaCoffee,
    FaLightbulb,
    FaBullseye,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaEnvelope,
    FaBriefcase,
    FaBuilding,
    FaClock,
    FaTools,
    FaStar,
    FaUsers
} from 'react-icons/fa';

const About = () => {
    const [activeTab, setActiveTab] = useState('about');

    const timeline = [
        {
            year: "2024",
            title: "Backend Developer Yolculuğu",
            description: "Spring Boot ve Java ile enterprise seviyede projeler geliştirmeye başladım",
            icon: <FaRocket />
        },
        {
            year: "2023 - 2024",
            title: "Asistan Öğrenci - Işık Üniversitesi",
            description: "Algoritmalar dersi için ödevlerin değerlendirilmesi ve laboratuvar yönetimi (Ekim 2023 - Haziran 2024)",
            icon: <FaGraduationCap />
        },
        {
            year: "2023",
            title: "IT&MIS Kulübü Yönetimi & Intala Lab",
            description: "Kulüp yönetim ekibi üyeliği ve bursiyer öğrenci olarak araştırma projelerinde çalışma (Ekim 2023 - Devam)",
            icon: <FaUsers />
        },
        {
            year: "2023",
            title: "Full Stack Deneyimi",
            description: "React ve React Native ile frontend tarafında da deneyim kazandım",
            icon: <FaCode />
        },
        {
            year: "2022",
            title: "Kişisel Projeler Başlangıcı",
            description: "Web ve mobil uygulama geliştirme projelerine başladım",
            icon: <FaCode />
        },
        {
            year: "2021",
            title: "Üniversite Hayatı",
            description: "Işık Üniversitesi'nde Yönetim Bilişim Sistemleri eğitimine başladım",
            icon: <FaGraduationCap />
        },
        {
            year: "2017-2021",
            title: "Lise Eğitimi",
            description: "Bulancak Anadolu Lisesi'nden mezun oldum",
            icon: <FaGraduationCap />
        }
    ];

    const experiences = [
        {
            company: "Işık Üniversitesi",
            position: "Asistan Öğrenci",
            period: "Ekim 2023 - Haziran 2024",
            description: "Algoritmalar dersi için ödevlerin değerlendirilmesi ve laboratuvar bilgisayarlarında yazılım güncellemeleri ile bakım süreçlerinin yönetilmesi. Öğrencilere teknik destek sağlama ve akademik süreçlerde aktif rol alma.",
            technologies: ["Algoritma Analizi", "Laboratuvar Yönetimi", "Teknik Destek", "Öğretim Asistanlığı", "Sistem Bakımı"],
            icon: <FaGraduationCap />,
            type: "academic"
        },
        {
            company: "Işık Üniversitesi - Intala Lab",
            position: "Bursiyer Öğrenci",
            period: "Ekim 2023 - Ocak 2024",
            description: "Projenin ilk aşaması için dokümantasyon inceleme ve analiz çalışmaları. Kotlin ile mobil geliştirme alanında araştırma ve geliştirme faaliyetlerinde bulundum.",
            technologies: ["Kotlin", "Mobil Geliştirme", "Dokümantasyon", "Araştırma & Geliştirme", "Proje Analizi"],
            icon: <FaBriefcase />,
            type: "research"
        },
        {
            company: "IT&MIS Kulübü - Işık Üniversitesi",
            position: "Yönetim Ekibi Üyesi",
            period: "Ekim 2023 - Halen",
            description: "Hackathon yarışmaları, seminerler, firma ziyaretleri ve benzeri etkinliklerin organizasyonu. Teknoloji topluluğunda liderlik ve etkinlik yönetimi deneyimi kazandım.",
            technologies: ["Etkinlik Yönetimi", "Liderlik", "Organizasyon", "Hackathon", "Topluluk Yönetimi", "Networking"],
            icon: <FaUsers />,
            type: "leadership"
        },
        {
            company: "Kişisel Projeler",
            position: "Full Stack Developer",
            period: "2022 - Devam Ediyor",
            description: "Java Spring Boot ile backend API'ler, React ile modern web arayüzleri ve React Native ile mobil uygulamalar geliştirerek teknoloji yelpazemi genişlettim.",
            technologies: ["Java", "Spring Boot", "React", "React Native", "MSSQL", "RESTful APIs", "Git"],
            icon: <FaCode />,
            type: "project"
        }
    ];

    const interests = [
        { name: "Backend Geliştirme", icon: <FaServer />, color: "#4CAF50" },
        { name: "Sistem Mimarisi", icon: <FaBrain />, color: "#2196F3" },
        { name: "Temiz Kod", icon: <FaLightbulb />, color: "#FF9800" },
        { name: "Veritabanı Tasarımı", icon: <FaDatabase />, color: "#9C27B0" },
        { name: "Müzik & DJ", icon: <FaMusic />, color: "#E91E63" },
        { name: "Kahve", icon: <FaCoffee />, color: "#795548" }
    ];

    return (
        <div className="about">
            <div className="about-container">
                <div className="about-header">
                    <h1 className="about-title">
                        <FaUser className="title-icon" />
                        Hakkımda
                    </h1>
                   
                </div>

                <div className="about-tabs">
                    <button 
                        className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
                        onClick={() => setActiveTab('about')}
                    >
                        <FaUser /> Kişisel Bilgiler
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        <FaBriefcase /> Deneyim
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'journey' ? 'active' : ''}`}
                        onClick={() => setActiveTab('journey')}
                    >
                        <FaRocket /> Eğitim & Yolculuğum
                    </button>
                </div>

                <div className="about-content">
                    {activeTab === 'about' && (
                        <div className="about-info">
                            <div className="info-grid">
                                <div className="info-card main-info">
                                    <h3>
                                        <FaGraduationCap className="card-icon" />
                                        Merhaba! Ben Oğulcan Kacar
                                    </h3>
                                    <p>
                                        Işık Üniversitesi Yönetim Bilişim Sistemleri bölümünde 4. sınıf öğrencisiyim. 
                                        Yazılıma olan ilgim sadece derslerle sınırlı kalmadı; zamanla bu alanda üretmenin 
                                        ve çözüm geliştirmenin bana ne kadar keyif verdiğini fark ettim.
                                    </p>
                                    <p>
                                        Özellikle <strong>Java ve Spring Boot</strong> ile backend geliştirme süreçleriyle 
                                        uğraşmak, sistemin mantığını kurmak ve veri akışını yönetmek benim için bir tutku haline geldi.
                                    </p>
                                </div>

                                <div className="info-card contact-info">
                                    <h4>
                                        <FaEnvelope className="card-icon" />
                                        İletişim & Eğitim
                                    </h4>
                                    <div className="contact-item">
                                        <FaMapMarkerAlt />
                                        <span>İstanbul, Türkiye</span>
                                    </div>
                                    <div className="contact-item">
                                        <FaGraduationCap />
                                        <span>Işık Üniversitesi - YBS (4. Sınıf)</span>
                                    </div>
                                    <div className="contact-item">
                                        <FaStar />
                                        <span>GPA: 3.66</span>
                                    </div>
                                    <div className="contact-item">
                                        <FaGraduationCap />
                                        <span>Bulancak Anadolu Lisesi (2017-2021)</span>
                                    </div>
                                    <div className="contact-item">
                                        <FaCalendarAlt />
                                        <span>Backend Developer Adayı</span>
                                    </div>
                                </div>

                                <div className="info-card passion-info">
                                    <h4>
                                        <FaHeart className="card-icon" />
                                        Tutkularım
                                    </h4>
                                    <p>
                                        RESTful servisler, veritabanı yönetimi (MSSQL ağırlıklı), kullanıcı rolleriyle 
                                        yetkilendirme sistemleri gibi konularda projeler geliştiriyorum. Yazılım mimarisi, 
                                        kod okunabilirliği ve sürdürülebilirlik prensipleri benim için çok önemli.
                                    </p>
                                </div>

                                <div className="info-card goals-info">
                                    <h4>
                                        <FaBullseye className="card-icon" />
                                        Hedeflerim
                                    </h4>
                                    <p>
                                        Güçlü temellere sahip, sürdürülebilir ve ölçeklenebilir yazılım çözümleri geliştiren 
                                        bir <strong>backend developer</strong> olmak. Problem çözme motivasyonumla teknoloji 
                                        dünyasında kalıcı işler başarmak istiyorum.
                                    </p>
                                </div>
                            </div>

                            <div className="interests-section">
                                <h3>
                                    <FaLightbulb className="section-icon" />
                                    İlgi Alanlarım
                                </h3>
                                <div className="interests-grid">
                                    {interests.map((interest, index) => (
                                        <div 
                                            key={index} 
                                            className="interest-item"
                                            style={{ 
                                                '--accent-color': interest.color,
                                                animationDelay: `${index * 0.1}s`
                                            }}
                                        >
                                            <span className="interest-icon">{interest.icon}</span>
                                            <span className="interest-name">{interest.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'experience' && (
                        <div className="experience-section">
                            <h3>
                                <FaBriefcase className="section-icon" />
                                Profesyonel Deneyimim
                            </h3>
                            <div className="experience-grid">
                                {experiences.map((exp, index) => (
                                    <div 
                                        key={index} 
                                        className={`experience-card ${exp.type}`}
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                    >
                                        <div className="exp-header">
                                            <div className="exp-icon">
                                                {exp.icon}
                                            </div>
                                            <div className="exp-main-info">
                                                <h4>{exp.position}</h4>
                                                <h5>
                                                    <FaBuilding className="company-icon" />
                                                    {exp.company}
                                                </h5>
                                                <p className="exp-period">
                                                    <FaClock className="time-icon" />
                                                    {exp.period}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="exp-description">
                                            <p>{exp.description}</p>
                                        </div>
                                        <div className="exp-technologies">
                                            <h6>
                                                <FaTools className="tech-icon" />
                                                Kullanılan Teknolojiler/Beceriler:
                                            </h6>
                                            <div className="tech-tags">
                                                {exp.technologies.map((tech, techIndex) => (
                                                    <span key={techIndex} className="tech-tag">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="experience-summary">
                                <h4>
                                    <FaStar className="section-icon" />
                                    Kazandığım Ana Beceriler
                                </h4>
                                <div className="skills-summary">
                                    <div className="skill-category">
                                        <h5>Akademik & Araştırma Deneyimi</h5>
                                        <p>Öğretim asistanlığı, algoritma analizi, laboratuvar yönetimi, araştırma & geliştirme projeleri</p>
                                    </div>
                                    <div className="skill-category">
                                        <h5>Yazılım Geliştirme</h5>
                                        <p>Java, Spring Boot, React, React Native, Kotlin, MSSQL, RESTful API tasarımı</p>
                                    </div>
                                    <div className="skill-category">
                                        <h5>Liderlik & Organizasyon</h5>
                                        <p>Kulüp yönetimi, etkinlik organizasyonu, hackathon düzenleme, topluluk liderliği</p>
                                    </div>
                                    <div className="skill-category">
                                        <h5>Teknik Beceriler</h5>
                                        <p>Sistem bakımı, teknik destek, proje analizi, dokümantasyon, Git versiyon kontrolü</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'journey' && (
                        <div className="journey-section">
                            <h3>
                                <FaRocket className="section-icon" />
                                Eğitim ve Yazılım Yolculuğum
                            </h3>
                            <div className="timeline">
                                {timeline.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="timeline-item"
                                        style={{ animationDelay: `${index * 0.3}s` }}
                                    >
                                        <div className="timeline-icon">
                                            {item.icon}
                                        </div>
                                        <div className="timeline-content">
                                            <div className="timeline-year">{item.year}</div>
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="current-focus">
                                <h4>
                                    <FaBullseye className="section-icon" />
                                    Şu Anda Odaklandığım Konular
                                </h4>
                                <div className="focus-grid">
                                    <div className="focus-item">
                                        <FaCode className="focus-icon" />
                                        <div>
                                            <h5>Java & Spring Boot</h5>
                                            <p>Enterprise seviyede backend geliştirme</p>
                                        </div>
                                    </div>
                                    <div className="focus-item">
                                        <FaDatabase className="focus-icon" />
                                        <div>
                                            <h5>Veritabanı Mimarisi</h5>
                                            <p>Ölçeklenebilir veri yapıları tasarlama</p>
                                        </div>
                                    </div>
                                    <div className="focus-item">
                                        <FaMobile className="focus-icon" />
                                        <div>
                                            <h5>React Native</h5>
                                            <p>Mobil uygulama geliştirme deneyimi</p>
                                        </div>
                                    </div>
                                    <div className="focus-item">
                                        <FaRocket className="focus-icon" />
                                        <div>
                                            <h5>Kariyer Hedefi</h5>
                                            <p>Tam zamanlı backend developer pozisyonu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
