import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .___gatsby {
        position: absolute;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
