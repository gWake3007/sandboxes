import { Formik, Form, Field } from "formik";

const SearchForm = ({ submit }) => {
  const handleSubmit = (values, actions) => {
    submit(values.qwery);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ qwery: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field name="qwery" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
