import React from 'react';

function FruitCounter({objectKey, fruitName, counter, handleFruitChange}) {
    return (
        <article className={counter > 0 ? "fruit-counter-clicked" : "fruit-counter"}>
            <p>{fruitName}</p>
            <button
                type="button"
                id="subtract"
                name={objectKey}
                disabled={counter === 0}
                onClick={handleFruitChange}
            >
                -
            </button>
            <p id="fruit-number">{counter}</p>
            <button
                type="button"
                id="add"
                name={objectKey}
                onClick={handleFruitChange}
            >
                +
            </button>
        </article>
    );
}

export default FruitCounter;