import { MenuItem, TextField } from "@mui/material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { Apartment } from "@mui/icons-material";
const BuildingInsurance = () => {
  const elevatorType = ["اداری-تجاری", "بابری", "مسکونی"];
  return (
    <>
      <InsurancePageContainer
        title="خرید بیمه ساختمان"
        icon={<Apartment fontSize="large" sx={{ color: "green" }} />}
        iconText={"خرید بیمه آسانسور ساختمان"}
        logoLink={"/images/Building.png"}
        formText={"خرید بیمه ساختمان"}
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
              {elevatorType.map((type, index) => (
                <MenuItem
                  key={index}
                  value={type}
                  style={{ textAlign: "right", direction: "rtl" }}
                >
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="outlined-select-currency" label="ظرفیت آسانسور" />
            <TextField id="outlined-select-currency" label="تعداد طبقات توقف" />
            <TextField id="outlined-select-currency" label="عمر آسانسور" />
          </>
        }
      />
    </>
  );
};

export default BuildingInsurance;
