//import action types
import { INCR, DECR } from './Product.action'
let initialState = {
    qty: 2
}

let productReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCR':
            return { qty: state.qty + 1 }
        case 'DECR':
            return { qty: state.qty - 1 }
        default:
            return state
    }
}

export { productReducer } 
