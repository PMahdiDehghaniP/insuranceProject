import { Button } from "@mui/material";

const CustomButton = ({ children }) => {
  return (
    <Button
      sx={{
        background: "linear-gradient(to right, #f53851 50%, #00008b 50%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "right center",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        transition: "background-position 0.5s ease-in-out",
        "&:hover": {
          backgroundPosition: "left center",
        },
      }}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
