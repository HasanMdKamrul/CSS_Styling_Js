import React from 'react';
import { add } from '../utilities/common';
import substraction from '../utilities/Substraction';

const Cosmetics = () => {
    const numberOne = 10;
    const numberTwo = 5;
    const subValue = substraction(numberOne,numberTwo);
    const addValue = add(5,5);
    return (
        <div>
            <h1>Cosmetics Component</h1>
            <small>Add value:{addValue} </small>
            <p>Substract Value:{subValue} </p>
        </div>
    );
};

export default Cosmetics;