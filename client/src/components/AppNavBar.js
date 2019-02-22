import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};


class AppNavBar extends Component {
    render(){
      return(
      <div>
        <div className={styles.root}>
            <AppBar color="light" position="static">
              <Toolbar>
                <Typography variant="h6" color="dark" className={styles.grow}>
                  ZARA
                </Typography>
                <Button color="dark">Mens</Button>
                <Button color="dark">Womens</Button>
                <Button color="dark">Shoes</Button>
              </Toolbar>
            </AppBar>
          </div>
        </div>
        );
    }
}


export default AppNavBar;

