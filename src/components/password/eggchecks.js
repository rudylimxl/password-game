const style = {
  success: { backgroundColor: "lightgreen" },
  fail: { backgroundColor: "pink" },
};

const EggCheck = (props) => {
  if (props.eggCheck.active) {
    return (
      <div
        className="checks"
        style={props.eggCheck.valid ? style.success : style.fail}
      >
        {props.eggCheck.valid ? "✔ " : "✘ "} 🥚 ← This is Paul. Please keep Paul
        safe in your password.
      </div>
    );
  }
};
export default EggCheck;
