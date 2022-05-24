//component
import { Card } from "react-bootstrap";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
//end component

//funtional
import { useState } from "react";
import axios from "axios";
import gql from "graphql-tag";
import { print } from "graphql";
import { useNavigate } from "react-router-dom";
//end funtional


const ShowRegisterpage = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirm] = useState("");
  const [studentId, setId] = useState("");
  const [checked, setChecked] = useState(false);

  //gql
  const Regis = gql`
    mutation register(
      $email: String!
      $password: String!
      $name: String!
      $surname: String!
      $stuId: String!
    ) {
      register(
        email: $email
        password: $password
        name: $name
        surname: $surname
        stu_id: $stuId
      ) {
        email
        password
        name
        surname
        stu_id
        role
        token
      }
    }
  `;

  const CheckId = gql`
    mutation ($stuId: String!) {
      queryUser(stu_id: $stuId) {
        stu_id
      }
    }
  `;
  //end gql

  return (
    <div class="container-fluid">
      <Container fluid>
        <Card body /* style={{ margin: "15px" }} */>
          <h2>Register form</h2>
          <Box component="form" sx={{ maxWidth: "100%", margin: "10px" }}>
            <Box sx={{ margin: "10px" }}>
              <label style={{ color: "red" }}>
                *กรุณากรอกรายละเอียดข้อมูลด้านล่าง
              </label>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="ชื่อ"
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="fullWidth"
                  label="นามสกุล"
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  margin="normal"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="รหัสผ่าน"
                  variant="outlined"
                  type="password"
                  style={{ width: "100%" }}
                  required
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="fullWidth"
                  label="ยืนยันรหัสผ่าน"
                  type="password"
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  margin="normal"
                  value={confirmPass}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="รหัสนักศึกษา"
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  margin="normal"
                  value={studentId}
                  onChange={(e) => setId(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>กฏการใช้สนาม</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    color="success"
                    onChange={(e) => {
                      setChecked(e.target.checked);
                      console.log(checked);
                    }}
                  />
                }
                label="ข้าพเจ้าได้อ่านกฏและยืนยันจะปฏิบัติตามกฏ"
              />
            </FormGroup>
          </Box>
          <Box>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="success"
                  style={{ fontSize: "20px" }}
                  onClick={() => {
                    if (
                      name !== "" &&
                      surname !== "" &&
                      studentId !== "" &&
                      password !== "" &&
                      confirmPass !== "" &&
                      password === confirmPass &&
                      checked === true
                    ) {
                      axios
                        .post("http://localhost:4000/graphql", {
                          query: print(CheckId),
                          variables: {
                            stuId: studentId,
                          },
                        })
                        .then((res) => {
                          console.log(res);
                          if (res.data.data.queryUser !== null) {
                            Swal.fire({
                              title: "รหัสนักศึกษานี้มีข้อมูลการสมัครอยู่แล้ว",
                              text: "หากลืมรหัสผ่านกรุณาติดต่อ Admin",
                              icon: "error",
                              confirmButtonText: "ปิด",
                            });
                          }
                          if (res.data.data.queryUser === null) {
                            axios
                              .post("http://localhost:4000/graphql", {
                                query: print(Regis),
                                variables: {
                                  email: studentId + "@kmitl.ac.th",
                                  password: password,
                                  name: name,
                                  surname: surname,
                                  stuId: studentId,
                                  role: null,
                                  token: null,
                                },
                              })
                              .then((res) => {
                                console.log(res.data);
                                Swal.fire({
                                  title: "ลงทะเบียนสำเร็จแล้ว",
                                  text: "",
                                  icon: "success",
                                  confirmButtonText: "กลับไปหน้า Login",
                                }).then(() => {
                                  navigate("/");
                                });
                              });
                          }
                        });
                    } else {
                      Swal.fire({
                        title: "ท่านยังใส่ข้อมูลไม่ครบ",
                        text: "กรุณากรอกข้อมูลให้ครบ",
                        icon: "error",
                        confirmButtonText: "ปิด",
                      });
                    }
                  }}
                >
                  ยืนยัน
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default ShowRegisterpage;
