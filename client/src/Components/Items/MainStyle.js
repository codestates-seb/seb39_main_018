import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #ffffff;
  font-family: 'GmarketSansMedium';
`;

const MainContent = styled(MainContainer)`
  width: 1200px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const AllOption = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 100%;
`;

const FilterSection = styled.div`
  width: 1200px;
`;
const FilterBox = styled(AllOption)`
  width: 1180px;
  height: 150px;
  flex-wrap: wrap;
`;

const FilterOption = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
`;
const FilterTopBox = styled(FilterOption)`
  border-bottom: 2px solid var(--lightgray);
`;
const FilterBottomBox = styled(FilterOption)``;
const FilterLeft = styled(FilterOption)`
  width: 60%;
`;
const FilterRight = styled(FilterOption)`
  width: 40%;
  justify-content: space-between;
  .drop_bar {
    position: absolute;
    width: 100px;
    height: 150px;
    border: 1px solid;
    right: 0;
    top: 50px;
  }
`;
const SellType = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  border-bottom: 5px solid ${(prop) => prop.color || 'none'};
  font-size: 20px;
  p {
    cursor: pointer;
    color: ${(prop) => prop.color || 'gray'};
  }
`;
const SearchSection = styled.div`
  position: relative;
  width: 160px;
  margin: 0 10px;
  p {
    position: absolute;
    top: 3px;
    right: -10px;
    font-size: 25px;
    color: gray;
    cursor: pointer;
  }
`;

const SortSection = styled.div`
  width: 200px;
  position: relative;
`;

const SortByOption = styled.div`
  width: 100px;
  height: 30px;
  border: 2px solid #434445;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: var(--b-xsmall);
  font-size: 15px;

  .select_icon {
    display: flex;
    align-items: center;
    transition: all ease 0.5s;
    cursor: pointer;
  }

  .select_icon.open {
    transform: rotate(180deg);
    transition: all ease 0.5s;
  }

  .select_upicon {
    display: ${(props) => (props.display ? 'none' : 'block')};
    margin-top: 5px;
    cursor: pointer;
  }
`;

const SortOpDropbar = styled(SortByOption)`
  display: ${(props) => (props.display || 'none')};
  position: absolute;
  transition: all ease 0.5s;
  left: 0;
  width: 100px;
  height: 150px;
  border: 2px solid #434445;
  align-items: center;
  flex-wrap: wrap;
  right: 0;
  top: 35px;
  background: white;
  color: #7a7d7c;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
  }
  p:hover {
    width: 90%;
    border-radius: 10px;
    background: black;
    color: #ffffff;
    cursor: pointer;
  }
`;

const TagSection = styled.div`
  display: flex;
`;

//--------------------------------------

//-- 상품 컴포넌트

const ViewMoreSection = styled(AllOption)`
  height: 50px;
  justify-content: center;
  margin: 20px;
`;

const ViewMoreBtn = styled.div`
  width: 250px;
  height: 100%;
  box-shadow: 1px 1px 3px;
  border: 1px solid var(--lightgray);
  border-radius: 10px;
`;

export {
  MainContainer,
  MainContent,
  FilterSection,
  FilterBox,
  FilterTopBox,
  FilterBottomBox,
  FilterLeft,
  FilterRight,
  SellType,
  SearchSection,
  SortSection,
  SortOpDropbar,
  SortByOption,
  TagSection,
  ViewMoreSection,
  ViewMoreBtn,
};
