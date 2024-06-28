import { useSelector } from "react-redux";
// components
import TextFieldStyled from "@components/common/inputs/text-field-styled";
// components
import { FieldsContainer, Form } from "@components/common/forms/styled";
import SimpleSwitch from "@components/common/inputs/simple-switch";
// utils
import { capitalizeFirstLetter } from "@utils/data/capitalize-first-letter";
import { capitalizeAllFirstLetters } from "@utils/data/capitalize-all-first-letters";
// store
import { getIsLoggedIn } from "@store/user/users.store";
import { getTaskLoadingStatus } from "@store/task/tasks.store";

const TaskForm = ({
  data,
  register,
  errors,
  watch,
  setValue,
  isUpdate = false
}) => {
  const watchIsDone = watch("isDone");
  const isLoggedIn = useSelector(getIsLoggedIn());
  const isTasksLoading = useSelector(getTaskLoadingStatus());

  return (
    <Form>
      <FieldsContainer sx={{ flexDirection: "column" }}>
        <TextFieldStyled
          register={register}
          label="Имя пользователя"
          name="userName"
          required={true}
          value={capitalizeAllFirstLetters(data?.userName)}
          errors={errors?.userName}
          inputProps={{ maxLength: 50 }}
          onEnterPress={() => {
            document.getElementById("userEmail").focus();
          }}
        />
        <TextFieldStyled
          register={register}
          label="Почта пользователя"
          name="userEmail"
          required={true}
          errors={errors?.userEmail}
          inputProps={{ maxLength: 50 }}
          onEnterPress={() => {
            document.getElementById("text").focus();
          }}
        />
        <TextFieldStyled
          register={register}
          label="Текст задачи"
          name="text"
          required={true}
          value={capitalizeFirstLetter(data?.text)}
          errors={errors?.text}
          rows="2"
          multiline={true}
          inputProps={{ maxLength: 350 }}
        />
        {isLoggedIn && isUpdate ? (
          <SimpleSwitch
            title="Задача выполненна"
            value={watchIsDone}
            isLoading={isTasksLoading}
            onChange={(e) => {
              setValue("isDone", e.target.checked);
            }}
          />
        ) : null}
      </FieldsContainer>
    </Form>
  );
};

export default TaskForm;
