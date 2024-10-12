import { MenuItem, TextField } from "@mui/material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { AirplanemodeActive } from "@mui/icons-material";
import { useFormik } from "formik";
import { TravelSchema } from "../Validation/ValidationSchemas";
const Travel = () => {
  const formik = useFormik({
    initialValues: {
      Destination: "",
      PassportNumber: "",
      TravelTime: "",
    },
    validationSchema: TravelSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
        onSubmitFunc={formik.handleSubmit}
        title="خرید بیمه مسافرتی"
        icon={<AirplanemodeActive fontSize="large" sx={{ color: "#251eeb" }} />}
        iconText={"خرید بیمه مسافرتی"}
        logoLink="/images/Travel.png"
        formText="فرم بیمه مسافرتی"
        formContent={
          <>
            <TextField
              name="Destination"
              id="outlined-select-currency"
              label="مقصد سفر"
              select
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Destination}
              error={
                formik.touched.Destination && Boolean(formik.errors.Destination)
              }
              helperText={
                formik.touched.Destination && formik.errors.Destination
              }
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
            <TextField
              id="outlined-select-currency"
              label="شماره گذرنامه"
              name="PassportNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.PassportNumber}
              error={
                formik.touched.PassportNumber &&
                Boolean(formik.errors.PassportNumber)
              }
              helperText={
                formik.touched.PassportNumber && formik.errors.PassportNumber
              }
            />
            <TextField
              name="TravelTime"
              id="outlined-select-currency"
              label="مدت سفر"
              select
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.TravelTime}
              error={
                formik.touched.TravelTime && Boolean(formik.errors.TravelTime)
              }
              helperText={formik.touched.TravelTime && formik.errors.TravelTime}
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
