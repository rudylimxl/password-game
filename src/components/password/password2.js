import { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LengthCheck from "./lengthchecks";
import NumberCheck from "./numberchecks";
import CharCheck from "./charchecks";
import CapitalCheck from "./capitalchecks";
import NumTotalCheck from "./numtotal";
import capitalCities from "./countryData";
import CapitalCityCheck from "./capitalcitychecks";
import EggCheck from "./eggchecks";
import MapCheck from "./mapcheck";
import CaptchaCheck from "./captcha";
import OtpCheck from "./otpcheck";
import { Link as RouterLink } from "react-router-dom";

const Password2 = (props) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState("");
  const [allCheckValid, setAllCheckValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username", usernameRef.current.value);
    console.log("password", passwordRef.current.value);
  };

  const handleUsernameInput = (e) => {
    e.length > 0 ? setValidUsername(true) : setValidUsername(false);
  };

  const [lengthCheck, setLengthCheck] = useState({
    active: false,
    valid: false,
  });

  const [numberCheck, setNumberCheck] = useState({
    active: false,
    valid: false,
  });

  const [charCheck, setCharCheck] = useState({
    active: false,
    valid: false,
  });

  const [capitalCheck, setCapitalCheck] = useState({
    active: false,
    valid: false,
  });

  const [numTotalCheck, setNumTotalCheck] = useState({
    active: false,
    valid: false,
  });

  const [capitalCityCheck, setCapitalCityCheck] = useState({
    active: false,
    valid: false,
  });

  const [eggCheck, setEggCheck] = useState({
    active: false,
    valid: false,
  });

  const [mapCheck, setMapCheck] = useState({
    active: false,
    valid: false,
  });

  const [captchaCheck, setCaptchaCheck] = useState({
    active: false,
    valid: false,
  });

  const [otpCheck, setOtpCheck] = useState({
    active: false,
    valid: false,
  });

  const handlePasswordInput = (e) => {
    if (!lengthCheck.active && e.length > 0) {
      setLengthCheck((prev) => {
        return {
          ...prev,
          active: true,
        };
      });
    }
    if (e.length > 5) {
      setLengthCheck((prev) => {
        return {
          ...prev,
          valid: true,
        };
      });
      setNumberCheck((prev) => {
        return {
          ...prev,
          active: true,
        };
      });
    } else if (e.length <= 5) {
      setLengthCheck((prev) => {
        return {
          ...prev,
          valid: false,
        };
      });
    }
    const lengthValid = e.length > 5;

    if (/\d/.test(e)) {
      setNumberCheck((prev) => {
        return {
          ...prev,
          valid: true,
        };
      });
      setCharCheck((prev) => {
        return {
          ...prev,
          active: true,
        };
      });
    } else if (/\d/.test(e) === false) {
      setNumberCheck((prev) => {
        return {
          ...prev,
          valid: false,
        };
      });
    }
    const numberValid = /\d/.test(e);

    if (/[!-\/:-@[-`{-~]/.test(e)) {
      setCharCheck((prev) => {
        return {
          ...prev,
          valid: true,
        };
      });
      setCapitalCheck((prev) => {
        return {
          ...prev,
          active: true,
        };
      });
    } else if (/[!-\/:-@[-`{-~]/.test(e) === false) {
      setCharCheck((prev) => {
        return {
          ...prev,
          valid: false,
        };
      });
    }
    const charValid = /[!-\/:-@[-`{-~]/.test(e);

    if (/[A-Z]/.test(e)) {
      setCapitalCheck((prev) => {
        return {
          ...prev,
          valid: true,
        };
      });
      setNumTotalCheck((prev) => {
        return {
          ...prev,
          active: true,
        };
      });
    } else if (/[A-Z]/.test(e) === false) {
      setCapitalCheck((prev) => {
        return {
          ...prev,
          valid: false,
        };
      });
    }
    const capitalValid = /[A-Z]/.test(e);

    //numtotal check
    function retnum(str) {
      var num = str.replace(/[^0-9]/g, "");
      return parseInt(num, 10);
    }
    let value = retnum(e);
    let numTotalSum = 0;
    while (value) {
      numTotalSum += value % 10;
      value = Math.floor(value / 10);
    }
    const numTotalValid = numTotalSum > 0 && numTotalSum % 3 === 0;

    if (numTotalValid) {
      setNumTotalCheck((prev) => {
        return {
          ...prev,
          valid: true,
        };
      });
      setCapitalCityCheck((prev) => {
        return {
          ...prev,
          active: true,
        };
      });
    } else if (numTotalSum % 3 !== 0) {
      setNumTotalCheck((prev) => {
        return {
          ...prev,
          valid: false,
        };
      });
    }

    //capitalcityCheck
    let containsCapital = false;
    for (const capital of capitalCities) {
      if (e?.toLowerCase().includes(capital?.toLowerCase())) {
        //not sure why .toLowerCase doesnt work but ?. does
        containsCapital = true;
      }
    }

    if (containsCapital) {
      setCapitalCityCheck((prev) => {
        return {
          ...prev,
          valid: true,
        };
      });
      setEggCheck((prev) => {
        return {
          ...prev,
          active: true,
        };
      });
    } else if (!containsCapital) {
      setCapitalCityCheck((prev) => {
        return {
          ...prev,
          valid: false,
        };
      });
    }

    //check egg, explore useeffect to hatch egg after 20-30s
    const containEgg = e.includes("🥚");
    if (containEgg) {
      setEggCheck((prev) => {
        return {
          ...prev,
          valid: true,
        };
      });
      setMapCheck((prev) => {
        return {
          ...prev,
          active: true,
        };
      });
    } else if (!containEgg) {
      setEggCheck((prev) => {
        return {
          ...prev,
          valid: false,
        };
      });
    }

    //check goooglemap
    const mapValid = e?.toLowerCase().includes("paris");
    if (mapValid) {
      setMapCheck((prev) => {
        return {
          ...prev,
          valid: true,
        };
      });
      setCaptchaCheck((prev) => {
        return {
          ...prev,
          active: true,
        };
      });
    } else if (!mapValid) {
      setMapCheck((prev) => {
        return {
          ...prev,
          valid: false,
        };
      });
    }

    // check captcha
    const captchaValid = e.includes(props.randomCaptcha.answer);
    if (captchaValid) {
      setCaptchaCheck((prev) => {
        return {
          ...prev,
          valid: true,
        };
      });
      setOtpCheck((prev) => {
        return {
          ...prev,
          active: true,
        };
      });
    } else if (!captchaValid) {
      setCaptchaCheck((prev) => {
        return {
          ...prev,
          valid: false,
        };
      });
    }
    // check SMS OTP
    const otpValid = e.includes(props.randomOtp);
    if (otpValid) {
      setOtpCheck((prev) => {
        return {
          ...prev,
          valid: true,
        };
      });
      setOtpCheck((prev) => {
        return {
          ...prev,
          active: true,
        };
      });
    } else if (!otpValid) {
      setOtpCheck((prev) => {
        return {
          ...prev,
          valid: false,
        };
      });
    }

    const allValid =
      otpValid &&
      captchaValid &&
      mapValid &&
      containEgg &&
      containsCapital &&
      numTotalValid &&
      capitalValid &&
      charValid &&
      numberValid &&
      lengthValid;

    if (allValid) {
      setAllCheckValid(true);
    } else {
      setAllCheckValid(false);
    }
  };

  return (
    <div className="passwordApp">
      <h2>Let's get you a nice secure password</h2>
      <form className="passwordForm" onSubmit={handleSubmit}>
        <TextField
          name="username"
          label="Username"
          inputRef={usernameRef}
          autoComplete="off"
          onChange={(e) => handleUsernameInput(e.target.value)}
          InputProps={
            validUsername
              ? {
                  endAdornment: (
                    <InputAdornment position="end">✅</InputAdornment>
                  ),
                }
              : {}
          }
          helperText={validUsername ? "Username is available." : ""}
          color={validUsername ? "success" : ""}
        />
        <TextField
          name="password"
          label="Password"
          inputRef={passwordRef}
          autoComplete="off"
          onChange={(e) => handlePasswordInput(e.target.value)}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          color={
            validPassword ? "success" : validPassword === "" ? "" : "warning"
          }
        />
        {!allCheckValid && (
          <Button
            variant="contained"
            type="Submit"
            component={RouterLink}
            to=""
          >
            This password is weak sauce, man
          </Button>
        )}
        {allCheckValid && (
          <Button
            variant="contained"
            type="Submit"
            component={RouterLink}
            to="/success"
          >
            Submit
          </Button>
        )}
      </form>

      {/* show invalid rules at the top */}
      {!otpCheck.valid && (
        <OtpCheck otpCheck={otpCheck} setSendSms={props.setSendSms} />
      )}
      {!captchaCheck.valid && (
        <CaptchaCheck
          captchaCheck={captchaCheck}
          randomCaptcha={props.randomCaptcha}
        />
      )}
      {!mapCheck.valid && <MapCheck mapCheck={mapCheck} />}
      {!eggCheck.valid && <EggCheck eggCheck={eggCheck} />}
      {!capitalCityCheck.valid && (
        <CapitalCityCheck capitalCityCheck={capitalCityCheck} />
      )}
      {!numTotalCheck.valid && <NumTotalCheck numTotalCheck={numTotalCheck} />}
      {!capitalCheck && <CapitalCheck capitalCheck={capitalCheck} />}
      {!charCheck && <CharCheck charCheck={charCheck} />}
      {!numberCheck && <NumberCheck numberCheck={numberCheck} />}
      {!lengthCheck && <LengthCheck lengthCheck={lengthCheck} />}

      {/* valid rules after the invalid rules */}
      {otpCheck.valid && (
        <OtpCheck otpCheck={otpCheck} setSendSms={props.setSendSms} />
      )}
      {captchaCheck.valid && (
        <CaptchaCheck
          captchaCheck={captchaCheck}
          randomCaptcha={props.randomCaptcha}
        />
      )}
      {mapCheck.valid && <MapCheck mapCheck={mapCheck} />}
      {eggCheck.valid && <EggCheck eggCheck={eggCheck} />}
      {capitalCityCheck.valid && (
        <CapitalCityCheck capitalCityCheck={capitalCityCheck} />
      )}
      {numTotalCheck.valid && <NumTotalCheck numTotalCheck={numTotalCheck} />}
      {capitalCheck && <CapitalCheck capitalCheck={capitalCheck} />}
      {charCheck && <CharCheck charCheck={charCheck} />}
      {numberCheck && <NumberCheck numberCheck={numberCheck} />}
      {lengthCheck && <LengthCheck lengthCheck={lengthCheck} />}
    </div>
  );
};

export default Password2;
