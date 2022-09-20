import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
    
    :root {
        // Color
        --lightgray : #d9d9d9;
        --gray : #aaaaaa;
        --red : red;
        --skyblue : #2a86e2;
        --white : #fdfeff;
        --darkgray : #6b6b6b;
        
        // font-size
        --f-xsmall : 9px;
        --f-small : 13px;
        --f-medium : 20px;
        --f-large : 28px;
        --f-xlarge : 36px;

        //border-radius
        --b-xsmall : 5px;
        --b-small : 10px;
        --b-medium : 15px;
        --b-large : 20px;
        --b-xlarge : 25px;
    }
`;

export default GlobalStyle;
