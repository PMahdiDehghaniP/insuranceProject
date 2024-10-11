import { MenuItem, TextField } from "@mui/material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { AirplanemodeActive } from "@mui/icons-material";
const Travel = () => {
  const destination = [
    "آسیا",
    "آفریقا",
    "آمریکای جنوبی ",
    "آمریکای شمالی",
    "اروپا",
    "خاورمیانه",
    "استرالیا",
  ];
  const TravelTime = ["1ماه", "2ماه", "3ماه", "6ماه", "1 سال"];
  return (
    <>
      <InsurancePageContainer
        title="خرید بیمه مسافرتی"
        icon={<AirplanemodeActive fontSize="large" sx={{ color: "#251eeb" }} />}
        iconText={"خرید بیمه مسافرتی"}
        logoLink="/images/Travel.png"
        formText="فرم بیمه مسافرتی"
        formContent={
          <>
            <TextField
              id="outlined-select-currency"
              label="مقصد سفر"
              select
              fullWidth
              InputLabelProps={{ style: { direction: "rtl" } }}
              SelectProps={{
                style: { textAlign: "right", direction: "rtl" },
              }}
              InputProps={{
                style: { direction: "rtl" },
              }}
            >
              {destination.map((type, index) => (
                <MenuItem
                  key={index}
                  value={type}
                  style={{ textAlign: "right", direction: "rtl" }}
                >
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="outlined-select-currency" label="شماره گذرنامه" />
            <TextField
              id="outlined-select-currency"
              label="مدت سفر"
              select
              fullWidth
              InputLabelProps={{ style: { direction: "rtl" } }}
              SelectProps={{
                style: { textAlign: "right", direction: "rtl" },
              }}
              InputProps={{
                style: { direction: "rtl" },
              }}
            >
              {TravelTime.map((type, index) => (
                <MenuItem
                  key={index}
                  value={type}
                  style={{ textAlign: "right", direction: "rtl" }}
                >
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </>
        }
      />
    </>
  );
};
export default Travel;
