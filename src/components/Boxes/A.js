import React, {useState,useEffect,useContext,Fragment} from 'react';
import B from './B';
import C from './C';
import './A.css';
export const Acontext = React.createContext();
const A = () =>{
  const [color,setColor] = useState('');
  const changeColor = (given_color) =>{
    setColor(given_color);
  }
  return(
    <Fragment>
      <ul>
      <Acontext.Provider value = {{changeColor}}>
        <li className = 'a' >A</li>
        <B color = {color}/>
        <C/>
      </Acontext.Provider>
      </ul>
    </Fragment>
  )
}
export default A;
