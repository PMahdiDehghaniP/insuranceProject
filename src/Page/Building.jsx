import { MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { BuildingSchema } from "../Validation/ValidationSchemas";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { Apartment } from "@mui/icons-material";
const BuildingInsurance = () => {
  const formik = useFormik({
    initialValues: {
      PropertyType: "",
      ElevatorCapacity: "",
      Floors: "",
      ElevatorLife: "",
    },
    validationSchema: BuildingSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const elevatorType = ["اداری-تجاری", "بابری", "مسکونی"];

  return (
    <InsurancePageContainer
      onSubmitFunc={formik.handleSubmit}
      title="خرید بیمه ساختمان"
      icon={<Apartment fontSize="large" sx={{ color: "green" }} />}
      iconText={"خرید بیمه آسانسور ساختمان"}
      logoLink={"/images/Building.png"}
      formText={"خرید بیمه ساختمان"}
      formContent={
        <>
          <TextField
            name="PropertyType"
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.PropertyType}
            error={
              formik.touched.PropertyType && Boolean(formik.errors.PropertyType)
            }
            helperText={
              formik.touched.PropertyType && formik.errors.PropertyType
            }
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

          <TextField
            id="outlined-select-currency"
            label="ظرفیت آسانسور"
            name="ElevatorCapacity"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ElevatorCapacity}
            error={
              formik.touched.ElevatorCapacity &&
              Boolean(formik.errors.ElevatorCapacity)
            }
            helperText={
              formik.touched.ElevatorCapacity && formik.errors.ElevatorCapacity
            }
          />

          <TextField
            id="outlined-select-currency"
            label="تعداد طبقات توقف"
            name="Floors"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Floors}
            error={formik.touched.Floors && Boolean(formik.errors.Floors)}
            helperText={formik.touched.Floors && formik.errors.Floors}
          />

          <TextField
            id="outlined-select-currency"
            label="عمر آسانسور"
            name="ElevatorLife"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ElevatorLife}
            error={
              formik.touched.ElevatorLife && Boolean(formik.errors.ElevatorLife)
            }
            helperText={
              formik.touched.ElevatorLife && formik.errors.ElevatorLife
            }
          />
        </>
      }
    />
  );
};
export default BuildingInsurance;
