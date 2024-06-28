// libraries
import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { Box, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// icons
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
// common
import TopBarCurrentDate from "./components/topbar-current-date";
import HeaderLayout from "@components/common/page-headers/header-layout";
import ApplicationName from "@components/ui/topbar/components/application-name";
import ButtonStyled from "@components/common/buttons/button-styled.button";
import DialogConfirm from "@components/common/dialog/dialog-confirm";
import DialogStyled from "@components/common/dialog/dialog-styled";
import Login from "@components/pages/login/login";
// common
import { ContainerStyled } from "@common/container/container-styled";
// hooks
import useDialogHandlers from "@hooks/dialog/use-dialog-handlers";
// store
import { getIsLoggedIn, logOut } from "@store/user/users.store";

const Component = styled(Box)`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
`;

const TopBar = React.memo(() => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    openAuthPage: false
  });
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());

  const { handleOpenAuthPage, handleCloseAuthPage } =
    useDialogHandlers(setState);

  const handleLogOut = () => {
    dispatch(logOut());
    setOpen(false);
    toast.warning("Вы покинули Систему!");
  };

  const handleOpenCofirm = () => {
    setOpen(true);
  };

  const handleCloseCofirm = () => {
    setOpen(false);
  };

  return (
    <Component>
      <TopBarCurrentDate />
      <ApplicationName title="Список задач"></ApplicationName>
      {!isLoggedIn ? (
        <ButtonStyled
          title="Войти"
          color="success"
          onClick={handleOpenAuthPage}
          icon={<LockOutlinedIcon />}
        />
      ) : (
        <ButtonStyled
          title="Выйти"
          color="error"
          onClick={handleOpenCofirm}
          icon={<ExitToAppOutlinedIcon />}
        />
      )}
      <DialogConfirm
        question="Вы уверены, что хотите выйти из Системы?"
        open={open}
        onSuccessClick={handleLogOut}
        onClose={handleCloseCofirm}
      />
      <DialogStyled
        component={<Login onClose={handleCloseAuthPage} />}
        maxWidth="xs"
        onClose={handleCloseAuthPage}
        open={state.openAuthPage}
      />
    </Component>
  );
});

export default TopBar;
