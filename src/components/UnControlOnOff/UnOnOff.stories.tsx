import React, { useState } from "react";
import { UnControlOnOff } from "./UnControlOnOff";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "UnControlOnOff",
  component: UnControlOnOff,
};

export const OnMode = () => (
  <UnControlOnOff defaultOn={true} onChange={action("on or off")} />
);
export const OfMode = () => (
  <UnControlOnOff defaultOn={false} onChange={action("on or off")} />
);

export const DefaultInputValue = () => <input defaultValue={"yo"} />;
