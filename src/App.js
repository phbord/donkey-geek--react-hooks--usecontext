import React from 'react';

import { UserContext, ColorContext, ThemeContext, themes } from './components/MyContextComponent';
import ProfileComponent from './components/ProfileComponent';
import ThemeTogglerButtonComponent from './components/ThemeTogglerButtonComponent';


function App() {
  const toggleTheme = () => {
    setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));

    console.log('>>>',themes);
  };

  const [state, setState] = React.useState({
    user: {
      name: 'Lisa',
      age: 8
    },
    // L’état local contient aussi la fonction de mise à jour donc elle va
    // être passée au fournisseur de contexte
    theme: themes.light,
    toggleTheme: toggleTheme,
  });

  return (<>
    <UserContext.Provider value={state}>
      <ColorContext.Provider value={
        {color: 'red'}
      }>
        <ProfileComponent/>
      </ColorContext.Provider>
    </UserContext.Provider>
    <ThemeContext.Provider value={state}>
      <ThemeTogglerButtonComponent/>
    </ThemeContext.Provider>
  </>);
}

export default App;
