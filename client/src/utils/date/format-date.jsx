import dayjs from "dayjs";
import "dayjs/locale/ru";

export const formatDate = (date) => {
  if (date !== null && date !== undefined) {
    return dayjs(date)?.format("DD.MM.YY");
  } else {
    return "-";
  }
};
