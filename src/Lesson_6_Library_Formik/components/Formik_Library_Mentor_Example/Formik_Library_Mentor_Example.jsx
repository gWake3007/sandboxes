import css from "./Formik_Library_Mentor_Example.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Min 2").required("Required"),
  phone: Yup.string().min(8, "Min 8").required("Required"),
  address: Yup.string().min(10, "Min 10").required("Required"),
  role: Yup.string().min(5, "Min 5").required("Required"),
  checkbox: Yup.boolean()
    .required("You are must change checkbox!")
    .oneOf([true], "Change checkbox!"),
  textarea: Yup.string().min(5, "Min 5").max(50, "Max 50").required("Required"),
  select: Yup.string().oneOf(
    ["easy", "middle", "hard"],
    "Must change our Number!"
  ),
});

const initialValues = {
  name: "n",
  phone: "v",
  address: "s",
  role: "w",
  checkbox: false,
  textarea: "",
  select: "null",
};

const Formik_Library_Mentor_Example = ({ submit }) => {
  return (
    //?Перший підхід використання Formik!
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(actions);
        submit(values);
        actions.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Formik Form(Controlled Form Example 1)</h2>
        <Field className={css.field} type="text" name="name" />
        <ErrorMessage className={css.error} component="span" name="name" />
        <br />
        <Field className={css.field} type="text" name="phone" />
        <ErrorMessage className={css.error} component="span" name="phone" />
        <br />
        <Field className={css.field} type="text" name="address" />
        <ErrorMessage className={css.error} component="span" name="address" />
        <br />
        <Field className={css.field} type="text" name="role" />
        <ErrorMessage className={css.error} component="span" name="role" />
        <br />
        <Field className={css.field} type="checkbox" name="checkbox" />
        <ErrorMessage className={css.error} component="span" name="checkbox" />
        <br />
        <Field className={css.field} as="textarea" name="textarea" />
        <ErrorMessage className={css.error} component="span" name="textarea" />
        <br />
        <Field className={css.field} as="select" name="select">
          <option value="null">None</option>
          <option value="easy">Option 1</option>
          <option value="middle">Option 2</option>
          <option value="hard">Option 3</option>
        </Field>
        <ErrorMessage className={css.error} component="span" name="select" />
        <br />
        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
    //?Цей шлях потрібен для того якщо ми не тільки самі пишем всі інпути а і для того якщо в нас якісь специфічні компоненти або якісь кастомні підтянуті з інших бібліотек для використання в Formik.
    // <Formik
    //   initialValues={initialValues}
    //   onSubmit={(values, actions) => {
    //     console.log(actions);
    //     submit(values);
    //     actions.resetForm();
    //   }}
    // >
    //   {(formik) => {
    //     console.log(formik);
    //     return (
    //       <form className={css.form} onSubmit={formik.submit}>
    //         <h2>Controlled Form Example 2</h2>
    //         <input
    //           value={formik.values.name}
    //           type="text"
    //           name="name"
    //           onChange={formik.handleChange}
    //         />
    //         <br />
    //         <input
    //           value={formik.values.phone}
    //           type="text"
    //           name="phone"
    //           onChange={formik.handleChange}
    //         />
    //         <br />
    //         <input
    //           value={formik.values.address}
    //           type="text"
    //           name="address"
    //           onChange={formik.handleChange}
    //         />
    //         <br />
    //         <input
    //           value={formik.values.role}
    //           type="text"
    //           name="role"
    //           onChange={formik.handleChange}
    //         />
    //         <br />
    //         <input
    //           value={formik.values.checkbox}
    //           type="checkbox"
    //           name="checkbox"
    //           onChange={formik.handleChange}
    //         />
    //         <br />
    //         <input
    //           value={formik.values.textarea}
    //           type="textarea"
    //           name="textarea"
    //           onChange={formik.handleChange}
    //         />
    //         <br />
    //         <input
    //           value={formik.values.select}
    //           type="select"
    //           name="select"
    //           onChange={formik.handleChange}
    //         />
    //         <br />
    //         <button type="submit">Submit</button>
    //       </form>
    //     );
    //   }}
    // </Formik>
  );
};

export default Formik_Library_Mentor_Example;
