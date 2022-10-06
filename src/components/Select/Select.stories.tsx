import React, { ChangeEvent, useState } from "react";
import { Select } from "./Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { action, actions } from "@storybook/addon-actions";

// my variant
// export default {
//   title: "Select",
// };
//
// export const Selected = () => {
//   const [city, setCity] = useState<string | undefined>("");
//
//   const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     setCity(e.currentTarget.value);
//   };
//   return (
//     <FormControl sx={{ m: 1, minWidth: 180 }}>
//       <InputLabel>{city}</InputLabel>
//       <Select
//         value={"Cities"}
//         onChange={onChange}
//         items={[
//           { title: "None", value: 0 },
//           { title: "Moscow", value: 1 },
//           { title: "Sevastopol", value: 2 },
//           { title: "Minsk", value: 3 },
//           { title: "Krasnodar", value: 4 },
//           { title: "Praga", value: 5 },
//         ]}
//       />
//     </FormControl>
//   );
// };

export default {
  title: "Select",
  component: Select,
};

export const WithValue = () => {
  const [value, setValue] = useState("2");
  return (
    <>
      <Select
        onChange={setValue}
        value={value}
        items={[
          { value: "1", title: "Minsk" },
          { value: "2", title: "Moscow" },
          { value: "3", title: "Kiev" },
        ]}
      />
    </>
  );
};

export const WithoutValue = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Select
        onChange={setValue}
        value={value}
        items={[
          { value: "1", title: "Minsk" },
          { value: "2", title: "Moscow" },
          { value: "3", title: "Kiev" },
        ]}
      />
    </>
  );
};
