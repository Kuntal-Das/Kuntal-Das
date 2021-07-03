import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline-offset: 1px;
        -moz-outline-radius: 5px;

        :focus{
            outline: 2px solid ${({ theme }) => theme.brand}
        }
    }
    
    body{
        block-size: 100%;
        ${({ theme }) => css`
            background-color: ${theme.surface1};
            color: ${theme.brand};
            font-family: ${theme.ffPrimary};
            font-size: 1rem;
        `}
    }
`;