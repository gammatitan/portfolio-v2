import { rem } from 'polished';
import { createGlobalStyle } from 'styled-components';
import fallbackFonts from './fallbackFonts';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${(props) => props.theme.colors.darkBlue};
        font-size: ${rem('18px')};
        color: ${(props) => props.theme.colors.white};
        font-family: 'IBM Plex Sans', ${fallbackFonts};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5 {
        margin: 0;
    }

    header,
    footer,
    section,
    main {
        position: relative;
    }

    a {
        margin: 0;
        transition: all 0.2s ease;
        color: ${(props) => props.theme.colors.faintBlue};
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        opacity: 0.7;
    }

    p {
        margin: ${rem('8px')} 0 ${rem('16px')};
        line-height: 1.4em;
    }

    input,
    textarea {
        border: 0;
        padding: 8px;
        width: calc(100% - 16px);
        resize: none;
        line-height: 1.2;
    }

    button {
        background: none;
        border: none;

        &:focus {
            outline: 0;
        }
    }

    ul {
        list-style-image: url('/svg/list-bullet.svg');
    }

    video {
        width: 100%;
    }
`;

export default GlobalStyle;
