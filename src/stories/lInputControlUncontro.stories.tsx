import React,{useState, ChangeEvent, useRef} from 'react';
// import './button.css';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Input',
  // component:'Input'
}
export const UncontrolInput = () => <input value={'my name'}/>

export const TrackValueInput = ()=>{
  let [value,setValue]=useState('');
  const changeInput = (e:ChangeEvent<HTMLInputElement>)=>{setValue(e.currentTarget.value)};
  return(
    <><input onChange={changeInput} value={value}/>actual input-value: {value}</>
  )
}

export const InputWithButton = () => {
  let [valueLink,setValue]=useState('');
  const link=useRef<HTMLInputElement>(null);

  const send=()=>{
    const el=link.current as HTMLInputElement;
    setValue(el.value)
  };
  return(
  <>
    <input ref={link} />
    <button onClick={send}>send</button>actual input-value:{valueLink}
  </>
  )
}
export const ContolledCheckbox = () => {
  let [parentValue,setParentValue]=useState(true)
  const changedInput=(e:ChangeEvent<HTMLInputElement>)=>{
    setParentValue(e.currentTarget.checked)
  }
  return(
    <input checked={parentValue} onChange={changedInput} type="checkbox"/>
  )
}
export const ContolledSelect = () => {
  let [parentValue,setParentValue]=useState<string | undefined>(undefined)
  const changedInput=(e:ChangeEvent<HTMLSelectElement>)=>{
    setParentValue(e.currentTarget.valuegit)
  }
return(
  <select value={parentValue} onChange={changedInput}>
    <option value={"0"}>none</option>
    <option value={"1"}>Dan</option>
    <option value={"2"}>Kat</option>
    <option value={"3"}>Mary</option>
  </select>
)
}
export const ContolledInput = () => {
  let [parentValue,setParentValue]=useState('')
  const changedInput=(e:ChangeEvent<HTMLInputElement>)=>{
    setParentValue(e.currentTarget.value)
  }
  return(
    <input value={parentValue} onChange={changedInput}/>
  )
}