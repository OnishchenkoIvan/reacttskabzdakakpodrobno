import React, { useState } from "react";

import { Accordion, AccordionPropsType } from "./Accordion";
import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";

export default {
  title: "Accordion",
  component: Accordion,
};

const callBack = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
const callbacksProps = {
  onChange: callBack,
  onClick: onClickCallback,
};

export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args = {
  ...callbacksProps,
  collapsed: true,
  titleValue: "Menu",
  items: [],
};

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
  ...callbacksProps,
  titleValue: "Users",
  collapsed: false,
  items: [
    { title: "Dimych", value: 1 },
    { title: "Valera", value: 2 },
    { title: "Artem", value: 3 },
    { title: "Viktor", value: 4 },
  ],
};

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);

  return (
    <Accordion
      titleValue={"--Users--"}
      collapsed={value}
      onChange={() => setValue(!value)}
      items={[
        { title: "Dimych", value: 1 },
        { title: "Valera", value: 2 },
        { title: "Artem", value: 3 },
        { title: "Viktor", value: 4 },
      ]}
      onClick={(value) => {
        alert(`user with ID ${value} should be happy`);
      }}
    />
  );
};
