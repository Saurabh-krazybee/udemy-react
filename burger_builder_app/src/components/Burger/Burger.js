import React from 'react';
import BurgerIngredients from './BugerIngredients/BurgerIngredients'
import classes from './Burger.css'

const burger=(props)=>{
    let tarnsformedIngredients=Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredients key={igKey+i} type={igKey} />
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    })
    if(tarnsformedIngredients.length===0){
        tarnsformedIngredients=<p>Please add ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"></BurgerIngredients>
            {tarnsformedIngredients}
            <BurgerIngredients type="bread-bottom"></BurgerIngredients>
        </div>
    )
}

export default burger;