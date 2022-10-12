import React, { useEffect } from 'react';
import axios from 'axios';

function Logout() {
  const userLogoutHandler = () => {
    axios
      .delete('http://3.34.181.86:8081/user/logout')
      .then((res) => {
        //console.log(res.data)
        alert('로그아웃 되었습니다.');
        navigate('/');
      })
      .catch((err) => {
        window.alert('로그아웃 실패했습니다.');
        console.log(err);
      });
  };

  return (
    <div>
      <h2>로그아웃</h2>
      <button onClick={userLogoutHandler}>로그아웃</button>
    </div>
  );
}

export default Logout;
