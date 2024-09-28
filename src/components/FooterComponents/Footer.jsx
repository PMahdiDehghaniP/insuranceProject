import {
  Telegram,
  Instagram,
  WhatsApp,
  Twitter,
  Facebook,
} from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import FooterSocialMedia from "./FooterSocialMedia";

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#0D2464" }}>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-around"
          sx={{ mt: 4, padding: 5 }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            width="28%"
          >
            <Typography variant="h5">دسترسی بیشتر</Typography>
            <Typography variant="h6" color="#D8B761" sx={{ cursor: "pointer" }}>
              درباره ما
            </Typography>
            <Typography variant="h6" color="#D8B761" sx={{ cursor: "pointer" }}>
              مجله بیمه
            </Typography>
            <Typography variant="h6" color="#D8B761" sx={{ cursor: "pointer" }}>
              شرایط و قوانین
            </Typography>
          </Box>
          <Box
            width="25%"
            height="150px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography variant="h5">بیشتر</Typography>
            <Typography variant="h6" color="#D8B761" sx={{ cursor: "pointer" }}>
              فرصت های شغلی
            </Typography>
            <Typography variant="h6" color="#D8B761" sx={{ cursor: "pointer" }}>
              سوالات متداول
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            width="35%"
            alignItems="center"
          >
            <Box
              component="img"
              src="/images/FooterLogo.png"
              height="250px"
              width="100%"
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" sx={{ paddingBottom: 3 }}>
          <FooterSocialMedia
            icon=<Telegram sx={{ fontSize: "26px", color: "white" }} />
          />
          <FooterSocialMedia
            icon=<Instagram sx={{ fontSize: "26px", color: "white" }} />
          />
          <FooterSocialMedia
            icon=<Facebook sx={{ fontSize: "26px", color: "white" }} />
          />
          <FooterSocialMedia
            icon=<WhatsApp sx={{ fontSize: "26px", color: "white" }} />
          />
          <FooterSocialMedia
            icon=<Twitter sx={{ fontSize: "26px", color: "white" }} />
          />
        </Box>
        <Typography variant="body1" sx={{ paddingBottom: 2 }}>
          کلیه حقوق مادی و معنوی، طراحی سایت و سئو متعلق به طراح وب سایت می
          باشد.
        </Typography>
      </Box>
    </>
  );
};
export default Footer;
