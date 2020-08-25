import React from 'react';

export type AccordionPropsType ={
  titleValue :string
  collapsing: boolean
  onClick:()=>void
}
 export function Accordion(props:AccordionPropsType){
  return(
      <div>
        <AccordionTitle 
                title={props.titleValue}
                onClick={props.onClick}
                collapsing={props.collapsing} />
        {!props.collapsing && <AccordionBody/>}
      </div>
    )
   
 }
//  function Accordion2(props:AccordionPropsType){
//   if(props.collapsed === true){
//    return (
//      <div>
//        <AccordionTitle title={props.titleValue}/>
//      </div>
//    )
//   }else{
//     return(
//       <div>
//         <AccordionTitle title={props.titleValue}/>
//         <AccordionBody/>
//       </div>
//     )
//    }
//  }

type AccordionTitlePropsType = {
  title: string
  onClick:(collapsing:boolean )=>void
  collapsing: boolean
}
 function AccordionTitle(props:AccordionTitlePropsType){
   return(
    <h1 onClick={(e)=>{props.onClick(!props.collapsing)}}>{props.title}</h1>
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
// export default Accordion;