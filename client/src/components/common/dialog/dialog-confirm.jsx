import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

const DialogConfirm = ({ open, onClose, question, onSuccessClick }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Подтвердите своё действие
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{question}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Отмена
          </Button>
          <Button onClick={onSuccessClick}>Подтверждаю</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogConfirm;
