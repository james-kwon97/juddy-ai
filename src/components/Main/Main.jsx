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
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Juddy.</span>
          </p>
          <p>How can I assist you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Recommend the best books to read this year</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Provide a list of healthy recipes for a week</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Give tips on how to improve productivity while working from home
            </p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
