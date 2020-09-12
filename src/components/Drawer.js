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
// import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import { CSSTransition } from "react-transition-group";
import { FormattedMessage } from "react-intl";
import resume from "../photos/resume.pdf";
// import { Link } from "react-scroll";
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

  const langChanged = (e) => {
    localStorage.setItem("lang", e.target.value);
    changeDialog();
    window.location.href = "/";
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
    changeUsername(e.target.value);
  };
  const passwordOnChange = (e) => {
    changePassword(e.target.value);
  };
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const submitAdminLogin = async (e) => {
    if (username == "esger2048" && password == "esger2048") {
      changeLoginDialog();
    } else {
      chnageLoginAlert(true);
      await sleep(3000);
      chnageLoginAlert(false);
    }
  };
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
        onClose={changeDialog}
        aria-labelledby="customized-dialog-title"
        open={langDialog}
      >
        <DialogTitle className="txt-color-black" id="alert-dialog-slide-title">
          {
            <FormattedMessage
              id="doYouWantToChangeLanguage"
              defaultMessage="Dili dəyişdirmək istəyirsən?"
            ></FormattedMessage>
          }
        </DialogTitle>
        <DialogContent>
          <FormControl
            style={{ width: "100%" }}
            id="lang-select"
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-age-native-simple">
              <FormattedMessage
                id="languageWord"
                defaultMessage="Dil"
              ></FormattedMessage>
            </InputLabel>
            <Select
              native
              onChange={langChanged}
              label="Dil"
              value={localStorage.getItem("lang")}
              inputProps={{
                name: "dil",
                id: "outlined-age-native-simple",
              }}
            >
              <option value={"Azerbaijan"}>Azerbaijan</option>
              <option value={"English"}>English</option>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={changeDialog}>
            <FormattedMessage
              id="close"
              defaultMessage="Bağla"
            ></FormattedMessage>
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
              label={
                <FormattedMessage
                  id="username"
                  defaultMessage="İstifadəçi adı"
                ></FormattedMessage>
              }
              placeholder="İstifadəçi adı"
              multiline
              variant="outlined"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={passwordOnChange}
              id="outlined-textarea"
              label={
                <FormattedMessage
                  id="password"
                  defaultMessage="Şifrə"
                ></FormattedMessage>
              }
              placeholder="Şifrə"
              multiline
              variant="outlined"
            />
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={changeLoginDialog} autoFocus>
            Bağla
          </Button>
          <Button onClick={submitAdminLogin} autoFocus>
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
            <Grid></Grid>
            <Grid style={{ flex: 1, fontSize: "1.5rem" }}>
              <span id="my-name">
                <FormattedMessage
                  id="myName"
                  defaultMessage="Asgar Aliyev"
                ></FormattedMessage>
              </span>
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
              <ListItem
                button
                onClick="#aboutme"
                key={
                  <FormattedMessage
                    id="aboutMeForDrawer"
                    defaultMessage="Haqqımda"
                  ></FormattedMessage>
                }
              >
                <ListItemIcon style={{ "font-size": "1.5rem" }}>
                  <i class="fas fa-address-card"></i>
                </ListItemIcon>

                <a href="#about-me" className="link">
                  <ListItemText
                    className="color-black"
                    primary={
                      <FormattedMessage
                        id="aboutMeForDrawer"
                        defaultMessage="Haqqımda"
                      ></FormattedMessage>
                    }
                  />
                </a>
              </ListItem>
              <ListItem
                button
                key={
                  <FormattedMessage
                    id="myServicesForDrawer"
                    defaultMessage="Xidmətlərim"
                  ></FormattedMessage>
                }
              >
                <ListItemIcon style={{ "font-size": "1.5rem" }}>
                  <i class="fas fa-toolbox"></i>
                </ListItemIcon>
                <a href="#services" className="link">
                  <ListItemText
                    className="color-black"
                    primary={
                      <FormattedMessage
                        id="myServicesForDrawer"
                        defaultMessage="Xidmətlərim"
                      ></FormattedMessage>
                    }
                  />
                </a>
              </ListItem>
              <ListItem button key={"Portfolio"}>
                <ListItemIcon style={{ "font-size": "1.5rem" }}>
                  <i class="fas fa-briefcase"></i>
                </ListItemIcon>
                <a href="#portfolio" className="link">
                  <ListItemText className="color-black" primary={"Portfolio"} />
                </a>
              </ListItem>
              <ListItem
                button
                key={
                  <FormattedMessage
                    id="blogs"
                    defaultMessage="Bloqlar"
                  ></FormattedMessage>
                }
              >
                <ListItemIcon style={{ "font-size": "1.5rem" }}>
                  <i class="fas fa-rss-square"></i>
                </ListItemIcon>
                <ListItemText
                  className="color-black"
                  primary={
                    <FormattedMessage
                      id="blogs"
                      defaultMessage="Bloqlar"
                    ></FormattedMessage>
                  }
                />
              </ListItem>
              <ListItem
                button
                key={
                  <FormattedMessage
                    id="contact"
                    defaultMessage="Əlaqə"
                  ></FormattedMessage>
                }
              >
                <ListItemIcon style={{ "font-size": "1.5rem" }}>
                  <i class="fas fa-phone-volume"></i>
                </ListItemIcon>
                <a href="#contact" className="link">
                <ListItemText
                  className="color-black"
                  primary={
                    <FormattedMessage
                      id="contact"
                      defaultMessage="Əlaqə"
                    ></FormattedMessage>
                  }
                />
                </a>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem
                onClick={changeDialog}
                button
                key={
                  <FormattedMessage
                    id="changeLang"
                    defaultMessage="Dili Dəyişdir"
                  ></FormattedMessage>
                }
              >
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText
                  className="color-black"
                  primary={
                    <FormattedMessage
                      id="changeLang"
                      defaultMessage="Dili Dəyişdir"
                    ></FormattedMessage>
                  }
                />
              </ListItem>
              <ListItem
                button
                key={
                  <FormattedMessage
                    id="myCv"
                    defaultMessage="Mənim CV-im"
                  ></FormattedMessage>
                }
              >
                <ListItemIcon style={{ "font-size": "1.5rem" }}>
                  <i class="fas fa-file"></i>
                </ListItemIcon>
                <a href={resume}>
                  <ListItemText
                    className="color-black"
                    primary={
                      <FormattedMessage
                        id="myCv"
                        defaultMessage="Mənim CV-im"
                      ></FormattedMessage>
                    }
                  />
                </a>
              </ListItem>
              <ListItem onClick={changeLoginDialog} button key={"Admin Panel"}>
                <ListItemIcon style={{ "font-size": "1.5rem" }}>
                  <i class="fas fa-user-circle"></i>
                </ListItemIcon>
                <ListItemText className="color-black" primary={"Admin Panel"} />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </MuiThemeProvider>
  );
}
