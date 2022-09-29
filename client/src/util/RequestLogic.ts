import axios from 'axios';
import { useEffect, useState } from 'react';

type retutnType = (string | object)[];
interface serverRes {
  data: object | [];
  content?: (string | object)[];
}

const saves = (id: string): retutnType => {
  const [data, setdata] = useState([]);
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

//list?page=0132 viewMore

const itemGet = (api?: string): retutnType => {
  const [data, setdata] = useState<retutnType>([]);
  const id = '';
  const url = `http://ec2-3-34-181-86.ap-northeast-2.compute.amazonaws.com:8080/${
    !api ? 'board' : 'board/' + api
  }`;
  useEffect(() => {
    axios.get(url).then((res) => {
      return !Array.isArray(data) ? setdata(res.data.content) : setdata(res.data);
    });
  }, []);

  return data;
};

const dateCompute = (date: string): string => {
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

const latestItem = () => {
  const [data, setdata] = useState([]);
  data.length = 5;
  const url = `http://ec2-3-34-181-86.ap-northeast-2.compute.amazonaws.com:8080/board`;
  useEffect(() => {
    axios(url, {
      method: 'get',
    }).then((res) => setdata(res.data));
  }, []);
  return data;
};

export { saves, itemGet, dateCompute, latestItem };
