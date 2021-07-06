import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Balance = ()=> {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(res => res.amount);
    const total = amounts.reduce((a, b) => (a + b)).toFixed(2);

    return (
    <>
       <h4>Balance actual</h4>
       <h1>{total}€</h1>
    </>
    )
}
