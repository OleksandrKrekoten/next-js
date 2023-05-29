import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup.string().required().trim(),
  email: yup.string().email().required(),
  phone: yup.string().min(9).max(11).required(),
  message: yup.string().required().trim(),
});
export const initialValues = { name: "", email: "", phone: "", message: "" };

