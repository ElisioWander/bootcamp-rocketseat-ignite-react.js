import styled from 'styled-components'

export const Container = styled.form`
    h2 {
        font-size: 1.5rem;

        color: var(--text-title);

        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        height: 4rem;

        padding: 0 1.5rem;
        
        font-size: 1rem;
        font-weight: 400;

        border: 1px solid #D7D7D7;
        border-radius: 0.25rem;


        background-color: var(--input-background);

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        height: 4rem;

        margin-top: 1.5rem;
        padding: 0 1.5rem;

        font-size: 1rem;
        font-weight: 600;

        border: none;
        border-radius: 0.25rem;

        color: #FFF;
        background-color: var(--green);

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`