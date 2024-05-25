const Button = (props) => {
  const { condition, operation } = props;
  return condition === "inc" ? (
    <button onClick={operation} className="border-2 rounded-full w-10 h-10">
      +
    </button>
  ) : (
    <button onClick={operation} className="border-2 rounded-full w-10 h-10">
      -
    </button>
  );
};
export default Button;