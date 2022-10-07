import React, { useReducer } from "react";
import { reducer, TOGGLE_COLLAPSED } from "./Reducer";

type AccordionPropsType = {
  titleValue: string;
};

export function SelfControlledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering");
  //let [collapsed, setControl] = useState(false);
  let [collapsed, dispatch] = useReducer(reducer, { collapsed: false });

  return (
    <div>
      {/*<AccordionTitle*/}
      {/*  title={props.titleValue}*/}
      {/*  onClick={() => {*/}
      {/*    setControl(!collapsed);*/}
      {/*  }}*/}
      {/*/>*/}
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          dispatch({ type: TOGGLE_COLLAPSED });
        }}
      />
      {!collapsed && <AccordionBody />}
    </div>
  );
}

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
