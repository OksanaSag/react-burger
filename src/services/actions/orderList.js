import {url} from '../../components/utils/constans'

const createOrders = (ingredients) => {
    return fetch(`${url}/orders`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ ingredients })
    })
}

export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT_FROM_ORDER';


export function createOrder(ordersId) {
    return function (dispatch) {
        dispatch({
            type: CREATE_ORDER
        })
        createOrders(ordersId)
        .then((res) => {
               if (res.ok) {
                   return res.json()
               }
               return Promise.reject(`Ошибка ${res.status}`)
               })
            .then((data) => {
                dispatch({ type: CREATE_ORDER_SUCCESS, orderNumber: data.order.number });
            })
            .catch(err => {
                dispatch({ type: CREATE_ORDER_FAILED, err })
            })
    }
}