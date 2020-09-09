import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import LanguageIcon from "@material-ui/icons/Language";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import profilePhoto from "../photos/profilePhoto.jpg";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useLocation } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import { CSSTransition } from 'react-transition-group';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer(props) {
  const [langDialog, changeLangDialog] = React.useState(false);
  const [loginDialog, LoginDialog] = React.useState(false);
  const [loginAlert, chnageLoginAlert] = React.useState(false);
  const [username, changeUsername] = React.useState("");
  const [password, changePassword] = React.useState("");

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const langChanged = () => {
    console.log("sea");
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeDialog = () => {
    changeLangDialog(!langDialog);
    // handleDrawerClose();
  };

  const changeLoginDialog = () => {
    LoginDialog(!loginDialog);
    // handleDrawerClose();
  };
  const usernameOnChange = (e) => {
    changeUsername(e.target.value)
  }
  const passwordOnChange = (e) => {
    changePassword(e.target.value)
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const submitAdminLogin =  async (e)  =>  {
    console.log(username,password)
    if (username=="esger2048" && password=="esger2048"){
      changeLoginDialog()
    }else{
      chnageLoginAlert(true)
      await sleep(3000);
      chnageLoginAlert(false)
      
    }
  }
  const themeColors = createMuiTheme({
    palette: {
      common: {
        white: "#000",
      },
      background: {
        paper: "#fce130",
      },
      text: {
        primary: "#000",
      },
      primary: {
        main: "#fce130",
        light: "#fce130",
        dark: "#fce130",
      },
      secondary: {
        main: "#000",
        light: "#000",
        dark: "#000",
      },
    },
  });
 

  return (
    <MuiThemeProvider theme={themeColors}>
        <CSSTransition
        in={loginAlert}
        timeout={3000}
        classNames="alert"
        unmountOnExit
      >
        <div id="login-alert">
        <Alert id="middle" variant="filled" severity="error">
          Daxil edilən məlumatlar yanlışdır !
        </Alert>
      </div>
      </CSSTransition>
      <Dialog
        onClose={changeLangDialog}
        aria-labelledby="customized-dialog-title"
        open={langDialog}
      >
        <DialogTitle className="txt-color-black" id="alert-dialog-slide-title">
          {"Dili dəyişdirmək istəyirsən?"}
        </DialogTitle>
        <DialogContent>
          <FormControl
            style={{ width: "100%" }}
            id="lang-select"
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-age-native-simple">Dil</InputLabel>
            <Select
              native
              onChange={langChanged}
              label="Dil"
              inputProps={{
                name: "dil",
                id: "outlined-age-native-simple",
              }}
            >
              <option aria-label="" value="Azərbaycanca" />
              <option value={"az"}>Azərbaycanca</option>
              <option value={"en"}>İngiliscə</option>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={changeDialog}>
            Dəyişdir
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        onClose={changeLoginDialog}
        aria-labelledby="customized-dialog-title"
        open={loginDialog}
      >
        <DialogTitle className="txt-color-black" id="alert-dialog-slide-title">
          {"Daxil Olun"}
        </DialogTitle>
        <DialogContent>
          <FormControl
            style={{ width: "100%" }}
            id="lang-select"
            variant="outlined"
          >
            <TextField
            onChange={usernameOnChange}
              id="outlined-textarea"
              label="Istifadəçi adı"
              placeholder="İstfidəçi adını yazın..."
              multiline
              variant="outlined"
            />
            <br></br>
            <br></br>
            <TextField
            onChange={passwordOnChange}
              id="outlined-textarea"
              label="Şifrə"
              placeholder="Şifrəni yazın..."
              multiline
              variant="outlined"
            />
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={submitAdminLogin}  autoFocus >
            Daxil ol
          </Button>
        </DialogActions>
      </Dialog>

      <div className={classes.root}>
        <CssBaseline />

        <AppBar
          color="primary"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Grid>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid>
              <Avatar
                style={{ width: "70px", height: "70px" }}
                alt="Travis Howard"
                src={profilePhoto}
              />
            </Grid>
            <Grid style={{ flex: 1, fontSize: "1.5rem" }}>
              <span>Əsgər Əliyev</span>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          id="left-menu-container"
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <br></br>
          <div>
            <List>
              <ListItem button onClick="#aboutme" key={"Haqqımda"}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <a href="#aboutme">
                  <ListItemText className="color-black" primary={"Haqqımda"} />
                </a>
              </ListItem>
              <ListItem button key={"Xidmətlər"}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <a href="#what-i-do">
                  <ListItemText className="color-black" primary={"Xidmətlər"} />
                </a>
              </ListItem>
              <ListItem button key={"Portfolio"}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <a href="#portfolio">
                  <ListItemText className="color-black" primary={"Portfolio"} />
                </a>
              </ListItem>
              <ListItem button key={"Bloglar"}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText className="color-black" primary={"Bloglar"} />
              </ListItem>
              <ListItem button key={"Əlaqə"}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <a href="#contact">
                  <ListItemText className="color-black" primary={"Əlaqə"} />
                </a>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem onClick={changeDialog} button key={"Dili Dəyisdir"}>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText
                  className="color-black"
                  primary={"Dili Dəyisdir"}
                />
              </ListItem>
              <ListItem button key={"Mənim CV-im"}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText className="color-black" primary={"Mənim CV-im"} />
              </ListItem>
              <ListItem onClick={changeLoginDialog} button key={"Admin Panel"}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <Link>
                  <ListItemText
                    className="color-black"
                    primary={"Admin Panel"}
                  />
                </Link>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </MuiThemeProvider>
  );
}
