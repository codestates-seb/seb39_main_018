import React from 'react';
import Lands from './SubscrineStyle';
import { InputBox } from '../../Modals/Login/General/LoginStyle';

const Subscribe = () => {
  return (
    <Lands.Subscribe>
      <Lands.SubForm>
        <Lands.SubFormContainer>
          <Lands.SubTitle>SORT의 소식을 보내드려요</Lands.SubTitle>
          <Lands.SubMini>저희 팀의 멤버가 되어보세요</Lands.SubMini>
          <InputBox placeholder="이메일 입력 후 Enter를 누르세요." />
        </Lands.SubFormContainer>
      </Lands.SubForm>
    </Lands.Subscribe>
  );
};

export default Subscribe;
