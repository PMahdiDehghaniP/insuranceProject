import { PrevArrow, NextArrow } from "../components";
export const options = {
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  pauseOnHover: true,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 910,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
