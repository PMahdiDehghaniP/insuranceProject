import { Box, IconButton } from "@mui/material";

const FooterSocialMedia = ({ icon, link }) => {
  return (
    <>
      <IconButton
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "55px",
          mx:1.5,
          height: "55px",
          border: "2px solid #ffffff",
          borderRadius: "4px",
        }}
      >
        <a href={link}>
          <Box
            sx={{
              backgroundColor: "black",
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </Box>
        </a>
      </IconButton>
    </>
  );
};

export default FooterSocialMedia;
