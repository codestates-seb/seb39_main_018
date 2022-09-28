import React from 'react';
import { ViewMoreSection, ViewMoreBtn } from './MainStyle';
import {BasicBtn} from '../Common/Button/Buttons';

const ViewMore = () => {
  return (
    <ViewMoreSection>
      <ViewMoreBtn>
        <BasicBtn name="더보기" background="white" color="balck" />
      </ViewMoreBtn>
    </ViewMoreSection>
  );
};

export default ViewMore;
