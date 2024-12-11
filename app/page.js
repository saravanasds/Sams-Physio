import React from 'react'
import './globals.css';
import Hero from "../app/home-components/Hero"
import Intro from "../app/home-components/Intro"
import Staticsection from "../app/home-components/Staticsection"
import ServicesGrid from "../app/home-components/ServicesGrid"
import Aboutdescription from './home-components/Aboutdescription';
import BeforeAfterSlider from './home-components/BeforeAfterSlider';
import Team from './components/about-components/Team';
import BodypainPoints from './home-components/BodypainPoints';

const page = () => {
  return (
    <>
    <div className=''>
      <Hero/>
      <Intro/>
      <Staticsection/>
      <Aboutdescription/>
      <ServicesGrid/>
      <BeforeAfterSlider/>
      <Team/>
      <BodypainPoints/>
    </div>
    </>
  )
}

export default page