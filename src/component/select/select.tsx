import React, {useState, KeyboardEvent, useEffect} from 'react';
import cl from './select.module.css'
import {valueType} from "../../App";

type ItemType = {
    title: string
    value: any
}
export type SelectType = {
    value?: any
    onChange: (value: valueType) => void
    items: ItemType[]
}

export function Select(props: SelectType) {
    const [active, setActive] = useState(false);
    const [hoverEL, setHoverEL] = useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoverEL)

    useEffect(() => {
        setHoverEL(props.value);
    }, [props.value])

    const showActive = () => { setActive(!active) }
    const itemClicked = (value: any) => {
        props.onChange(value);
        showActive();
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoverEL) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        setHoverEL(props.items[i+1].value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    }
    return (
        <>
            <div className={cl.select} onKeyUp={onKeyUp} tabIndex={0}>
                {/*<div className={cl.select+ ""+(active ?  cl.active : '')}>*/}
                <h3 onClick={showActive} className={cl.mainTitle}>{selectedItem && selectedItem.title}</h3>
                {active &&
                <div className={cl.items}>
                    {props.items.map(i =>
                        <div key={i.value}
                             onMouseEnter={() => { setHoverEL(i.value) }}
                             onClick={() => {  itemClicked(i.value) }}
                             className={cl.item + (hoveredItem === i ? cl.selected : '')} >
                            {i.title}
                        </div>)}
                </div>
                }
            </div>
            {/* <select>
                <option value="">I</option>
                <option value="">You</option>
                <option value="">He</option>
            </select> */}
        </>
    )
}

