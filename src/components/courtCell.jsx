import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    height: "10vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ShowCourtCell = ({courtData, id, stateIndex, time}) => {
    // console.warn(courtData[id-1].state[stateIndex])
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
    console.log(nextTime)
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
              <Typography id="modal-modal-title" variant="h6" component="h2">
                จอง{court} เวลา {time} - {nextTime}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
      )
}

export default ShowCourtCell