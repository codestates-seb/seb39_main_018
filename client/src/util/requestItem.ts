import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ItemType } from './itemType';
import { useSelector } from 'react-redux';

const itemsApi = axios.create({
  baseURL: process.env.API_URL,
});

// GET
const getItems = (api: string) => {
  const test = useSelector<any>((state) => state.items.apiInfo);
  const [data, setData] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const apiUrl = api === 'landing' ? 'board/' : `board${api}`;
  const caseByResult = api === 'landing' ? data.slice(0, 5) : [data, loading, error];
  useEffect(() => {
    setLoading(true);
    const itemdata = async () => {
      try {
        const response = await itemsApi.get(apiUrl);
        setData(response.data);
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
  const apiUrl = `board/${api}`
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

export { getItems, getDetail, postItem };
