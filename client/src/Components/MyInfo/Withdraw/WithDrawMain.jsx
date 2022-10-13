import React, { useState, useRef, useEffect } from 'react';
import Draws from './WithdrawStyle.js';
// import { useState } from 'react';
// import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loginAPi } from '../../../util/requestLogin.ts';
import ModalMain from '../../Modals/ModalMain.js';

const Withdraw = () => {
  // 탈퇴사유 적어야 탈퇴신청 가능
  const navigate = useNavigate();
  const deleteInfo = (id) => {
    loginAPi
      .delete(`user/${id}`)
      .then((res) => {
        alert('탈퇴 되었습니다!');
        localStorage.clear();
        location.reload();
        return navigate('/main');
      })
      .catch((err) => {
        console.log(err);
        alert('탈퇴 실패 했습니다 관리자에게 문의하세요!');
      });
  };

  const writeInput = useRef();
  const [write, setWrite] = useState('');

  const withdrawCheck = (e) => {
    if (write === '') {
      writeInput.current.focus();
      return;
    }

    let param = {};
    param = {
      //reason :reasonOut.checkList,
      check1: isChecked,
      check2: isChecked2,
      check3: isChecked3,
      check4: isChecked4,
      check5: isChecked5,
      reasonText: write,
    };

    if (window.confirm('확인을 누르면 탈퇴신청이 접수됩니다.')) {
      deleteInfo(46);
    } else {
      return;
    }
  };

  const checkWrite = (e) => {
    if (write.length === 0 || write === '') {
      setWrite(false);
      return;
    }
    setWrite(true);
  };

  // const [reasonOut, setReasonOut] = useState({ checkList: [] });

  // const checkReason = (value) => {
  //   let resultArray = [];
  //   resultArray.push(value);
  //   setReasonOut({ checkList: resultArray });
  // };

  // const isCheckeReason = (value) => {
  //   let resultArray = reasonOut.checkList;
  //   for (let i; i < resultArray.length; i++) {
  //     if (resultArray[i] === value) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // };

  // useEffect(() => {}, [reasonOut]);

  // 1번 체크박스 체크
  const [isChecked, setIsChecked] = useState(false);
  const onClickCheck = () => {
    setIsChecked(!isChecked);
    console.log('1번');
  };

  // 2번 체크박스 체크
  const [isChecked2, setIsChecked2] = useState(false);
  const onClickCheck2 = () => {
    setIsChecked2(!isChecked2);
    console.log('2번');
  };

  // 3번 체크박스 체크
  const [isChecked3, setIsChecked3] = useState(false);
  const onClickCheck3 = () => {
    setIsChecked3(!isChecked3);
    console.log('3번');
  };

  // 4번 체크박스 체크
  const [isChecked4, setIsChecked4] = useState(false);
  const onClickCheck4 = () => {
    setIsChecked4(!isChecked4);
    console.log('4번');
  };

  // 5번 체크박스 체크
  const [isChecked5, setIsChecked5] = useState(false);
  const onClickCheck5 = (value) => {
    setIsChecked5(!isChecked5);
    console.log('5번');
  };
  return (
    <Draws.CustomerContent>
      <Draws.CustomerWithdraw>
        <Draws.ContentTitle>
          <Draws.Title>회원탈퇴</Draws.Title>
        </Draws.ContentTitle>

        <Draws.Content>
          <Draws.ReasonTitle>회원탈퇴 사유를 알려주세요.</Draws.ReasonTitle>
          <Draws.Reasons>
            <Draws.Reason>
              <Draws.Checkbox>
                <Draws.CheckboxInput type="checkbox" isChecked={isChecked} />
                <Draws.CheckboxV onClick={onClickCheck} isChecked={isChecked} />
                <Draws.ReasonSpan>원하는 티켓이 없어요</Draws.ReasonSpan>
              </Draws.Checkbox>
            </Draws.Reason>

            <Draws.Reason>
              <Draws.Checkbox>
                <Draws.CheckboxInput type="checkbox" isChecked={isChecked2} />
                <Draws.CheckboxV onClick={onClickCheck2} isChecked={isChecked2} />
                <Draws.ReasonSpan>티켓이 안 팔려요</Draws.ReasonSpan>
              </Draws.Checkbox>
            </Draws.Reason>

            <Draws.Reason>
              <Draws.Checkbox>
                <Draws.CheckboxInput type="checkbox" isChecked={isChecked3} />
                <Draws.CheckboxV onClick={onClickCheck3} isChecked={isChecked3} />
                <Draws.ReasonSpan>재가입하고 싶어요</Draws.ReasonSpan>
              </Draws.Checkbox>
            </Draws.Reason>

            <Draws.Reason>
              <Draws.Checkbox>
                <Draws.CheckboxInput type="checkbox" isChecked={isChecked4} />
                <Draws.CheckboxV onClick={onClickCheck4} isChecked={isChecked4} />
                <Draws.ReasonSpan>사이트 사용법이 어려워요</Draws.ReasonSpan>
              </Draws.Checkbox>
            </Draws.Reason>

            <Draws.Reason>
              <Draws.Checkbox>
                <Draws.CheckboxInput type="checkbox" isChecked={isChecked5} />
                <Draws.CheckboxV onClick={onClickCheck5} isChecked={isChecked5} />
                <Draws.ReasonSpan>이유 없어요</Draws.ReasonSpan>
              </Draws.Checkbox>
            </Draws.Reason>
          </Draws.Reasons>

          <Draws.WriteBox>
            <Draws.ReasonTitle>탈퇴 사유를 적어주세요.</Draws.ReasonTitle>
            <Draws.WriteInput
              id="write"
              ref={writeInput}
              onChange={(e) => checkWrite(e.target.value)}
              placeholder="고객님의 의견을 반영하여 더 나은 서비스를 위해 노력하겠습니다."
            ></Draws.WriteInput>
          </Draws.WriteBox>

          <Draws.AgreeBox>
            <Draws.H3>회원탈퇴 안내사항</Draws.H3>
            <Draws.Li>
              전자상거래 등 소비자 보호에 관한 법률에 따라 계약 또는 청약철회 등에 관한 기록,
              대금결제 및 재화 등의 공급에 관한 기록은 5년간 보존됩니다.
            </Draws.Li>
            <Draws.Li>탈퇴 이후에는 회원정보를 복원할 수 없습니다.</Draws.Li>
            <Draws.Li>
              회원정보는 내부 기준에 따라 부정이용 방지를 위해 별도로 3년간 보관될 수 있습니다.
            </Draws.Li>
          </Draws.AgreeBox>

          <Draws.RealAgree>
            <Draws.BlackButtonBox onClick={() => withdrawCheck()}>탈퇴하기</Draws.BlackButtonBox>
            <Draws.WhiteButtonBox onClick={() => navigate('/my/profile')}>
              취소하기
            </Draws.WhiteButtonBox>
          </Draws.RealAgree>
        </Draws.Content>
      </Draws.CustomerWithdraw>
    </Draws.CustomerContent>
  );
};

export default Withdraw;
