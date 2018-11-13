import React from 'react';

const Title = ({headerTitle, imgSrc, altMessage}) => (
        <h1>
            <img src={imgSrc} alt={altMessage} />
            {headerTitle}
        </h1>
);

export default Title;