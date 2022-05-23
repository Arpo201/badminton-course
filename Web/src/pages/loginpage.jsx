import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Card } from "react-bootstrap";
import { TextField } from "@mui/material";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const bg = {
  width: "100%",
  background: "rgb(245,126,68)",
  background:
    "linear-gradient(180deg, rgba(245,126,68,1) 0%, rgba(254,241,224,1) 80%, rgba(255,255,255,1) 100%)",
  padding: "15px",
};

const theme = createTheme({
    palette: {
      line: {
        main: "#ededed",
      },
    },
  });

const ShowLoginpage = () => {
    let navigate = useNavigate();
  const [username, setUser] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div class="container-fluid" style={bg}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card body>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              src={require("../assets/kmitl.png")}
              width="150"
              height="135"
            ></img>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <h1>KMITL Badminton Court</h1>
          </Box>
          <br />
          <h4>Login</h4>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="E-mail"
                variant="outlined"
                style={{ width: "100%" }}
                required
                margin="normal"
                value={username}
                onChange={(e) => setUser(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                style={{ width: "100%" }}
                required
                margin="normal"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button>Login</Button>
          </Box>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" color="line" value={100} />
          </Box>
          </ThemeProvider>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button onClick={ ()=>{
                navigate("/register");
            }
            }>Register</Button>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default ShowLoginpage;
