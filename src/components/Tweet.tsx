import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './TweetStyle.css'

function Tweet() {
  return (
    <>
      <div className="tweet">
        <img src='https://avatars.githubusercontent.com/u/93350649?v=4' alt='Bruno Brito' />
        <div className="tweet-content">
          <div className='tweet-header'>
            <strong>Bruno Brito</strong>
            <span>@brunosbrito</span>
          </div>
          <p>Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br/>
            
            ✅ npm start: De 32s para 400ms (sim, demorava 30s)<br/>
            ✅ npm build: De 120s para 22s <br/>

            Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
          </p>

          <div className='tweet-footer'>
            <button type='button'>
              <ChatCircle />
              20
            </button>
            <button type='button'>
              <ArrowsClockwise />
              20
            </button>
            <button type='button'>
              <Heart />
              20
            </button>
          </div>
        </div>
      </div>
    </>

  );
}

export default Tweet;