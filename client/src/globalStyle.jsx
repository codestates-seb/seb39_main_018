import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family:'SUIT-Medium';
        /* scroll-behavior: smooth; */
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
    @font-face {
    font-family: 'SUIT-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Y_Spotlight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/Y_Spotlight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Gosanja';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/Gosanja.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

export default GlobalStyle;
