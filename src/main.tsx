import React from 'react';
import ReactDOM from 'react-dom/client';
import Tweet from './components/Tweet';
import './global.css';
import twitterLogo from './assets/Logo.svg';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img className='logo' src={ twitterLogo } alt='logo' />
        <nav className='main-navigation'>
          <a href="">Home</a>
          <a href="">Explore</a>
          <a href="">Notifications</a>
          <a href="">Messages</a>
          <a href="">Bookmarks</a>
          <a href="">List</a>
          <a href="">profile</a>
          <a href="">more</a>
        </nav>
        <button className='new-tweet'>Tweet</button>
      </aside>
      <div className="content">content</div>
    </div>
  </React.StrictMode>,
)
