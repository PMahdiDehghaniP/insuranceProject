import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import DrawerContainer from "../Drawer/DrawerContainer";
import Navbar from "../NavBar/Navbar";
import Footer from "../FooterComponents/Footer";
import { Helmet } from "react-helmet-async";

const InsurancePageContainer = ({
  icon,
  iconText,
  formText,
  formContent,
  logoLink,
  title,
}) => {
  return (
    <>
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <DrawerContainer />
        <Navbar />
        <Box display="flex" flexDirection="column" width="100%" mt={15}>
          <Box display="flex" alignItems="center" sx={{ ml: { xs: 2, md: 7 } }}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={{ xs: "80px", md: "120px" }}
              height={{ xs: "80px", md: "120px" }}
              border="1px solid black"
              borderRadius={3}
            >
              {icon}
            </Box>
            <Typography
              variant="h4"
              sx={{
                ml: { xs: 2, md: 4 },
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              {iconText}
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            mt={4}
          >
            <Card
              sx={{
                width: { xs: "95%", md: "60%" },
                boxShadow:
                  "0 10px 20px rgba(0, 0, 0, 0.2), 0 15px 30px rgba(0, 0, 0, 0.15)",
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  width="100%"
                  p={3}
                >
                  <Typography
                    variant="h5"
                    mb={2}
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                  >
                    {formText}
                  </Typography>
                  <Box
                    component="form"
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "100%" },
                    }}
                    autoComplete="off"
                  >
                    <form>
                      {formContent}
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          mt: 2,
                          width: "100%",
                          backgroundColor: "#f7ed28",
                          boxShadow:
                            "0 4px 10px rgba(0, 0, 0, 0.3), 0 6px 12px rgba(0, 0, 0, 0.2)",
                          "&:hover": {
                            backgroundColor: "#e6d71c",
                            boxShadow:
                              "0 6px 15px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.3)",
                          },
                        }}
                      >
                        <Typography variant="h6">ثبت</Typography>
                      </Button>
                    </form>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Box
              component="img"
              width={{ xs: "45%", md: "30%" }}
              height="400px"
              src={logoLink}
              sx={{ ml: { xs: 2, md: 4 } }}
            />
          </Box>
        </Box>
        <Footer />
      </>
    </>
  );
};
export default InsurancePageContainer;
