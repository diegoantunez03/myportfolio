import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import newProfileImg from '../../assets/new_profile_img.png'
import newProfileImg2 from '../../assets/new_profile_img2.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={newProfileImg2} alt="" className='profile-img' />
      <h1><span>I'm Diego Antunez,</span> frontend developer based in USA.</h1>
      <p>I am a frontend developer from Honduras with 4 months of experience.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
