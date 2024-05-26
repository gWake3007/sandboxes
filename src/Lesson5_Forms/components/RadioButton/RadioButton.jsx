const RadioButton = () => {
  return (
    <div>
      <h2>Select coffee size</h2>
      <label>
        <input type="radio" name="coffeeSize" value="sm" />
      </label>
      <label>
        <input type="radio" name="coffeeSize" value="md" />
      </label>
      <label>
        <input type="radio" name="coffeeSize" value="lg" />
      </label>
    </div>
  );
};

export default RadioButton;
