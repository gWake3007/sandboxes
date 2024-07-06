import { Formik, Field, Form } from "formik";
import { useId } from "react";

const RegisterForm = ({ submit }) => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={nameId}>Enter Name: </label>
        <Field name="name" type="text" id={nameId} />
        <hr />
        <label htmlFor={emailId}>Enter email: </label>
        <Field name="email" type="email" id={emailId} />
        <hr />
        <label htmlFor={passwordId}>Enter password: </label>
        <Field name="password" type="password" id={passwordId} />
        <hr />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
