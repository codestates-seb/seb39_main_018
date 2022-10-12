import React from 'react';
import { MainBanner_Container, BtnSection } from './LandingStyle.jsx';
import mainbanner from '../Imgs/Group 381.svg';
import { mainimg } from '../Imgs/randingImgs/imgExport.js';
import { BasicBtn } from '../Common/Button/Button.js';
import { useNavigate } from 'react-router-dom';

const MainBanner = () => {
  const navigate = useNavigate();
  return (
    <MainBanner_Container>
      {/* <img src={티켓거래} className="ticket" />
      <img src={paper} className="paper_airplane" />
      <img src={플랫폼} className="platform" />
      <img src={솔트} className="sort" />
      <img src={body1} className="body1" />
      <img src={body2} className="body2" /> */}
      <img src={mainimg} className="mainbanner" />
      <BtnSection onClick={() => navigate('/main')}>
        <BasicBtn width="130px" height="50px" background="#383838">
          거래하기
        </BasicBtn>
      </BtnSection>
    </MainBanner_Container>
  );
};

export default MainBanner;
