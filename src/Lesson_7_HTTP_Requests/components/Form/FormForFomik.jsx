import css from "./FormForFomik.module.css";
import * as Yup from "yup";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string()
    .min(3, "Too Short!")
    .max(256, "Too Long!")
    .required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor={nameFieldId}>UserName</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div className={css.container}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.container}>
          <label htmlFor={msgFieldId}>Message</label>
          <Field
            className={css.field}
            as="textarea"
            cols="20"
            rows="5"
            name="message"
            id={msgFieldId}
          />
          <ErrorMessage className={css.error} name="message" component="span" />
        </div>
        <div className={css.container}>
          <label htmlFor={levelFieldId}>Service satisfaction level</label>
          <Field
            className={css.field}
            as="select"
            name="level"
            id={levelFieldId}
          >
            <option value="good">Option 1</option>
            <option value="neutral">Option 2</option>
            <option value="bad">Option 3</option>
          </Field>
          <ErrorMessage className={css.error} name="level" component="span" />
        </div>
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
