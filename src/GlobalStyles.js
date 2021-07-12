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
        font-size: 0.8rem;
            
        @media (min-width:600px){
            font-size: 1rem;
        }
        
        ${({ theme }) => css`
            background-color: ${theme.surface2};
            font-family: ${theme.ffPrimary};
        `}
    }
`;