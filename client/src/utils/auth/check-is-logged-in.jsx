import { getCurrentUserId } from "@store/user/users.store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const checkIsLoggedIn = (userId) => {
  const state = localStorage.getItem("user-local-id") === userId;

  if (state) {
    return true;
  } else {
    return false;
  }
};
