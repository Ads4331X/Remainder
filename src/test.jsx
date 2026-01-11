import { renderDateViewCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const dailyRemainder = [
  {
    name: "Drink Water",
    startDate: "2026-01-12",
    endDate: "2026-01-17",
    times: ["11:59 PM", "12:00 AM", "1:00 AM", "3:00 AM", "9:00 AM"],
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

const remainders = [...dailyRemainder, ...weeklyRemainder];

const checkEndDate = (endDate) => !dayjs().isAfter(endDate);

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

const sort = (remTimes) =>
  remTimes.sort(
    // sorting the array of remainder times
    (a, b) => dayjs(a, "h:mm A") - dayjs(b, "h:mm A")
  );

const checkNextTime = (remainderTimes = [], startDate) => {
  remainderTimes = sort(remainderTimes);
  const start = dayjs(startDate, "YYYY-MM-DD"); // start date
  const now = dayjs().isBefore(start) ? start : dayjs();
  for (let time of remainderTimes) {
    const rt = dayjs(time, "h:mm A")
      .year(now.year())
      .month(now.month())
      .date(now.date());
    if (rt.isAfter(now) || rt.isSame(now))
      return rt.format("YYYY-MM-DD h:mm A");
  }
  const newDay = now.add(1, "d");
  return newDay.format("YYYY-MM-DD ") + remainderTimes[0];
};

export const nextReminder = (
  remainder,
  currentDate = dayjs().format("YYYY-MM-DD h:mm d")
) => {
  console.log(checkEndDate(remainder.endDate));
  let nextRemTime, remainderType;
  const isExpired = checkEndDate(remainder.endDate);
  if (isExpired) {
    remainderType = checkRemainderType(remainder.type);
    console.log("Remainder Type:", remainderType);
    if (remainderType === "WEEKLY") {
      console.log(
        "Next Remainder is in: " + checkNextDay(remainder.days) // checks next remainder day and displays it
      );
    }
    if (remainderType === "DAILY") {
      nextRemTime = checkNextTime(remainder.times, remainder.startDate); // checks next remainder time and displays it

      console.log(
        "Next Remainder is in: " + nextRemTime // checks next remainder time and displays it
      );
    }
  }
  console.log("Remainders:", remainder);
  console.log("Current Date:", currentDate);
  return {
    name: remainder.name,
    startDate: remainder.startDate,
    endDate: remainder.endDate,
    type: remainderType,
    remainderTime: nextRemTime,
    expired: isExpired,
  };
};

const getBulkReminders = (remainders = []) => {
  remainders.map((remainder) => nextReminder(remainder));
};
getBulkReminders(remainders);
