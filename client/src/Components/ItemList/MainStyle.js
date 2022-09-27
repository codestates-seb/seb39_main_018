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
  background: var(--lightgray);
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
  width: 40%;
  justify-content: space-between;
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
const TagFilter = styled.div`
  display: flex;
`;

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
  FilterBox,
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
