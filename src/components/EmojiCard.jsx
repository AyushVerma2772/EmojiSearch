import React, { useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1rem 2rem;
    border: 2px solid red;
    width: 100%;
    justify-content: flex-start;
    gap: 1.5rem;
    border: 0.1rem solid gray;
    position: relative;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: #e5e5e5;
    }

    &:hover :last-child {
        display: inline-block;
    }

    strong {
        font-size: 1.4rem;
    }
`;

const Emoji = styled.span`
    font-size: 2.5rem;
    font-weight: bold;
`;

const EmojiName = styled.span`
    font-size: 2rem;
`;


const Copy = styled.span` 
    position: absolute;
    font-size: 1.6rem;
    right: 2%;
    color: #585858;
    display: none;
    
`;


const EmojiCard = ({ num, emoji, emojiName }) => {

    const card = useRef();

    const copyToClipBoard = () => {

        navigator.clipboard.writeText(emoji);
        card.current.style = "background-color: #cbffcb; border-color: green;"
        setTimeout(() => {
            card.current.style = "background-color: #fffefc; border-color: gray;"
        }, 500);
    }

    return (
        <>
            <Wrapper ref={card} className='d-flex' onClick={copyToClipBoard}>
                <strong>{num}.</strong>
                <Emoji>{emoji}</Emoji>
                <EmojiName>{emojiName}</EmojiName>
                <Copy>Copy</Copy>
            </Wrapper>
        </>
    )
}

export default EmojiCard