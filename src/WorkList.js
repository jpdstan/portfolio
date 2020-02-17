import { Avatar, Grid } from "@material-ui/core";
import React, { Fragment } from "react";

import WorkListItem from "./WorkListItem";

import workItems from "./work";

class WorkList extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {workItems.map(props => (
          <WorkListItem {...props} />
        ))}
      </Grid>
    );
  }
}
export default WorkList;
