import React from 'react'
import './header.css';
import CTA from './CTA';
import ImageMe from '../../assets/profile.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container" id='home'>
        <h5>Hello, I'm</h5>
        <h1>Regis Ntwari</h1>
        <h5 className="text-light">Fullstack Developer / Mobile Developer / Devops Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ImageMe} alt="Profile" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header