import React from 'react';
import { TagContainer } from '../../style/TagStyle';
import { MdCancel } from 'react-icons/md';

const Tag = () => {
  return <TagUI />;
};

const TagUI = () => {
  return (
    <TagContainer>
      <p className="tag_text">센프란시스코</p>
      <p className="tag_cancel">
        <MdCancel />
      </p>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
    </TagContainer>
  );
};

export default Tag;
