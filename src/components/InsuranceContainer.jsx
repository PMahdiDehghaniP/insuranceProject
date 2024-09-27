import InsuranceBox from "./insuranceBox";
import {
  Apartment,
  BeachAccess,
  LocalHospital,
  AirplanemodeActive,
  Whatshot,
  Commute,
  MinorCrash,
  Waves,
} from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const InsuranceContainer = () => {
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  return (
    <AnimatePresence>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {[ 
          {
            Text: "ساختمان",
            Icon: <Apartment sx={{ color: "#59ed3b", fontSize: "45px" }} />,
          },
          {
            Text: "عمر",
            Icon: <BeachAccess sx={{ color: "#ad0071", fontSize: "45px" }} />,
          },
          {
            Text: "سفر",
            Icon: <AirplanemodeActive sx={{ color: "#251eeb", fontSize: "45px" }} />,
          },
          {
            Text: "درمان",
            Icon: <LocalHospital sx={{ color: "#ed1607", fontSize: "45px" }} />,
          },
          {
            Text: "آتش سوزی",
            Icon: <Whatshot sx={{ color: "#c4041a", fontSize: "45px" }} />,
          },
          {
            Text: "بدنه",
            Icon: <Commute sx={{ color: "#d13c06", fontSize: "45px" }} />,
          },
          {
            Text: "زلزله",
            Icon: <Waves sx={{ color: "#63068f", fontSize: "45px" }} />,
          },
          {
            Text: "شخص ثالث",
            Icon: <MinorCrash sx={{ color: "#631b00", fontSize: "45px" }} />,
          },
        ].map((item, index) => (
          <Grid item key={index} xs={6} sm={4} md={3}>
            <motion.div
              variants={boxVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut",delay:1 }}
            >
              <InsuranceBox Text={item.Text} Icon={item.Icon} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </AnimatePresence>
  );
};

export default InsuranceContainer;
