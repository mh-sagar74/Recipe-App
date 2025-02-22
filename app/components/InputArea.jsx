"use client";

import { TextField } from "@mui/material";

export default function InputArea({ label = "Type Here", value, onChange }) {
  return (
    <>
      <TextField value={value} onChange={onChange} fullWidth label={label} />
    </>
  );
}
