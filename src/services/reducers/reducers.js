import {
    CLOSE_MODAL,
    GET_INGREDIENTS,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_SUCCESS,
    OPEN_MODAL
} from '../actions/menuList';

const initialState = {
    items: [],
    itemsGeting: true,
    itemsGet: true,
    itemsGetFailed: false,
    modalIngredient: {}
};

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                itemsGeting: false,
                items: action.items
            }
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                items: [],
                itemsGetFailed: true,
            }
        }
        case GET_INGREDIENTS: {
            return {
                ...state,
                itemsGet: true,
                itemsGetFailed: false,
            }
        }
        case OPEN_MODAL: {
            return {
                ...state,
                modalIngredient: action.ingredient
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                modalIngredient: {}
            }
        }
        default: {
            return state;
        }
    }
}