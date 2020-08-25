import React, { useState } from 'react';
import Star from '../star';

export type RatingValueType =  0| 1| 2| 3| 4| 5;
type RatingPropsType = {
    defaultValue?: RatingValueType
    onClick: (value:RatingValueType) => void
}
export function UnRating(props: RatingPropsType){
let [value,setValue]=useState<RatingValueType>(props.defaultValue ? props.defaultValue :0);

    return(
      <div>
        <Star selected={value > 0} setValue={() => {setValue(1); props.onClick(0)}}/>
        <Star selected={value > 1} setValue={() => {setValue(2); props.onClick(1)}}/>
        <Star selected={value > 2} setValue={() => {setValue(3); props.onClick(2)}}/>
        <Star selected={value > 3} setValue={() => {setValue(4); props.onClick(3)}}/>
        <Star selected={value > 4} setValue={() => {setValue(5); props.onClick(4)}}/>
        {/* <Star selected={value > 5}/><button onClick = {()=> {setValue(5)}}>5</button> */}
      </div>
    )
    
  }
  // export default UnRating;