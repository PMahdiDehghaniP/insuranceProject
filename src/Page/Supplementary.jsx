import { MenuItem, TextField } from "@mui/material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { LocalHospital } from "@mui/icons-material";
const Supplementary = () => {
  const personType = ["خانوادگی", "انفرادی"];
  const insuraceType = ["تامین اجتماعی", "نیروهای مسلح", "خدمات درمانی"];
  return (
    <>
      <InsurancePageContainer
        title="خرید بیمه تکمیلی"
        logoLink="/images/Supplementary.png"
        icon={<LocalHospital fontSize="large" sx={{ color: "#8a1404" }} />}
        iconText="خرید بیمه تکمیلی درمان"
        formText="بیمه درمان تکمیلی"
        formContent={
          <>
            <TextField
              id="outlined-select-currency"
              label="نحوه ثبت نام"
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
              {personType.map((type, index) => (
                <MenuItem
                  key={index}
                  value={type}
                  style={{ textAlign: "right", direction: "rtl" }}
                >
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="outlined-select-currency" label="تعداد افراد" />
            <TextField id="outlined-select-currency" label="سن" />
            <TextField
              id="outlined-select-currency"
              label="بیمه پایه"
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
              {insuraceType.map((type, index) => (
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
export default Supplementary;
