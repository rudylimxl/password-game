const style = {
  success: { backgroundColor: "lightgreen" },
  fail: { backgroundColor: "pink" },
};

const NumTotalCheck = (props) => {
  if (props.numTotalCheck.active) {
    return (
      <div
        className="checks"
        style={props.numTotalCheck.valid ? style.success : style.fail}
      >
        {props.numTotalCheck.valid ? "✔ " : "✘ "}Sum of all numbers in password
        must divisible by 3
      </div>
    );
  }
};
export default NumTotalCheck;
