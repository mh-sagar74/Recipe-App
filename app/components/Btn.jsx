"use client";

import { Button } from "@mui/material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

export default function Btn({
  label = "CLICK HERE",
  onClick,
  icon = <DoneRoundedIcon />,
  variant = "contained",
  color,
}) {
  return (
    <>
      <Button
        onClick={onClick}
        startIcon={icon}
        variant={variant}
        color={color}>
        {label}
      </Button>
    </>
  );
}
