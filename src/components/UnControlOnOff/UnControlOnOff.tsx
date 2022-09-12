import { useState } from "react";

type PropsType = {
  onChange: (on: boolean) => void;
  defaultOn?: boolean;
};

export function UnControlOnOff(props: PropsType) {
  console.log("OnOff rendered");
  let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);
  console.log("on: " + on);

  const onStyle = {
    display: "inline-block",
    width: "30px",
    height: "20px",
    border: "1px solid black",
    padding: "2px",
    backgroundColor: on ? "green" : "white",
  };
  const offStyle = {
    display: "inline-block",
    width: "30px",
    height: "20px",
    border: "1px solid black",
    marginLeft: "2px",
    padding: "2px",
    backgroundColor: on ? "white" : "red",
  };
  const indicatorStyle = {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red",
  };

  const onClicked = () => {
    setOn(true);
    props.onChange(true);
  };

  const offClicked = () => {
    setOn(false);
    props.onChange(false);
  };
  return (
    <div>
      <div style={onStyle} onClick={onClicked}>
        On
      </div>
      <div style={offStyle} onClick={offClicked}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
}
