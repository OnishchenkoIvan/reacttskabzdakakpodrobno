import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
type AccordionPropsType = {
  titleValue: string;
  // collapsed: boolean,
};

export function SelfControlledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering");
  let [on, setControl] = useState(false);

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          setControl(!on);
        }}
      />
      {!on && <AccordionBody />}
    </div>
  );
}

// function Accordion2(props: AccordionPropsType) {
//   if (props.collapsed) {
//     return (
//       <>
//         <AccordionTitle title ={props.titleValue} />
//       </>
//     )
//   } else
//   return (
//     <>
//       <AccordionTitle title ={props.titleValue} />
//       <AccordionBody/>
//     </>
//   )
// }
type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};
function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return (
    <div>
      <h3
        onClick={() => {
          props.onClick();
        }}
      >
        {props.title}
      </h3>
    </div>
  );
}

function AccordionBody() {
  console.log("Accordionbody rendering");
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}
