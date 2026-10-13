function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART": {
            const existingProduct = state.find((item) => item.id === action.product.id);

            if (existingProduct) {
                return state.map((item) =>
                {
                    if (item.id === action.product.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                });
            } else {
                return [
                    ...state,
                    {
                        ...action.product,
                        quantity: 1
                    }
                ];
            }
        }
        case "INCREASE_QUANTITY": {
            return state.map((item) => {
                if (item.id === action.productId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            });
        }
        case "DECREASE_QUANTITY": {
            return state.map((item)=> {
                if (item.id === action.productId) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }
                return item;
            }).filter((item) => item.quantity > 0);
        }
        case "REMOVE_FROM_CART": {
            return state.filter((item) => item.id !== action.productId);
        }
        
        default: return state;
    }
}
export default cartReducer;