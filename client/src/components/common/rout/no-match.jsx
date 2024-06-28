import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoMatchRoute = () => {
  return (
    <Component>
      <Typography variant="h3">
        Страницы по такому адресу не существует :-(
      </Typography>
      <Typography variant="h4">
        Проверьте вводимый адрес и попробуйте снова
      </Typography>
    </Component>
  );
};

export default NoMatchRoute;
