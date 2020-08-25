import React from 'react';
import { starValueType } from './Rating';

type StarPropsType = {
    selected: boolean
    onClick:(value: starValueType )=>void
    value: starValueType
}
function Star(props: StarPropsType){
// debugger
console.log("star rendering");
    // if (props.selected === true){
    //     return <span> <b>star</b></span>
    // } else{
    //     return(
    //         <span> star</span>
    //     )
    // }
//   return  props.selected ? <span> <b>star</b></span>: <span> star</span>
  return  (
        <span onClick={()=>{props.onClick(props.value)}}>
            { props.selected ? <b>star </b> : 'star' } 
            
        </span>)
}


export default Star;