import React, { Component } from "react";
import butaeducation from "../photos/butaeducation.webp";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default class OneCard extends Component {
  render() {
    const themeColors = createMuiTheme({
      palette: {
        common: {
          white: "#fce130",
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
          main: "#fce130",
          light: "#fce130",
          dark: "#fce130",
        },
      },
    });
    const { work } = this.props;

    return (
      <MuiThemeProvider theme={themeColors}>
        <div
          id="work-card"
          className="block-3 d-md-flex ftco-animate work-card"
          data-scrollax-parent="true"
        >
          <Card
            style={{
              margin: "10px  0px",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  className="work-avatar"
                  aria-label="recipe"
                  src={work.photo}
                ></Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={work.employer}
              className="work-name"
              subheader={work.time}
            />
            <CardMedia
              className="work-photo"
              style={{
                backgroundImage: `url(${butaeducation})`,
                width: "100%",
              }}
              title={work.employer}
            />
            <CardContent>
              <Typography variant="body2"  className="work-content" component="p">
                {work.workContent}
                <br></br>
               <a  style={{color:"black"}} href="http://www.butaeducation.com/" target="_blank" rel="noopener noreferrer">www.butaeducation.com</a>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites"></IconButton>
              <IconButton aria-label="share"></IconButton>
              <IconButton aria-label="show more"></IconButton>
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}
