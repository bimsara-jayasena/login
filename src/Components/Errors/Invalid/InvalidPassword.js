import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Mytheme from '../../../Theme/customTheme';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const handleReset=()=>{
    //navigate to reset password
}

const InvalidPassword=({open,handleClose})=>{

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Password Invalid :("}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Seems lik your password is Not correct,did you forget it? No worries let's reset it,or you can try again :)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{'&:hover':{backgroundColor:Mytheme.palette.easy.light,color:'white'}}}>let me try again</Button>
          <Button onClick={handleReset} sx={{'&:hover':{color:Mytheme.palette.easy.light}}}>I want to reset it</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default InvalidPassword;