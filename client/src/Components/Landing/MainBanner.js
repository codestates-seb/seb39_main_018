import React from 'react';
import { MainBanner_Container } from './LandingStyle.jsx';
import 티켓거래 from '../Imgs/티켓거래.svg';
import 플랫폼 from '../Imgs/플랫폼.svg';
import 솔트 from '../Imgs/솔트.svg';
import body1 from '../Imgs/body1.svg';
import body2 from '../Imgs/body2.svg';
import paper from '../Imgs/paper-airplane.png';
import mainbanner from '../Imgs/Group 381.svg';

const MainBanner = () => {
  return (
    <MainBanner_Container>
      {/* <img src={티켓거래} className="ticket" />
      <img src={paper} className="paper_airplane" />
      <img src={플랫폼} className="platform" />
      <img src={솔트} className="sort" />
      <img src={body1} className="body1" />
      <img src={body2} className="body2" /> */}
      <img src={mainbanner} className="mainbanner" />
    </MainBanner_Container>
  );
};

export default MainBanner;
