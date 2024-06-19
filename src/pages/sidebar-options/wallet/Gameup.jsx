import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layoutdesign from '../../Layout/Layoutdesign';
import { addMoney } from '../../../containers/reducer/walletSlice';
import '../../../Styles/wallet.css';

const Wallet = () => {
    const dispatch = useDispatch();
    const balance = useSelector((state) => state.wallet.balance);
    const [amount, setAmount] = useState('');

    const handleAddMoney = () => {
        const addedAmount = parseFloat(amount);
        if (isNaN(addedAmount) || addedAmount <= 0) {
            alert('Please enter a valid amount');
            return;
        }
        dispatch(addMoney(addedAmount));
        setAmount('');
    };

    return (
        <Layoutdesign>
            <div className="wallet-container">
                <h2>My Wallet</h2>
                <div className="wallet-balance">
                    <h3>Balance: ₹{balance}</h3>
                </div>
                <div className="wallet-add-money">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount to add"
                        className="wallet-input"
                    />
                    <button onClick={handleAddMoney} className="wallet-add-button">Add Money</button>
                </div>
                <div className="wallet-transactions">
                    <h4>Recent Transactions</h4>
                    <ul>
                        <li>₹500 credited on 10th June, 2024</li>
                        <li>₹200 debited on 9th June, 2024</li>
                        <li>₹1000 credited on 8th June, 2024</li>
                    </ul>
                </div>
            </div>
        </Layoutdesign>
    );
};

export default Wallet;
