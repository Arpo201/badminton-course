import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Card } from "react-bootstrap";
import { TextField } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import gql from "graphql-tag";
import { print } from "graphql";
import Swal from "sweetalert2";
import Typography from "@mui/material/Typography";
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { useEffect, useState } from "react";
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
    btn:{
      main: '#292929'
    }
  },
});

const Login = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      role
      token
      name
      stu_id
    }
  }
`;
const logout = () => {
  localStorage.clear()
}

const ShowLoginpage = () => {
  logout()
  let navigate = useNavigate();
  const [username, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [isLogin, setLogin] = useState(null)

  useEffect(()=>{
    const token =localStorage.getItem('Token');
    if(token){
      navigate('/homepage')
    }
  })
  
  return (
    <div class="container-fluid" style={bg}>
       <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card body style={{borderRadius: '25px'}}>
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
          <Box display="flex" justifyContent="center" alignItems="center" style={{margin: '15px'}}>
            <Button
              fullWidth={true}
              color="btn"
              endIcon={<LoginIcon />}
              style={{fontSize: '18px'}}
              onClick={() => {
                axios
                  .post("http://localhost:4000/graphql", {
                    query: print(Login),
                    variables: {
                      email: username,
                      password: pass,
                    },
                  })
                  .then((res) => {
                    if (res.data.data.login !== null) {
                      window.localStorage.setItem(
                        "Token",
                        res.data.data.login.token
                      );
                      window.localStorage.setItem(
                        "ID",
                        res.data.data.login.stu_id
                      );
                      window.localStorage.setItem(
                        "Role",
                        res.data.data.login.role
                      );
                      navigate('/homepage')
                    }
                    if (res.data.data.login === null) {
                      Swal.fire({
                        title: "ไม่สามารถเข้าสู่ระบบได้",
                        text: "E-mail หรือ รหัสของคุณไม่ถูกต้องกรุณาลองใหม่ หากลืมรหัสกรุณาติดต่อ Admin",
                        icon: "error",
                        confirmButtonText: "ปิด",
                      });
                    }
                  });
              }}
            >
              Login
            </Button>
            
          </Box>
          <Typography style={{color: 'red'}}>*หากยังไม่เคยสมัครกรุณาสมัครก่อนเข้าใช้งาน โดยกดปุ่ม Register ด้านล่าง</Typography>
            <Box sx={{ width: "100%" }}>
              <LinearProgress variant="determinate" color="line" value={100} />
            </Box>
          
          <Box display="flex" justifyContent="center" alignItems="center" style={{margin: '15px'}}>
            <Button
            fullWidth={true}
            color="btn"
            endIcon={<AppRegistrationIcon/>}
            style={{fontSize: '18px'}}
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </Button>
          </Box>
        </Card>
      </Box>
      </ThemeProvider>
    </div>
  );
};

export default ShowLoginpage;
