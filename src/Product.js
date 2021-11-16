import React from 'react';

function Product({ productStatus, bagImage, bagName, bagPrice }) {
    return (
        <article>
            <span>{productStatus}</span>
            <img src={bagImage} alt={bagName} />
            <p>{bagName}</p>
            <h4>{bagPrice}</h4>
        </article>
    );
}

export default Product;