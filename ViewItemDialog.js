import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import { connect } from 'react-redux';
import { addItem } from '../actions/shoppingCartActions';

class ViewItemDialog extends React.Component {

  state = {
    open: false,
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };


  onSubmit = () => {
    const newItem = {
      id: this.props.id,
      itemName: this.props.itemName,
      price: this.props.price,
      image: this.props.image,
      quantity: 1,
      totalPrice: this.props.price
    }

    this.props.addItem(newItem);

    this.toggle();
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <Button variant="outlined" color="primary" paddingbottom="20px" onClick={this.toggle}>
          View Item
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.toggle}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{this.props.itemName}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <h3>${this.props.price}</h3>
              <p>{this.props.description}</p>
              <img className="sectionImage" src={this.props.image} alt="" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggle} color="primary">
              Exit
            </Button>
            <Button onClick={this.onSubmit} color="primary" autoFocus>
              Add To Cart
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


ViewItemDialog.propTypes = {
  addItem: PropTypes.func.isRequired,
  cartItem: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cartItem: state.cartItem
});

export default connect(mapStateToProps, { addItem })(ViewItemDialog);