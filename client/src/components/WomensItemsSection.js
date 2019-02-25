import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ViewItemDialog from './ViewItemDialog';

import { connect } from 'react-redux';
import { getWomensItems } from '../actions/womensItemsActions';

import './Section.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});



class WomensItemsSection extends Component {

	componentDidMount(){
		this.props.getWomensItems();
	}

	render(){
		const { womensItems } = this.props.womensItem;
		return(
			<div className={styles.root}>

				<Grid container spacing={24}>
			 		{ womensItems && womensItems.map(({_id, itemName, image, description, price}) => (

			 		<Grid item xs={12} sm={6}>
			 			<Paper className={styles.paper}>
				 		 	<h1>{itemName}</h1>
				 		 	 <h3>${price}</h3>
				 		 	 <img className="sectionImage" src={image} alt="" />
				 		 	 <ViewItemDialog id={_id} itemName={itemName} description={description} price={price} image={image} />
				 		 </Paper>
		             </Grid>
			  		))}
			 	</Grid>
			</div>
		);
	}
}

WomensItemsSection.propTypes = {
	getWomensItems: PropTypes.func.isRequired,
	womensItem: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	womensItem: state.womensItem
});

export default withStyles(styles)(connect(
	mapStateToProps, 
	{ getWomensItems }
)(WomensItemsSection));
