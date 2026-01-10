import dayjs from "dayjs";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => setTime(dayjs()), 1000);
    return () => clearInterval(interval);
  }, []);

  const commonSx = {
    pointerEvents: "none",

    transform: "scale(1)",
    transformOrigin: "center",
    "& .MuiClock-root": {
      margin: 0,
    },
    "& .MuiClock-pin": {
      borderWidth: "8px",
      backgroundColor: "black",
    },
    "& .MuiClockPointer-thumb": {
      display: "none",
    },
    "& .MuiClockNumber-root.Mui-selected": {
      backgroundColor: "transparent",
      color: "black",
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "-20px auto",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TimeClock
            views={["hours"]}
            value={time}
            sx={{
              ...commonSx,
              "& .MuiClockPointer-root": {
                backgroundColor: "black",
                width: 4,
                height: "60px !important",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TimeClock
            views={["minutes"]}
            value={time}
            sx={{
              ...commonSx,
              "& .MuiClockNumber-root": { display: "none" },
              "& .MuiClockPointer-root": {
                backgroundColor: "black",
                width: 3,
                height: "70px !important",
              },
            }}
          />
        </Box>
      </LocalizationProvider>
    </Box>
  );
}
