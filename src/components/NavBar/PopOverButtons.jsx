import { Button, Popover } from "@mui/material";
import { useContext } from "react";
import { projectContext } from "../../context/contextApi";
import PopOverOptions from "./PopoverOptions";
import { buttonStyle } from "../../assets/btnStyle";
const Popovers = () => {
  const { anchorEl, handleClose, handleClick } = useContext(projectContext);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Button sx={buttonStyle}>همکاری با ما</Button>
      <Button sx={buttonStyle}>ارتباط با ما</Button>
      <Button sx={buttonStyle} onClick={(event) => handleClick(event, "Banks")}>
        صندوق بانک ها
      </Button>
      <Button sx={buttonStyle} onClick={(event) => handleClick(event, "Saham")}>
        امور سهام
      </Button>
      <Button
        sx={buttonStyle}
        onClick={(event) => handleClick(event, "Services")}
      >
        خدمات ما
      </Button>
      <Button
        sx={buttonStyle}
        onClick={(event) => handleClick(event, "AboutUs")}
      >
        درباره ما
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <PopOverOptions />
      </Popover>
    </>
  );
};
export default Popovers;
