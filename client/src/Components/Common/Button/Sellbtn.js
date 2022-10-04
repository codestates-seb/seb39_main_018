import { sellButton } from '../../Imgs/mainImgs/imgExport';
import React from 'react';
import { SellbtnComponent } from './Button';
import { useNavigate } from 'react-router-dom';

const Sellbtn = () => {
  const navigate = useNavigate();
  return (
    <SellbtnComponent>
      <img src={sellButton}  onClick={ () => navigate('/write')}/>
      <p>상품판매</p>
    </SellbtnComponent>
  );
};

export default Sellbtn;
