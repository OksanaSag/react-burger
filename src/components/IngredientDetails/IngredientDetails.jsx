import PropTypes from 'prop-types';
import IngredientDetailsStyle from './IngredientDetails.module.css';

export default function IngredientDetails ({ data }) {
    const composition = data
    ? [
        {
            name: 'Калории, ккал',
            value: data.calories
        },
        {
            name: 'Белки, г',
            value: data.proteins
        },
        {
            name: 'Жиры, г',
            value: data.fat
        },
        {
            name: 'Углеводы, г',
            value: data.carbohydrates
        }
    ]
    : []

    return (
        <>
            <img src={data.image_large} alt='Изображение' className={IngredientDetailsStyle.image}/>
            <p className={IngredientDetailsStyle.container + ' mt-4 mb-8 text text_type_main-medium'}>
                {data.name}
            </p>
            <ul className={IngredientDetailsStyle.ingredientDetail + ' mt-8 mb-15'}>
                {composition.map((item, index) => (
                     <li {...item} key={index}  className={IngredientDetailsStyle.container}>
                     <span className='text text_type_main-default'>
                         {item.name}
                     </span>
                     <span className='text text_type_digits-default'>
                         {item.value}
                     </span>
                 </li>)
                )}
            </ul>
        </>
    )
}


IngredientDetails.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.number
}
