import { sellButton } from '../../Imgs/mainImgs/imgExport';
import React from 'react';
import { BasicBtn, SellbtnComponent } from './Button';
import { useNavigate } from 'react-router-dom';

const Sellbtn = () => {
  const navigate = useNavigate();
  return (
    <SellbtnComponent onClick={() => navigate('/write')}>
      {/* <img src={sellButton} /> */}

    상품등록
    </SellbtnComponent>
  );
};

export default Sellbtn;
