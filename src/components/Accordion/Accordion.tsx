import React from "react";
type AccordionPropsType = {
  titleValue: string,
  collapsed: boolean,
}
function Accordion(props: AccordionPropsType) {
  if (props.collapsed) {
    return (
      <>
        <AccordionTitle title ={props.titleValue} />
      </>
    )
  } else
  return (
    <>
      <AccordionTitle title ={props.titleValue} />
      <AccordionBody/>
    </>
  )
}
type AccordionTitlePropsType = {
  title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendering');
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}

function AccordionBody() {
  console.log('Accordionbody rendering');
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  )
}
export default Accordion;