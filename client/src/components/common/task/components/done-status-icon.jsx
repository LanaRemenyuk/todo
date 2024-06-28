import { Box, Tooltip, styled } from "@mui/material";
// icons
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";

const Component = styled(Box)`
  display: flex;
  justify-content: end;
`;

const DoneStatusIcon = ({ isDone }) => {
  return (
    <Tooltip
      title={isDone ? "Задача выполнена" : "Задача не выполнена"}
      placement="top-start"
      arrow
    >
      <Component>
        {isDone ? (
          <TaskAltOutlinedIcon sx={{ color: "LimeGreen" }} />
        ) : (
          <UnpublishedOutlinedIcon sx={{ color: "Crimson" }} />
        )}
      </Component>
    </Tooltip>
  );
};

export default DoneStatusIcon;
