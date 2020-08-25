import React, { useState }  from 'react';

export type OnOffType={
    // on: Boolean
    onChange: (on:boolean) =>void
    defaultOn?: boolean
}

export function OnOff(props:OnOffType){
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn :false);

   

    const offStyle = {
        width: on ? "20px" : "30px",
        height: "20px",
        color: "black",
        border: "2px solid black",
        background: on ? "green" :  "red",
        // textAlign: "center"
    };
    const indicatorStyle = {
        width: "5px",
        height: "10px",
        borderTop: on ? "140px solid #fcf921" :"140px solid white",
        borderLeft: "70px solid transparent",
        borderRight: "70px solid transparent",
        borderRadius: "70px",
        margin: "20px 0",
    };

    const dFlex ={
        display: "flex",
        width: "150px",
        justifyContent: "center",
    }
    const onStyle = {
        width: on ? "30px" : "20px",
        height: "20px", 
        color: "black",
        border: "2px solid black",
        background: on ? "red" : "green",
        // textAlign: 'center',
    };


    const onClicking = () =>{
        setOn(true) 
        props.onChange(true)
    }
    const offClicking = ()=>{
        setOn(false) 
        props.onChange(false)
    }
    return(
        <div>
            <div style={indicatorStyle}></div>
            <div style={dFlex}>
                <div style={onStyle} onClick={onClicking}>on</div>
                <div style={offStyle} onClick={offClicking}>off</div>
            </div>
        </div>
    )
}

