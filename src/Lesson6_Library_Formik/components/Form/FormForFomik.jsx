import css from "./FormForFomik.module.css";
import { useId } from "react";
import { Formik, Form, Field } from "formik";

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
};

const FormForFomik = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>UserName</label>
        <Field
          className={css.field}
          type="text"
          name="username"
          id={nameFieldId}
        />
        <label htmlFor={emailFieldId}>Email</label>
        <Field
          className={css.field}
          type="email"
          name="email"
          id={emailFieldId}
        />
        <label htmlFor={msgFieldId}>Message</label>
        <Field
          className={css.field}
          as="textarea"
          cols="20"
          rows="5"
          name="message"
          id={msgFieldId}
        />
        <Field className={css.field} as="select" name="level" id={levelFieldId}>
          <option value="o1">Option 1</option>
          <option value="o2">Option 2</option>
          <option value="o3">Option 3</option>
        </Field>
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
