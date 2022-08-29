import React from 'react';
import './App.css'
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {SelfControlledAccordion} from "./components/SelfControlledAccordion/SelfControlledAccordion";

function App() {
  return (
    <div className="App">
      {/*<input/>*/}
      {/*<input checked={true} value='you' type={'password'}/>*/}
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    it-kamasutra <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      {/*<PageTitle title={'This is APP component'}/>*/}
      {/*<PageTitle title={'My friends'}/>*/}
      {/*This is App component*/}
      <SelfControlledAccordion titleValue={"First menu"} />
      <SelfControlledAccordion titleValue={'Second menu'} />
      {/*<Rating value={0}/>*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      <OnOff />
      <OnOff />
      <OnOff />
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}
function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering");
  return <h1>{props.title}</h1>
}

export default App;
