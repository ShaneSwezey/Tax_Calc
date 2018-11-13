import React from 'react';

const Title = ({headerTitle, imgSrc}) => (
    <>
    <img src={imgSrc} />
    <h1>{headerTitle}</h1>
    </>
);

export default Title;