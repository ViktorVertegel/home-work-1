
import './App.css';
import React from 'react';

import ProfileClass from './components/profile-class';
import ProfileFunc from './components/profile-func';


function App() {
  return (
    <div className="App">

      <ProfileClass name="Вася Gegrby" registeredAt={new Date(2021, 5, 22)}/>
      <hr/><br/>
      <ProfileFunc name="Вася Gegrby" registeredAt={new Date(2021, 5, 22)}/>
    
    </div>
  );
}

export default App;
