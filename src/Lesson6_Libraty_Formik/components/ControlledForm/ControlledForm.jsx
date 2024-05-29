import { useState } from "react";
import InputContoler from "../InputContoler/InputContoler";

const ControlledForm = () => {
  const [state, setState] = useState({
    name: "a",
    phone: "b",
    address: "c",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //?В контрольованій формі змінюємо один інпут!!!
  const handleChangeName = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputContoler
        value={state.name}
        name="name"
        onChange={handleChangeName}
      />
      <br />
      <InputContoler
        value={state.phone}
        name="phone"
        onChange={handleChangeName}
      />
      <br />
      <InputContoler
        value={state.address}
        name="address"
        onChange={handleChangeName}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
