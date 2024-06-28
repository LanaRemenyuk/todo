import * as yup from "yup";

export const loginSchema = yup.object().shape({
  login: yup.string().required("Логин обязателен для заполнения"),
  password: yup.string().required("Пароль обязателен для заполнения")
});
