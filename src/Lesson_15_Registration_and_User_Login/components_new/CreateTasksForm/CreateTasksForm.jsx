import { Formik, Form, Field } from "formik";
import { useId } from "react";

const CreateTasksForm = ({ submit }) => {
  const taskId = useId();
  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={taskId}>Task Name: </label>
        <Field id={taskId} name="text"></Field>
      </Form>
    </Formik>
  );
};

export default CreateTasksForm;
