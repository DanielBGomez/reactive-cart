
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART"

export function addItemToCart(item){
    return {
        type: ADD_ITEM_TO_CART,
        uuid: item.uuid,
        item: item
    }
}

export function removeItemFromCart(uuid){
    return {
        type: REMOVE_ITEM_FROM_CART,
        uuid
    }
}