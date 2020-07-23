import { connect } from 'react-redux'
import { addItemToCart } from '../actions/cart'
import Item from '../components/Item'

const mapDispatchToProps = (dispatch) => {
    return {
        onBtnClick: (item) => {
            return dispatch(addItemToCart(item))
        }
    }
}

const ItemContainer = connect(
    null,
    mapDispatchToProps
)(Item)

export default ItemContainer