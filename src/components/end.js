import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Submitted = () => {
  return (
    <>
      <img src="https://media.tenor.com/xRKRAjXmEVcAAAAd/sweaty-sweaty-speedrunner.gif"></img>
      <h3>
        Congrats! This is a live view of a hacker trying to steal that password.
      </h3>
      <Button variant="contained" component={RouterLink} to="/">
        Help more friends secure their password?
      </Button>
    </>
  );
};

export default Submitted;
<></>;
