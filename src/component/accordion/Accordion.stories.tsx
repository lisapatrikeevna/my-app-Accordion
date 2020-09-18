import React, { useState }  from 'react';
import {action} from '@storybook/addon-actions';
import { Accordion, AccordionPropsType } from './Accordin';


export default {
    title: 'Accordion',
    component: Accordion,
  } 
const  onClick = action('on clicked')
  export const CollapsedMode = () => <Accordion titleValue={'menu'} 
                                                collapsing={true} 
                                                onClick={onClick}
                                                items={[{title:"Lisa",value:1},{title:"Dan",value:2},{title:"Dina",value:3},{title:"Masya",value:4}]}
                                                onClickBody={(id) => {alert('user with ID $(id) can be happy')}}/>;
  export const UnCollapsedMode = () => <Accordion titleValue={'menu'} 
                                                  collapsing={false}
                                                  onClick={action('off clicked')}
                                                  items={[{title:"Lisa",value:1},{title:"Dan",value:2},{title:"Dina",value:3},{title:"Masya",value:4}]}
                                                  onClickBody={(id) => {alert('user with ID $(id) can be happy')}}/>;


 export const OnOfMode = ()=>{
  //  const[collapsed,setCollapsed]=useState<boolean>(true);
  const[collapsing,setCollapsing] = useState<boolean>(true);
  //  return <Accordion  titleValue={'menu'} collapsing={collapsed} onClick={()=> {setCollapsed(!collapsed)}}/>
  return <Accordion 
  titleValue={"second title"} 
  collapsing={collapsing} 
  onClick={()=> {setCollapsing(!collapsing)}}
  onClickBody={(id) => {alert(`user with 'ID ${id}' can be happy`)}}
  items={[{title:"Lisa",value:1},{title:"Dan",value:2},{title:"Dina",value:3},{title:"Masya",value:4}]}/>;
 }


  // npm run storybook 