import { Box, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const ApplicationName = ({
  title = "",
  background = "linear-gradient(to right, MediumBlue, RoyalBlue)",
  color = "white"
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <Component onClick={handleOnClick}>
      <Typography
        variant="h4"
        sx={{
          background: background,
          color: color,
          padding: "0px 8px",
          textAlign: "center",
          borderRadius: "4px"
        }}
      >
        {title}
      </Typography>
    </Component>
  );
};

export default ApplicationName;
