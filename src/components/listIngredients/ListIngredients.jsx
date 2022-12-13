import React, { useRef } from "react";
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import listIngredientsStyle from  './ListIngredients.module.css';
import { useDrag, useDrop } from "react-dnd";
import { ingredientTypes } from '../../utils/ingredientTypes';

export default function ListIngredients ({ ingredient, index, moveIngredient, handleClose, isLocked }) {
    const {id, key, name, price, image } = ingredient;
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: 'ingredients',
        collect(monitor) {
          return {
            handlerId: monitor.getHandlerId(),
          }
        },
        drop(item, ) {
          if (!ref.current) {
            return
          }
          const index = item.index
        moveIngredient(index, id)
        },
      });
      const [, drag] = useDrag({
        type: 'ingredients',
        item: () => {
          return { id, index }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
      drag(drop(ref));
      const handleDelete = () => {
        handleClose(key);
      }

    return (
        <div  ref={ref} className={listIngredientsStyle.container}>
            <DragIcon type="primary" />
            <ConstructorElement
                isLocked={isLocked}
                text={name}
                price={price}
                thumbnail={image}
                handleClose={handleDelete}
            />
        </div>
    )
};

export const ingredientPropTypes = {
         ingredients: PropTypes.arrayOf( PropTypes.shape(ingredientTypes)),
         bun: PropTypes.shape(ingredientTypes)
     }
     ListIngredients.propTypes = ingredientPropTypes