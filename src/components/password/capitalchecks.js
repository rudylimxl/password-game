const style = {
  success: { backgroundColor: "lightgreen" },
  fail: { backgroundColor: "pink" },
};

const CapitalCheck = (props) => {
  if (props.capitalCheck.active) {
    return (
      <div
        className="checks"
        style={props.capitalCheck.valid ? style.success : style.fail}
      >
        {props.capitalCheck.valid ? "✔ " : "✘ "}Password must contain at least
        one capital letter
      </div>
    );
  }
};
export default CapitalCheck;
