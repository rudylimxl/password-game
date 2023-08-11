import { useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LengthCheck from "./lengthchecks";

const Password = () => {
  const [input, setInput] = useState({ username: "", password: "" });

  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.username + input.password);
    input.username = "";
    input.password = "";
  };

  const handleUsernameInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    input.username.length > 0
      ? setValidUsername(true)
      : setValidUsername(false);
  };

  const [lengthCheck, setLengthCheck] = useState({
    active: true,
    valid: false,
  });

  const handlePasswordInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // if (!lengthCheck.active && input.password.length > 0) {
    //   setLengthCheck({
    //     ...lengthCheck,
    //     active: true,
    //   });
    // } else if (lengthCheck.active && input.password.length > 5) {
    //   setLengthCheck({
    //     ...lengthCheck,
    //     valid: true,
    //   });
    // } else if (lengthCheck.active && input.password.length <= 5) {
    //   setLengthCheck({
    //     ...lengthCheck,
    //     valid: false,
    //   });
    // }

    if (input.password.length > 5) {
      setLengthCheck((prev) => {
        return {
          ...prev,
          valid: true,
        };
      });
    } else if (input.password.length <= 5) {
      setLengthCheck((prev) => {
        return {
          ...prev,
          valid: false,
        };
      });
    }
    console.log(input.password.length);
    console.log(lengthCheck);
  };

  return (
    <div className="passwordApp">
      <h2>Password</h2>
      <form className="passwordForm" onSubmit={handleSubmit}>
        <TextField
          name="username"
          label="Username"
          onChange={handleUsernameInput}
          value={input.username}
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
          onChange={handlePasswordInput}
          value={input.password}
          type={showPassword ? "password" : "text"}
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

        <button type="Submit">Submit</button>
      </form>
      <LengthCheck lengthCheck={lengthCheck} />
    </div>
  );
};

export default Password;
