import css from "./FormForFomik.module.css";
import { Formik, Form, Field } from "formik";

const initrialValues = {
  username: "",
  email: "",
};

const FormForFomik = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initrialValues={initrialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <Field className={css.field} type="text" name="username"></Field>
        <Field className={css.field} type="email" name="email"></Field>
        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormForFomik;

//?В цій бібліотеці Form це форма. А Field це input.
//?В функції handleSubmit - властивості values - це об'єкт властивостей форми. А actions - має в собі вбудовані методи наприклад resetForm(). ВАЖЛИВО!!! Під капотом там є preventDefault() щоб не перезавантаєувалась сторінка при сабміті.
