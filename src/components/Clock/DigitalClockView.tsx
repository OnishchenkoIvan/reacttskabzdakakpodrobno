import React from "react";
import { ClockViewPropsType, getTwoDigitsString } from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({ date }) => {
  return (
    <>
      <span>{getTwoDigitsString(date.getHours())}</span>:
      <span>{getTwoDigitsString(date.getMinutes())}</span>:
      <span>{getTwoDigitsString(date.getSeconds())}</span>
    </>
  );
};
