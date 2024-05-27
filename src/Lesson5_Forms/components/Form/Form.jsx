const Form = ({ submit }) => {
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
      <input type="text" name="user" />
      <input type="text" name="phone" />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
