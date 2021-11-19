import React from 'react';

function Tiles({ tileText, children, tileTitle, brandImage }) {
    return (
        <section>
            <img src={brandImage} alt="" />
            <h2>{tileTitle}</h2>
            <p>{tileText}</p>
            {children}
            {/*<p>{tileText2}</p>*/}
        </section>
    );
}

export default Tiles;