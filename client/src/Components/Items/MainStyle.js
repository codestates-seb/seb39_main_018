import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  height: 60px;
`;
const FilterTopBox = styled(FilterOption)`
  border-bottom: 3px solid var(--gray);
`;
const FilterBottomBox = styled(FilterOption)``;
const FilterLeft = styled(FilterOption)`
  width: 60%;
`;
const FilterRight = styled(FilterOption)`
  position: relative;
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
  height: 105%;
  padding: 0 10px;
  border-bottom: 3px solid ${(prop) => prop.color || 'none'};

  p {
    cursor: pointer;
    color: ${(prop) => prop.color || 'gray'};
  }
`;
const SearchSection = styled.div`
  width: 160px;
  margin: 0 10px;
  position: relative;

  p {
    position: absolute;
    right: -10px;
    top: 10px;
    font-size: 25px;
    color: gray;
  }
`;
const SortByOption = styled.div`
  width: 100px;
  height: 30px;
  border: 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: var(--b-xsmall);
  font-size: var(--f-small);
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
  display: ${(props) => (props.display ? 'flex' : 'none')};
  position: absolute;
  width: 100px;
  height: 150px;
  border: 1px solid;
  align-items: center;
  flex-wrap: wrap;
  right: 0;
  top: 50px;
  background: white;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
  }
  p:hover {
    background: gray;
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
  width: 150px;
  height: 100%;
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
  SortOpDropbar,
  SortByOption,
  TagSection,
  ViewMoreSection,
  ViewMoreBtn,
};
