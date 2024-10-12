import { MenuItem, TextField } from "@mui/material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { LocalHospital } from "@mui/icons-material";
import { useFormik } from "formik";
import { SupplementarySchema } from "../Validation/ValidationSchemas";
const Supplementary = () => {
  const formik = useFormik({
    initialValues: {
      Register: "",
      PeopleNumber: "",
      Age: "",
      Insurance: "",
    },
    validationSchema: SupplementarySchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const personType = ["خانوادگی", "انفرادی"];
  const insuraceType = ["تامین اجتماعی", "نیروهای مسلح", "خدمات درمانی"];
  return (
    <>
      <InsurancePageContainer
        onSubmitFunc={formik.handleSubmit}
        title="خرید بیمه تکمیلی"
        logoLink="/images/Supplementary.png"
        icon={<LocalHospital fontSize="large" sx={{ color: "#8a1404" }} />}
        iconText="خرید بیمه تکمیلی درمان"
        formText="بیمه درمان تکمیلی"
        formContent={
          <>
            <TextField
              name="Register"
              id="outlined-select-currency"
              label="نحوه ثبت نام"
              select
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Register}
              error={formik.touched.Register && Boolean(formik.errors.Register)}
              helperText={formik.touched.Register && formik.errors.Register}
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
            <TextField
              id="outlined-select-currency"
              label="تعداد افراد"
              name="PeopleNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.PeopleNumber}
              error={
                formik.touched.PeopleNumber &&
                Boolean(formik.errors.PeopleNumber)
              }
              helperText={
                formik.touched.PeopleNumber && formik.errors.PeopleNumber
              }
            />
            <TextField
              id="outlined-select-currency"
              label="سن"
              name="Age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Age}
              error={formik.touched.Age && Boolean(formik.errors.Age)}
              helperText={formik.touched.Age && formik.errors.Age}
            />
            <TextField
              name="Insurance"
              id="outlined-select-currency"
              label="بیمه پایه"
              select
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Insurance}
              error={
                formik.touched.Insurance && Boolean(formik.errors.Insurance)
              }
              helperText={formik.touched.Insurance && formik.errors.Insurance}
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
