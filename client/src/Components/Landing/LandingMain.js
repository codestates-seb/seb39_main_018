// import React from 'react';
// import EndBanner from './EndBanner';
// import MainBanner from './MainBanner';
import ItemsView from './ItemsView';
// import SubBanner from './SubBanner';
// import { LandingContainer } from './LandingStyle.jsx';
import { getItems } from '../../util/requestItem.ts';

// const LandingMain = () => {

//   return (
//     <LandingContainer>
// <MainBanner />
//       <EndBanner />
// <SubBanner />

//     </LandingContainer>
//   );
// };

// export default LandingMain;

import React from 'react';
import Lands from './LandingMainStyle';
import mokup from '../Imgs/mokup.png';
import { sortlogo } from '../Imgs/headerImgs/imgExport';
import { useNavigate } from 'react-router-dom';
import { VscGithubAlt } from 'react-icons/vsc';
import { IoLogoInstagram } from 'react-icons/io';
import { AllviewBtn } from './LandingStyle.jsx';
import { RightIcon } from '../Common/Icons/Icons.js';
import { BasicBtn } from '../Common/Button/Button.js';
import Logins from '../Modals/Login/General/LoginStyle';

// background-color: transparent;
const LandingMain = () => {
  const latestDatas = getItems('landing');
  const navigate = useNavigate();
  const pageMove = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
  };
  return (
    <Lands.Container>
      <Lands.Header>
        <img src={sortlogo} onClick={() => navigate('/main')} />
        <Lands.HeaderRight>
          <a href="https://github.com/codestates-seb/seb39_main_018">
            <VscGithubAlt />
          </a>
          <a>
            <IoLogoInstagram />
          </a>
        </Lands.HeaderRight>
      </Lands.Header>
      {/* 
      <Lands.MainContainer>
        <Lands.MainContent>
          <Lands.MainText>
            <Lands.BoldText>SELL OWN REGION TICKET</Lands.BoldText>
            <Lands.SubText>
              <Lands.PP>
                <Lands.SortMean>올바른 티켓의 시작</Lands.SortMean>
                <br />
                <Lands.SortLittle>지역인증 기반 티켓 중고 거래</Lands.SortLittle>
                <img className="sortmokup" src={mokup} />
              </Lands.PP>
              <AllviewBtn
                style={{ marginTop: '1.3rem', width: '8rem' }}
                onClick={() => pageMove('/main')}
              >
                <BasicBtn>
                  Welcome
                  <RightIcon />
                </BasicBtn>
              </AllviewBtn>
            </Lands.SubText>
          </Lands.MainText>
        </Lands.MainContent>
      </Lands.MainContainer> */}
      <ItemsView latestDatas={latestDatas} />
      <Lands.MainContainer>
        <Lands.MainContent>
          <Lands.MainText>
            <Lands.BoldText>SELL OWN REGION TICKET</Lands.BoldText>
            <Lands.SubText>
              <Lands.PP>
                <Lands.SortMean>올바른 티켓의 시작</Lands.SortMean>
                <br />
                <Lands.SortLittle>지역인증 기반 티켓 중고 거래</Lands.SortLittle>
                <img className="sortmokup" src={mokup} />
              </Lands.PP>
              <AllviewBtn
                style={{ marginTop: '1.3rem', width: '8rem' }}
                onClick={() => pageMove('/main')}
              >
                <BasicBtn>
                  Welcome
                  <RightIcon />
                </BasicBtn>
              </AllviewBtn>
            </Lands.SubText>
          </Lands.MainText>
        </Lands.MainContent>
      </Lands.MainContainer>

      <Lands.Subscribe>
        <Lands.SubForm>
          <Lands.SubFormContainer>
            <Lands.SubTitle>SORT의 소식을 보내드려요</Lands.SubTitle>
            <Lands.SubMini>저희 팀의 멤버가 되어보세요.</Lands.SubMini>
            <Logins.InputBox placeholder="이메일 입력 후 Enter를 누르세요." />
          </Lands.SubFormContainer>
        </Lands.SubForm>
      </Lands.Subscribe>
    </Lands.Container>
  );
};

export default LandingMain;
{
  /* <img className="sortmokup" src={mokup} /> */
}
