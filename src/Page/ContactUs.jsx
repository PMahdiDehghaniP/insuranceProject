import { Box, Typography } from "@mui/material";
import PageLayout from "./PagesLayout";
import { Helmet } from "react-helmet-async";
const ContactUs = () => {
  return (
    <>
      <PageLayout>
        <Helmet>
          <title>درباره ما</title>
        </Helmet>
        <Box width="100%">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            mt={20}
          >
            <Typography variant="h3" color="text.primary">
              تماس با ما
            </Typography>
            <Box
              width="75%"
              sx={{
                position: "relative",
                textAlign: "center",
                mt: 5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="/images/ContactUsbg.jpg"
                  alt="Tehran Traffic"
                  sx={{
                    width: "100%",
                    height: "auto",
                    filter: "brightness(0.7)",
                    borderRadius: 3,
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#000",
                  textAlign: "left",
                  px: { xs: 2, sm: 4, md: 6 },
                }}
              >
                <Typography
                  variant="h6"
                  color="text.primary"
                  mb={2}
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "1.25rem", md: "1.5rem" },
                  }}
                >
                  تهران - نارمک، خیابان ملک لو، دانشگاه علم و صنعت ایران
                </Typography>
                <Typography
                  variant="h6"
                  color="text.primary"
                  mb={2}
                  sx={{
                    fontSize: { xs: "0.85rem", sm: "1.25rem", md: "1.5rem" },
                  }}
                >
                  تلفن پشتیبانی: ۰۲۱۴۵۶۸۱۰۰۰
                </Typography>
                <Typography
                  variant="h6"
                  color="text.primary"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "1.25rem", md: "1.5rem" },
                  }}
                >
                  ایمیل: info@bimebama.com
                </Typography>
              </Box>
            </Box>
            <Box
              mt={1}
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d841.4004780889371!2d51.51038280026778!3d35.73944465778215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2K_YsdioIDUg2K_Yp9mG2LTar9in2YcgINi52YTZhSDZiNi12YbYudiqINmF2YTaqSDZhNmI!5e0!3m2!1sen!2s!4v1728471046869!5m2!1sen!2s"
              width="75%"
              height="450px"
              sx={{ borderRadius: 2 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Box>
      </PageLayout>
    </>
  );
};
export default ContactUs;
