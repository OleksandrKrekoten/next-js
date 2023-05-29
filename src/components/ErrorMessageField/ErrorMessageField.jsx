import { ErrorMessage } from "formik";
import { ErrorMessageStyled } from "./ErrorMessageField.js";
const ErrorMessageField = ({ name }) => {
    return<ErrorMessageStyled>
      <ErrorMessage name={name} component="div" />
    </ErrorMessageStyled>;
    
};
export default ErrorMessageField;
