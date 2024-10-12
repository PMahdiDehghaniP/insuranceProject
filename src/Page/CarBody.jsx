import { Commute } from "@mui/icons-material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { MenuItem, TextField } from "@mui/material";
import { CarNames, InsuranceNames } from "../Data/Bime";
import { useFormik } from "formik";
import { CarBodySchema } from "../Validation/ValidationSchemas";
const CarBody = () => {
  const formik = useFormik({
    initialValues: {
      CarBrand: "",
      CarModel: "",
      CarPrice: "",
      IsInsurance: "",
      InsuranceHistory: "",
      Year: "",
      Company: "",
      Discount: "",
    },
    validationSchema: CarBodySchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <InsurancePageContainer
        onSubmitFunc={formik.handleSubmit}
        title="خرید بیمه بدنه خودرو"
        iconText="خرید بیمه بدنه خودرو"
        icon={<Commute fontSize="large" sx={{ color: "#d13c06" }} />}
        logoLink="/images/CarBody.png"
        formText="بیمه  بدنه خودرو"
        formContent={
          <>
            <TextField
              name="CarBrand"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.CarBrand}
              error={formik.touched.CarBrand && Boolean(formik.errors.CarBrand)}
              helperText={formik.touched.CarBrand && formik.errors.CarBrand}
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
            <TextField
              id="outlined-select-currency"
              label="مدل خودرو"
              name="CarModel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.CarModel}
              error={formik.touched.CarModel && Boolean(formik.errors.CarModel)}
              helperText={formik.touched.CarModel && formik.errors.CarModel}
            />
            <TextField
              id="outlined-select-currency"
              label="ارزش روز خودرو (تومان)"
              name="CarPrice"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.CarPrice}
              error={formik.touched.CarPrice && Boolean(formik.errors.CarPrice)}
              helperText={formik.touched.CarPrice && formik.errors.CarPrice}
            />
            <TextField
              name="IsInsurance"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.IsInsurance}
              error={
                formik.touched.IsInsurance && Boolean(formik.errors.IsInsurance)
              }
              helperText={
                formik.touched.IsInsurance && formik.errors.IsInsurance
              }
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
              name="InsuranceHistory"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.InsuranceHistory}
              error={
                formik.touched.InsuranceHistory &&
                Boolean(formik.errors.InsuranceHistory)
              }
              helperText={
                formik.touched.InsuranceHistory &&
                formik.errors.InsuranceHistory
              }
              id="outlined-select-currency"
              label="سابقه بیمه بدنه (به سال)"
            />
            <TextField
              id="outlined-select-currency"
              label="سال ساخت خودرو"
              name="Year"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Year}
              error={formik.touched.Year && Boolean(formik.errors.Year)}
              helperText={formik.touched.Year && formik.errors.Year}
            />
            <TextField
              name="Company"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Company}
              error={formik.touched.Company && Boolean(formik.errors.Company)}
              helperText={formik.touched.Company && formik.errors.Company}
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
              name="Discount"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Discount}
              error={formik.touched.Discount && Boolean(formik.errors.Discount)}
              helperText={formik.touched.Discount && formik.errors.Discount}
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
