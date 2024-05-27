import { useId } from "react";

const Form = ({ submit }) => {
  const uniqUserId = useId();
  const uniqPhoneId = useId();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.user.value);
    console.log(e.target.elements.phone.value);
    submit({
      user: e.target.elements.user.value,
      phone: e.target.elements.phone.value,
    });
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={uniqUserId}>User name</label>
        <br />
        <input id={uniqUserId} type="text" name="user" />
      </div>
      <div>
        <label htmlFor={uniqPhoneId}>Phone number</label>
        <br />
        <input id={uniqPhoneId} type="text" name="phone" />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
