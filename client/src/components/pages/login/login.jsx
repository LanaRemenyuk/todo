// libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, styled } from "@mui/material";
// components
import ButtonStyled from "@components/common/buttons/button-styled.button";
import LoaderFullWindow from "@components/common/loader/loader-full-window";
import HeaderWithCloseButton from "@components/common/page-headers/header-with-close-button";
// schema
import { loginSchema } from "@schemas/login.schema";
// forms
import AuthForm from "@forms/auth-form";
// store
import { login } from "@store/user/users.store";

const Component = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const initialState = {
  login: "",
  password: ""
};

const Login = React.memo(({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: initialState,
    mode: "onSubmit",
    resolver: yupResolver(loginSchema)
  });

  const data = watch();

  const onSubmit = () => {
    setIsLoading(true);

    const newData = {
      ...data,
      login: data.login.trim()
    };

    dispatch(login(newData))
      .then(() => {
        onClose();
        toast.success("Добро пожаловать в Систему!");
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Component>
      <HeaderWithCloseButton
        title="Войти в систему"
        color="white"
        background="OrangeRed"
        onClose={onClose}
      />
      <FormContainer>
        <AuthForm data={data} errors={errors} register={register} />
        <ButtonStyled
          title="Войти"
          color="success"
          onClick={handleSubmit(onSubmit)}
        />
      </FormContainer>

      <LoaderFullWindow isLoading={isLoading} />
    </Component>
  );
});

export default Login;
