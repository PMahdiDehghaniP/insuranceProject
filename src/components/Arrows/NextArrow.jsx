import ArrowForward from "@mui/icons-material/ArrowForward";
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowForward
      style={{
        position: "absolute",
        display: "block",
        color: "black",
        fontSize: "30px",
        top: "160px",
        cursor: "pointer",
        right: "-25px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};
export default NextArrow;
