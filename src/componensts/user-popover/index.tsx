import { Popover, Typography } from "@mui/material";

interface Props {
  id: "simple-popover" | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}
const UserPopover = ({ id, open, anchorEl, handleClose }: Props) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose} 
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    </Popover>
  );
};

export default UserPopover;
