import React from 'react';
import { UserContext, ColorContext } from './MyContextComponent';

const ContentDataComponent = () => {
  const user = React.useContext(UserContext);
  const color = React.useContext(ColorContext);
  const [currentColor, setCurrentColor] = React.useState(color.color);

  return (<>
    <ul style={{color: currentColor}}>
      <li>Nom: {user.name}</li>
      <li>Age: {user.age}</li>
    </ul>
    <button onClick={() => currentColor === 'red' ? setCurrentColor('black') : setCurrentColor('red')}>Change color</button>
  </>);
};

export default ContentDataComponent;