import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App_airbnb';
import BottomContainer from './components/airbnb_exp/BottomContainer';
import AVoftheDay from './components/airbnb_exp/AVoftheDay';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
    <BottomContainer/>
    <AVoftheDay />    
  </>
)

