import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    
    const [text, setText] = useState ('');
    const [amount, setAmount] = useState (0);

    const {addTransaction} = useContext(GlobalContext);
    
    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
        <h3>Añadir nueva transacción</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Título</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                Monto<br/>
                
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." step=".01"/>
            </div>
            <button className="btn">Añadir</button>
        </form>
        </>
    )
}
