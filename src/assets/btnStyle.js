export const buttonStyle = {
  transition: "0.5s all ease-in-out",
  textDecoration: "none",
  color: "#ffffff",
  background: "none",
  fontSize: "18px",
  position: "relative",
  "&:hover": {
    color: "#f53851",
    transform: "scale(1.05)",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -2,
      left: "50%",
      transform: "translateX(-50%)",
      width: 5,
      height: 5,
      borderRadius: "50%",
      backgroundColor: "red",
      transition: "0.5s all ease-in-out",
      opacity: 1,
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -2,
    left: "50%",
    transform: "translateX(-50%)",
    width: 6,
    height: 6,
    borderRadius: "50%",
    backgroundColor: "red",
    transition: "0.5s all ease-in-out",
    opacity: 0,
  },
};
export const drawerBtnsStyle = {
  transition: "0.5s all ease-in-out",
  background: "none",
  fontSize: "18px",
  position: "relative",
  "&:hover": {
    color: "#f53851",
    transform: "scale(1.02)",
  },
};
