import Slider from "react-slick";
import { BimeData } from "../Data/Bime";
import BimeCard from "./BimeCard";
import { options } from "../constants/SliderOption";
import { Box, Typography } from "@mui/material";

const BimeCardSlider = () => {
  return (
    <Box sx={{ paddingX: 5, paddingY: 3, overflow: "hidden" }}>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        sx={{ mt: 4, mb: 1 }}
      >
        <Typography sx={{ my: 2 }} variant="h4">
          شرکت های بیمه تحت پوشش ما
        </Typography>{" "}
      </Box>
      <Slider {...options}>
        {BimeData.map((bime, index) => (
          <BimeCard key={index} photo={bime.photo} link={bime.link} />
        ))}
      </Slider>
    </Box>
  );
};
export default BimeCardSlider;
