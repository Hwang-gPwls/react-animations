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
        color:black;
        line-height: 1.2;
        background-color:#DBD2C9;
    }
    .fixed{
        width: 100%;
        top: 0;
        left: 0;
        position: fixed;
    }
`;

export default GlobalStyle;
