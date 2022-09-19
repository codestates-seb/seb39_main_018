import axios from 'axios';
import { resolvePath } from 'react-router-dom';

const get = (url, parameter) => {
  // let parameter = {}
  // if (url.includes("signup")) {
  //   parameter = {
  //     id : parameter.id
  //   }
  // }

  axios
    .get(url, {
      headers: {},
      parameter: parameter,
    })
    .then((res) => {
      resolve(res);
      navigate('/');
    })
    .catch((err) => {
      window.alert('회원가입 실패!');
      console.log(err);
    });
};

function post(url, parameter) {}

export { get, post };
