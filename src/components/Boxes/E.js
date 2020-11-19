import React, {useState,useEffect,useContext} from 'react';
import {Acontext} from './A';

const E = () =>{
  const { changeColor } = useContext(Acontext)
  const colors = ["green","silver","brown","lightblue"];
  let index = Math.floor(Math.random()*colors.length);
  console.log(index);
  return(
   <li className = 'e' onClick = {()=> changeColor(`${colors[index]}`)}>E</li>
  )
}
export default E;
