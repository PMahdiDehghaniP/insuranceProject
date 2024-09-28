import ArrowBack from "@mui/icons-material/ArrowBack";
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBack
      style={{
        position: "absolute",
        display: "block",
        color: "black",
        fontSize: "30px",
        top: "160px",
        cursor: "pointer",
        left: "-25px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};
export default PrevArrow;
