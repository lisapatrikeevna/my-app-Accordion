import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {UnRating} from './UnRating';
import { action } from '@storybook/addon-actions';

export default {
  title: 'UnRating',
  component: UnRating,
} 
const callback =  action('rating changed');

export const EmptyUnRating= () => <UnRating defaultValue={0} onClick={callback}/>;
export const UnRating1= () => <UnRating defaultValue={1} onClick={callback} />;
export const UnRating2 = () => <UnRating defaultValue={2} onClick={callback} />;
export const UnRating3= () => <UnRating  defaultValue={3} onClick={callback} />;
export const UnRating4 = () => <UnRating defaultValue={4} onClick={callback} />;
export const UnRating5 = () => <UnRating defaultValue={5} onClick={callback} />;

