import { Formik, Field, Form } from "formik";
import { useId } from "react";

const LoginForm = ({ submit }) => {
  const passwordId = useId();
  const emailId = useId();
  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ password: "", email: "" }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={emailId}>Enter email: </label>
        <Field name="email" type="email" id={emailId} />
        <hr />
        <label htmlFor={passwordId}>Enter password: </label>
        <Field name="password" type="password" id={passwordId} />
        <hr />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
