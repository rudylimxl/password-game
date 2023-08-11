const style = {
  success: { backgroundColor: "lightgreen" },
  fail: { backgroundColor: "pink" },
};

const CapitalCityCheck = (props) => {
  if (props.capitalCityCheck.active) {
    return (
      <div
        className="checks"
        style={props.capitalCityCheck.valid ? style.success : style.fail}
      >
        {props.capitalCityCheck.valid ? "✔ " : "✘ "}Password must contain at
        least one capital city
      </div>
    );
  }
};
export default CapitalCityCheck;
