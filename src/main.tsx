import React from 'react';
import ReactDOM from 'react-dom/client';
import Tweet from './components/Tweet';
import './global.css';

import { Bell, BookBookmark, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

import twitterLogo from './assets/Logo.svg';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img className='logo' src={ twitterLogo } alt='logo' />
        <nav className='main-navigation'>
          <a className='active' href="">
            <House weight='fill'/>
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell /> 
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookBookmark />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            List
          </a>
          <a href="">
            <User />
            profile
          </a>
          <a href="">
            <DotsThreeCircle />
            more
          </a>
        </nav>
        <button className='new-tweet'>Tweet</button>
      </aside>
      <div className="content">content</div>
    </div>
  </React.StrictMode>,
)
