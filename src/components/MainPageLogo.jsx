import { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const Logo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <Box component="section">
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1,delay:0.5 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <Box
          component="img"
          src={"../../public/images/bimePhoto.png"}
          alt=""
          onLoad={() => setIsLoaded(true)}
          display="flex"
          justifyContent="center"
          width="100%"
          height="500px"
        />
      </motion.div>
    </Box>
  );
};
export default Logo;
