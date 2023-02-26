import React from 'react'
import Inquiries from '../../components/PressComponents/Inquiries/Inquiries'
import Pressbanner from '../../components/PressComponents/PressBanner/Pressbanner'
import PressFeature from '../../components/PressComponents/PressFeature/PressFeature'
import './Press.css'

const Press = () => {
  return (
    <div>
        <Pressbanner/>
        <Inquiries/>
        <PressFeature/>
    </div>
  )
}

export default Press