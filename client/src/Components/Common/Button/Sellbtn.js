import { sellButton } from '../../Imgs/mainImgs/imgExport';
import React from 'react';
import { SellbtnComponent } from './Button';
import { useNavigate } from 'react-router-dom';

const Sellbtn = () => {
  const navigate = useNavigate();
  return (
    <SellbtnComponent onClick={() => navigate('/write')}>
      <img src={sellButton} />
      <p>상품판매</p>
    </SellbtnComponent>
  );
};

export default Sellbtn;
