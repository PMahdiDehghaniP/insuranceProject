import { Waves } from "@mui/icons-material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { useState } from "react";
import { ProvincesAndCities } from "../Data/Provinces";
import { MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { EarthquakeSchema } from "../Validation/ValidationSchemas";
const Earthquake = () => {
  const formik = useFormik({
    initialValues: {
      Province: "",
      City: "",
      PropertyType: "",
      PropertyCount: "",
      StructureType: "",
      Age: "",
      Meterage: "",
      Price: "",
      Appliances: "",
    },
    validationSchema: EarthquakeSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const [selectedProvince, setSelectedProvince] = useState("");
  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };
  return (
    <>
      <InsurancePageContainer
        onSubmitFunc={formik.handleSubmit}
        title="خرید بیمه زلزله"
        iconText="خرید بیمه زلزله"
        icon={<Waves fontSize="large" sx={{ color: "#63068f" }} />}
        formText="فرم بیمه "
        logoLink="/images/Earthquake.png"
        formContent={
          <>
            <TextField
              name="Province"
              onBlur={formik.handleBlur}
              value={formik.values.Province}
              error={formik.touched.Province && Boolean(formik.errors.Province)}
              helperText={formik.touched.Province && formik.errors.Province}
              onChange={() => {
                handleProvinceChange();
                formik.handleChange;
              }}
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
              name="City"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.City}
              error={formik.touched.City && Boolean(formik.errors.City)}
              helperText={formik.touched.City && formik.errors.City}
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
              name="PropertyType"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.PropertyType}
              error={
                formik.touched.PropertyType &&
                Boolean(formik.errors.PropertyType)
              }
              helperText={
                formik.touched.PropertyType && formik.errors.PropertyType
              }
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
            <TextField
              id="outlined-select-currency"
              label="تعداد ملک"
              name="PropertyCount"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.PropertyCount}
              error={
                formik.touched.PropertyCount &&
                Boolean(formik.errors.PropertyCount)
              }
              helperText={
                formik.touched.PropertyCount && formik.errors.PropertyCount
              }
            />
            <TextField
              disabled={selectedProvince === null ? true : false}
              id="outlined-select-currency"
              label="نوع سازه"
              name="StructureType"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.StructureType}
              error={
                formik.touched.StructureType &&
                Boolean(formik.errors.StructureType)
              }
              helperText={
                formik.touched.StructureType && formik.errors.StructureType
              }
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
            <TextField
              id="outlined-select-currency"
              label="سن بنا"
              name="Age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Age}
              error={formik.touched.Age && Boolean(formik.errors.Age)}
              helperText={formik.touched.Age && formik.errors.Age}
            />
            <TextField
              id="outlined-select-currency"
              label="متراژ"
              name="Meterage"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Meterage}
              error={formik.touched.Meterage && Boolean(formik.errors.Meterage)}
              helperText={formik.touched.Meterage && formik.errors.Meterage}
            />
            <TextField
              id="outlined-select-currency"
              label="قیمت هر متر"
              name="Price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Price}
              error={formik.touched.Price && Boolean(formik.errors.Price)}
              helperText={formik.touched.Price && formik.errors.Price}
            />
            <TextField
              id="outlined-select-currency"
              label="ارزش لوازم خانه"
              name="Appliances"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Appliances}
              error={
                formik.touched.Appliances && Boolean(formik.errors.Appliances)
              }
              helperText={formik.touched.Appliances && formik.errors.Appliances}
            />
          </>
        }
      />
    </>
  );
};
export default Earthquake;
