import React, { useState }  from 'react';
import {action} from '@storybook/addon-actions';
import { Accordion, AccordionPropsType } from './Accordin';


export default {
    title: 'Accordion',
    component: Accordion,
  } 

  export const CollapsedMode = () => <Accordion titleValue={'menu'} 
                                                collapsing={true} 
                                                onClick={action('on clicked')}/>;
  export const UnCollapsedMode = () => <Accordion titleValue={'menu'} 
                                                  collapsing={false}
                                                  onClick={action('off clicked')}/>;

 export const OnOfMode = ()=>{
  //  const[collapsed,setCollapsed]=useState<boolean>(true);
  const[collapsing,setCollapsing] = useState<boolean>(true);
  //  return <Accordion  titleValue={'menu'} collapsing={collapsed} onClick={()=> {setCollapsed(!collapsed)}}/>
  return <Accordion 
  titleValue={"second title"} 
  collapsing={collapsing} 
  onClick={()=> {setCollapsing(!collapsing)}}/>
 }


  // npm run storybook 