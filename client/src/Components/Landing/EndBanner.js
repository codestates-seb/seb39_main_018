import React from 'react';
import { EndBanner_Container, Featuree } from './LandingStyle.jsx';
import sent from '../Imgs/sent.png';
import adcress from '../Imgs/address.png';
import handshake from '../Imgs/handshake.png';

const EndBanner = () => {
  return (
    <EndBanner_Container>
      <Featuree>
        <img src={sent} />
        <p>거래하고 싶은 사람과 즉시대화</p>
      </Featuree>
      <Featuree>
        <img src={adcress} />
        <p>지역 인증을 통해 내 위치와 가까운 거래</p>
      </Featuree>
      <Featuree>
        <img src={handshake} />
        <p>원하는 상품 찾기</p>
      </Featuree>
    </EndBanner_Container>
  );
};

export default EndBanner;
