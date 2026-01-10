import { useState } from "react";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import ViewListIcon from "@mui/icons-material/ViewList";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";

const icon = [
  <HomeIcon sx={{ fontSize: "35px" }} />,
  <ViewListIcon sx={{ fontSize: "35px" }} />,
  <CalendarMonthIcon sx={{ fontSize: "35px" }} />,
  <StarIcon sx={{ fontSize: "35px" }} />,
  <DeleteIcon sx={{ fontSize: "35px" }} />,
];

export function Menu_Icon() {
  const [active, setActive] = useState(0);
  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "20px",
        border: "none",
      }}
    >
      {icon.map((iconComponent, index) => (
        <Box
          onClick={() => handleClick(index)}
          key={index}
          value={index}
          sx={{
            color: active === index ? "primary.main" : "text.secondary",
            margin: "0 10px",
            cursor: "pointer",
            "&:hover": { color: "primary.main" },
            "&.Mui-selected": {
              color: "primary.main",
            },
            "&.Mui-selected:hover": {
              color: "primary.main",
            },
          }}
        >
          {iconComponent}
        </Box>
      ))}
    </Box>
  );
}
