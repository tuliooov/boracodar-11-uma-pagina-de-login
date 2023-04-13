import { createGlobalStyle } from 'styled-components'

import background from '../assets/background.png'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button, label {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
    }

    #root {
        min-height: 100vh;
        min-width: 28rem;

        overflow: auto;

        background-color: ${(props) => props.theme['gray-50']};

        @media (min-width: 832px) {
            display: flex;

            &::after {
                content: '';
                display: block;
                width: 50%;
                min-height: 100vh;

                background: url(${background}) no-repeat;
                background-size: cover;
            }
        }
    }

    a {
        color: ${(props) => props.theme['purple-700']};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`
