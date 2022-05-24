import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import gql from 'graphql-tag';
import { print } from 'graphql';
import axios from 'axios';

import { API_URL } from "../variable";

const booking = gql`
mutation editstate($editstateId: Int!, $index: Int!, $status: Int!, $detail: court){
  editstate(id: $editstateId, index: $index, status: $status, detail: $detail) {
    id,
    name,
    state {
      detail {
        stuInfo1,
        stuInfo2,
        stuInfo3,
        stuInfo4
      },
      status,
      index
    }
  }
}
`

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75vw",
    height: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

const splitStdInfo = (stdInfo) => {
  let tempInfo = stdInfo.split(" ")
  if (tempInfo.length === 3){
    return tempInfo
  }else{
    return ["", "", ""]
  }
}

const ShowCourtCell = ({courtInfo, courtID, timeIndex, time}) => {
  const [std1, setStd1] = React.useState(splitStdInfo(courtInfo.state[timeIndex].detail.stuInfo1))
  const [std2, setStd2] = React.useState(splitStdInfo(courtInfo.state[timeIndex].detail.stuInfo2))
  const [std3, setStd3] = React.useState(splitStdInfo(courtInfo.state[timeIndex].detail.stuInfo3))
  const [std4, setStd4] = React.useState(splitStdInfo(courtInfo.state[timeIndex].detail.stuInfo4))
  let status = 0
  let isAdmin = localStorage.getItem("Role") === "admin"
  // #################### API ######################
  const editCourtAPI = () => {
    axios.post(API_URL, {
      query : print(booking),
      variables:{
        editstateId: parseInt(courtID),//ตําแหน่งของสนาม
        index: parseInt(timeIndex),//ตําแหน่งของห้วงเวลา
        status: status,
        detail: {
          stuInfo1: std1.join(" "),
          stuInfo2: std2.join(" "),
          stuInfo3: std3.join(" "),
          stuInfo4: std4.join(" ")
        }
      }
    }).then((res)=>{
      console.log("Update finished")
    })
  }
  const clearCourtAPI = () => {
    axios.post(API_URL, {
      query : print(booking),
      variables:{
        editstateId: parseInt(courtID),//ตําแหน่งของสนาม
        index: parseInt(timeIndex),//ตําแหน่งของห้วงเวลา
        status: status,
        detail: {
          stuInfo1: "",
          stuInfo2: "",
          stuInfo3: "",
          stuInfo4: ""
        }
      }
    }).then((res)=>{
      console.log("Update finished")
    })
  }
  // #################################################
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  var court = courtInfo.name
  var state = courtInfo.state[timeIndex].status
  var nextHour = parseFloat(time)
  nextHour++
  var nextTime = ""
  
  if (nextHour/10 >= 1) {nextTime = nextHour + ":00"}
  else {nextTime = "0" + nextHour + ":00"}
  
  const updateCourt = () => {
    editCourtAPI()
    handleClose()
  }
  const clearCourt = () => {
    status = 1
    setStd1(["", "", ""])
    setStd2(["", "", ""])
    setStd3(["", "", ""])
    setStd4(["", "", ""])
    clearCourtAPI()
    handleClose()
  }

  return (
      <>
        <Button onClick={handleOpen} className={state?"BtnGreen":"BtnRed"} disabled={!isAdmin} style={{padding: "8% 20%"}}>Book</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign: "center", fontSize: "3.5vh"}}>
              จอง{court}
              <br></br>
              {time} - {nextTime}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={updateCourt}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={3}>
                    <TextField disabled id="outlined-basic" label="Student 1" variant="outlined" style={{width: "25%", textAlign: "center"}} />
                    <TextField required defaultValue={std1[0]} id="outlined-basic" label="ID" variant="outlined" onChange={(val) => setStd1([val.target.value, std1[1], std1[2]])} style={{width: "40%"}} />
                    <TextField required defaultValue={std1[1]} id="outlined-basic" label="Firstname" variant="outlined" onChange={(val) => setStd1([std1[0], val.target.value, std1[2]])} style={{width: "100%"}}/>
                    <TextField required defaultValue={std1[2]} id="outlined-basic" label="Lastname" variant="outlined" onChange={(val) => setStd1([std1[0], std1[1], val.target.value])} style={{width: "100%"}}/>
                  </Stack>
                  <Stack direction="row" spacing={3}>
                    <TextField disabled id="outlined-basic" label="Student 2" variant="outlined" style={{width: "25%", textAlign: "center"}} />
                    <TextField required defaultValue={std2[0]} id="outlined-basic" label="ID" variant="outlined" onChange={(val) => setStd2([val.target.value, std2[1], std2[2]])} style={{width: "40%"}} />
                    <TextField required defaultValue={std2[1]} id="outlined-basic" label="Firstname" variant="outlined" onChange={(val) => setStd2([std2[0], val.target.value, std2[2]])} style={{width: "100%"}}/>
                    <TextField required defaultValue={std2[2]} id="outlined-basic" label="Lastname" variant="outlined" onChange={(val) => setStd2([std2[0], std2[1], val.target.value])} style={{width: "100%"}}/>
                  </Stack>
                  <Stack direction="row" spacing={3}>
                    <TextField disabled id="outlined-basic" label="Student 3" variant="outlined" style={{width: "25%", textAlign: "center"}} />
                    <TextField required defaultValue={std3[0]} id="outlined-basic" label="ID" variant="outlined" onChange={(val) => setStd3([val.target.value, std3[1], std3[2]])} style={{width: "40%"}} />
                    <TextField required defaultValue={std3[1]} id="outlined-basic" label="Firstname" variant="outlined" onChange={(val) => setStd3([std3[0], val.target.value, std3[2]])} style={{width: "100%"}}/>
                    <TextField required defaultValue={std3[2]} id="outlined-basic" label="Lastname" variant="outlined" onChange={(val) => setStd3([std3[0], std3[1], val.target.value])} style={{width: "100%"}}/>
                  </Stack>
                  <Stack direction="row" spacing={3}>
                    <TextField disabled id="outlined-basic" label="Student 4" variant="outlined" style={{width: "25%", textAlign: "center"}} />
                    <TextField required defaultValue={std4[0]} id="outlined-basic" label="ID" variant="outlined" onChange={(val) => setStd4([val.target.value, std4[1], std4[2]])} style={{width: "40%"}} />
                    <TextField required defaultValue={std4[1]} id="outlined-basic" label="Firstname" variant="outlined" onChange={(val) => setStd4([std4[0], val.target.value, std4[2]])} style={{width: "100%"}}/>
                    <TextField required defaultValue={std4[2]} id="outlined-basic" label="Lastname" variant="outlined" onChange={(val) => setStd4([std4[0], std4[1], val.target.value])} style={{width: "100%"}}/>
                  </Stack>
                  <Stack direction="row" style={{justifyContent: "center"}}>
                    <Button variant="outlined" color="success" type='submit' style={{margin: 2}}>Comfirm</Button>
                    <Button onClick={clearCourt} variant="outlined" style={{margin: 2}}>Clear</Button>
                    <Button onClick={handleClose} variant="outlined" color="error" style={{margin: 2}}>Cancel</Button>
                  </Stack>
                </Stack>
              </form>
            </Typography>
          </Box>
        </Modal>
      </>
    )
}

export default ShowCourtCell