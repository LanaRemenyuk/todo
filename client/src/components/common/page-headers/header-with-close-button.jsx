import { Box, Typography, styled } from "@mui/material";
import CloseButtonIconButton from "../buttons/close.button-icon";

const Component = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled(Typography)`
  padding: 0 4px;
`;

const HeaderWithCloseButton = ({
  title = "",
  onClose,
  background = "OrangeRed",
  color = "white"
}) => {
  return (
    <Component>
      <Typography
        variant="h4"
        sx={{ background: background, color: color, padding: "0 4px" }}
      >
        {title}
      </Typography>
      <CloseButtonIconButton onClose={onClose} />
    </Component>
  );
};

export default HeaderWithCloseButton;
