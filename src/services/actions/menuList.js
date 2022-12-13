import {getUrl} from '../../utils/api'

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const OPEN_MODAL = 'OPEN_INGREDIENT_MODAL';
export const CLOSE_MODAL = 'CLOSE_INGREDIENT_MODAL';

export function menuList (){
    return function(dispatch){
        dispatch({
            type: GET_INGREDIENTS
        });
        getUrl()
            .then(({ data }) => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    items: data,
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED,
                }) 
                console.log(err)
            })
    }
}