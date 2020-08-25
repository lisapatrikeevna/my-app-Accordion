import React, { useState }  from 'react';
import {action} from '@storybook/addon-actions'
import { OnOffControl } from './onOffControl';


export default {
    title: 'OnOffControl',
    component: OnOffControl,
  } 

  export const OnMode = (on:boolean) => <OnOffControl on={true}  onClick={action('on clicked')}/>;
  export const OffMode = () => <OnOffControl on={false}  onClick={action('off clicked')}/>;

 export const OnOfMode = ()=>{
    

//     const [value, setValue] = useState(true)
// return <h1>111</h1>

   const[value,setValue]=useState<boolean>(true);
   return <OnOffControl on={value} onClick={setValue}/>

 }


  // npm run storybook 