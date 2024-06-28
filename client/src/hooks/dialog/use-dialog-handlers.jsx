const useDialogHandlers = (setState) => {
  // обновление стейта при открытии страницы задачи
  const handleOpenTaskPage = (taskId) => {
    setState((prevState) => ({
      ...prevState,
      createTaskPage: true,
      taskId: taskId
    }));
  };
  const handleCloseTaskPage = () => {
    setState((prevState) => ({ ...prevState, createTaskPage: false }));
  };

  // обновление стейта при открытии страницы обновления задачи
  const handleOpenUpdateTaskPage = (taskId) => {
    setState((prevState) => ({
      ...prevState,
      updateTaskPage: true,
      taskId: taskId
    }));
  };
  const handleCloseUpdateTaskPage = () => {
    setState((prevState) => ({ ...prevState, updateTaskPage: false }));
  };

  // обновление стейта при открытии окна страницы авторизации
  const handleOpenAuthPage = () => {
    setState((prevState) => ({
      ...prevState,
      openAuthPage: true
    }));
  };
  const handleCloseAuthPage = () => {
    setState((prevState) => ({
      ...prevState,
      openAuthPage: false
    }));
  };

  return {
    handleOpenTaskPage,
    handleCloseTaskPage,
    handleOpenUpdateTaskPage,
    handleCloseUpdateTaskPage,
    handleOpenAuthPage,
    handleCloseAuthPage
  };
};

export default useDialogHandlers;
