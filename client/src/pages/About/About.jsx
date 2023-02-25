import React from 'react'
import Aboutheader from '../../components/AboutComponents/AboutHeader/Aboutheader'
import Abouticons from '../../components/AboutComponents/AboutIcons/Abouticons'
import AboutLinks from '../../components/AboutComponents/AboutLinks/AboutLinks'
import Aboutsafe from '../../components/AboutComponents/AboutSafe/Aboutsafe'
import Aboutstory from '../../components/AboutComponents/AboutStory/Aboutstory'
import "./About.css"

const About = () => {
  return (
    <div>
      <Aboutheader/>
      <Aboutsafe/>
      <Aboutstory/>
      <Abouticons/>
      <AboutLinks/>
    </div>
  )
}

export default About