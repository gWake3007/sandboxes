import css from "./Formik_Library_Mentor_Example.module.css";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";

const initialValues = {
  name: "n",
  phone: "v",
  address: "s",
  role: "w",
  checkbox: true,
  textarea: "",
  select: 2,
};

const Formik_Library_Mentor_Example = ({ submit }) => {
  return (
    //?Перший підхід використання Formik!
    // <Formik
    //   initialValues={initialValues}
    //   onSubmit={(values, actions) => {
    //     console.log(actions);
    //     submit(values);
    //     actions.resetForm();
    //   }}
    // >
    //   <Form className={css.form}>
    //     <h2 className={css.title}>Formik Form</h2>
    //     <Field className={css.field} type="text" name="name" />
    //     <br />
    //     <Field className={css.field} type="text" name="phone" />
    //     <br />
    //     <Field className={css.field} type="text" name="address" />
    //     <br />
    //     <Field className={css.field} type="text" name="role" />
    //     <br />
    //     <Field className={css.field} type="checkbox" name="checkbox" />
    //     <br />
    //     <Field className={css.field} as="textarea" name="textarea" />
    //     <br />
    //     <Field className={css.field} as="select" name="select">
    //       <option value="1">Option 1</option>
    //       <option value="2">Option 2</option>
    //       <option value="3">Option 3</option>
    //     </Field>
    //     <br />
    //     <button className={css.btn} type="submit">
    //       Submit
    //     </button>
    //   </Form>
    // </Formik>
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(actions);
        submit(values);
        actions.resetForm();
      }}
    ></Formik>
  );
};

export default Formik_Library_Mentor_Example;
