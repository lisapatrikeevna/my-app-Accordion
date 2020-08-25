import React from 'react';

type StarPropsType = {
    selected: boolean
    setValue:()=>void
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
        <span onClick={()=>{props.setValue()}}>
            { props.selected ? <b>star</b> : 'star'} 
            
        </span>)
}


export default Star;