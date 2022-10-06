import React, { ChangeEvent, useState } from "react";
import { Select } from "./Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export default {
  title: "Select",
};

export const Selected = () => {
  const [city, setCity] = useState<string | undefined>("");

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCity(e.currentTarget.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 180 }}>
      <InputLabel>{city}</InputLabel>
      <Select
        value={"Cities"}
        onChange={onChange}
        items={[
          { title: "None", value: 0 },
          { title: "Moscow", value: 1 },
          { title: "Sevastopol", value: 2 },
          { title: "Minsk", value: 3 },
          { title: "Krasnodar", value: 4 },
          { title: "Praga", value: 5 },
        ]}
      />
    </FormControl>
  );
};
