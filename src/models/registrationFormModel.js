import * as yup from "yup";
export const schema = yup.object().shape({
  lastname: yup.string().required("last name is a required field").trim(),
  firstname: yup.string().required("first name is a required field").trim(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});
export const initialValues = {
  email: "",
  password: "",
  lastname: "",
  firstname: "",
};
