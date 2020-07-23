import { connect } from 'react-redux'
import Cart from '../components/Cart'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.cartItems
    }
}

const CartContainer = connect(
    mapStateToProps
)(Cart)

export default CartContainer