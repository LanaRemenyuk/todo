import { Box, styled } from "@mui/material";

export const Form = styled(`form`)({
  display: "flex",
  width: "100%",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: "10px",
  gap: "6px"
});

export const FieldsContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 4px;
`;
