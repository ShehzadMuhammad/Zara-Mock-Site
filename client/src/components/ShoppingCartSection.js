import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import SubmitDialog from './SubmitDialog';

import { connect } from 'react-redux';
import { getItems, deleteItem, addQuantity, subtractQuantity } from '../actions/shoppingCartActions';

import './Section.css';

class ShoppingCartSection extends React.Component {
    constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleSubtractQuantity = this.handleSubtractQuantity.bind(this);
};

    componentDidMount() {
        this.props.getItems();
    }

    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    handleDelete = (id) => {
        this.props.deleteItem(id);

    }

    render(){
       const { cartItems } = this.props.cartItem;
        var total = 0; 
        
        cartItems.forEach(function(val, index) {
            total += val.totalPrice;
        })

        var myTotal = total.toFixed(2);

        return(
            <div>

            <div>
            <ul>
            {cartItems.map(({id, itemName, price, image, quantity, totalPrice}) => (

                <li key={id+1}>
                    <ul>
                        <li key={itemName+1} className="shoppingList">
                            <img className="cartImage" src={image} alt="" />
                        </li>
                        <li key={itemName+1} className="shoppingList">
                            <h3>{itemName}</h3>
                        </li>
                         <li key={itemName+1} className="shoppingList">
                             <h3>${price}</h3>
                        </li>

                        <li key={itemName+1} className="shoppingList">
                             <h3>Quantity: {quantity}</h3>
                        </li>

                        <li key={itemName+1} className="shoppingList buttonList">
                              <Button onClick={this.handleAddQuantity.bind(this, id)} color="primary">
                                    +1
                                </Button>
                        </li>
                        <li key={itemName+1} className="shoppingList buttonList">
                              <Button onClick={this.handleSubtractQuantity.bind(this, id)} color="primary">
                                    -1
                                </Button>
                        </li>
                        <li key={itemName+1} className="shoppingList buttonList">
                              <Button onClick={this.handleDelete.bind(this, id)} color="primary">
                                    Remove
                                </Button>
                        </li>


                        
                    </ul>
                        
                </li>
                ))}
            </ul>
            </div>

            <div>
                <h1>Total: ${myTotal}</h1>
                <SubmitDialog totalPrice={myTotal} />
            </div>

            </div>
        );
    }
}

ShoppingCartSection.propTypes = {
  getItems: PropTypes.func.isRequired,
  cartItem: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cartItem: state.cartItem,
  total: state.cartI
});


export default connect(mapStateToProps, { getItems, deleteItem, addQuantity, subtractQuantity })(ShoppingCartSection);