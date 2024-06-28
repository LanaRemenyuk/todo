import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { Box, Typography, styled } from "@mui/material";
// icons
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
// components
import ButtonStyled from "@components/common/buttons/button-styled.button";
import DialogConfirm from "@components/common/dialog/dialog-confirm";
import LoaderFullWindow from "@components/common/loader/loader-full-window";
// utils
import { formatDate } from "@utils/date/format-date";
import { checkIsLoggedIn } from "@utils/auth/check-is-logged-in";
// hooks
import useDialogHandlers from "@hooks/dialog/use-dialog-handlers";
// store
import { removeTask } from "@store/task/tasks.store";
import { getCurrentUserId, getIsLoggedIn } from "@store/user/users.store";

const TaskDate = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Buttons = styled(Box)`
  display: flex;
  gap: 4px;
`;

const TaskFooter = ({ task, setState }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn());
  const userId = useSelector(getCurrentUserId());

  const dispatch = useDispatch();
  const { handleOpenUpdateTaskPage } = useDialogHandlers(setState);

  const handleRemoveTask = (taskId) => {
    setIsLoading(true);

    if (checkIsLoggedIn(userId)) {
      dispatch(removeTask(taskId))
        .then(() => toast.success("Задача успешно удалена!"))
        .catch((error) => {
          toast.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setOpen(false);
      toast.error("Авторизуйтесь в Системе!");
    }
  };

  const handleOpenCofirm = () => {
    setOpen(true);
  };

  const handleCloseCofirm = () => {
    setOpen(false);
  };

  return (
    <TaskDate>
      {isLoggedIn ? (
        <Buttons>
          <ButtonStyled
            title="Редактировать"
            color="secondary"
            onClick={() => handleOpenUpdateTaskPage(task?._id)}
            icon={<ModeEditOutlineOutlinedIcon />}
          />
          <ButtonStyled
            title="Удалить"
            color="error"
            onClick={handleOpenCofirm}
            icon={<HighlightOffOutlinedIcon />}
          />
        </Buttons>
      ) : (
        <Box></Box>
      )}
      <Typography>{formatDate(task?.created_at)}</Typography>

      <LoaderFullWindow isLoading={isLoading} />
      <DialogConfirm
        question="Вы уверены, что хотите удалить задачу?"
        open={open}
        onSuccessClick={() => handleRemoveTask(task?._id)}
        onClose={handleCloseCofirm}
      />
    </TaskDate>
  );
};

export default TaskFooter;
