import * as yup from "yup";
export const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});
export const initialValues = { password: "", email: "" };
