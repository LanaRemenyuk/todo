import { loadTasksList } from "@store/task/tasks.store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksList());
  }, [dispatch]);

  return children;
};

export default AppLoader;
