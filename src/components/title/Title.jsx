import React from 'react';

const Title = ({headerTitle, imgSrc, altMessage}) => (
    <React.Fragment>
        <img src={imgSrc} alt={altMessage}/>
        <h1>{headerTitle}</h1>
    </React.Fragment>
);

export default Title;