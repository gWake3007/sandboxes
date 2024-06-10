import css from "./Error.module.css";

const Error = () => {
  return (
    <p>
      <b className={css.error}>
        Whoops, something went wrong! Please try reloading this page!
      </b>
    </p>
  );
};

export default Error;
