import React from 'react';
import { Detail_ImgList, Detail_NextImg } from './imgListStyle';
import { LeftIcon, RightIcon, CheckIcon } from '../../Common/Icons/Icons';

const ImgList = ({ photo }) => {
  return (
    <Detail_ImgList>
      <div className="list_icon">
        <LeftIcon />
      </div>
      <Detail_NextImg>
        <img src={photo} />
      </Detail_NextImg>
      <Detail_NextImg />
      <Detail_NextImg />
      <Detail_NextImg />
      <div className="list_icon">
        <RightIcon />
      </div>
    </Detail_ImgList>
  );
};

export default ImgList;
