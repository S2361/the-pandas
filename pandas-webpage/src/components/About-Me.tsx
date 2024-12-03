import React from 'react';
import './About-Me.css'; 
import linkedinLogo from '../images/linkedin-logo.webp';
import pandaLogo from '../images/panda.png';
interface AboutMePageProps {
    name: string;
    description: string;
    graduation: number;
    major: string;
    hobbies: string;
    linkedin: string;
    photo_src: string;
    email: string;
}

const AboutMePage: React.FC<AboutMePageProps> = (props) => {
    return (
      <div className="about-me-container">
        <header className="header">
          <div className="logo-container">
            <img src={pandaLogo} alt="Panda Logo" className="logo" />
            <a className="home-link" href="/">Home</a>
          </div>
          <h2 className="site-title">Panda</h2>
        </header>
  
        <div className="main-content">
          <h1 id="name-title">{props.name}</h1>
  
          <div className="horizontal-align">
            <div id="about-me-information">
              <div>
                <h2 className="subtitles">About Me</h2>
                <div className="section-box">
                  <p className="section-text">{props.description}</p>
                </div>
              </div>
  
              <div>
                <h2 className="subtitles">Hobbies</h2>
                <div className="section-box">
                  <p className="section-text">{props.hobbies}</p>
                </div>
              </div>
  
              <div className="horizontal-align">
                <a href={props.linkedin}>
                  <img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn logo" />
                </a>
                <div>
                  <h2 className="subtitles">Contact Me</h2>
                  <p className="text">{props.email}</p>
                </div>
              </div>
            </div>
  
            <img id="profile-picture" src={props.photo_src} alt={props.name} />
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutMePage;