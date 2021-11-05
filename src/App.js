import React from 'react';

import './App.css';
import ProfileComponent from './components/ProfileComponent';
import { UserContext, ColorContext } from './components/MyContextComponent';


function App() {
  const [state, setState] = React.useState({
    user: {
      name: 'Lisa',
      age: 8
    }
  });

  return (
    <UserContext.Provider value={state.user}>
      <ColorContext.Provider value={'red'}>
        <ProfileComponent/>
      </ColorContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
