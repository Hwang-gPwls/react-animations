import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    html{
        font-family: "Noto-Sans", sans-serif;
        scroll-behavior: smooth;
        background-color: #a7aabc;
    }
    .fixed{
        width: 100%;
        top: 0;
        left: 0;
        position: fixed;
    }
`;

export default GlobalStyle;
