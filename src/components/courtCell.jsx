import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    height: "50vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
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
    return (
        <div>
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
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={4}>
                      <TextField id="outlined-basic" label="Student ID" variant="outlined" style={{width: "95%"}} />
                    </Grid>
                    <Grid item md={8}>
                      <TextField id="outlined-basic" label="Firstname&amp;LastName" variant="outlined" style={{width: "95%"}}/>
                    </Grid>
                    <Grid item md={4}>
                      <TextField id="outlined-basic" label="Student ID" variant="outlined" style={{width: "95%"}} />
                    </Grid>
                    <Grid item md={8}>
                      <TextField id="outlined-basic" label="Firstname&amp;LastName" variant="outlined" style={{width: "95%"}}/>
                    </Grid>
                    <Grid item md={4}>
                      <TextField id="outlined-basic" label="Student ID" variant="outlined" style={{width: "95%"}} />
                    </Grid>
                    <Grid item md={8}>
                      <TextField id="outlined-basic" label="Firstname&amp;LastName" variant="outlined" style={{width: "95%"}}/>
                    </Grid>
                    <Grid item md={4}>
                      <TextField id="outlined-basic" label="Student ID" variant="outlined" style={{width: "95%"}} />
                    </Grid>
                    <Grid item md={8}>
                      <TextField id="outlined-basic" label="Firstname&amp;LastName" variant="outlined" style={{width: "95%"}}/>
                    </Grid>
                    <Grid item md={12}>
                      <Button onClick={handleOpen} variant="outlined">Comfirm</Button>
                    </Grid>
                </Grid>
              </Typography>
            </Box>
          </Modal>
        </div>
      )
}

export default ShowCourtCell