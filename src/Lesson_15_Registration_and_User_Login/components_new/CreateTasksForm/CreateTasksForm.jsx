import { Formik, Form, Field } from "formik";
import { useId } from "react";

const CreateTasksForm = ({ submit }) => {
  const taskId = useId();
  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={taskId}>Task Name: </label>
        <Field id={taskId} name="name"></Field>
      </Form>
    </Formik>
  );
};

export default CreateTasksForm;
