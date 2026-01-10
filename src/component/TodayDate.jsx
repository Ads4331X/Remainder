import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Box } from "@mui/material";

export function TodayDate() {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setDate(dayjs());
    }, 60000);
    return () => clearInterval(dateInterval);
  }, []);
  let dateString = date.format("DD MMMM YYYY");
  let dayString = date.format("dddd, ");

  return (
    <Box
      sx={{
        display: "grid",
        fontSize: "xx-large",
        marginBottom: "0px",
        padding: 0,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {dateString}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {dayString}
      </Box>
    </Box>
  );
}
