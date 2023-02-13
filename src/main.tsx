import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import Tweet  from './components/Tweet'
import './global.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <SideBar />

      <div className="content">
        <Header />
        <form className='tweet-form'>
          <label htmlFor="tweet">
            <img src='https://avatars.githubusercontent.com/u/93350649?v=4' alt='Bruno Brito'></img>
            <textarea id='tweet' placeholder='Whats happening?'></textarea>
          </label>

          <button type='submit'>Tweet</button>
        </form>
        <div className='separator'/>

        <Tweet />
      </div>
    </div>
  </React.StrictMode>,
)
