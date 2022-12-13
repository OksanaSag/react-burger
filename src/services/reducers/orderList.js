import {
    ADD_INGREDIENTS,
    DELETE_INGREDIENT,
    CLOSE_ORDER_MODAL,
    CREATE_ORDER,
    CREATE_ORDER_FAILED,
    CREATE_ORDER_SUCCESS,
    MOVE_INGREDIENT
} from "../actions/orderList";

const moveElement = (array, dragIndex, hoverIndex) => {
    let element = array[dragIndex];
    array.splice(dragIndex, 1);
    array.splice(hoverIndex, 0, element);
}
const initialState = {
    price: 0,
    bun: {},
    ingredients: [],
    ordersId: [],
    orderNumber: null,
    orderGet: false,
    orderGetFailed: false,
    openModalIngredient: false,
    activeButton: false
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENTS: {
            const ingredient = { ...action.ingredient }
            const bun = ingredient.type === 'bun' ? ingredient : { ...state.bun };
            const ingredients = ingredient.type !== 'bun' ? [...state.ingredients, ingredient] : [...state.ingredients];
            const allIngredients = [bun, bun, ...ingredients];
            const price = allIngredients.reduce((acc, item) => {
                return Object.keys(item).length !== 0 ? acc + item.price : acc;
            }, 0);
            const ordersId = allIngredients.reduce((acc, item) => {
                return [...acc, item._id];
            }, []);
            return {
                bun,
                ingredients,
                price,
                ordersId,
                orderNumber: null,
                activeButton: Object.keys(bun).length !== 0
            }
        }
         case MOVE_INGREDIENT: {
             const move = [...state.ingredients];
             moveElement(move, action.dragIndex, action.hoverIndex);
             return {
                 ...state,
                 ingredients: move
             }
         }
        case CREATE_ORDER: {
            return {
                ...state,
                orderGet: true,
                orderGetFailed: false
            }
        }
        case CREATE_ORDER_SUCCESS: {
            return {
                price: 0,
                bun: {},
                ingredients: [],
                ordersId: [],
                orderNumber: action.orderNumber,
                orderGetFailed: false,
                openModalIngredient: true
            }
        }
        case CREATE_ORDER_FAILED: {
            return {
                ...state,
                orderGetFailed: false
            }
        }
        case CLOSE_ORDER_MODAL: {
            return {
                ...state,
               openModalIngredient: false
            }
        }
         case DELETE_INGREDIENT: {
             const deletIngredient = [...state.ingredients].filter(ingredient => ingredient.key !== action.key);
             return {
                 ...state,
                 ingredients: deletIngredient
             }
         }
        default: {
            return state;
        }
    }
}