import { useContext } from "react";
import { projectContext } from "../../context/contextApi";
import { List, ListItem } from "@mui/material";
import CustomTypography from "../CustomTypography";
const PopOverOptions = () => {
  const { currentButton, handleClose } = useContext(projectContext);
  console.log(currentButton);

  switch (currentButton) {
    case "AboutUs":
      return (
        <List>
          <ListItem button onClick={handleClose}>
            <CustomTypography>معرفی شرکت</CustomTypography>
          </ListItem>
          <ListItem button onClick={handleClose}>
            <CustomTypography>سوالات متداول</CustomTypography>
          </ListItem>
        </List>
      );
    case "Services":
      return (
        <List>
          <ListItem button onClick={handleClose}>
            <CustomTypography>خدمات مشاور مالی</CustomTypography>
          </ListItem>
          <ListItem button onClick={handleClose}>
            <CustomTypography>مدیریت دارایی ها</CustomTypography>
          </ListItem>
          <ListItem button onClick={handleClose}>
            <CustomTypography>مشاهده قیمت ارز های مختلف</CustomTypography>
          </ListItem>
          <ListItem button onClick={handleClose}>
            <CustomTypography>تحلیل بازار های مالی</CustomTypography>
          </ListItem>
          <ListItem button onClick={handleClose}>
            <CustomTypography>سزمایه گذاری و بازار گردانی</CustomTypography>
          </ListItem>
        </List>
      );
    case "Saham":
      return (
        <List>
          <ListItem button onClick={handleClose}>
            <CustomTypography>پرتال سهامداران</CustomTypography>
          </ListItem>
          <ListItem button onClick={handleClose}>
            <CustomTypography>نقشه بازار بورس</CustomTypography>
          </ListItem>
        </List>
      );
    case "Banks":
      return (
        <List>
          <ListItem
            button
            onClick={() => {
              handleClose();
              window.open("https://bankmellat.ir/default.aspx", "_blank");
            }}
          >
            <CustomTypography>بانک ملت</CustomTypography>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              handleClose();
              window.open("https://www.refah-bank.ir/", "_blank");
            }}
          >
            <CustomTypography>بانک رفاه</CustomTypography>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              handleClose();
              window.open("https://qmb.ir/", "_blank");
            }}
          >
            <CustomTypography>بانک قرض الحسنه مهر ایران</CustomTypography>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              handleClose();
              window.open("https://www.tejaratbank.ir/", "_blank");
            }}
          >
            <CustomTypography>بانک تجارت</CustomTypography>
          </ListItem>
        </List>
      );
  }
};

export default PopOverOptions;
