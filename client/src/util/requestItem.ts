import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ItemType } from './itemType';
import { useSelector } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';

const itemsApi = axios.create({
  baseURL: process.env.ITEM_API_URL,
});

// GET
const getItems = (api: string) => {
  const [data, setData] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const apiUrl = api === 'landing' ? 'board/' : `board/${api}`;
  const caseByResult = api === 'landing' ? data.slice(0, 5) : [data, loading, error];
  console.log(api);
  useEffect(() => {
    setLoading(true);
    const itemdata = async () => {
      try {
        const response = await itemsApi.get(apiUrl);
        setData(response.data);
        response.data.content ? setData(response.data.content) : setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    itemdata();
  }, [api]);
  return caseByResult;
};

const getDetail = (api?: number) => {
  const [data, setData] = useState<ItemType[]>([]);
  const [error, setError] = useState<Error>();
  const apiUrl = `board/${api}`;
  useEffect(() => {
    const itemdata = async () => {
      try {
        const response = await itemsApi.get(apiUrl);
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };
    itemdata();
  }, [api]);
  return data;
};

// POST

const usePost = (data: ItemType) => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState<void | string>('');
  const [failed, setfailed] = useState<void | string>('');
  const caseByResult = !success ? failed : success;
  const postData = async (data: any) => {
    await itemsApi
      .post('board', data)
      .then((res) => {
        setSuccess(alert('상품이 등록 되었습니다!'));
        navigate('/main');
      })
      .catch((err) => {
        setfailed(alert('상품 등록을 실패했습니다! '));
      });
  };

  return { postData, caseByResult };
};

const postItem = (data: ItemType) => {
  const [success, setSuccess] = useState<string>('');
  const [failed, setfailed] = useState<string>('');
  const caseByResult = !success ? failed : success;
  useEffect(() => {
    const postData = async () => {
      try {
        const respone = await itemsApi.post('board');
        setSuccess(respone.data);
      } catch (err) {
        setfailed(err);
      }
    };
    postData();
  }, [data]);
  return caseByResult;
};

// const postItem = (data: ItemType) => {
//   const [success, setSuccess] = useState<string>('');
//   const [failed, setfailed] = useState<string>('');
//   const caseByResult = !success ? failed : success;
//   useEffect(() => {
//     const postData = async () => {
//       try {
//         const respone = await itemsApi.post('board');
//         setSuccess(respone.data);
//       } catch (err) {
//         setfailed(err);
//       }
//     };
//     postData();
//   }, [data]);
//   return caseByResult;
// };

// PATCH

const useEdit = (api: number, data: ItemType) => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState<void | string>('');
  const [failed, setfailed] = useState<void | string>('');
  const caseByResult = !success ? failed : success;
  const EditData = async (api: number, data: any) => {
    await axios
      .patch(`/board/${api}`, data)
      .then((res) => {
        setSuccess(alert('상품이 수정 되었습니다!'));
        navigate(`main/detail/${api}`);
      })
      .catch((err) => {
        setfailed(alert('상품 수정을 실패했습니다! '));
      });
  };

  return { EditData, caseByResult };
};

// DELETE

const deleteItem = (data: number) => {
  const [success, setSuccess] = useState<void | string>('');
  const [failed, setfailed] = useState<void | string>('');
  const deleteData = async (data: number) => {
    await itemsApi
      .delete(`board/${data}`)
      .then((res) => {
        setSuccess(alert('상품이 삭제 되었습니다!'));
        location.reload();
      })
      .catch((err) => {
        setfailed(alert('삭제를 실패했습니다! '));
      });
  };
  return { deleteData };
};

export { getItems, getDetail, postItem, usePost, useEdit, deleteItem };
