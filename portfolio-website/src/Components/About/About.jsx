import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import newProfileImg from '../../assets/new_profile_img.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={newProfileImg} alt="Profile" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a junior at San Francisco State University pursing a Bachelors Degree in CS and learning Front and Back End Development on my freetime.</p>
                <p>My passion for development stems from my creativity and love for innovation. I am actively looking for some work experience so I can showcase my skills and hardwork. I am also in search for developers and mentors to create a team for a startup idea I have been looking to start. </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"46%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"40%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>0.5</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>N/A</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
