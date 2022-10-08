import React from 'react';
import MypageSideBar from './MypageSideBar';
import Draws from '../Withdraw/WithdrawPageStyle';
import Logins from '../Modals/Login/General/LoginStyle';
import Signups from '../Modals/SignUp/SignupStyle';
import Sides from './MypageSideBarStyle';
import styled from 'styled-components';
import axios from 'axios';
import { betaPostUserInfo } from '../../util/userInfo';
import { useDispatch, useSelector } from 'react-redux';

const MypageProfileMain = ({ props }) => {
  const { email, name } = betaPostUserInfo();
  const editName = useDispatch();
  console.log(email, name);

  const changeId = () => {
    axios
      .put('http://3.34.181.86:8081/member/update', {
        headers: { 'Content-Type': 'application/json' },
        id: props.userid,
      })
      .then((res) => {
        window.alert('아이디를 수정하였습니다.');
        navigate('/mypage');
      })
      .catch((err) => {
        window.alert('아이디 수정을 실패했습니다.');
        console.log(err);
      });
  };
  console.log(email, name);

  return (
    <Draws.Container>
      <MypageSideBar />
      <Draws.CustomerContent>
        <Draws.CustomerWithdraw style={{ maxWidth: '480px' }}>
          <Draws.ContentTitle>
            <Draws.Title style={{ paddingBottom: '8px' }}>내 프로필</Draws.Title>
          </Draws.ContentTitle>

          <Logins.IdBox style={{ paddingTop: '5px' }}>
            <Logins.NameBox>아이디</Logins.NameBox>
            <Logins.InputBox id="userid" type="text" defaultValue={name} />
            <Signups.Certified>
              <Signups.CertifiedButton style={{ marginLeft: '55px' }} onClick={() => changeId()}>
                아이디 변경하기
              </Signups.CertifiedButton>
            </Signups.Certified>
          </Logins.IdBox>

          <Logins.IdBox style={{ paddingTop: '5px' }}>
            <Logins.NameBox>이메일</Logins.NameBox>
            <div className="info_default">{email}ssss</div>
          </Logins.IdBox>

          <Logins.PasswordBox style={{ paddingTop: '10px' }}>
            <Logins.NameBox>
              비밀번호
              <div className="info_default">●●●●●●●●</div>
            </Logins.NameBox>
          </Logins.PasswordBox>

          <Sides.ShoppingInfo>
            <Sides.MiniTitle>이벤트 정보 수신</Sides.MiniTitle>
            <Advertise>
              이메일 정보 수신
              <Checkbox type="checkbox" id="check1" />
            </Advertise>
            <Advertise>
              SMS 정보 수신
              <Checkbox type="checkbox" id="check1" />
            </Advertise>
          </Sides.ShoppingInfo>
        </Draws.CustomerWithdraw>
      </Draws.CustomerContent>
    </Draws.Container>
  );
};

export default MypageProfileMain;

const Advertise = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  letter-spacing: -0.1px;
  padding-top: 6px;
  padding: 30px 40px 25px 2px;
  border-bottom: 1px solid #ebebeb;
  opacity: 0.8;
`;

const Checkbox = styled.input`
  width: 50px;
`;
