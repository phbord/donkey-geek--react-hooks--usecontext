import React from 'react';
import { UserContext, ColorContext } from './MyContextComponent';

const ContentDataComponent = () => {
  const user = React.useContext(UserContext);
  const color = React.useContext(ColorContext);

  return (
    <ul style={{color: color}}>
      <li>Nom: {user.name}</li>
      <li>Age: {user.age}</li>
    </ul>
    // <UserContext.Consumer>
    //   {
    //     user => {
    //       return (
    //         <ColorContext.Consumer>
    //           {
    //             color => {
    //               return (
    //                 <ul style={{color: color}}>
    //                   <li>Nom: {user.name}</li>
    //                   <li>Age: {user.age}</li>
    //                 </ul>
    //               )
    //             }
    //           }
    //         </ColorContext.Consumer>
    //       )
    //     }
    //   }
    // </UserContext.Consumer>
  );
};

export default ContentDataComponent;