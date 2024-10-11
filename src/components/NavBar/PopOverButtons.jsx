import { Button, Popover } from "@mui/material";
import { useContext } from "react";
import { projectContext } from "../../context/contextApi";
import PopOverOptions from "./PopoverOptions";
import { buttonStyle } from "../../assets/btnStyle";
import { useNavigate } from "react-router-dom";
const Popovers = () => {
  const navigate = useNavigate();
  const { anchorEl, handleClose, handleClick } = useContext(projectContext);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <>
      <Button sx={buttonStyle} onClick={() => handleNavigate("/")}>
        خانه
      </Button>

      <Button sx={buttonStyle} onClick={(event) => handleClick(event, "Banks")}>
        صندوق بانک ها
      </Button>
      <Button sx={buttonStyle}>مجله بیمه</Button>
      <Button sx={buttonStyle} onClick={() => handleNavigate("/contactus")}>
        ارتباط با ما
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
