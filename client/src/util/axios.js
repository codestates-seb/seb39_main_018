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
      window.alert('실패!');
      console.log(err);
    });
};

const post = (url, parameter) => {};

const axiosDelete = (url, parameter) => {
  axios
    .delete('url', {
      headers: {},
      parameter: parameter,
    })
    .then((res) => {
      window.alert('성공!');
      navigate('/');
    })
    .catch((err) => {
      window.alert('땡');
      console.log(err);
    });
};

export { get, post, axiosDelete };
