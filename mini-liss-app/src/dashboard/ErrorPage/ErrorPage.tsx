import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { Box } from "@mui/system";
// import {    makeStyles  } from '@material-ui/core'
// import {makeStyles} from "@mui/material";

const primary = yellow.A700



 

const StyleCautionTape = {
  fontSize: "6rem",
  width: "100%",
  borderTop: "50px #000 solid",
  borderBottom: "50px #000 solid",
  background: "#FEC900",
  height: "250px",
  lineHeight: "80px",
  position: "relative",
  top: "50%",
  transform: "translateY(50%)",
};
const StyleButton = {
  background: primary,
  border: "10px #000 solid",
  color: "#000",
  width: "200px",
  height: "60px",
  fontSize: "1.5rem",
  textTransform: "uppercase",
  fontWeight: "700",
  position: "relative",
  top: "100px",
  cursor: "pointer",
  fontFamily: "Bangere cursive",
  transition: "all .2s ease",
  letterSpacing: "1px",
};

export const ErrorPage = () => {
     
  
  return (
    <Box>
      <Box sx={{ textAlign: "center", fontFamily: "sans-serif Bangers", textTransform: "uppercase" }}>
        <Box sx={StyleCautionTape}>
          <Typography variant="h5" sx={{ fontWeight: 700, fontSize: "6rem" }}>
            404 Page not found
          </Typography>
        </Box>
        {/* <Button variant="contained" sx={StyleButton}>
          Go back
        </Button> */}

        <Typography variant="h5" className="problem-text">
          Oops. Something went wrong.
        </Typography>
      </Box>
    </Box>
  );
};
