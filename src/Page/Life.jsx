import { MenuItem, TextField } from "@mui/material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { BeachAccess } from "@mui/icons-material";
const Life = () => {
  const birthdayYear = [
    "1351 تا 1360",
    "1361 تا 1370",
    "1371 تا 1380",
    "1371 تا 1380",
    "1391 تا 1400",
  ];
  const paymentPeriod = ["سالانه", "سه ماهه", "شش ماهه", "یک ماه"];
  return (
    <>
      <InsurancePageContainer
      title="خرید"
        icon={<BeachAccess fontSize="large" sx={{ color: "#ad0071" }} />}
        iconText="خرید بیمه عمر"
        formText="بیمه عمر"
        logoLink="/images/Life.png"
        formContent={
          <>
            <TextField
              id="outlined-select-currency"
              label="سال تولد"
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
              {birthdayYear.map((type, index) => (
                <MenuItem
                  key={index}
                  value={type}
                  style={{ textAlign: "right", direction: "rtl" }}
                >
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              label="مدت قرارداد از یک  تا 30"
            />
            <TextField
              id="outlined-select-currency"
              label="سال تولد"
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
              {paymentPeriod.map((type, index) => (
                <MenuItem
                  key={index}
                  value={type}
                  style={{ textAlign: "right", direction: "rtl" }}
                >
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              label="توان پرداخت در هر دوره  به تومان"
            />
          </>
        }
      />
    </>
  );
};
export default Life;
