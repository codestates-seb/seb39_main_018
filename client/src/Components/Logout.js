import React, { useEffect } from 'react';
import axios from 'axios';

function Logout() {
  const userLogoutHandler = () => {
    axios
      .delete('url')
      .then((res) => {
        //console.log(res.data)
        alert('로그아웃 성공');
        navigate('/');
      })
      .catch((err) => {
        window.alert('땡');
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
