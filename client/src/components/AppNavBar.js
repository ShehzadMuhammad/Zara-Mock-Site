import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class AppNavBar extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar  color="inherit" position="static">
          <Toolbar>
            <Typography variant="h6" align="left" className={classes.grow}>
              ZARA
            </Typography>
           

              <Button component={Link} to="/Mens">Mens</Button>
              <Button  component={Link} to="/Womens">Womens</Button>
              <Button  component={Link} to="/Shoes">Shoes</Button>
                <IconButton
                  color="inherit" component={Link} to="/Shopping Cart"
                >
                  <ShoppingCart />
                </IconButton>
              
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppNavBar);
