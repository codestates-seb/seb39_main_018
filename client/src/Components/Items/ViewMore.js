import React from 'react';
import { ViewMoreSection, ViewMoreBtn } from './MainStyle';
import { BasicBtn } from '../Common/Button/Button';
import { viewsCount } from '../../redux/itemslice';


const ViewMore = ({dispatch }) => {
  return (
    <ViewMoreSection>
      <ViewMoreBtn onClick={() => dispatch(viewsCount(8))}>
        <BasicBtn background="white" color="balck">
          더보기
        </BasicBtn>
      </ViewMoreBtn>
    </ViewMoreSection>
  );
};

export default ViewMore;
