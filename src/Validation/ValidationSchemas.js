import * as Yup from "yup";
export const BuildingSchema = Yup.object().shape({
  PropertyType: Yup.string().required("لطفا نوع ملک را انتخاب کنید"),
  ElevatorCapacity: Yup.string()
    .matches(/^[1-9]\d*$/, "ظرفیت باید یک عدد صحیح و مثبت باشد")
    .test("ظرفیت باید بزرگتر از یک باشد", (value) => Number(value) > 1)
    .required("ظرفیت الزامی است"),
  Floors: Yup.string()
    .matches(/^[1-35]\d*$/, "تعداد طبقات باید یک عدد صحیح و مثبت باشد")
    .test("طبقات باید بزرگتر از یک باشد", (value) => Number(value) > 1)
    .required("وارد کردن تعداد طبقات الزامی است "),
  ElevatorLife: Yup.string()
    .matches(/^[1-35]\d*$/, "عمر آسانسور باید عددی صحیح و مثبت باشد")
    .test("عمر اسانسور  باید  بیشتر از  یک باشد", (value) => Number(value) > 1)
    .required("وارد کردن عمر آسانسور  الزامی  است "),
});
export const LifeSchema = Yup.object().shape({
  BirthDayYear: Yup.string().required("وارد کردن سال تولد الزامی است"),
  ContractPeriod: Yup.string().required("وارد کردن مدت قرارداد الزامی است"),
  PaymentPeriod: Yup.string().required(
    "وارد کردن دوره پرداخت حق بیمه الزامی است"
  ),
  PaymentMoney: Yup.number()
    .required("وارد کردن توان پرداخت در هر دوره الزامی است")
    .test(
      "توان پرداخت باید بیشتر از سی صد هزار تومان باشد",
      "توان پرداخت باید بیشتر از 300000 تومان باشد",
      (value) => value > 300000
    ),
});
export const TravelSchema = Yup.object().shape({
  Destination: Yup.string().required("وارد کردن  مقصد  الزامی است "),
  PassportNumber: Yup.string()
    .required("وارد کردن شماره  گذرنامه الزامی  است ")
    .matches(
      /^\d{9}$/,
      "شماره گذرنامه باید 9 رقم باشد و تنها از اعداد تشکیل شده باشد."
    ),
  TravelTime: Yup.string().required("وارد کردن  مدت  زمان  سفر الزامی  است "),
});
export const SupplementarySchema = Yup.object().shape({
  Register: Yup.string().required("وارد  کردن  نحوه ثبت نام  الزامی  است "),
  PeopleNumber: Yup.string()
    .required("وارد کردن تعداد افراد الزامی است")
    .matches(/^[1-9]\d*$/, "تعداد افراد باید یک عدد صحیح و مثبت باشد"),
  Age: Yup.string()
    .required("وارد کردن سن الزامی است")
    .matches(/^(1[9-9]|[2-9]\d)$/, "سن باید بیشتر از 18 باشد"),
  Insurance: Yup.string().required("وارد کردن  بیمه  الزامی  است "),
});
export const FireSchema = Yup.object().shape({
  PropertyType: Yup.string().required("وارد کردن  نوع  ملک  الزامی  است "),
  StructureType: Yup.string().required("وارد  کردن  نوع  ساختمان  الزامی است "),
  Meterage: Yup.string()
    .required("وارد کردن  متراژ  الزامی  است ")
    .matches(/^[1-9]\d*$/, "تعداد افراد باید یک عدد صحیح و مثبت باشد"),
  Appliances: Yup.string()
    .required("وارد کردن  ارزش  لوازم خانه  الزامی  است ")
    .matches(/^[1-9]\d*$/, "ارزش  لوازم باید عددی صحیح و مثبت باشد "),
  Price: Yup.string()
    .required("وارد کردن  قیمت هر متر خانه  الزامی است")
    .matches(/^[1-9]\d*$/, "قیمت  باید عددی  مثبت و صحیح باشد "),
});
export const CarBodySchema = Yup.object().shape({
  CarBrand: Yup.string().required("انتخاب برند  خودرو  الزامی  است "),
  CarModel: Yup.string().required("وارد کردن  مدل  خودرو الزامی  است "),
  CarPrice: Yup.string()
    .required("وارد کردن  قیمت خودرو  الزامی  است ")
    .test(
      "مبلغ  حداقل  باید  صد میلیون تومان  باشد ",
      (value) => Number(value) > 100000000
    ),
  IsInsurance: Yup.string().required("وارد کردن  این  فیلد  اجباری  است "),
  InsuranceHistory: Yup.string()
    .required("وارد کردن  سابقه بیمه  اجباری  است ")
    .matches(/^[0-9]\d*$/, "قیمت  باید عددی  مثبت و صحیح باشد "),
  Year: Yup.string()
    .required("وارد کردن سال  ساخت خودرو  الزامی  است")
    .test(
      "سال ساخت باید  بین  1380 تا 1403 باشد",
      (value) => 1380 <= Number(value) <= 1403
    ),
  Company: Yup.string().required("وارد کردن  شرکت بیمه  اجباری  است "),
  Discount: Yup.string()
    .required("وارد  کردن  مقدار تخفیف الزامی است ")
    .test(
      "درصد تخفیف باید  بین  صفر تا صد باشد",
      (value) => 0 <= Number(value) <= 100
    ),
});
export const ThirdPartySchema = Yup.object().shape({
  CarPlate: Yup.string()
    .matches(/^\d{2}[آ-ی]\d{3}\d{2}$/, "فرمت پلاک نامعتبر است")
    .required("وارد کردن پلاک خودرو اجباری است"),
  NationalCode: Yup.string()
    .matches(/^\d{10}$/, "فرمت کد ملی نامعتبر است")
    .test("کد ملی نامعتبر است", (value) => {
      if (!value) return false;

      const code = value.toString();
      if (code.length !== 10) return false;
      const check = parseInt(code[9], 10);
      const sum = code
        .split("")
        .slice(0, 9)
        .reduce(
          (acc, digit, index) => acc + parseInt(digit, 10) * (10 - index),
          0
        );

      const remainder = sum % 11;

      return (
        (remainder < 2 && check === remainder) ||
        (remainder >= 2 && check === 11 - remainder)
      );
    })
    .required("وارد کردن کد ملی اجباری است"),
  Year: Yup.string()
    .required("وارد کردن سال  ساخت خودرو  الزامی  است")
    .test(
      "سال ساخت باید  بین  1380 تا 1403 باشد",
      (value) => 1380 <= Number(value) <= 1403
    ),
});
export const EarthquakeSchema = Yup.object().shape({
  Provice: Yup.string().required("وارد کردن  استان  الزامی  است"),
  City: Yup.string().required("وارد  کردن شهر الزامی  است "),
  PropertyType: Yup.string().required("وارد کردن نوع ملک الزامی است"),
  PropertyCount: Yup.string()
    .required("وارد کردن  تعدا  ملک ها الزامی  است ")
    .test("عددی  صحیح و مثبت وارد کنید ", (value) => Number(value) >= 1),
  StructureType: Yup.string().required("وارد  کردن  نوع  سازه  الزامی است "),
  Age: Yup.string()
    .required("وارد کردن سن بنا  اجباری  است  ")
    .test("عددی  صحیح و مثبت وارد کنید ", (value) => Number(value) >= 1),
  Meterage: Yup.string()
    .required("وارد کردن  متراژ  الزامی  است ")
    .matches(/^[1-9]\d*$/, "تعداد افراد باید یک عدد صحیح و مثبت باشد"),
  Price: Yup.string()
    .required("وارد کردن  قیمت خودرو  الزامی  است ")
    .test(
      "مبلغ  حداقل  باید  یک میلیون تومان  باشد ",
      (value) => Number(value) > 1000000
    ),
  Appliances: Yup.string()
    .required("وارد کردن  ارزش  لوازم خانه  الزامی  است ")
    .matches(/^[1-9]\d*$/, "ارزش  لوازم باید عددی صحیح و مثبت باشد "),
});
