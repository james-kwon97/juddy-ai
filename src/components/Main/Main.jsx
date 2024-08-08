import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>JuddyAI</p>
        <img src={assets.user_icons} alt="" />
      </div>
    </div>
  )
}

export default Main
