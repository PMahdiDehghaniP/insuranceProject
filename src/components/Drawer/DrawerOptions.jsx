import { useState, useContext } from "react";
import { projectContext } from "../../context/contextApi";
import { List, ListItemButton, Collapse, ListItemText } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { drawerBtnsStyle } from "../../assets/btnStyle";
import { useNavigate } from "react-router-dom";
const DrawerOptions = () => {
  const navigate = useNavigate();
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
      <ListItemButton
        onClick={() => {
          handleClose();
          navigate("/");
        }}
      >
        <ListItemText sx={drawerBtnsStyle} primary="خانه" />
      </ListItemButton>
      <ListItemButton onClick={handleClose}>
        <ListItemText sx={drawerBtnsStyle} primary="همکاری با ما" />
      </ListItemButton>

      <ListItemButton onClick={handleClose}>
        <ListItemText
          sx={drawerBtnsStyle}
          primary="ارتباط با ما"
          onClick={() => {
            handleClose();
            navigate("/contactus");
          }}
        />
      </ListItemButton>

      <ListItemButton onClick={toggleBanks}>
        <ListItemText sx={drawerBtnsStyle} primary="صندوق بانک ها" />
        {openBanks ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openBanks} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ direction: "rtl" }}>
          <ListItemButton sx={{ pr: 4 }}>
            <ListItemText
              sx={drawerBtnsStyle}
              primary="بانک ملت"
              onClick={() => {
                handleClose();
                window.open("https://bankmellat.ir/default.aspx", "_blank");
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pr: 4 }}>
            <ListItemText
              sx={drawerBtnsStyle}
              primary="بانک رفاه"
              onClick={() => {
                handleClose();
                window.open("https://www.refah-bank.ir/", "_blank");
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pr: 4 }}>
            <ListItemText
              sx={drawerBtnsStyle}
              onClick={() => {
                handleClose();
                window.open("https://qmb.ir/", "_blank");
              }}
              primary="بانک قرض الحسنه  مهر ایران"
            />
          </ListItemButton>
          <ListItemButton sx={{ pr: 4 }}>
            <ListItemText
              sx={drawerBtnsStyle}
              primary="بانک تجارت"
              onClick={() => {
                handleClose();
                window.open("https://www.tejaratbank.ir/", "_blank");
              }}
            />
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
