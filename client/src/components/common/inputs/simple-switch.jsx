import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
  styled
} from "@mui/material";
import { useState } from "react";

const Component = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const FormControlSyled = styled(FormControl)`
  display: flex;
  justify-content: start;
`;

const SimpleSwitch = ({
  title,
  onChange,
  value,
  whiteSpace = "nowrap",
  isLoading = false,
  padding = "0px",
  disabled = false
}) => {
  const [checked, setChecked] = useState(value);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Component>
      <FormControlSyled component="fieldset" sx={{ padding: padding }}>
        <FormGroup aria-label="position" row sx={{ width: "100%" }}>
          <FormControlLabel
            control={
              <Switch
                color="success"
                checked={value}
                disabled={disabled}
                onChange={handleChange}
              />
            }
            label={title}
            labelPlacement="start"
            sx={{
              width: "100%",
              whiteSpace: whiteSpace,
              color: checked ? "black" : "gray"
            }}
          />
        </FormGroup>
      </FormControlSyled>
    </Component>
  );
};

export default SimpleSwitch;
