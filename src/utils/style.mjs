import { Select, styled } from "@mui/material";

export const CustomSelect = styled(Select)({
  // Your custom styles for Select
  color: "#fff",
  "& fieldset": { border: "none" },
  "& .MuiSelect-icon": {
    color: "#fff", // Change the arrow color to #fff
  },
});
