import React from 'react';
import './Contact.css';
import { 
    FaEnvelope, 
    FaMapMarkerAlt, 
    FaLinkedin, 
    FaGithub, 
    FaInstagram, 
    FaUser,
    FaRocket,
    FaHeart
} from 'react-icons/fa';

const Contact = () => {

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: "E-posta (Kişisel)",
            value: "ogulcankacarr@gmail.com",
            link: "mailto:ogulcankacarr@gmail.com",
            color: "#EA4335"
        },
        {
            icon: <FaEnvelope />,
            title: "E-posta (Alternatif)",
            value: "ogulcankacar1@hotmail.com",
            link: "mailto:ogulcankacar1@hotmail.com",
            color: "#0078D4"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Konum",
            value: "İstanbul, Türkiye",
            link: "#",
            color: "#FF9800"
        }
    ];

    const socialLinks = [
        {
            icon: <FaLinkedin />,
            name: "LinkedIn",
            username: "@ogulcankacar",
            link: "www.linkedin.com/in/ogulcan-kacarr",
            color: "#0077B5"
        },
        {
            icon: <FaGithub />,
            name: "GitHub",
            username: "@OgulcanKacar1",
            link: "https://github.com/OgulcanKacar1",
            color: "#f0f0f0"
        },
        {
            icon: <FaInstagram />,
            name: "Instagram",
            username: "@ogulcankacar",
            link: "https://instagram.com/ogulcankacarr",
            color: "#E4405F"
        }
    ];

    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h1 className="contact-title">
                        <FaRocket className="title-icon" />
                        İletişim
                    </h1>
                    <p className="contact-subtitle">
                        Benimle doğrudan iletişime geçin! E-posta gönderebilir veya sosyal medya hesaplarımdan ulaşabilirsiniz.
                    </p>
                </div>

                <div className="contact-content">
                    {/* İletişim Bilgileri */}
                    <div className="contact-info-section">
                        <h2>
                            <FaUser className="section-icon" />
                            İletişim Bilgileri
                        </h2>
                        <div className="contact-info-grid">
                            {contactInfo.map((info, index) => (
                                <a 
                                    key={index}
                                    href={info.link}
                                    className="contact-info-card"
                                    style={{ 
                                        '--accent-color': info.color,
                                        animationDelay: `${index * 0.2}s`
                                    }}
                                >
                                    <div className="info-icon">{info.icon}</div>
                                    <div className="info-content">
                                        <h4>{info.title}</h4>
                                        <p>{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sosyal Medya */}
                    <div className="social-section">
                        <h2>
                            <FaHeart className="section-icon" />
                            Sosyal Medya
                        </h2>
                        <div className="social-grid">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-card"
                                    style={{ 
                                        '--social-color': social.color,
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <div className="social-icon">{social.icon}</div>
                                    <div className="social-content">
                                        <h4>{social.name}</h4>
                                        <p>{social.username}</p>
                                    </div>
                                    <div className="social-arrow">→</div>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
