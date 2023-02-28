import React from 'react'
import Highlights from '../../components/PressComponents/Highlights/Highlights'
import Inquiries from '../../components/PressComponents/Inquiries/Inquiries'
import Pressbanner from '../../components/PressComponents/PressBanner/Pressbanner'
import Presscontact from '../../components/PressComponents/PressContact/Presscontact'
import PressFeature from '../../components/PressComponents/PressFeature/PressFeature'
import './Press.css'

const Press = () => {
  return (
    <div>
        <Pressbanner/>
        <Inquiries/>
        <PressFeature/>
        <Highlights/>
        <Presscontact/>
    </div>
  )
}

export default Press