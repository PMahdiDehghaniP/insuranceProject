import { MenuItem, TextField } from "@mui/material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { Whatshot } from "@mui/icons-material";
import { useFormik } from "formik";
import { FireSchema } from "../Validation/ValidationSchemas";
const Fire = () => {
  const formik = useFormik({
    initialValues: {
      PropertyType: "",
      StructureType: "",
      Meterage: "",
      Appliances: "",
      Price: "",
    },
    validationSchema: FireSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const housingType = [
    "ساختمان یا مجتمع",
    "یک ساختمان ویلایی",
    "یک واحد آپارتمانی",
  ];
  const buildingStructure = ["بتنی", "پیش ساخته", "تیرآهن"];
  return (
    <>
      <InsurancePageContainer
        onSubmitFunc={formik.handleSubmit}
        title="خرید بیمه آتش سوزی"
        logoLink="/images/Fire.png"
        icon={<Whatshot fontSize="large" sx={{ color: "#d15c02" }} />}
        iconText="خرید بیمه آتش سوزی"
        formText="بیمه آتش سوزی"
        formContent={
          <>
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
              name="StructureType"
              id="outlined-select-currency"
              label="نوع سازه ساختمان"
              select
              fullWidth
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
            <TextField
              name="Meterage"
              id="outlined-select-currency"
              label="متراژ ملک"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Meterage}
              error={formik.touched.Meterage && Boolean(formik.errors.Meterage)}
              helperText={formik.touched.Meterage && formik.errors.Meterage}
            />
            <TextField
              id="outlined-select-currency"
              label="ارزش لوازم خانه"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Appliances}
              error={
                formik.touched.Appliances && Boolean(formik.errors.Appliances)
              }
              helperText={formik.touched.Appliances && formik.errors.Appliances}
            />
            <TextField
              name="Price"
              id="outlined-select-currency"
              label="قیمت هر متر مربع"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Price}
              error={formik.touched.Price && Boolean(formik.errors.Price)}
              helperText={formik.touched.Price && formik.errors.Price}
            />
          </>
        }
      />
    </>
  );
};
export default Fire;
