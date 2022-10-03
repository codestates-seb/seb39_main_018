import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ItemType } from './itemType';

const itemsApi = axios.create({
  baseURL: process.env.API_URL,
});

// GET
const getItems = (api?: string) => {
  const [data, setData] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const apiUrl = !api || api === 'landing' ? 'board' : `board/${api}`;
  const caseByResult = !api ? [data, loading, error] : api === 'landing' ? data.slice(0, 5) : data;
  console.log(api);
  useEffect(() => {
    setLoading(true);
    const itemdata = async () => {
      try {
        const response = await itemsApi.get(apiUrl);
        response.data.content ? setData(response.data.content) : setData(response.data);
        console.log(response.data);
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

// POST
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

// PATCH

const editItem = (data: ItemType) => {};

// DELETE

const deleteItem = (data: ItemType) => {};

export { getItems, postItem };
