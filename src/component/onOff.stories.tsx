import React, { useState }  from 'react';
import {action} from '@storybook/addon-actions'
import { OnOff } from './onOff';


export default {
    title: 'onOfUnControl',
    component: OnOff,
  } 

  export const OnMode = () => <OnOff  defaultOn={true} onChange={action('on clicked')}/>;
  export const OffMode = () => <OnOff defaultOn={false} onChange={action('off clicked')}/>;


  // npm run storybook 