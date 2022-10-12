import SubBanner from './SubBanner/SubBanner';
import ItemsView from './ItemsView/ItemsView';
import { getItems } from '../../util/requestItem.ts';
import React from 'react';
import Lands from './LandingMainStyle';
import { sortlogo } from '../Imgs/headerImgs/imgExport';
import { useNavigate } from 'react-router-dom';
import { VscGithubAlt } from 'react-icons/vsc';
import { IoLogoInstagram } from 'react-icons/io';
import LandingCarousel from './Carousel/LandingCarousel';
import MainBanner from './MainBanner/MainBanner';
import Subscribe from './Subscribe/Subscribe';

const LandingMain = () => {
  const latestDatas = getItems('landing');
  const navigate = useNavigate();
  const pageMove = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Lands.Container>
        <MainBanner />
        <SubBanner />
        <ItemsView latestDatas={latestDatas} />
        <Subscribe />
      </Lands.Container>
      <LandingCarousel />
    </>
  );
};

export default LandingMain;
