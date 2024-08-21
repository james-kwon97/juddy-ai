import { useContext, useState, useEffect } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {
  const [extended, setExtended] = useState(false)
  const { onSent, previousPrompts, setRecentPrompt, newChat, currentPrompt } =
    useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  // Combine current prompt with previous prompts, removing duplicates
  const allPrompts = [currentPrompt, ...previousPrompts].filter(Boolean)
  const uniquePrompts = [...new Set(allPrompts)]

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="Menu icon to toggle sidebar"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="Plus icon to start a new chat" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {uniquePrompts.map((item, index) => {
              if (!item) return null
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry"
                  key={index}
                >
                  <img
                    src={assets.message_icon}
                    alt="Message icon representing a recent prompt"
                  />
                  <p>{item.slice(0, 20)}..</p>
                </div>
              )
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img
            src={assets.question_icon}
            alt="Question mark icon for help section"
          />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Gear icon for settings" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
