import { Formik } from "formik";
import { FormContainer, Input, SubmitBtn } from "./SearchBar.js";
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
          <div>
            <Input
              name="query"
              type="text"
              placeholder="Search entire store here... "
            />
            <SubmitBtn type="submit">
              <FiSearch />
            </SubmitBtn>
          </div>
        </FormContainer>
      </Formik>
    );
};
export default SearchBar;
