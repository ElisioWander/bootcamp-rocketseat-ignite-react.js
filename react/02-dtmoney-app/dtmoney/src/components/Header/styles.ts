import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    
    margin: 0 auto;
    padding: 2rem 1rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        height: 3rem;

        font-size: 1rem;

        padding: 0 2rem;

        border: none;
        border-radius: 0.25rem;

        color: #FFF;
        background-color: var(--blue-light);

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

`