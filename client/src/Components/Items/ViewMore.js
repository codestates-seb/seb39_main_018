import React from 'react';
import { ViewMoreSection, ViewMoreBtn } from './MainStyle';
import { BasicBtn } from '../Common/Button/Buttons';

const ViewMore = ({ viewCount, setViewCount }) => {
  return (
    <ViewMoreSection>
      <ViewMoreBtn onClick={() => setViewCount(viewCount + 8)}>
        <BasicBtn name="더보기" background="white" color="balck" />
      </ViewMoreBtn>
    </ViewMoreSection>
  );
};

export default ViewMore;
