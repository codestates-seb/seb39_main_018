import React from 'react';
import { EndBanner_Container, Featuree } from './LandingStyle.jsx';
import sent from '../Imgs/sent.png';
import adcress from '../Imgs/address.png';
import handshake from '../Imgs/handshake.png';
import { endbannerImgs, endbannerText, imgName } from '../Imgs/randingImgs/imgExport.js';

const EndBanner = () => {
  return (
    <EndBanner_Container>
      {endbannerImgs.map((imgs, i) => {
        return (
          <Featuree>
            <img className={imgName[i]} src={imgs} />
            <p>{endbannerText[i]}</p>
          </Featuree>
        );
      })}
    </EndBanner_Container>
  );
};

export default EndBanner;
