import { Waves } from "@mui/icons-material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { useRef, useState } from "react";
import { ProvincesAndCities } from "../Data/Provinces";
import { MenuItem, TextField } from "@mui/material";

const Earthquake = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };
  return (
    <>
      <InsurancePageContainer
        title="خرید بیمه زلزله"
        iconText="خرید بیمه زلزله"
        icon={<Waves fontSize="large" sx={{ color: "#63068f" }} />}
        formText="فرم بیمه "
        logoLink="/images/Earthquake.png"
        formContent={
          <>
              <TextField
                onChange={handleProvinceChange}
                id="outlined-select-currency"
                label="استان"
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
                {Object.keys(ProvincesAndCities).map((type, index) => (
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
                disabled={selectedProvince === null ? true : false}
                id="outlined-select-currency"
                label="شهر"
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
                {selectedProvince
                  ? ProvincesAndCities[selectedProvince].map((type, index) => (
                      <MenuItem
                        key={index}
                        value={type}
                        style={{ textAlign: "right", direction: "rtl" }}
                      >
                        {type}
                      </MenuItem>
                    ))
                  : null}
              </TextField>
              <TextField
                disabled={selectedProvince === null ? true : false}
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
                <MenuItem style={{ textAlign: "right", direction: "rtl" }}>
                  سازمانی
                </MenuItem>
                <MenuItem style={{ textAlign: "right", direction: "rtl" }}>
                  شخصی
                </MenuItem>
              </TextField>
              <TextField id="outlined-select-currency" label="تعداد ملک" />
              <TextField
                disabled={selectedProvince === null ? true : false}
                id="outlined-select-currency"
                label="نوع سازه"
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
                <MenuItem style={{ textAlign: "right", direction: "rtl" }}>
                  بتنی
                </MenuItem>
                <MenuItem style={{ textAlign: "right", direction: "rtl" }}>
                  پیش ساخته
                </MenuItem>
                <MenuItem style={{ textAlign: "right", direction: "rtl" }}>
                  تیر آهن
                </MenuItem>
              </TextField>
              <TextField id="outlined-select-currency" label="سن بنا" />
              <TextField id="outlined-select-currency" label="متراژ" />
              <TextField id="outlined-select-currency" label="قیمت هر متر" />
              <TextField
                id="outlined-select-currency"
                label="ارزش لوازم خانه"
              />
          </>
        }
      />
    </>
  );
};
export default Earthquake;
