import { sellButton } from '../../Imgs/mainImgs/imgExport';
import React from 'react';
import { BasicBtn, SellbtnComponent } from './Button';
import { useNavigate } from 'react-router-dom';
import { chekckLocal } from '../../../util/requestLogin';

const Sellbtn = () => {
  const navigate = useNavigate();

  return (
    <SellbtnComponent onClick={() => navigate('/write')}>
      {/* <img src={sellButton} /> */}
      <p>상</p>
      <p>품</p>
      <p>등</p>
      <p>록</p>
    </SellbtnComponent>
  );
};

export default Sellbtn;
