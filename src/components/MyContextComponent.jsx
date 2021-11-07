import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark, // valeur par défaut
  toggleTheme: () => {},
});

export const UserContext = React.createContext();

export const ColorContext = React.createContext();
