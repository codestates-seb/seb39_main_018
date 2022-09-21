import React from 'react';
import MyTag from '../../style/TagStyle';
import { MdCancel } from 'react-icons/md';

const Tag = () => {
  return <TagUI />;
};

const TagUI = () => {
  return (
    <>
      <MyTag.TagContainer>
        <p className="tag_text">센프란시스코</p>
        <p className="tag_cancel">
          <MdCancel />
        </p>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
      </MyTag.TagContainer>
      <MyTag.Tag1>

      </MyTag.Tag1>
      <MyTag.Tag2></MyTag.Tag2>
    </>
  );
};

export default Tag;
