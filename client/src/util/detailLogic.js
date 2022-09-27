import axios from 'axios';
import { useEffect, useState } from 'react';

const saves = (id) => {
  const [data, setdata] = useState('');
  const url = `http://ec2-3-34-181-86.ap-northeast-2.compute.amazonaws.com:8080/board/${id}`;
  useEffect(() => {
    axios(url, {
      method: 'get',
      // withCredentials: true,
      // cors: {
      //     origin: '*',
      //   }
    }).then((res) => setdata(res.data));
  }, []);

  return data;
};

const itemGet = () => {
  const [data, setdata] = useState('');
  const id = '';
  const url = `http://ec2-3-34-181-86.ap-northeast-2.compute.amazonaws.com:8080/board`;
  useEffect( () => {
    axios(url, {
        method: 'get',
      }).then((res) => setdata(res.data));
  },[])
  
  return data;
};

const dateCompute = (date) => {
  const nowDate = new Date();
  const createdDate = new Date(date);
  const dateCount = nowDate.getTime() - createdDate.getTime();
  let min = Math.floor(dateCount / (1000 * 60));
  let hor = Math.floor(dateCount / (1000 * 60 * 60));
  let day = Math.floor(dateCount / (1000 * 60 * 60 * 24));
  let mon = Math.floor(dateCount / (1000 * 60 * 60 * 24 * 30));
  let year = Math.floor(dateCount / (1000 * 60 * 60 * 24 * 30 * 12));

  return year
    ? `${year} 년전`
    : mon
    ? `${mon} 개월전`
    : day
    ? `${day} 일전`
    : hor
    ? `${hor} 시간전`
    : min
    ? `${min} 분전`
    : '방금전';
};
export { saves , itemGet, dateCompute}

