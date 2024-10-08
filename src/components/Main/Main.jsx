import { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { UserButton } from '@clerk/clerk-react'

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    newChat,
  } = useContext(Context)

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSent()
    }
  }

  const handleCardClick = (suggestion) => {
    setInput(suggestion)
    onSent(suggestion)
  }

  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: {
        width: '30px',
        height: '30px',
      },
    },
  }

  return (
    <div className="main">
      <div className="nav">
        <p onClick={newChat} style={{ cursor: 'pointer' }}>
          Juddy AI
        </p>
        <UserButton appearance={userButtonAppearance} />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="main-greet">
              <p>
                <span>Hello, I'm Juddy :)</span>
              </p>
              <p className="main-greet-subtext">How can I assist you today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    'Suggest beautiful places to see on an upcoming road trip'
                  )
                }
              >
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img
                  src={assets.compass_icon}
                  alt="Compass icon representing travel suggestions"
                />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick('Recommend the best books to read this year')
                }
              >
                <p>Recommend the best books to read this year</p>
                <img
                  src={assets.bulb_icon}
                  alt="Light bulb icon representing book recommendations"
                />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    'Provide a list of healthy recipes for a week'
                  )
                }
              >
                <p>Provide a list of healthy recipes for a week</p>
                <img
                  src={assets.message_icon}
                  alt="Message icon representing recipe suggestions"
                />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    'Give tips on how to improve productivity while working from home'
                  )
                }
              >
                <p>
                  Give tips on how to improve productivity while working from
                  home
                </p>
                <img
                  src={assets.code_icon}
                  alt="Code icon representing productivity tips"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User profile icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img
                src={assets.user_icons}
                alt="Cute cat icon representing Juddy's response"
              />
              {loading ? (
                <div className="loader">
                  <div className="loader-orbit">
                    <div className="loader-dot"></div>
                  </div>
                  <div className="loader-orbit">
                    <div className="loader-dot"></div>
                  </div>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Ask Juddy anything"
              onKeyDown={handleKeyPress}
            />
            <div>
              <img
                onClick={() => onSent()}
                src={assets.send_icon}
                alt="Send icon to submit your input"
              />
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
