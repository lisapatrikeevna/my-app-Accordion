import React from 'react';

export type AccordionPropsType = {
    titleValue: string
    collapsing: boolean
    onClick: () => void
    items: ItemType[]
    onClickBody: (value: any) => void
}
export type ItemType = {
    title: string
    value: any
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={props.onClick}
                collapsing={props.collapsing}/>
            {!props.collapsing && <AccordionBody items={props.items} onClick={props.onClickBody}/>}
        </div>
    )

}

//  function Accordion2(props:AccordionPropsType){
//   if(props.collapsed === true){
//    return (
//      <div>
//        <AccordionTitle title={props.titleValue}/>
//      </div>
//    )
//   }else{
//     return(
//       <div>
//         <AccordionTitle title={props.titleValue}/>
//         <AccordionBody/>
//       </div>
//     )
//    }
//  }

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsing: boolean) => void
    collapsing: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h1 onClick={(e) => {
            props.onClick(!props.collapsing)
        }}>{props.title}</h1>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) =>
                <li onClick={() => {props.onClick(i.value)}} key={index}>
                    {i.title}
                </li>)}
            {/*<li>0</li>*/}
            {/*<li>1</li>*/}
            {/*<li>2</li>*/}
            {/*<li>3</li>*/}
            {/*<li>4</li>*/}
        </ul>
    )
}

// export default Accordion;