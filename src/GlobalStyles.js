// 글로벌하게 적용되는 스타일을 모아서 작성

import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import Background from "./img/dot-grid.png"; // 이미지는 public 폴더에

const GlobalStyles = createGlobalStyle`
    //reset.css 를 리액트에서 쉽게 사용
    ${reset}

    //font 가져오기
    @font-face {
        font-family: 'Stylish', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Stylish&display=swap');
        font-weight: normal;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
    }

    body {
        min-height: 100vh - 60px;
        background-image: url(${Background});
        font-family: 'Stylish', sans-serif;
    }

    a {
        text-decoration: none;
        color: black;
    }

    button {
        cursor: pointer;
    }

    input,
    textarea,
    button {
        border: none;
        background-clolr: transparent;
        font-family: 'Stylish', sans-serif;
        outline: none;
    }
`;

export default GlobalStyles;