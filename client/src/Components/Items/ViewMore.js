import React from 'react';
import { ViewMoreSection, ViewMoreBtn } from './MainStyle';
import { BasicBtn } from '../Common/Button/Button';
import { viewsCount } from '../../redux/itemslice';
import { DownIcon } from '../Common/Icons/Icons';
const ViewMore = ({ dispatch }) => {
  return (
    <ViewMoreSection>
      <ViewMoreBtn onClick={() => dispatch(viewsCount(8))}>
        <BasicBtn background="white" color="balck" size="25px">
          <p>더보기</p>
          <p>
            <DownIcon />
          </p>
        </BasicBtn>
      </ViewMoreBtn>
    </ViewMoreSection>
  );
};

export default ViewMore;
