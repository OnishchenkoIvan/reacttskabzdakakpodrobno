import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { UnControlRating } from "./UnControlRating";
import { RatingValueType } from "../Rating/Rating";

export default {
  title: "UnControlRating",
  component: UnControlRating,
};

const callback = action("rating change inside component");

export const EmptyRating = () => (
  <UnControlRating defaultValue={0} onChange={callback} />
);
export const EmptyRating1 = () => (
  <UnControlRating defaultValue={1} onChange={callback} />
);
export const EmptyRating2 = () => (
  <UnControlRating defaultValue={2} onChange={callback} />
);
export const EmptyRating3 = () => (
  <UnControlRating defaultValue={3} onChange={callback} />
);
export const EmptyRating4 = () => (
  <UnControlRating defaultValue={4} onChange={callback} />
);
export const EmptyRating5 = () => (
  <UnControlRating defaultValue={5} onChange={callback} />
);
