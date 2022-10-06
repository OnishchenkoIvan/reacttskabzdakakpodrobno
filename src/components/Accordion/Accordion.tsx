import React from "react";

type ItemType = {
  title: string;
  value: any;
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
export type AccordionBodyPropsType = {
  items: ItemType[];
  onClick: (value: any) => void;
};

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <>
      <ul>
        {props.items.map((i, index) => (
          <li
            onClick={() => {
              props.onClick(i.value);
            }}
            key={index}
          >
            {i.title}
          </li>
        ))}
      </ul>
    </>
  );
}
