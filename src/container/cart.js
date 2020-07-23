import { connect } from 'react-redux'
import { removeItemFromCart } from '../actions/cart'
import Cart from '../components/Cart'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: cartId => {
            return dispatch(removeItemFromCart(cartId))
        }
    }
}

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)

export default CartContainer