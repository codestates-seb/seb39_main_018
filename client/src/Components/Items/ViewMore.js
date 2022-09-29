import React from 'react';
import { ViewMoreSection, ViewMoreBtn } from './MainStyle';
import { BasicBtn } from '../Common/Button/Button';

const ViewMore = ({ viewCount, setViewCount }) => {
  return (
    <ViewMoreSection>
      <ViewMoreBtn onClick={() => setViewCount(viewCount + 8)}>
        <BasicBtn background="white" color="balck">
          더보기
        </BasicBtn>
      </ViewMoreBtn>
    </ViewMoreSection>
  );
};

export default ViewMore;
