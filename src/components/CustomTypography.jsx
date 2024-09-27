import { Typography } from "@mui/material";

const CustomTypography = ({ link, children }) => {
  return (
    <>
      <Typography
        component="a"
        href={link}
        sx={{
          transition: "0.5s all ease-in-out",
          cursor: "pointer",
          textDecoration: "none",
          color: "whitesmoke",
          "&:hover": {
            color: "#f53851",
          },
        }}
      >
        {children}
      </Typography>
    </>
  );
};
export default CustomTypography;
