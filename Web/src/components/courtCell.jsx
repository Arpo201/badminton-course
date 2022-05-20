import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

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

const ShowCourtCell = ({courtData, id, stateIndex, time}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    var court = courtData[id-1].name
    var state = courtData[id-1].state[stateIndex]
    var nextHour = parseFloat(time)
    nextHour++
    var nextTime = ""
    
    if (nextHour/10 >= 1) {nextTime = nextHour + ":00"}
    else {nextTime = "0" + nextHour + ":00"}

    const [std1, setStd1] = React.useState([0, ""])
    const [std2, setStd2] = React.useState([0, ""])
    const [std3, setStd3] = React.useState([0, ""])
    const [std4, setStd4] = React.useState([0, ""])

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
                    <TextField id="outlined-basic" label="Firstname&amp;Lastname" variant="outlined" onChange={(val) => setStd1([std1[0], val.target.value])} style={{width: "100%"}}/>
                  </Stack>
                  <Stack direction="row" spacing={3}>
                    <TextField disabled id="outlined-basic" label="Student 2" variant="outlined" style={{width: "20%", textAlign: "center"}} />
                    <TextField id="outlined-basic" label="ID" variant="outlined" onChange={(val) => setStd2([val.target.value, std2[1]])} style={{width: "40%"}} />
                    <TextField id="outlined-basic" label="Firstname&amp;Lastname" variant="outlined" onChange={(val) => setStd2([std2[0], val.target.value])} style={{width: "100%"}}/>
                  </Stack>
                  <Stack direction="row" spacing={3}>
                    <TextField disabled id="outlined-basic" label="Student 3" variant="outlined" style={{width: "20%", textAlign: "center"}} />
                    <TextField id="outlined-basic" label="ID" variant="outlined" onChange={(val) => setStd3([val.target.value, std3[1]])} style={{width: "40%"}} />
                    <TextField id="outlined-basic" label="Firstname&amp;Lastname" variant="outlined" onChange={(val) => setStd1([std3[0], val.target.value])} style={{width: "100%"}}/>
                  </Stack>
                  <Stack direction="row" spacing={3}>
                    <TextField disabled id="outlined-basic" label="Student 4" variant="outlined" style={{width: "20%", textAlign: "center"}} />
                    <TextField id="outlined-basic" label="ID" variant="outlined" onChange={(val) => setStd4([val.target.value, std4[1]])} style={{width: "40%"}} />
                    <TextField id="outlined-basic" label="Firstname&amp;Lastname" variant="outlined" onChange={(val) => setStd4([std4[0], val.target.value])} style={{width: "100%"}}/>
                  </Stack>
                  <Stack direction="row" style={{justifyContent: "center"}}>
                    <Button onClick={handleClose} variant="outlined">Comfirm</Button>
                  </Stack>
                </Stack>
              </Typography>
            </Box>
          </Modal>
        </>
      )
}

export default ShowCourtCell