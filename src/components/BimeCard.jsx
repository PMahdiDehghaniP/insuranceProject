import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const BimeCard = ({ link, photo }) => {
  return (
    <Card sx={{ mx: 2, backgroundColor: "#171717", borderRadius: 4 }}>
      <CardMedia
        component="img"
        image={photo}
        sx={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />
      <CardContent>
        <a href={link} style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              cursor: "pointer",
              color: "text.primary",
            }}
          >
            بیشتر بدانید
          </Typography>
        </a>
      </CardContent>
    </Card>
  );
};

export default BimeCard;
