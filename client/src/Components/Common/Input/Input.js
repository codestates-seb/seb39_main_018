import React from 'react';
import Input from './InputStyle';
const InputComponent = () => {
  return (
    <>
      <Input.Container>
        
      </Input.Container>
      <Input.Container>
        <Input.Posting 
            placeholder="검색어를 입력하세요"
        />
      </Input.Container>
    </>
  );
};
export default InputComponent;

const InputUI = () => {
  return (
    <>
      <Input.Header placeholder="검색어를 입력하세요" />
    </>
  );
};

export { InputUI };

