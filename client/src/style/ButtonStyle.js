import styled from 'styled-components';
import GlobalStyle from '../globalStyle.jsx';

const MainContaier = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const AllSetting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SellButton = styled(AllSetting)`
  width: 140px;
  height: 40px;
  margin: 50px;
  justify-content: space-around;
  box-shadow: 1px 1px 5px 1px black;
  border-radius: var(--b-small);
  background: var(--gray);
`;

const SellText = styled(AllSetting)`
  padding: 5px;
  margin: 5px 0;
  font-size: var(--f-small);
  color: var(--white);
`;

const SellIcon = styled(AllSetting)`
  width: 40px;
  border-right: 1px solid var(--white);
  color: var(--white);
  font-size: var(--f-large);
`;

const BasicBtn = styled(AllSetting)`
  margin-top: 20px;
  width: 80px;
  height: 30px;
  padding: 15px;
  border: 3px solid #ffffff;
  border-radius: var(--b-large);
  background: var(--lightgray);
  font-size: var(--f-medium);
  box-shadow: inset -0.2rem -0.2rem 1rem var(--darkgray);
`;

const XXBtn = styled(AllSetting)`
  margin-top: 20px;
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  box-shadow: inset 3px 3px 10px;
  background: var(--lightgray);
`;

const XXBtn2 = styled(XXBtn)`
  box-shadow: inset -0.2rem -0.2rem 1rem gray;
`;

const PostPageBtn = styled(AllSetting)`
  margin: 50px;
  width: 100px;
  padding: 20px;
  height: 20px;
  border-radius: var(--b-medium);
  box-shadow: -2px -2px 10px, 10px 3px 15px var(--gray);
  background: var(--lightgray);
`;

export { MainContaier, SellButton, SellText, SellIcon, BasicBtn, XXBtn, XXBtn2, PostPageBtn };
