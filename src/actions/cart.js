
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART"

let cartId = 0

export function addItemToCart(item){
    return {
        type: ADD_ITEM_TO_CART,
        cartId: cartId++,
        item: {...item, cartId: cartId }
    }
}

export function removeItemFromCart(cartId){
    return {
        type: REMOVE_ITEM_FROM_CART,
        cartId
    }
}