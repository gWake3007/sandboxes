const Checkbox = ({ value, onSelect }) => {
  const handleChange = (evt) => {
    onSelect(evt.target.checked);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={value}
          onChange={handleChange}
        />
        I accept terms and conditions
        <button type="button" disabled={value ? false : true}>
          Proceed
        </button>
      </label>
    </div>
  );
};

export default Checkbox;
