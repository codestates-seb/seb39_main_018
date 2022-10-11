import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAPi } from './requestLogin';

const checkTokken = axios.defaults.headers.common['Authorization'];

const postUserInfo = (tokken: string) => {
  const [userData, setUser] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const userinfo = async () => {
      try {
        const response = await loginAPi.get(`user/${tokken}`);
        setUser(response.data);
      } catch (err) {
        navigate('/error');
      }
    };
  }, []);
  return userData;
};

const betaPostUserInfo = () => {
  const [userData, setUser] = useState('');
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
  useEffect(() => {
    const userinfo = async () => {
      try {
        const response = await loginAPi.get(`user/email/${email}?lang=ko`);
        setUser(response.data.data);
      } catch (err) {
        navigate('/error');
      }
    };
    userinfo();
  }, []);
  return userData;
};

const betaDeleteUser = () => {
  const deleteInfo = async (id: number) => {
    try {
      const respone = await loginAPi.delete(`user/${id}`);
      alert('탈퇴 되었습니다.');
      return location.replace('/main');
    } catch {
      alert('실패 하였습니다. 관리자에게 문의해주세요');
    }
  };
  return { deleteInfo };
};

const editUserInfo = () => {
  const editInfo = async (email: string, info: object) => {
    try {
      const respone = await loginAPi.put(`user`, info);
      alert('수정 되었습니다.');
      return location.replace('/main');
    } catch {
      alert('실패 하였습니다. 관리자에게 문의해주세요');
    }
  };
  return { editInfo };
};

export { postUserInfo, betaPostUserInfo, editUserInfo, betaDeleteUser };
