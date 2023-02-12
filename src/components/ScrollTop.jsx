import React from 'react';
import styled from 'styled-components';

const Arrow = styled.button`
    position: fixed;
    right: 3%;
    bottom: 4%;
    font-size: 2.8rem;
    background-color: transparent;
    border: 0;
    cursor: pointer;
`;


const ScrollTop = () => {
    return (
        <>
            <Arrow onClick={e => window.scrollTo(0, 0)} >🔝</Arrow>
        </>
    )
}

export default ScrollTop