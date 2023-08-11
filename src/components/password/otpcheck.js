import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useRef } from "react";

const style = {
  success: { backgroundColor: "lightgreen" },
  fail: { backgroundColor: "pink" },
};

const OtpCheck = (props) => {
  const phoneNumberRef = useRef(null);

  if (props.otpCheck.active) {
    return (
      <div
        className="checks"
        style={props.otpCheck.valid ? style.success : style.fail}
      >
        {props.otpCheck.valid ? "✔ " : "✘ "}Enter your phone number to receive
        SMS OTP. Password must contain this OTP. Please use +CountryCode format
        (e.g. +6581818181)
        <div className="otpForm">
          <div className="otpContainer">
            <TextField
              label="Phone Number"
              inputRef={phoneNumberRef}
              autoComplete="off"
              onChange={() => console.log(phoneNumberRef.current.value)}
            ></TextField>
            <Button
              variant="contained"
              type="submit"
              size="small"
              endIcon={<SendIcon />}
              onClick={(e) => props.setSendSms(phoneNumberRef.current.value)}
            >
              Send OTP
            </Button>
          </div>
        </div>
      </div>
    );
  }
};
export default OtpCheck;
