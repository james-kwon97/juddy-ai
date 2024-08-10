import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context)

  return (
    <div className="main">
      <div className="nav">
        <p>Juddy</p>
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
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Ask Juddy anything"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Juddy delivers, but verify the details that matter most.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
