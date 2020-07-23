const initialState = {
    cartItems: []
}

const cartApp = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM_TO_CART':
            return Object.assign({}, state, {
                cartItems: [
                    ...state.cartItems,
                    action.item
                ]
            })
        case 'REMOVE_ITEM_FROM_CART':
            return Object.assign({}, state, {
                cartItems: state.cartItems.filter(item => item.uuid !== action.uuid)
            })
        default:
            return state
    }
}

export default cartApp