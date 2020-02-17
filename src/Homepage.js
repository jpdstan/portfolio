import { Avatar, Container, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import "./Homepage.css";
import WorkList from "./WorkList";

export class Homepage extends React.Component {
  createStyledAvatar() {
    return styled(Avatar)({
      "margin-top": "32px",
      width: "160px",
      height: "160px"
    });
  }
  render() {
    const StyledAvatar = this.createStyledAvatar();
    return (
      <Container maxWidth="md">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <StyledAvatar alt="me" src="/img/stan.jpg" />
          </Grid>
          <Grid item>
            <h1>Stanley Kwong</h1>
          </Grid>
        </Grid>
        <WorkList />
      </Container>
    );
  }
}

export default Homepage;
