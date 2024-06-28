import { useState } from "react";
import { InputAdornment, IconButton } from "@mui/material";
// icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// components
import { FieldsContainer, Form } from "@components/common/forms/styled";
import TextFieldStyled from "@components/common/inputs/text-field-styled";

const AuthForm = ({ data, register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = () => {
    event.preventDefault();
  };

  return (
    <Form noValidate sx={{ marginBottom: "40px" }}>
      <FieldsContainer sx={{ flexDirection: "column" }}>
        <TextFieldStyled
          register={register}
          label="Логин"
          name="login"
          errors={errors?.login}
          value={data?.login}
          inputProps={{ maxLength: 150 }}
          onEnterPress={() => {
            document.getElementById("password").focus();
          }}
        />

        <TextFieldStyled
          register={register}
          label="Пароль"
          type={showPassword ? "text" : "password"}
          name="password"
          value={data?.password.trim()}
          errors={errors?.password}
          inputProps={{ maxLength: 20 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </FieldsContainer>
    </Form>
  );
};

export default AuthForm;
