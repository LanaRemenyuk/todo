import { Box, Paper, Typography, styled } from "@mui/material";
import { formatDate } from "@utils/date/format-date";
import { useState } from "react";
// components
import DoneStatusIcon from "./components/done-status-icon";
import TaskTitle from "./components/task-title";
import ButtonStyled from "../buttons/button-styled.button";
import TaskFooter from "./components/task-footer";
// hooks
import useDialogHandlers from "@hooks/dialog/use-dialog-handlers";

const TaskContainer = styled(Paper)`
  padding: 20px;
  background: white;
  color: black;
  margin-bottom: 10px;
`;

const UserEmail = styled(Typography)`
  font-style: italic;
  margin-bottom: 8px;
`;

const TaskText = styled(Typography)`
  margin-bottom: 20px;
`;

const Task = ({ task, setState }) => {
  return (
    <TaskContainer variant="elevation">
      <TaskTitle task={task} />
      <UserEmail>{task?.userEmail}</UserEmail>
      <TaskText>{task?.text}</TaskText>

      <TaskFooter task={task} setState={setState} />
    </TaskContainer>
  );
};

export default Task;
