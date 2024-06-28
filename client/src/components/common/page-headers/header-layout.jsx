import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  margin-right: 50px;
`;

const HeaderLayout = ({
  title = "",
  background = "linear-gradient(to right, MediumBlue, RoyalBlue)",
  color = "white"
}) => {
  return (
    <Component>
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

export default HeaderLayout;
