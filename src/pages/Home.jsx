import React from 'react'
import Intro from '../components/Intro'
import AboutMe from '../components/AboutMe'
import Projects from './Projects'
import Blogs from './Blogs'
import Contact from './Contact'
import Footer from './Footer'
import CodeWithMe from './CodeWithMe'

export default function Home() {
  return (
    <>
    <Intro />
    <AboutMe />
    <CodeWithMe />
    <Projects />
    <Blogs />
    <Contact />
    <Footer /> 
    </>
  )
}
