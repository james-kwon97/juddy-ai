import { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {
  const [extended, setExtended] = useState(false)
  const {
    onSent,
    previousPrompts,
    setRecentPrompt,
    newChat,
    currentPrompt,
    setPreviousPrompts,
  } = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  const deletePrompt = (promptToDelete) => {
    const updatedPrompts = previousPrompts.filter(
      (prompt) => prompt !== promptToDelete
    )
    setPreviousPrompts(updatedPrompts)
  }

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
            <div className="recent-list">
              {uniquePrompts.map((item, index) => {
                if (!item) return null
                return (
                  <div className="recent-entry" key={index}>
                    <div
                      className="recent-content"
                      onClick={() => loadPrompt(item)}
                    >
                      <p>{item.slice(0, 18)}..</p>
                    </div>
                    <button
                      className="delete-icon"
                      onClick={() => deletePrompt(item)}
                    >
                      <img
                        src={assets.remove_icon}
                        alt="X icon to remove recent prompts"
                      />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img
            src={assets.trash_icon}
            alt="Rubbish bin icon to remove all recent prompts"
          />
          {extended ? <p>Remove all recents</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
