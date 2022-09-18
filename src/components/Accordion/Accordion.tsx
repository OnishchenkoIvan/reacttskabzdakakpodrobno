import React from "react";

type ItemType = {
  title: string;
  value: number;
};

export type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  /**
   * Elements that are showed when accordion is opened(not collapsed)
   */
  items: ItemType[];
  onClick: (value: any) => void;
};

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {!props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <div>
      <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    </div>
  );
}

function AccordionBody() {
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
