import React from 'react';
import EndBanner from './EndBanner';
import MainBanner from './MainBanner';
import ItemsView from './ItemsView';
import SubBanner from './SubBanner';
import { LandingContainer } from './LandingStyle.jsx';
import { getItems } from '../../util/requestItem.ts';

const LandingMain = () => {
  const latestDatas = getItems('landing');
  return (
    <LandingContainer>
      <MainBanner />
      <ItemsView latestDatas={latestDatas} />
      <SubBanner />
      <EndBanner />
    </LandingContainer>
  );
};

export default LandingMain;
