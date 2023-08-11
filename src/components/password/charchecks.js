const style = {
  success: { backgroundColor: "lightgreen" },
  fail: { backgroundColor: "pink" },
};

const CharCheck = (props) => {
  if (props.charCheck.active) {
    return (
      <div
        className="checks"
        style={props.charCheck.valid ? style.success : style.fail}
      >
        {props.charCheck.valid ? "✔ " : "✘ "}Password must contain at least one
        special character
      </div>
    );
  }
};
export default CharCheck;
