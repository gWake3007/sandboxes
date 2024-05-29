import { useId } from "react";

const MyComponent = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Text field label</label>
      <input type="text" id={id} />
    </div>
  );
};

export default MyComponent;
