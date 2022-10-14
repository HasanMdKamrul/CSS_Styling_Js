import React from 'react';
import { division } from '../../utilities/common';
import multiply from '../../utilities/multiply';

const Shoes = () => {
    const multiplyValue = multiply(2,2);
    const divisionValue = division(100,5);
    return (
        <div>
            <h2>Shoes Component</h2>
            <p>Multiply Value:{multiplyValue} </p>
            <small>Divison value:{divisionValue}</small>
        </div>
    );
};

export default Shoes;