import { MinorCrash } from "@mui/icons-material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { ThirdPartySchema } from "../Validation/ValidationSchemas";
const ThirdParty = () => {
  const formik = useFormik({
    initialValues: {
      CarPlate: "",
      NationalCode: "",
      Year: "",
    },
    validationSchema: ThirdPartySchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <InsurancePageContainer
        onSubmitFunc={formik.handleSubmit}
        iconText="خرید بیمه شخص ثالث"
        icon={<MinorCrash fontSize="large" sx={{ color: "#631b00" }} />}
        logoLink="/images/ThirdParty.png"
        formText="خرید بیمه شخص ثالث"
        formContent={
          <>
            <TextField
              id="outlined-select-currency"
              label="پلاک خودرو"
              name="CarPlate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.CarPlate}
              error={formik.touched.CarPlate && Boolean(formik.errors.CarPlate)}
              helperText={formik.touched.CarPlate && formik.errors.CarPlate}
            />
            <TextField
              id="outlined-select-currency"
              label="کد ملی"
              name="NationalCode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.NationalCode}
              error={
                formik.touched.NationalCode &&
                Boolean(formik.errors.NationalCode)
              }
              helperText={
                formik.touched.NationalCode && formik.errors.NationalCode
              }
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
          </>
        }
      />
    </>
  );
};
export default ThirdParty;
