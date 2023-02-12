import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EmojiCard from './EmojiCard';
import data from '../emojiList.json';


const Wrapper = styled.div`
    width: 85%;
    margin: 3rem auto;
`;

const Input = styled.input`
    width: 95%;
    font-size: 2rem;
    display: block;
    margin: 0 auto;
    padding: 0.8rem 0.6rem;
    font-weight: lighter !important;
`;

const Container = styled.div`
    width: 90%;
    margin: 2rem auto;
    flex-direction: column;
    gap: 1rem;

    p {
        font-size: 1.8rem;
    }
`;

const Main = () => {
    // console.log(data)

    const [search, setSearch] = useState("");
    const [count, setCount] = useState(10);

    const loadData = () => {
        if (window.innerHeight + window.pageYOffset + 10 >= document.documentElement.scrollHeight)
            setCount(prev => prev + 10);
    }

    // infinity scroll
    useEffect(() => {
        window.addEventListener("scroll", loadData)
        return () => window.removeEventListener("scroll", loadData)

    }, [])

    return (
        <>
            <Wrapper>
                <Input type="text" name="search" id="search" placeholder='search...' value={search} onChange={e => setSearch(e.target.value)} />

                <Container className='d-flex' >
                    {
                        data.filter(ele => (
                            ele.keywords.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                        )).length
                        
                        ? 
                        
                        data.filter(ele => (
                            ele.keywords.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                        )).slice(0, count).map((ele, i) => (
                            <EmojiCard num={i + 1} key={i} emoji={ele.symbol} emojiName={ele.title} />
                        ))

                        :

                        <p>No emoji found 😔</p>
                    }

                </Container>

            </Wrapper>
        </>
    )
}

export default Main