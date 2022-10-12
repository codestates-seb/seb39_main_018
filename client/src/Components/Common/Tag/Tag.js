import React from 'react';
import { CancelIcon } from '../Icons/Icons';
import Tag from './TagStyle';

// 함수용 컴포넌트
const TagComponent = () => {
  return;
};

const TagUI = ({ text }) => {
  return (
    <>
      <Tag.Container>
        <p className="tag_text">{text}</p>
        <p className="tag_cancel">
          <CancelIcon />
        </p>
        <Tag.Circle1 />
        <Tag.Circle2 />
        <Tag.Circle3 />
        <Tag.Circle4 />
      </Tag.Container>
    </>
  );
};
const BasicTag = () => {
  return (
    <>
      <Tag.Container>
        <p className="tag_text">센프란시스코</p>
        <p className="tag_cancel">
          <CancelIcon />
        </p>
        <Tag.Circle1 />
        <Tag.Circle2 />
        <Tag.Circle3 />
        <Tag.Circle4 />
      </Tag.Container>
    </>
  );
};

export { TagUI, Tag };
