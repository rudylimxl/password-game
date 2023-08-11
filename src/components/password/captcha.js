const style = {
  success: { backgroundColor: "lightgreen" },
  fail: { backgroundColor: "pink" },
};

const CaptchaCheck = (props) => {
  if (props.captchaCheck.active) {
    return (
      <div
        className="checks"
        style={props.captchaCheck.valid ? style.success : style.fail}
      >
        {props.captchaCheck.valid ? "✔ " : "✘ "}Password must include this
        captcha:
        <img src={`${props.randomCaptcha.path}`}></img>
      </div>
    );
  }
};
export default CaptchaCheck;
