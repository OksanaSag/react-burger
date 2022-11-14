import OrderDetailsStyle from './OrderDetails.module.css';
import image from "../images/done.svg";
import PropTypes from 'prop-types';

export default function OrderDetail ({ orderId }) {
    return (
        <div className={OrderDetailsStyle.container}>
            <p className='text text_type_digits-large mt-4'>
                {orderId}
            </p>
            <p className="text text_type_main-medium mt-8">
                идентификатор заказа
            </p>
            <img className='mb-15 mt-15' src={image}  alt='Иконка' />
            <p className="text text_type_main-default">
                Ваш заказ начали готовить
            </p>
            <p className='text text_type_main-default text_color_inactive mt-2 mb-30'>
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    )
}

OrderDetail.propTypes = {
    orderId: PropTypes.number
}