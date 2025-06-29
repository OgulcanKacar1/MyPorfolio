import React from 'react';
import './Skills.css';
import { FaRocket, FaLaptopCode, FaCogs, FaDatabase, FaTools, FaBuilding, FaPalette } from 'react-icons/fa';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Geliştirme",
            icon: <FaLaptopCode />,
            skills: [
                { name: "React", level: 50, color: "#61DAFB" },
                { name: "JavaScript", level: 60, color: "#F7DF1E" },
                { name: "HTML5", level: 80, color: "#E34F26" },
                { name: "CSS3", level: 80, color: "#1572B6" },
            ]
        },
        {
            title: "Backend Geliştirme",
            icon: <FaCogs />,
            skills: [
                { name: "Java", level: 60, color: "#ED8B00" },
                { name: "Spring Boot", level: 70, color: "#6DB33F" },
                { name: "Node.js", level: 40, color: "#339933" },
                { name: "REST API", level: 65, color: "#FF6C37" }
            ]
        },
        {
            title: "Veritabanı",
            icon: <FaDatabase />,
            skills: [
                { name: "MySQL", level: 70, color: "#4479A1" },
                { name: "MSSQL", level: 65, color: "#CC2927" },
            ]
        },
        {
            title: "Araçlar & Teknolojiler",
            icon: <FaTools />,
            skills: [
                { name: "Git", level: 75, color: "#F05032" },
                { name: "Hibernate", level: 30, color: "#2496ED" },
                { name: "Firebase", level: 20, color: "#FFCA28" },
            ]
        },
        {
            title: "Yazılım Prensipleri",
            icon: <FaBuilding />,
            skills: [
                { name: "Design Patterns", level: 55, color: "#9C27B0" },
                { name: "OOP Principles", level: 70, color: "#FF5722" },
                { name: "MVC Architecture", level: 60, color: "#795548" }
            ]
        },
        {
            title: "Tasarım & UI/UX",
            icon: <FaPalette />,
            skills: [
                { name: "Figma", level: 55, color: "#F24E1E" },
                { name: "Canva", level: 75, color: "#FF61F6" },
                { name: "CSS Frameworks", level: 40, color: "#4ECDC4" }
            ]
        }
    ];

    return (
        <div className="skills">
            <div className="skills-container">
                <div className="skills-header">
                    <h1 className="skills-title">
                        <FaRocket className="title-icon" />
                        Yeteneklerim
                    </h1>
                    <p className="skills-subtitle">
                        Modern teknolojiler ve araçlarla güçlü çözümler geliştiriyorum
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="skill-category">
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div 
                                                className="skill-progress"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    backgroundColor: skill.color,
                                                    boxShadow: `0 0 10px ${skill.color}40`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="additional-skills">
                    <h3 className="additional-title">Diğer Yetenekler</h3>
                    <div className="tags-container">
                        {[
                            "Problem Çözme", "Takım Çalışması", "Hızlı Öğrenme", "Analitik Düşünme",
                            "Code Review", "Debugging", "Agile Metodoloji", "Scrum",
                            "Unit Testing", "API Development", "Version Control", "Database Design"
                        ].map((tag, index) => (
                            <span key={index} className="skill-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
