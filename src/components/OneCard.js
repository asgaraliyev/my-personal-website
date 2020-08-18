import React, { Component } from "react";
import butaeducation from "../photos/butaeducation.png";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
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

    return (
      <MuiThemeProvider theme={themeColors}>
        <br></br>
        <br></br>
        <div
          className="block-3 d-md-flex ftco-animate"
          data-scrollax-parent="true"
        >
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  src="http://www.butaeducation.com/static/img/logos/icon.webp"
                ></Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Buta Education Xaricdə Təhsil Mərkəzi"
              subheader="İyul 2020"
            />
            <CardMedia
              style={{ backgroundImage: `url(${butaeducation})` ,width:"100%",height:"200px"}}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" component="p">
              Buta Education şirkəti 2015-ci ildən bəri tələbələrin xaricdə təhsil almasının təşkili xidmətini göstərir. 

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
