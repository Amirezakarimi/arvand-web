import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectMui(props) {
  const { action, title, value, param, options } = props;
  const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          value={age}
          label={title}
          onChange={(event) => action(event.target.value)}
        >
          {options &&
            options.map((item, i) => (
              <MenuItem key={i} value={item[value]}>
                {item[param]}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
