import React, { useState }  from 'react';
import {action} from '@storybook/addon-actions';
// import { UnContrllCapsededAccordion, AccordionPropsType } from './unContrllCapsededAccordion';
import { UnContrllCapsededAccordion } from './unControledAccordin';


export default {
    title: 'UnContrllCapsededAccordion',
    component: UnContrllCapsededAccordion,
  } 

  export const CollapsedMode = () => <UnContrllCapsededAccordion titleValue={'menu'} />;

  // npm run storybook 