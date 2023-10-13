import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

type SwitchProps = {
  value?: string | number;
  label: string | number;
  onChange?: (...args: any[]) => any;
  checked?: any;
};

export default function SwitchLabels(props: SwitchProps) {
  const { value, label, checked, onChange } = props;
//   const [checked, setChecked] = useState(false);

//   const handleChange = () => {
//     setChecked(!checked);
//   };

  return (
    <FormGroup className="ms-2">
      <FormControlLabel
        control={<Switch checked={checked} onChange={onChange} />}
        label={label}
        value={value}
      />
    </FormGroup>
  );
}
