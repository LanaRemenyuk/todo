import { Box, Typography, styled } from "@mui/material";
import DoneStatusIcon from "./done-status-icon";
import AdminUpdateIcon from "./admin-update-icon";

const Component = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const UserName = styled(Typography)`
  margin-bottom: -2px;
`;

const Icons = styled(Box)`
  display: flex;
  gap: 4px;
`;

const TaskTitle = ({ task }) => {
  return (
    <Component>
      <UserName variant="h5">{task?.userName}</UserName>
      <Icons>
        <AdminUpdateIcon isUpdated={task?.isAdminUpdated} />
        <DoneStatusIcon isDone={task?.isDone} />
      </Icons>
    </Component>
  );
};

export default TaskTitle;
