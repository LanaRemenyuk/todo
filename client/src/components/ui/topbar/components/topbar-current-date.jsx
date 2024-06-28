import dayjs from "dayjs";
import "dayjs/locale/ru";
import styled from "@emotion/styled";
import { Typography, Tooltip, Box } from "@mui/material";
// utils
import { capitalizeFirstLetter } from "@utils/data/capitalize-first-letter";

const Component = styled(Box)`
  width: fit-content;
  display: flex;
  gap: 6px;
  justify-content: start;
`;

const Element = styled(Typography)`
  color: white;
`;

const TopBarCurrentDate = () => {
  dayjs.locale("ru");
  const currentDate = dayjs();

  const formattedDate = capitalizeFirstLetter(
    currentDate.format("dddd, D MMM")
  ).replace(/\.$/, "");

  return (
    <Component>
      <Element variant="h6">{formattedDate} </Element>
    </Component>
  );
};

export default TopBarCurrentDate;
