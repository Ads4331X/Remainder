import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";

export function AddBtn() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 50,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <Button
        sx={{
          backgroundColor: "orange",
          borderRadius: "50%",
          padding: "15px",
        }}
      >
        <AddIcon
          sx={{
            fontSize: "50px",
            cursor: "pointer",
            color: "white",
          }}
        />
      </Button>
    </Box>
  );
}
