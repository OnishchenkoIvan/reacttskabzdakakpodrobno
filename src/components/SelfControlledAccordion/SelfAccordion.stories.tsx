import React, { useState } from "react";

import { SelfControlledAccordion } from "./SelfControlledAccordion";
import { action } from "@storybook/addon-actions";

export default {
  title: "Accordionself",
  component: SelfControlledAccordion,
};

const callBack = action("accordion mode change event fired");

export const AccordionEmpty = () => {
  return <SelfControlledAccordion titleValue={"Menu"} />;
};
