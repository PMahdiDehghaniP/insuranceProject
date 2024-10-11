import { Commute } from "@mui/icons-material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { MenuItem, TextField } from "@mui/material";
import { CarNames, InsuranceNames } from "../Data/Bime";
const CarBody = () => {
  return (
    <>
      <InsurancePageContainer
        title="خرید بیمه بدنه خودرو"
        iconText="خرید بیمه بدنه خودرو"
        icon={<Commute fontSize="large" sx={{ color: "#d13c06" }} />}
        logoLink="/images/CarBody.png"
        formText="بیمه  بدنه خودرو"
        formContent={
          <>
            <TextField
              id="outlined-select-currency"
              label="برند خودرو"
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
              {CarNames.map((type, index) => (
                <MenuItem
                  key={index}
                  value={type}
                  style={{ textAlign: "right", direction: "rtl" }}
                >
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="outlined-select-currency" label="مدل خودرو" />
            <TextField
              id="outlined-select-currency"
              label="ارزش روز خودرو (تومان)"
            />
            <TextField
              id="outlined-select-currency"
              label="آیا  اکنون بیمه دارید؟"
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
              <MenuItem
                value={"بله"}
                style={{ textAlign: "right", direction: "rtl" }}
              >
                بله
              </MenuItem>
              <MenuItem
                value={"نه"}
                style={{ textAlign: "right", direction: "rtl" }}
              >
                نه
              </MenuItem>
            </TextField>
            <TextField
              id="outlined-select-currency"
              label="سابقه بیمه بدنه (به سال)"
            />
            <TextField id="outlined-select-currency" label="سال ساخت خودرو" />
            <TextField
              id="outlined-select-currency"
              label="شرکت بیمه"
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
              {InsuranceNames.map((type, index) => (
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
              label="درصد تخفیف خسارت خودرو"
            />
          </>
        }
      />
    </>
  );
};
export default CarBody;
