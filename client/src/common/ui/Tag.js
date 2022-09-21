import React from 'react';
import Tag from '../../style/TagStyle';
import { MdCancel } from 'react-icons/md';

// 함수용 컴포넌트
const TagComponent = () => {
  return;
};

const TagUI = () => {
  return (
    <>
      <Tag.Container>
        <p className="tag_text">센프란시스코</p>
        <p className="tag_cancel">
          <MdCancel />
        </p>
        <Tag.Circle1 />
        <Tag.Circle2 />
        <Tag.Circle3 />
        <Tag.Circle4 />
      </Tag.Container>
      <Tag.Container>
        <p className="tag_text">비행기티켓</p>
        <p className="tag_cancel">
          <MdCancel />
        </p>
        <Tag.Circle1 />
        <Tag.Circle2 />
        <Tag.Circle3 />
        <Tag.Circle4 />
      </Tag.Container>
      <Tag.Container>
        <p className="tag_text">솔트</p>
        <p className="tag_cancel">
          <MdCancel />
        </p>
        <Tag.Circle1 />
        <Tag.Circle2 />
        <Tag.Circle3 />
        <Tag.Circle4 />
      </Tag.Container>
    </>
  );
};

export default TagUI;
