import React, { useState } from "react";

import { Accordion } from "./Accordion";
import { action } from "@storybook/addon-actions";

export default {
  title: "Accordion",
  component: Accordion,
};

const callBack = action("accordion mode change event fired");

export const CollapsedMode = () => (
  <Accordion titleValue={"collapsed"} collapsed={true} onChange={callBack} />
);
export const UnCollapsedMode = () => (
  <Accordion titleValue={"Uncollapsed"} collapsed={false} onChange={callBack} />
);

export const AccordionEmpty = () => {
  const [value, setValue] = useState<boolean>(true);
  return (
    <Accordion
      titleValue={"Menu"}
      collapsed={value}
      onChange={() => setValue(!value)}
    />
  );
};
