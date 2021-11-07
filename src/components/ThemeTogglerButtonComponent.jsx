import React from 'react';
import { ThemeContext } from './MyContextComponent';

const themeTogglerButtonComponent = () => {
  // Le Theme Toggler Button reçoit non seulement le 'thème'
  // mais aussi une fonction 'toggleTheme' du contexte
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Changer le thème
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default themeTogglerButtonComponent;