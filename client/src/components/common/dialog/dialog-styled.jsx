import { Box, Dialog, styled } from "@mui/material";

const Container = styled(Box)`
  padding: 20px;
`;

const DialogStyled = ({
  component,
  onClose = () => {},
  open = false,
  fullWidth = true,
  maxWidth = "lg"
}) => {
  return (
    <Dialog
      onClose={onClose}
      fullWidth={fullWidth}
      open={open}
      maxWidth={maxWidth}
      scroll="body"
      fullScreen={window.innerWidth < 700}
    >
      <Container>{component}</Container>
    </Dialog>
  );
};

export default DialogStyled;
