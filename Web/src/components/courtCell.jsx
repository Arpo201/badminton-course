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
    width: "60vw",
    height: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

const ShowCourtCell = ({courtInfo, courtID, timeIndex, time}) => {
  const [std1, setStd1] = React.useState(["", ""])
  const [std2, setStd2] = React.useState(["", ""])
  const [std3, setStd3] = React.useState(["", ""])
  const [std4, setStd4] = React.useState(["", ""])
  let status = 0
    // #################### API ######################
    const editCourt = () => {
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
    editCourt()
    handleClose()
    window.location.reload()
  }
  const clearCourt = () => {
    status = 1
    editCourt()
    handleClose()
    window.location.reload()
  }

  return (
      <>
        <Button onClick={handleOpen} className={state?"BtnGreen":"BtnRed"}>Book</Button>
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
              <Stack spacing={2}>
                <Stack direction="row" spacing={3}>
                  <TextField disabled id="outlined-basic" label="Student 1" variant="outlined" style={{width: "20%", textAlign: "center"}} />
                  <TextField id="outlined-basic" label="ID" variant="outlined" onChange={(val) => setStd1([val.target.value, std1[1]])} style={{width: "40%"}} />
                  <TextField id="outlined-basic" label="Firstname Lastname" variant="outlined" onChange={(val) => setStd1([std1[0], val.target.value])} style={{width: "100%"}}/>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <TextField disabled id="outlined-basic" label="Student 2" variant="outlined" style={{width: "20%", textAlign: "center"}} />
                  <TextField id="outlined-basic" label="ID" variant="outlined" onChange={(val) => setStd2([val.target.value, std2[1]])} style={{width: "40%"}} />
                  <TextField id="outlined-basic" label="Firstname Lastname" variant="outlined" onChange={(val) => setStd2([std2[0], val.target.value])} style={{width: "100%"}}/>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <TextField disabled id="outlined-basic" label="Student 3" variant="outlined" style={{width: "20%", textAlign: "center"}} />
                  <TextField id="outlined-basic" label="ID" variant="outlined" onChange={(val) => setStd3([val.target.value, std3[1]])} style={{width: "40%"}} />
                  <TextField id="outlined-basic" label="Firstname Lastname" variant="outlined" onChange={(val) => setStd3([std3[0], val.target.value])} style={{width: "100%"}}/>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <TextField disabled id="outlined-basic" label="Student 4" variant="outlined" style={{width: "20%", textAlign: "center"}} />
                  <TextField id="outlined-basic" label="ID" variant="outlined" onChange={(val) => setStd4([val.target.value, std4[1]])} style={{width: "40%"}} />
                  <TextField id="outlined-basic" label="Firstname Lastname" variant="outlined" onChange={(val) => setStd4([std4[0], val.target.value])} style={{width: "100%"}}/>
                </Stack>
                <Stack direction="row" style={{justifyContent: "center"}}>
                  <Button onClick={updateCourt} variant="outlined" style={{margin: 2}}>Comfirm</Button>
                  <Button onClick={clearCourt} variant="outlined" style={{margin: 2}}>Clear</Button>
                  <Button onClick={handleClose} variant="outlined" style={{margin: 2}}>Cancel</Button>
                </Stack>
              </Stack>
            </Typography>
          </Box>
        </Modal>
      </>
    )
}

export default ShowCourtCell