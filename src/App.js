import React, {useEffect} from "react";
import styled, { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

// component
import Home from "./Home";
import Form from "./Form";
import Header from "./Header";

//style
import GlobalStyles from "./GlobalStyles";
import theme from "./theme";

//redux
import { loadMusicsFB } from "./redux/module/musics";

function App() {
  const dispatch =useDispatch();

  // App.js가 새로 렌더될 때마다 loadMusicsFB 함수를 dispatch 합니다.
  useEffect(() => {
    dispatch(loadMusicsFB());
  }, [dispatch]);

  return (
    // ThemeProvider를 활용하면 theme을 사용할 수 있습니다
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/music/add" component={Form} />
            <Route path="/music/:id/edit" component={Form} />
          </Switch>
        </Container>
      </div>
    </ThemeProvider>
  );
}

const Container = styled.div`
  margin-top: 40px;
  padding: 0 30px;

  // theme.js에서 지정한 문자열을 이용 - @media screen and (min-width: 768px) {} 와 같은 뜻이 됩니다.
  // 짧게 쓰고 유지보수성을 높이기 위해 theme으로 등록했습니다.
  ${({ theme }) => theme.device.tablet} {
    margin-top: 60px;
    padding: 0 50px;
  }

  ${({ theme }) => theme.device.desktop} {
    max-width: 1400px;
    margin: 60px auto 0 auto;
  }
`;

export default App;