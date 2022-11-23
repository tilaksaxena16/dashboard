import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './Header/Header';
import { Leftbarheading } from './Leftbarheading/Leftbarheading';
import { Leftbaritems } from './Leftbaritems/Leftbaritems';
import { Maincontent } from './Maincontent/Maincontent';
import { Nav } from './Nav/Nav';
import { Footer } from './Footer/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='page-display'>
      <Header></Header>
      <div className='display'>
        <div className='leftbar-container'>
          <div className='leftbar-child-div'>
            <Leftbarheading name="Manage"></Leftbarheading>
            <Leftbaritems name="View site"></Leftbaritems>
            <Leftbaritems name="Create page"></Leftbaritems>
            <Leftbaritems name="Blog articles"></Leftbaritems>
            <Leftbaritems name="Files"></Leftbaritems>
            <Leftbaritems name="Users"></Leftbaritems>
            <Leftbaritems name="Subscriptions"></Leftbaritems>
            <Leftbaritems name="Archived pages"></Leftbaritems>
            <Leftbarheading name="Pro features"></Leftbarheading>
            <Leftbaritems name="Themes"></Leftbaritems>
            <Leftbaritems name="Plugins"></Leftbaritems>
            <Leftbaritems name="Upgrade plans"></Leftbaritems>
          </div>
        </div>
        <div className='maincontent-container'>
          <Nav></Nav>
          <Maincontent num="120"></Maincontent>
          <Maincontent num="00"></Maincontent>
          <Maincontent num="00"></Maincontent>
          <Maincontent num="120"></Maincontent>
          <Maincontent num="120"></Maincontent>
          <Footer></Footer>
        </div>
      </div>
    </div>
  </>
);
