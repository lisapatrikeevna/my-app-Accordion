import React  from 'react';

type OnOffType={
    on: boolean
    onClick:(on:boolean)=>void
}

export function OnOffControl(props:OnOffType){

    const onStyle = {
        width: props.on ? "30px" : "20px",
        height: "20px", 
        color: "black",
        border: "2px solid black",
        background: props.on ? "red" : "green",
        // textAlign: "center"
    };
    const offStyle = {
        width: props.on ? "20px" : "30px",
        height: "20px",
        color: "black",
        border: "2px solid black",
        background: props.on ? "green" :  "red",
        // textAlign: "center"
    };
    const indicatorStyle = {
        width: "5px",
        height: "10px",
        borderTop: props.on ? "140px solid #fcf921" :"140px solid white",
        borderLeft: "70px solid transparent",
        borderRight: "70px solid transparent",
        borderRadius: "70px",
        margin: "20px 0",
    };
    const dFlex ={
        display: "flex",
        width: "150px",
        // justifyContent: "center",
    }
    return(
        <div>
            <div style={indicatorStyle}></div>
            <div style={dFlex}>
                <div style={onStyle} onClick={()=>{props.onClick(true)}}>on</div>
                <div style={offStyle} onClick={()=>{props.onClick(false)}}>off</div>
            </div>
        </div>
    )
}

export default OnOffControl;
