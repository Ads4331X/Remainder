import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const dailyRemainder = [
  {
    name: "Drink Water",
    startDate: "2026-01-10",
    endDate: "2026-01-17",
    times: ["9:00 AM", "12:00 PM", "3:00 PM", "8:00 PM", "9:00 AM", "3:00 PM"],
    type: "DAILY",
  },
];

const weeklyRemainder = [
  {
    name: "Drink Water",
    startDate: "2026-01-10",
    endDate: "2026-01-17",
    times: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
    dates: ["2026-1-11", "2026-1-12", "2026-1-13"],
    days: ["SUNDAY", "SATURDAY", "WEDNESDAY", "FRIDAY"],
    type: "WEEKLY",
  },
];

const days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

// Task: Implement the function nextReminder
// Bulk Reminder Function

const remainders = [dailyRemainder, weeklyRemainder];

const checkRemainderType = (type) => {
  switch (type) {
    case "DAILY":
      return "DAILY";
    case "WEEKLY":
      return "WEEKLY";
    default:
      return [];
  }
};

const checkNextDay = (RemainderDays = []) => {
  const currentDay = dayjs().day();
  for (let i = 0; i < 7; i++) {
    const nextDay = (currentDay + i) % 7;
    if (RemainderDays.includes(days[nextDay])) {
      return days[nextDay];
    }
  }
  return null;
};

const checkNextTime = (RemainderTimes = []) => {
  const now = dayjs();
  console.log("Current Time:", now.format("h:mm A"));
  console.log("Remainder Times:", RemainderTimes);
  for (let i = 0; i < RemainderTimes.length; i++) {
    let rt = dayjs(RemainderTimes[i], "h:mm A");
    console.log("Remainder Time:", rt);
    if (rt.isAfter(now)) {
      return rt.format("h:mm A");
    }
  }
  return null;
};

export const NextReminder = (
  remainders = [],
  currentDate = dayjs().format("YYYY-MM-DD h:mm d")
) => {
  for (let i = 0; i < remainders.length; i++) {
    for (let j = 0; j < remainders[i].length; j++) {
      const remainderType = checkRemainderType(remainders[i][j].type);
      console.log("Remainder Type:", remainderType);

      if (remainderType === "WEEKLY") {
        console.log(
          "Next Remainder is in: " + checkNextDay(remainders[i][j].days) // checks next remainder day and displays it
        );
      }
      if (remainderType === "DAILY") {
        console.log(
          "Next Remainder is in: " + checkNextTime(remainders[i][j].times) // checks next remainder time and displays it
        );
      }
    }
  }
  console.log("Remainders:", remainders);
  console.log("Current Date:", currentDate);
  return [];
};

NextReminder(remainders);

const getBulkReminders = (remainders = [], currentDate, count) => {
  return [];
};
