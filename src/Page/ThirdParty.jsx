import { MinorCrash } from "@mui/icons-material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { TextField } from "@mui/material";

const ThirdParty = () => {
  return (
    <>
      <InsurancePageContainer
        iconText="خرید بیمه شخص ثالث"
        icon={<MinorCrash fontSize="large" sx={{ color: "#631b00" }} />}
        logoLink="/images/ThirdParty.png"
        formText="خرید بیمه شخص ثالث"
        formContent={
          <>
            <TextField id="outlined-select-currency" label="پلاک خودرو" />
            <TextField id="outlined-select-currency" label="کد ملی" />
            <TextField id="outlined-select-currency" label="سال ساخت خودرو" />
          </>
        }
      />
    </>
  );
};
export default ThirdParty;
