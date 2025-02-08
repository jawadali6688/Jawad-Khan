import React from 'react'
import Intro from '../components/Intro'
import AboutMe from '../components/AboutMe'
import Projects from './Projects'
import Blogs from './Blogs'
import Contact from './Contact'
import Footer from './Footer'

export default function Home() {
  return (
    <>
    <Intro />
    <AboutMe />
    <Projects />
    <Blogs />
    <Contact />
    <Footer /> 
    </>
  )
}
