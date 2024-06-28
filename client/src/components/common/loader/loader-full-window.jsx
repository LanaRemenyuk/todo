import { Box } from "@mui/material";
import Loader from "./loader";
import styled from "@emotion/styled";

const Component = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  opacity: 0.2;
  z-ndex: 99999999;
`;

const LoaderFullWindow = ({ color = "MidnightBlue", size = 75, isLoading }) => {
  return (
    isLoading && (
      <Component sx={{ color: color }}>
        <Loader size={size} color={color} />
      </Component>
    )
  );
};

export default LoaderFullWindow;
