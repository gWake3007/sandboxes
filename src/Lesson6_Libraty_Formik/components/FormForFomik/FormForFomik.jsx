import { Formik, Form, Field } from "formik";

const FormForFomik = () => {
  return (
    <Formik initrialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field type="text" name="userName"></Field>
        <Field type="email" name="email"></Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormForFomik;

//?В цій бібліотеці Form це форма. А Field це input.
