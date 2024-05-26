const RadioButton = ({ values, onSelect }) => {
  const handleSizeChange = (evt) => {
    onSelect(evt.target.value);
  };
  return (
    <div>
      <h2>Select coffee size</h2>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={values === "sm"}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={values === "md"}
          onChange={handleSizeChange}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={values === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </label>
    </div>
  );
};

export default RadioButton;
