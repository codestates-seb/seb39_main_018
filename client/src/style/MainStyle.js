import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
`;

const MainContent = styled(MainContainer)`
  width: 1200px;
  border: 1px solid black;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const AllOption = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  background: var(--lightgray);
`;
//--- 정렬 컴포넌트
const FilterSection = styled(AllOption)`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterOption = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid;
`;
const FilterTopBox = styled(FilterOption)``;
const FilterBottomBox = styled(FilterOption)``;
const FilterLeft = styled(FilterOption)`
  width: 60%;
`;
const FilterRight = styled(FilterOption)`
  width: 40%;
  justify-content: space-between;
`;
const SellType = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  border: 1px solid;
`;
const SearchFilter = styled.div`
  width: 150px;
  margin: 0 10px;
`;
const SortByOption = styled.div`
  width: 80px;
  height: 30px;
  border: 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: var(--b-xsmall);
  .select_icon {
    margin-top: 5px;
  }
`;
const TagFilter = styled.div``;

//--------------------------------------

//-- 상품 컴포넌트

const ViewMoreSection = styled(AllOption)`
  height: 80px;
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
  FilterTopBox,
  FilterBottomBox,
  FilterLeft,
  FilterRight,
  SellType,
  SearchFilter,
  SortByOption,
  TagFilter,
  ViewMoreSection,
  ViewMoreBtn,
};
