import { Drawer } from "@mui/material";
import { useContext } from "react";
import { projectContext } from "../../context/contextApi";
import DrawerOptions from "./DrawerOptions";

const DrawerContainer = () => {
  const { drawerOpen, handleClose } = useContext(projectContext);
  return (
    <>
      <Drawer
        anchor="left"
        open={drawerOpen}
        variant="temporary"
        onClose={handleClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
          borderRadius: 4,
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
          zIndex: 1300,
        }}
      >
        <DrawerOptions />
      </Drawer>
    </>
  );
};
export default DrawerContainer;
