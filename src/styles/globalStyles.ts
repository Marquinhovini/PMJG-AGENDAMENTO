import { createGlobalStyle } from "styled-components";

export const MyGlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;

    body {
        font-family: Arial;
        background-color: white;
    }
}`

export default MyGlobalStyles