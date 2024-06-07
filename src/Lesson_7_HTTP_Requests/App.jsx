import FormForFomik from "./components/Form/FormForFomik";
import Formik_Library_Mentor_Example from "./components/Formik_Library_Mentor_Example/Formik_Library_Mentor_Example";

function App() {
  const submit = (data) => {
    console.log(data);
  };
  return (
    <>
      <FormForFomik />
      <Formik_Library_Mentor_Example submit={submit} />
    </>
  );
}
export default App;
