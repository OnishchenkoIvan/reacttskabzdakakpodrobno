import React, { useState } from "react";
import "./App.css";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { SelfControlledAccordion } from "./components/SelfControlledAccordion/SelfControlledAccordion";
import { UnControlRating } from "./components/UncontrolRating/UnControlRating";
import { Accordion } from "./components/Accordion/Accordion";
import { UnControlOnOff } from "./components/UnControlOnOff/UnControlOnOff";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchON, setSwitchOn] = useState<boolean>(false);

  return (
    <div className={"App"}>
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Accordion
        titleValue={"Menu"}
        collapsed={accordionCollapsed}
        onChange={() => {
          setAccordionCollapsed(!accordionCollapsed);
        }}
      />
      <OnOff
        on={switchON}
        onChange={(on) => {
          setSwitchOn(on);
        }}
      />
      <SelfControlledAccordion titleValue={"First menu"} />
      <SelfControlledAccordion titleValue={"Second menu"} />
      <UnControlOnOff onChange={setSwitchOn} /> {switchON.toString()}
      {/*<UnControlOnOff />*/}
      {/*<UnControlOnOff />*/}
      {/*<UnControlRating />*/}
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};
function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering");
  return <h1>{props.title}</h1>;
}

export default App;
