import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ViewItemDialog from './ViewItemDialog';

import { connect } from 'react-redux';
import { getShoesItems } from '../actions/shoesItemsActions';

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



class ShoesItemsSection extends Component {

	componentDidMount(){
		this.props.getShoesItems();
	}

	render(){
		const { shoesItems } = this.props.shoesItem;
		return(
			<div className={styles.root}>

				<Grid container spacing={24}>
			 		{ shoesItems && shoesItems.map(({_id, itemName, image, description, price}) => (

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

ShoesItemsSection.propTypes = {
	getShoesItems: PropTypes.func.isRequired,
	shoesItem: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	shoesItem: state.shoesItem
});

export default withStyles(styles)(connect(
	mapStateToProps, 
	{ getShoesItems }
)(ShoesItemsSection));
