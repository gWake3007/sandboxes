const RadioButton = ({ value, onSelect }) => {
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
          checked={value === "sm"}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={value === "md"}
          onChange={handleSizeChange}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={value === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </label>
    </div>
  );
};

export default RadioButton;
