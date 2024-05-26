const ControlForm = ({ value, onSelect }) => {
  const handleChange = (evt) => {
    onSelect({
      ...value,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(value);
    onSelect({
      login: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        value={value.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={value.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default ControlForm;
