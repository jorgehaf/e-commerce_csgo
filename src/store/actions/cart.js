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

const ChangeCart = (localCart) => {
    return {
        type: 'CHANGE_CART',
        localCart
    }
}

export default {
    Add,
    AddItem,
    RemoveItem,
    DeleteItem,
    ChangeCart
}