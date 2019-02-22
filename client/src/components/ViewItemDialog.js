import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class ViewItemDialog extends React.Component {
  constructor(props){
    super(props);

  }
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <Button variant="outlined" color="dark" paddingBottom="20px" onClick={this.handleClickOpen}>
          View Item
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{this.props.itemName}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <h3>${this.props.price}</h3>
              <p>{this.props.description}</p>
              <img className="sectionImage" src={this.props.image} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Exit
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Add To Cart
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ViewItemDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ViewItemDialog);