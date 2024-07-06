import { Formik, Field } from "formik";
import { useId } from "react";

const RegisterForm = ({ submit }) => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    submit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor={nameId}>Enter Name: </label>
      <Field name="name" type="text" id={nameId} />
      <label htmlFor={emailId}>Enter email: </label>
      <Field name="email" type="email" id={emailId} />
      <label htmlFor={passwordId}>Enter password: </label>
      <Field name="password" type="password" id={passwordId} />
    </Formik>
  );
};

export default RegisterForm;
