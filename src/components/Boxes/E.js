import React, {useState,useEffect,useContext,useMemo } from 'react';
import {Acontext} from './A';

const E = () =>{
  const { changeColor } = useContext(Acontext);
  // let index =  Math.floor(Math.random()*colors.length);
  return(
   <li className = 'e' onClick = {()=> changeColor(`${Math.floor(Math.random()*4)}`)}>E</li>
  )
}
export default E;
