import { useState, useContext } from "react";
import { projectContext } from "../../context/contextApi";
import { List, ListItemButton, Collapse, ListItemText } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { drawerBtnsStyle } from "../../assets/btnStyle";

const DrawerOptions = () => {
  const { handleClick, handleClose } = useContext(projectContext);

  const [openBanks, setOpenBanks] = useState(false);
  const [openSaham, setOpenSaham] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);

  const toggleBanks = () => setOpenBanks(!openBanks);
  const toggleSaham = () => setOpenSaham(!openSaham);
  const toggleServices = () => setOpenServices(!openServices);
  const toggleAboutUs = () => setOpenAboutUs(!openAboutUs);

  return (
    <List>
      <ListItemButton onClick={handleClose}>
        <ListItemText sx={drawerBtnsStyle} primary="همکاری با ما" />
      </ListItemButton>

      <ListItemButton onClick={handleClose}>
        <ListItemText sx={drawerBtnsStyle} primary="ارتباط با ما" />
      </ListItemButton>

      <ListItemButton onClick={toggleBanks}>
        <ListItemText sx={drawerBtnsStyle} primary="صندوق بانک ها" />
        {openBanks ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openBanks} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ direction: "rtl" }}>
          <ListItemButton
            sx={{ pr: 4 }}
            onClick={(event) => handleClick(event, "Banks")}
          >
            <ListItemText sx={drawerBtnsStyle} primary="بانک ملت" />
          </ListItemButton>
          <ListItemButton
            sx={{ pr: 4 }}
            onClick={(event) => handleClick(event, "Banks")}
          >
            <ListItemText sx={drawerBtnsStyle} primary="بانک رفاه" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={toggleSaham}>
        <ListItemText sx={drawerBtnsStyle} primary="امور سهام" />
        {openSaham ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSaham} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ direction: "rtl" }}>
          <ListItemButton
            sx={{ pr: 4 }}
            onClick={(event) => handleClick(event, "Saham")}
          >
            <ListItemText sx={drawerBtnsStyle} primary="پرتال سهامداران" />
          </ListItemButton>
          <ListItemButton
            sx={{ pr: 4 }}
            onClick={(event) => handleClick(event, "Saham")}
          >
            <ListItemText sx={drawerBtnsStyle} primary="نقشه بازار بورس" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={toggleServices}>
        <ListItemText sx={drawerBtnsStyle} primary="خدمات ما" />
        {openServices ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openServices} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ direction: "rtl" }}>
          <ListItemButton
            sx={{ pr: 4 }}
            onClick={(event) => handleClick(event, "Services")}
          >
            <ListItemText sx={drawerBtnsStyle} primary="خدمات مشاور مالی" />
          </ListItemButton>
          <ListItemButton
            sx={{ pr: 4 }}
            onClick={(event) => handleClick(event, "Services")}
          >
            <ListItemText sx={drawerBtnsStyle} primary="مدیریت دارایی ها" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={toggleAboutUs}>
        <ListItemText sx={drawerBtnsStyle} primary="درباره ما" />
        {openAboutUs ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAboutUs} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ direction: "rtl" }}>
          <ListItemButton
            sx={{ pr: 4 }}
            onClick={(event) => handleClick(event, "AboutUs")}
          >
            <ListItemText sx={drawerBtnsStyle} primary="معرفی شرکت" />
          </ListItemButton>
          <ListItemButton
            sx={{ pr: 4 }}
            onClick={(event) => handleClick(event, "AboutUs")}
          >
            <ListItemText sx={drawerBtnsStyle} primary="سوالات متداول" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default DrawerOptions;
