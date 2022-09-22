import styled from 'styled-components';
import GlobalStyle from '../globalStyle.jsx';

//-- 버튼 페이지 화면 정리 컴포넌트
const MainContaier = styled.div`
  width: 100%;
  height: 700px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Basic = styled(MainContaier)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  border: none;
`;
const Test = styled(Basic)`
  justify-content: center;
`;
const Post = styled(Basic)``;

const AllSets = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const FrameTest = styled.div`
  width: 140px;
  height: 40px;
`;
/// -------------------------------------- ///

// --- 판매하기 버튼

const Sell = styled(AllSets)`
  width: 100%;
  height: 40px;
  box-shadow: 1px 1px 5px 1px black;
  border-radius: var(--b-small);
  background: var(--gray);
  font-size: var(--f-small);
  color: var(--white);
  ${Sell}:hover {
    background: var(--lightgray);
  }

  .text {
    margin-left: 20px;
  }
  .icon {
    display: flex;
    padding-right: 10px;
    border-right: 1px solid var(--white);
    color: var(--white);
    font-size: var(--f-large);
  }
`;

/// -------------------------------------- ///

// --- 등록,인증,탈퇴,확인,취소 버튼모음

const BasicAllSet = styled(AllSets)`
  border: 3px solid #ffffff;
  border-radius: var(--b-large);
  background: var(--lightgray);
  font-size: var(--f-medium);
  box-shadow: inset -0.2rem -0.2rem 1rem var(--darkgray);
  ${BasicAllSet}:active {
    box-shadow: inset 3px 3px 10px;
    background: var(--lightgray);
  }
`;

const Posting = styled(BasicAllSet)``;
const Auth = styled(BasicAllSet)``;
const DropOut = styled(BasicAllSet)``;
const Ok = styled(BasicAllSet)``;
const Cancel = styled(BasicAllSet)``;

/// -------------------------------------- ///

// ---테스트 버튼모음
const XXBtn = styled(AllSets)`
  margin: 20px;
  width: 120px;
  height: 4rem;
  border-radius: 1rem;
  box-shadow: inset 3px 3px 10px;
  background: var(--lightgray);
`;

const XXBtn2 = styled(XXBtn)`
  box-shadow: inset -0.2rem -0.2rem 1rem gray;
`;

/// -------------------------------------- ///

// --- 게시글 조회,수정,삭제,좋아요,메세지 버튼모음
const PostAllSets = styled(AllSets)`
  height: 100%;
  border-radius: var(--b-small);
  box-shadow: -2px -2px 10px, 10px 3px 15px var(--gray);
  background: var(--lightgray);
  ${PostAllSets}:active {
    box-shadow: inset 3px 3px 10px;
    background: var(--lightgray);
  }
`;

const Edit = styled(PostAllSets)``;
const Delete = styled(PostAllSets)``;
const Different = styled(PostAllSets)``;
const Like = styled(PostAllSets)``;
const Message = styled(PostAllSets)``;

/// -------------------------------------- ///

export default {
  MainContaier,
  Test,
  Basic,
  Post,
  AllSets,
  FrameTest,
  Sell,
  Posting,
  Auth,
  DropOut,
  Ok,
  Cancel,
  XXBtn,
  XXBtn2,
  Edit,
  Delete,
  Different,
  Like,
  Message,
};
