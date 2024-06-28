import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Box, styled } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { orderBy } from "lodash";
// components
import ButtonStyled from "@components/common/buttons/button-styled.button";
import { ContainerStyled } from "@components/common/container/container-styled";
import HeaderLayout from "@components/common/page-headers/header-layout";
import Task from "@components/common/task/task";
import DialogStyled from "@components/common/dialog/dialog-styled";
import TaskUpdate from "@components/pages/task-create/task-update";
import TaskCreate from "@components/pages/task-create/task-create";
import PaginationStyled from "@components/common/pagination/pagination-styled";
import Buttons from "./components/buttons";
import Loader from "@components/common/loader/loader";
// hooks
import UseSortedTasks from "./hooks/use-sorted-tasks";
import useSortedTasks from "./hooks/use-sorted-tasks";
import useDialogHandlers from "@hooks/dialog/use-dialog-handlers";
// store
import { getTaskLoadingStatus, getTasksList } from "@store/task/tasks.store";

const Main = React.memo(() => {
  const [tasks, setTasks] = useState([]);
  const [tasksPerPage] = useState(3);
  const [sortedTasks, setSortedTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationSlicedTasks, setPaginationSlicedTasks] = useState([]);

  const [state, setState] = useState({
    createTaskPage: false,
    updateTaskPage: false,
    taskId: null
  });
  const [currentSortOrder, setCurrentSortOrder] = useState(null);
  const tasksList = useSelector(getTasksList());
  const sortedTasksList = useMemo(
    () => orderBy(tasksList, "created_at", ["desc"]),
    [tasksList]
  );
  const isTasksLoading = useSelector(getTaskLoadingStatus());

  const { handleOpenTaskPage, handleCloseTaskPage, handleCloseUpdateTaskPage } =
    useDialogHandlers(setState);

  const {
    sortOrders,
    sortedByName,
    sortedByEmail,
    sortedByStatus,
    sortedByAdminUpdate
  } = useSortedTasks(sortedTasksList, setSortedTasks);

  useEffect(() => {
    const updatedTasks = tasksList?.filter((task) => {
      const oldTask = sortedTasks?.find((oldTask) => oldTask._id === task._id);
      if (!oldTask) return false;
      return (
        oldTask.isDone !== task.isDone ||
        oldTask.isAdminUpdated !== task.isAdminUpdated
      );
    });

    const deletedTaskIds = sortedTasks
      ?.filter(
        (task) => !tasksList.some((listTask) => listTask._id === task._id)
      )
      .map((task) => task._id);

    if (deletedTaskIds?.length > 0) {
      const taskWithoutDeleted = sortedTasks?.filter(
        (task) => !deletedTaskIds.includes(task._id)
      );
      setSortedTasks(taskWithoutDeleted);
    }

    if (updatedTasks?.length > 0) {
      setSortedTasks((prevSortedTasks) => {
        return prevSortedTasks.map((prevTask) => {
          const updatedTask = updatedTasks?.find(
            (task) => task._id === prevTask._id
          );
          return updatedTask ? updatedTask : prevTask;
        });
      });
    } else {
      setSortedTasks(tasksList);
    }
  }, [tasksList]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <ContainerStyled>
      <Buttons
        tasksList={sortedTasks}
        setState={setState}
        sortOrders={sortOrders}
        sortedByName={sortedByName}
        sortedByEmail={sortedByEmail}
        sortedByStatus={sortedByStatus}
        sortedByAdminUpdate={sortedByAdminUpdate}
      />

      {!isTasksLoading ? (
        sortedTasks
          ?.slice(
            currentPage * tasksPerPage - tasksPerPage,
            currentPage * tasksPerPage
          )
          ?.map((task) => (
            <Task task={task} setState={setState} key={task._id}></Task>
          ))
      ) : (
        <Loader size={50} height="500px" />
      )}

      {!isTasksLoading && (
        <PaginationStyled
          elementsFullList={tasksList}
          elements={sortedTasks}
          elementsPerPage={tasksPerPage}
          elemPerPage={tasksPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setPaginationSlicedElements={setPaginationSlicedTasks}
        />
      )}

      <DialogStyled
        component={<TaskCreate onClose={handleCloseTaskPage} />}
        maxWidth="sm"
        onClose={handleCloseTaskPage}
        open={state.createTaskPage}
      />
      <DialogStyled
        component={
          <TaskUpdate
            onClose={handleCloseUpdateTaskPage}
            taskId={state.taskId}
          />
        }
        maxWidth="sm"
        onClose={handleCloseUpdateTaskPage}
        open={state.updateTaskPage}
      />
    </ContainerStyled>
  );
});

export default Main;
