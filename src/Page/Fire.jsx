import { MenuItem, TextField } from "@mui/material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { Whatshot } from "@mui/icons-material";

const Fire = () => {
  const housingType = [
    "ساختمان یا مجتمع",
    "یک ساختمان ویلایی",
    "یک واحد آپارتمانی",
  ];
  const buildingStructure = ["بتنی", "پیش ساخته", "تیرآهن"];
  return (
    <>
      <InsurancePageContainer
        title="خرید بیمه آتش سوزی"
        logoLink="/images/Fire.png"
        icon={<Whatshot fontSize="large" sx={{ color: "#d15c02" }} />}
        iconText="خرید بیمه آتش سوزی"
        formText="بیمه آتش سوزی"
        formContent={
          <>
            <TextField
              id="outlined-select-currency"
              label="نوع ملک"
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
              {housingType.map((type, index) => (
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
              label="نوع سازه ساختمان"
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
              {buildingStructure.map((type, index) => (
                <MenuItem
                  key={index}
                  value={type}
                  style={{ textAlign: "right", direction: "rtl" }}
                >
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="outlined-select-currency" label="متراژ ملک" />
            <TextField id="outlined-select-currency" label="ارزش لوازم خانه" />
            <TextField id="outlined-select-currency" label="قیمت هر متر مربع" />
          </>
        }
      />
    </>
  );
};
export default Fire;
