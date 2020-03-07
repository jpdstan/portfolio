import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItem
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import "./Homepage.css";
import WorkList from "./WorkList";

export class Homepage extends React.Component {
  createStyledAvatar() {
    return styled(Avatar)({
      // "margin-top": "32px",
      // "margin-bottom": "32px",
      width: "160px",
      height: "160px"
    });
  }
  render() {
    const StyledAvatar = this.createStyledAvatar();
    return (
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="center"
          // alignItems="center"
          spacing={4}
        >
          <Grid item xs={6} sm={3}>
            <StyledAvatar alt="me" src="/img/stan.jpg" />
            <h1>Stanley Kwong</h1>
            <List>
              <ListItem>Hello</ListItem>
            </List>
          </Grid>
          <Grid item xs={18} sm={9}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <WorkList />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Homepage;
