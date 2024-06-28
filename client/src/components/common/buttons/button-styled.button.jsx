import { Button } from "@mui/material";

const ButtonStyled = ({
  title = "title",
  height = "24px",
  onClick = () => {},
  disabled = false,
  variant = "contained",
  icon = null,
  background = null,
  backgroundHover = null,
  colorHover = null,
  color = "success",
  margin = null
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      startIcon={icon}
      size="medium"
      color={color}
      sx={{
        width: "fit-content",
        padding: "16px",
        background: background,
        height: height,
        margin: margin,
        "&:hover": {
          color: colorHover,
          background: backgroundHover
        }
      }}
    >
      {title}
    </Button>
  );
};

export default ButtonStyled;
