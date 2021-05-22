import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #F0F2F5;
        --red: #E62E4D;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #FFF;

        --input-background: #E7E9EE;
    }

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px 
        }
    }

    body {
        -webkit-font-smoothing: antialiased;

        background-color: var(--background-color);
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    /*MODAL-OVERLAY*/
    .react-modal-overlay {
        display: flex;
        align-items: center;
        justify-content: center;

        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background: rgba(0, 0, 0, 0.5);

        position: fixed;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;

        padding: 3rem;

        background-color: var(--background-color);

        position: relative;
    }

    .react-modal-close {
        top: 1.5rem;
        right: 1.5rem;

        border: none;

        background: transparent;

        position: absolute;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`