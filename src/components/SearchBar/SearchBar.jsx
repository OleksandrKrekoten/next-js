import { Formik } from "formik";
import { FormContainer, Input, SubmitBtn } from "./SearchBar.styled.js";
import { FiSearch } from "react-icons/fi";
const SearchBar = () => {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <FormContainer>
        <Input
          name="query"
          type="text"
          placeholder="Search entire store here... "
        />
        <SubmitBtn type="submit">
          <FiSearch />
        </SubmitBtn>
      </FormContainer>
    </Formik>
  );
};
export default SearchBar;
