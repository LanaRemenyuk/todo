import * as yup from "yup";

export const taskSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Заполните имя")
    .matches(
      /^[а-яА-ЯёЁ\s]+$/,
      "Можно вводить только символы русского алфавита и пробелы"
    )
    .max(50, "Не более 50 символов"),
  userEmail: yup
    .string()
    .email("Введите email корректно")
    .required("Email обязателен для заполнения"),
  text: yup
    .string()
    .required("Введите текст задачи")
    .max(350, "Не более 350 символов")
});
