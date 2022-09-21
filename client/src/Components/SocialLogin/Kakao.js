// 리다이렉트 될 화면
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Main from '../Main';

const Kakao = () => {
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get('code'); // 인가코드
    let grant_type = 'authorization_code';
    let client_id = process.env.KAKAO_CLIENT_ID;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?
        grant_type=${grant_type}
        &client_id=${client_id}
        &redirect_uri=http://localhost:3003/oauth/callback/kakao
        &code=${code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      )
      .then((res) => {
        console.log(res);
      });
  }, []);

  return <Main />;
};

export default Kakao;
