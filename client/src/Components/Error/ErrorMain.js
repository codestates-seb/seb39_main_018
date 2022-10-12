import React from 'react';
import Errs from './ErrorMainStyle';
import { useNavigate } from 'react-router-dom';

const ErrorMain = () => {
  const navigate = useNavigate();
  return (
    <Errs.Main>
      <Errs.Content onClick={() => navigate('/')}>
        <h1>Error 404</h1>
        <h2>페이지를 찾을 수 없어요! :(</h2>
        <h3>클릭하면 Home으로 돌아갑니다.</h3>
      </Errs.Content>
    </Errs.Main>
  );
};

export default ErrorMain;
