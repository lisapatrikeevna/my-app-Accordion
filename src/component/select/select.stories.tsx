import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {Select} from "./select";

export default {
    title: 'Select',
    component: Select,
}
export const OnMode = () => {
    const [value, setValue] = useState('2')
    return (
        <>
            <h1>qqqqqqq</h1>
            {/*<Select*/}
            {/*    value={value}*/}
            {/*    onChange={onChange(props.value)}*/}
            {/*    items={[{title: "Lisa", value: 1}, {title: "Dan", value: 2},*/}
            {/*        {title: "Dina", value: 3}, {title: "Masya", value: 4}]}*/}
            {/*/>*/}
        </>
    )
}

export const OffMode = () => {
    const [value, setValue] = useState(null)
    return (
        <>
            {/*<Select*/}
            {/*    value={value}*/}
            {/*    onChange={setValue}*/}
            {/*    items={[{title: "Lisa", value: 1}, {title: "Dan", value: 2}, {title: "Dina", value: 3}, {*/}
            {/*        title: "Masya", value: 4*/}
            {/*    }]}*/}
            {/*/>*/}
        </>
    )
}

// export const OnOfMode = () => {


//     const [value, setValue] = useState(true)
// return <h1>111</h1>
//
//     const [value, setValue] = useState<boolean>(true);
//     return <Select value={'1'} onClick={setValue} items={[{title:"Lisa",value:1},{title:"Dan",value:2},{title:"Dina",value:3},{title:"Masya",value:4}]}/>
//
// }
//
