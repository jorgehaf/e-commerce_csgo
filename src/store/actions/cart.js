const Add = (cart, army) => {
    return {
        type: 'ADD_TO_CART',
        cart,
        army
    }
}

const AddItem = (cart, army) => {
    return {
        type: 'ADD_ITEM',
        cart,
        army
    }
}

const RemoveItem = (cart, army) => {
    return {
        type: 'REMOVE_ITEM',
        cart,
        army
    }
}

const DeleteItem = (cart, army) => {
    return {
        type: 'DELETE_ITEM',
        cart,
        army
    }
}

const ModifyCart = (cart, army) => {
    return {
        type: 'MODIFY_CART',
        cart,
        army
    }
}

export default {
    Add,
    AddItem,
    RemoveItem,
    DeleteItem,
    ModifyCart
}