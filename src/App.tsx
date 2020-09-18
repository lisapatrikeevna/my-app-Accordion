import React, {useState} from 'react';
import './App.css';
// import Header from './Header';
// import Navbar from './Navbar';
// import Offer from './Offer';
// import Footer from './Footer';
import {Accordion} from './component/accordion/Accordin';
import {Rating, starValueType} from './component/ratings/Rating';
import {OnOff} from './component/onOff';
import UnContrllCapsededAccordion from './component/accordion/unControledAccordin';
import {UnRating} from './component/ratings/UnRating';
import OnOffControl from './component/onOffControl';
import {Select} from "./component/select/select";

// const App = () => {
//   return (
//     <div className="App">
//       <Header/>
//       <Navbar/>
//       <Offer/>
//       <Footer/>
//     </div>
//   );
// }
// function hello(){

function App(props: any) {
    let [ratingValue, setRatingValue] = useState<starValueType>(0);
    let [collapsing, setCollapsing] = useState<boolean>(true);
    let [on, setOn] = useState<boolean>(true);
    const onClickBody = (value: any) => {
        alert('user with ID $(value) can be happy')
    }
    return (
        <div className="app">
            <OnOff onChange={setOn}/>{on.toString()}
            <UnContrllCapsededAccordion titleValue={"some number"}/>
            {/* <UnRating/> */}
            {/* Article2 */}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion
                titleValue={"second title"}
                collapsing={collapsing}
                onClick={() => {
                    setCollapsing(!collapsing)
                }}
                items={[{title: "Lisa", value: 1}, {title: "Dan", value: 2}, {title: "Dina", value: 3}, {
                    title: "Masya",
                    value: 4
                }]}
                onClickBody={onClickBody}/>
            {/* <Title title={"bla bla"}/> */}
            <OnOffControl onClick={setOn} on={on}/>{on.toString()}
            {/* <OnOffControl onClick={()=>{setOn(!on)}} on={on}/> */}
            {/*<Select/>*/}
            <Select
                // name={"select name"}
                
                items={[{title:"Lisa",value:1},{title:"Dan",value:2},{title:"Dina",value:3},{title:"Masya",value:4}]}/>
        </div>
    )
}

type PropsTitle = {
    title: string
}

function Title(props: PropsTitle) {
    return (
        <h2>{props.title}<br/></h2>
    )
}


export default App;
