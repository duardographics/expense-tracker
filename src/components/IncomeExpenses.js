import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(res => res.amount);
    const incomes = amounts.filter(j => j>0).reduce((a,b)=> a+b).toFixed(2);
    const expenses = amounts.filter(j => j<0).reduce((a,b)=> a+b).toFixed(2);


    return (
       <div className="inc-exp-container">
           <div>
               <h4>Ingresos</h4>
               <p className="money plus">{incomes}€</p>
           </div>
           <div>
               <h4>Gastos</h4>
               <p className="money minus">{expenses}€</p>
           </div>
       </div>
    )
}
