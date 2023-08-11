const style = {
  success: { backgroundColor: "lightgreen" },
  fail: { backgroundColor: "pink" },
};

const LengthCheck = (props) => {
  if (props.lengthCheck.active) {
    return (
      <div
        className="checks"
        style={props.lengthCheck.valid ? style.success : style.fail}
      >
        {props.lengthCheck.valid ? "✔ " : "✘ "}Password must be more than 5
        characters
      </div>
    );
  }
};
export default LengthCheck;
