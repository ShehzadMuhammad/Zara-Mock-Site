import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import CarouselPage from './CarouselPage';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading: {
    paddingTop: '20px',
     flex: 1,
    justifyContent: 'center',
  },
  image: {
  	border: '1px solid black'
  }
});



class HomeSection extends React.Component {
  render() {
  	const { classes } = this.props;
  
    return (
    	<div className={classes.root}>
     		<Grid container className={classes.grow}>
   				<Typography variant="h4" align="center" className={classes.heading}>Welcome To Zara</Typography>
      			<Grid item xs={12} sm={12}>
      				<Paper className={classes.paper}>
				 		<CarouselPage />
				 	</Paper>
		         </Grid>
      		</Grid>
      	</div>
    );
  }
}

HomeSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSection);