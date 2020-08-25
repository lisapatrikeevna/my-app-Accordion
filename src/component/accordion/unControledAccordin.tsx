import React, { useState } from 'react';

type UnAccordionPropsType ={
  titleValue :string
  // collapsed: boolean
}
 export function UnContrllCapsededAccordion(props:UnAccordionPropsType){
   let[collapsed,setCollapsed]=useState(true)

  return(
      <div>
        <AccordionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)}}/>
        {!collapsed && <AccordionBody/>}
      </div>
    )
   
 }
 

type AccordionTitlePropsType = {
  title: string
  onClick:()=>void
}
 function AccordionTitle(props:AccordionTitlePropsType){
   return(
   <h1 onClick={()=>{props.onClick()}}>{props.title} </h1>
   )
 }
function AccordionBody(){
  return(
    <ul>
         <li>0</li>
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
       </ul>
  )
}
export default UnContrllCapsededAccordion;