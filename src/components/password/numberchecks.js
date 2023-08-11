const style = {
  success: { backgroundColor: "lightgreen" },
  fail: { backgroundColor: "pink" },
};

const NumberCheck = (props) => {
  if (props.numberCheck.active) {
    return (
      <div
        className="checks"
        style={props.numberCheck.valid ? style.success : style.fail}
      >
        {props.numberCheck.valid ? "✔ " : "✘ "}Password must contain at least
        one number
      </div>
    );
  }
};
export default NumberCheck;
