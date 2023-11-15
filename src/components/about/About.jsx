import React from "react";
import "./about.css";
import ME from '../../assets/faisilman.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="" />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>

                    <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5>CLients</h5>
                        <small>200+ Worldwide</small>
                    </article>

                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
                        <small>80+ Completed</small>
                    </article>
                </div>
                    <p>
                    Hello, I'm Ilman, a dedicated full-stack developer passionate about crafting seamless digital experiences. With expertise in both front-end and back-end technologies, I thrive on transforming innovative ideas into functional and user-friendly solutions. Let's build something amazing together!
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>
    </section>
    )
};

export default About;
