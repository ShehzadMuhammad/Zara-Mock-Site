import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { connect } from 'react-redux';
import { resetItems } from '../actions/shoppingCartActions';

class SubmitDialog extends React.Component {

  state = {
    open: false,
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };


  onSubmit = () => {
  
    this.props.resetItems();

    this.toggle();
    alert("Transaction Complete");
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <Button variant="outlined" color="primary" paddingbottom="20px" onClick={this.toggle}>
          Checkout
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
              <h3>Checkout Items</h3>
              <p>Total Price: {this.props.totalPrice}</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggle} color="primary">
              Exit
            </Button>
            <Button onClick={this.onSubmit} color="primary" autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


SubmitDialog.propTypes = {
  resetItems: PropTypes.func.isRequired,
  cartItem: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cartItem: state.cartItem
});

export default connect(mapStateToProps, { resetItems })(SubmitDialog);