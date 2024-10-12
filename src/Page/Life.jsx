import { MenuItem, TextField } from "@mui/material";
import InsurancePageContainer from "../components/Insurance/InsurancePageContainer";
import { BeachAccess } from "@mui/icons-material";
import { useFormik } from "formik";
import { LifeSchema } from "../Validation/ValidationSchemas";

const Life = () => {
  const formik = useFormik({
    initialValues: {
      BirthDayYear: "",
      ContractPeriod: "",
      PaymentPeriod: "",
      PaymentMoney: "",
    },
    validationSchema: LifeSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const birthdayYear = [
    "1351 تا 1360",
    "1361 تا 1370",
    "1371 تا 1380",
    "1381 تا 1390",
    "1391 تا 1400",
  ];

  const paymentPeriod = ["سالانه", "سه ماهه", "شش ماهه", "یک ماه"];

  return (
    <InsurancePageContainer
      onSubmitFunc={formik.handleSubmit}
      title="خرید"
      icon={<BeachAccess fontSize="large" sx={{ color: "#ad0071" }} />}
      iconText="خرید بیمه عمر"
      formText="بیمه عمر"
      logoLink="/images/Life.png"
      formContent={
        <>
          <TextField
            name="BirthDayYear"
            label="سال تولد"
            select
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.BirthDayYear}
            error={
              formik.touched.BirthDayYear && Boolean(formik.errors.BirthDayYear)
            }
            helperText={
              formik.touched.BirthDayYear && formik.errors.BirthDayYear
            }
            InputLabelProps={{ style: { direction: "rtl" } }}
            SelectProps={{
              style: { textAlign: "right", direction: "rtl" },
            }}
            InputProps={{
              style: { direction: "rtl" },
            }}
          >
            {birthdayYear.map((year, index) => (
              <MenuItem
                key={index}
                value={year}
                style={{ textAlign: "right", direction: "rtl" }}
              >
                {year}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            name="ContractPeriod"
            label="مدت قرارداد از یک تا 30"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ContractPeriod}
            error={
              formik.touched.ContractPeriod &&
              Boolean(formik.errors.ContractPeriod)
            }
            helperText={
              formik.touched.ContractPeriod && formik.errors.ContractPeriod
            }
            InputLabelProps={{ style: { direction: "rtl" } }}
            InputProps={{
              style: { direction: "rtl" },
            }}
          />

          <TextField
            name="PaymentPeriod"
            label="دوره پرداخت حق بیمه"
            select
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.PaymentPeriod}
            error={
              formik.touched.PaymentPeriod &&
              Boolean(formik.errors.PaymentPeriod)
            }
            helperText={
              formik.touched.PaymentPeriod && formik.errors.PaymentPeriod
            }
            InputLabelProps={{ style: { direction: "rtl" } }}
            SelectProps={{
              style: { textAlign: "right", direction: "rtl" },
            }}
            InputProps={{
              style: { direction: "rtl" },
            }}
          >
            {paymentPeriod.map((period, index) => (
              <MenuItem
                key={index}
                value={period}
                style={{ textAlign: "right", direction: "rtl" }}
              >
                {period}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            name="PaymentMoney"
            label="توان پرداخت در هر دوره به تومان"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.PaymentMoney}
            error={
              formik.touched.PaymentMoney && Boolean(formik.errors.PaymentMoney)
            }
            helperText={
              formik.touched.PaymentMoney && formik.errors.PaymentMoney
            }
            InputLabelProps={{ style: { direction: "rtl" } }}
            InputProps={{
              style: { direction: "rtl" },
            }}
          />
        </>
      }
    />
  );
};

export default Life;
