import { format } from "date-fns";

function updateTime(): void {
  const now = new Date();
  const formattedTime = format(now, "yyyy-MM-dd HH:mm:ss");
  console.log(formattedTime);
  setTimeout(updateTime, 1000);
}

updateTime();
