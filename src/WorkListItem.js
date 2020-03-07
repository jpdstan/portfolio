import { Avatar, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import styled from "styled-components";

class WorkItem extends React.Component {
  createStyledAvatar() {
    return styled(Avatar)({
      width: "140px",
      height: "140px"
    });
  }

  render() {
    const { companyName, year, role, description, pathToImage } = this.props;
    const StyledAvatar = this.createStyledAvatar();
    return (
      <Fragment>
        <Grid item xs={6} sm={3}>
          <StyledAvatar alt="me" src={pathToImage} />
        </Grid>
        <Grid item xs={18} sm={9}>
          <h3>
            {companyName} ({year})
          </h3>
          <h4>{role}</h4>
          <p>{description}</p>
        </Grid>
      </Fragment>
    );
  }
}

WorkItem.propTypes = {
  companyName: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pathToImage: PropTypes.string.isRequired
};

export default WorkItem;
