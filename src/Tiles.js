import React from 'react';

function Tiles({ tileText, tileTitle, brandImage }) {
    return (
        <section>
            <img src={brandImage} alt="" />
            <h2>{tileTitle}</h2>
            <p>{tileText}</p>
        </section>
    );
}

export default Tiles;