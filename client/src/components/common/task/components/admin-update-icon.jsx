import { Box, Tooltip, styled } from "@mui/material";
// icons
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const Component = styled(Box)`
  display: flex;
  justify-content: end;
`;

const AdminUpdateIcon = ({ isUpdated }) => {
  return (
    <Tooltip
      title="Задача отредактирована Администратором"
      placement="top-start"
      arrow
    >
      <Component>
        {isUpdated && (
          <ModeEditOutlineOutlinedIcon sx={{ color: "RoyalBlue" }} />
        )}
      </Component>
    </Tooltip>
  );
};

export default AdminUpdateIcon;
