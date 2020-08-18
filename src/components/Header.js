import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";




import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';




import Snackbar from '@material-ui/core/Snackbar';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      dialog:false,
      snack:false,
      interval:false
    }
  }
 
  handleClose=()=>{
    this.setState({
      dialog:!this.state.dialog,
    })
  }
  changeLang=()=>{
    this.setState(
      {
        snack:true,
        dialog:false
      }
    )
    if(this.state.interval==true){
      this.setState(
        {
          interval:false
        }
      )
      
    }
    var timer=setInterval(
      this.closeSnack,2000
  )

  }
  closeSnack=()=>{
    if(this.state.interval==false){
      this.setState(
        {
          snack:false,
          dialog:false,
          interval:true
        }
      )
    }
  }
  render() {
      console.log("sea");
    const theme = createMuiTheme(
      {
        palette: {
          common:{
            white:"#000"
          },
          background:{
            paper:"#fce130"
          },
          text:{
            primary:"#000"
          },
          primary: {
            main: "#fce130",
            light: "#fce130",
            dark: "#fce130",
          },
          secondary: {
            main: "#fce130",
            light: "#fce130",
            dark: "#fce130",
          },
        },
      }
    );
    
    const dialog= this.state.dialog
    return (
      <MuiThemeProvider theme={theme}>
      <header className=" navbar-expand-md  fixed-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="colorlib-navbar-brand">
                   <a href="/">
                   <div id="brand">
                      <Avatar
                      style={{
                        width:'7vw',
                        height:'7vw',
                        maxWidth:"100px",
                        maxHeight:"100px",
                        minWidth:"50px",
                        minHeight:"50px",
                        float:"left"
                      }}
                      alt="burabaxilmalidi"
                      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dark-1561411785.jpg?crop=1.00xw:0.502xh;0,0.268xh&resize=1200:*"
                    />
                  <span>Əsgər Əliyev</span>
                   </div>
                   </a>

              </div>
              <a
                href="#"
                className="js-colorlib-nav-toggle colorlib-nav-toggle"
              >
                <i />
              </a>
              <Button
                id="change-lang"
                className="contact-inputs"
                onClick={this.handleClose}
                variant="contained"
                color="primary">
                Dili Dəyişdir
              </Button>
            </div>
          </div>
        </div>


        <Dialog  disableBackdropClick disableEscapeKeyDown open={dialog} onClose={this.handleClose}>
        <DialogTitle id="elektar" color="secondary">Dili dəyişdirin</DialogTitle>
        <DialogContent>
          <form  >
            <FormControl >
              <InputLabel htmlFor="demo-dialog-native">Dil</InputLabel>
              <Select 
                onChange={this.changeLang}
                native
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={"az"}>Azərbaycanca</option>
                <option value={"en"}>İngiliscə</option>
              </Select>
            </FormControl>
          </form>
          <br></br>
          <DialogActions>
          <Button style={{backgroundColor:"#000",color:"#fce130"}} onClick={this.handleClose} >
            Ləğv et
          </Button>
        </DialogActions>
        </DialogContent>
        
      </Dialog>


      </header>

      <Snackbar
        color="primary"
        open={this.state.snack}
        onClose={this.handleClose}
        message="Dil dəyişdirildi"
      >

      </Snackbar>
      </MuiThemeProvider>
    );
  }
}
