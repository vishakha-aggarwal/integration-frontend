import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer.jsx';
import mixpanel from 'mixpanel-browser';
import VWOMixpanelPlugin from './VWO-Mixpanel-Integration/index.js'
import './style.css';
const io = require("socket.io-client");

function App() {
  
  // const socket = io("https://chat-in-grp.herokuapp.com", {
  //   withCredentials: true
  // });

  const socket = "random";

  useEffect(()=> {
    const apiKey = "fbd3a9ecf87facb0fa8442a54be409f6";
    mixpanel.init(apiKey, {debug: true, track_pageview: true, persistence: 'localStorage'});
    console.log(mixpanel);
    let identify = mixpanel.get_distinct_id();
    console.log(identify);
    VWOMixpanelPlugin(mixpanel);
  }, [])

  return (
    <div className='App'>
      <Header />
      <Container socket = {socket} />
      <Footer />
    </div>
  );
}

export default App;
