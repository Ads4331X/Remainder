import { Clock } from "./clock.jsx";
import { Menu_Icon } from "./MenuIcon.jsx";
import { TodayDate } from "./TodayDate.jsx";
import { AddBtn } from "./AddBtn.jsx";
import { Box } from "@mui/material";

export function Remainder() {
  return (
    <Box className="remainder-app">
      <Menu_Icon />
      <TodayDate />
      <Clock />
      <AddBtn />
    </Box>
  );
}

export default Remainder;
