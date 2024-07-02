import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterText } from "../../reduxStore/filterSlice";
import { selectFilter } from "../../reduxStore/todo/todoSlice";

const FilterText = () => {
  const dispatch = useDispatch();
  const id = useId();
  const value = useSelector(selectFilter);
  return (
    <div>
      <label htmlFor={id}>Filter by Title</label>
      <br />
      <input
        type="text"
        id={id}
        value={value}
        onChange={({ target: { value } }) => dispatch(changeFilterText(value))}
      />
      <hr />
    </div>
  );
};

export default FilterText;

//?onChange={({ target: { value } }) => dispatch(changeFilterText(value))} - В такий спосіб робимо контрольований інпут через Redux.
