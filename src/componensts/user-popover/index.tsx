import { Avatar, Box, Button, Popover, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { MouseEvent } from "react";

interface Props {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: (event: MouseEvent<HTMLElement>) => void;
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
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      sx={{ mt: 1, zIndex: 1400 }}
      PaperProps={{
        sx: {
          position: "relative",
          border: "1px solid #CFD0D3",
          overflow: "visible",
          maxWidth: "230px",
          borderRadius:'4px',
          boxShadow:'none'
        },
      }}
    >
      {/* Strelka */}
      <Box
        sx={{
          position: "absolute",
          top: -8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderBottom: "8px solid white",
          zIndex: 1101,
        }}
      />

      <Box sx={{ p: 2, minWidth: 200 }}>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <Avatar sx={{ bgcolor: '#EDB447', fontSize:'12px', fontWeight:500 }}>UM</Avatar>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "14px", color: "#0D1523" }}>
              Usmon Mas’udjonov
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#6E737B" }}>
              Administrator (Chilonzor)
            </Typography>
          </Box>
        </Box>

        {/* Buttonni markazga chiqarish */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            sx={{
              border: "1px solid #3D444F",
              fontWeight: 500,
              fontSize: "14px",
              color: "#3D444F",
              textTransform:'none'
            }}
          >
            Profilni ko’rish
          </Button>
        </Box>
      </Box>
    </Popover>
  );
};

export default UserPopover;
