import React from 'react';
import Tabs from './components/Tabs';
import './style.css';



function App() {
  return (
    <body>
    <div id="app">
      <div class="app-container">
        <h1 class="app-title">FAQ</h1>
        <div class="app-tabs">
         
            <Tabs />
          
        </div>
      </div>
    </div>
  </body>
  );
}

export default App;
