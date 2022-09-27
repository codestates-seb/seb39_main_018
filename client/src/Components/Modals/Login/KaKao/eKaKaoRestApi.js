import React from 'react';

const TEST2 = () => {
  const REDIRECT_URI = 'http://localhost:3003/okakao';
  const site = `https://kauth.kakao.com/oauth/oauth/authorize?client_id=${process.env.HI_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <>
      <div>
        <a href={site}>ss</a>
      </div>
    </>
  );
};

export default TEST2;
