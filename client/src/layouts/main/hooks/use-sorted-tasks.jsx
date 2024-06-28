import { useState } from "react";
import { orderBy, slice } from "lodash";

const useSortedTasks = (tasksList, setTasks) => {
  const [sortOrders, setSortOrders] = useState({
    userName: "desc",
    userEmail: "desc",
    isDone: "desc",
    isAdminUpdated: "desc"
  });

  const sortTasks = (sortBy) => {
    const newSortOrder = sortOrders[sortBy] === "asc" ? "desc" : "asc";
    const sortedList = orderBy(tasksList, [sortBy], [newSortOrder]);
    setTasks(sortedList);
    setSortOrders((prevSortOrders) => ({
      ...prevSortOrders,
      [sortBy]: newSortOrder
    }));
  };

  const sortedByName = () => sortTasks("userName");
  const sortedByEmail = () => sortTasks("userEmail");
  const sortedByStatus = () => sortTasks("isDone");
  const sortedByAdminUpdate = () => sortTasks("isAdminUpdated");

  return {
    sortOrders,
    sortedByName,
    sortedByEmail,
    sortedByStatus,
    sortedByAdminUpdate
  };
};

export default useSortedTasks;
