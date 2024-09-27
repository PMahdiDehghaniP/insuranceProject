import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid2";
const InsuranceBox = ({ Icon, Text }) => {
  return (
    <Grid item xs={4} sm={6} md={6} lg={12}>
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 45,
          transition: { duration: 0.5 },
        }}
        style={{ display: "inline-block" }}
      >
        <Box
          component="button"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bgcolor="#5c5c5c"
          width="130px"
          height="150px"
          mx={2}
          borderRadius={3}
          sx={{
            transition: "transform 0.5s ease",
            transformOrigin: "center",
            cursor: "pointer",
            border: "none",
            outline: "none",
          }}
        >
          {Icon}
          <Typography variant="h5">{Text}</Typography>
        </Box>
      </motion.div>
    </Grid>
  );
};

export default InsuranceBox;
