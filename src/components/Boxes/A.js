import React, { useState, useEffect, useContext, Fragment, useCallback } from 'react';
import B from './B';
import C from './C';
import './A.css';
const colors = ["green","silver","brown","lightblue"];
export const Acontext = React.createContext();
const A = () =>{
  const [color,setColor] = useState('purple');
  const changeColor = (index) =>{
    setColor(`${colors[index]}`);
  }
  return(
    <Fragment>
      <ul>
      <Acontext.Provider value = {{changeColor,color}}>
        <li className = 'a' >A</li>
        <B color = {color}/>
        <C/>
      </Acontext.Provider>
      </ul>
    </Fragment>
  )
}
export default A;
