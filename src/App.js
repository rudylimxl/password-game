import logo from "./logo.svg";
import "./App.css";
import Password from "./components/password/password";
import Password2 from "./components/password/password2";
import captchaArr from "./components/password/captchaData";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CustomWebcam from "./components/password/webcam";
import SignInSide from "./SignInSide";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const randomCaptchaIndex = Math.floor(Math.random() * captchaArr.length);
  const randomCaptcha = captchaArr[randomCaptchaIndex];

  const randomOtp = Math.floor(Math.random() * 999999);

  const sendSmsOtp = (toNumber) => {
    const accountSid = "AC2e63b658df1e0cb514b0fea7d486c385";
    const authToken = "fbca295ec497f1d2e937e29b73ecc9c3";
    const wrongtoken = "1";

    const params = new URLSearchParams();
    params.append("Body", `Your OTP for bestest password ever is ${randomOtp}`);
    params.append("To", `${toNumber}`);
    params.append("From", "Rudy OTP");

    axios
      .post(
        "https://api.twilio.com/2010-04-01/Accounts/AC2e63b658df1e0cb514b0fea7d486c385/Messages.json",
        params,
        {
          auth: {
            username: accountSid,
            password: authToken,
          },
        }
      )
      .then(function (response) {
        alert("OTP sent");
        console.log(response);
      })
      .catch(function (error) {
        alert("Error in sending OTP");
        console.log(error);
      });
  };

  return (
    <>
      {/* <h1>Let's create you a password</h1> */}
      <Password2
        captchaArr={captchaArr}
        randomCaptchaIndex={randomCaptchaIndex}
        randomCaptcha={randomCaptcha}
        setSendSms={sendSmsOtp}
        randomOtp={randomOtp}
      />
      {/* <CustomWebcam /> */}
    </>
  );
}

export default App;
