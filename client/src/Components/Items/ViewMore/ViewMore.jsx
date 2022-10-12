import React from 'react';
import { ViewMoreSection, ViewMoreBtn } from './ViewMoreStyle';
import { BasicBtn } from '../../Common/Button/Button';
import { viewsCount } from '../../../redux/itemslice';
import { DownIcon } from '../../Common/Icons/Icons';

const ViewMore = ({ dispatch }) => {
  return (
    <ViewMoreSection>
      <ViewMoreBtn onClick={() => dispatch(viewsCount(8))}>
        <BasicBtn background="white" color="black" size="20px">
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
