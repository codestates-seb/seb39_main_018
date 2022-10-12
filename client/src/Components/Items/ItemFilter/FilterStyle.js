import styled from 'styled-components';

const AllOption = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 100%;

  @media screen and (max-width: 720px) {
    p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 620px) {
    p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 450px) {
    p {
      font-size: 8px;
    }
  }
`;

const FilterSection = styled.div`
  width: 1200px;
  margin: 0 20px;
  display: flex;
  justify-content: center;
`;
const FilterBox = styled(AllOption)`
  width: 100%;
  height: 100px;
  flex-wrap: wrap;
`;

const FilterOption = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
`;
const FilterTopBox = styled(FilterOption)`
  border-bottom: 2px solid var(--lightgray);
  height: 62px;
`;
const FilterBottomBox = styled(FilterOption)``;
const FilterLeft = styled(FilterOption)`
  width: 60%;
  @media screen and (max-width: 450px) {
    display: flex;
    height: 40px;
    margin-top: 20px;
  }
`;
const FilterRight = styled(FilterOption)`
  width: 100%;
  justify-content: flex-end;
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

  @media screen and (max-width: 450px) {
    display: flex;
    height: 40px;
    justify-content: center;
    width: 55px;
    padding: 0 0px;
    p {
      font-size: 13px;
    }
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
  position: relative;
`;

const SortByOption = styled.div`
  width: 100px;
  height: 30px;
  border: 2px solid gray;
  box-shadow: 1px 1px 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  font-size: 12px;
  color: black;
  .select_icon {
    display: flex;
    align-items: center;
    transition: all ease 0.5s;
    color: black;
    font-size: 15px;
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

  @media screen and (max-width: 720px) {
    margin-top: 25px;
    width: 70px;
    height: 20px;
    font-size: 10px;
  }
  @media screen and (max-width: 430px) {
    width: 50px;
    p {
      font-size: 8px;
    }
  }
`;

const SortOpDropbar = styled(SortByOption)`
  display: ${(props) => props.display || 'none'};
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
    background: #455285;
    color: #ffffff;
    cursor: pointer;
  }
  @media screen and (max-width: 720px) {
    margin-top: 15px;
    width: 70px;
    p {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 430px) {
    width: 50px;
  }
`;

const TagSection = styled.div`
  display: flex;
`;

export {
  FilterSection,
  FilterBox,
  FilterLeft,
  FilterRight,
  SellType,
  SearchSection,
  SortSection,
  SortByOption,
  TagSection,
  FilterTopBox,
  FilterBottomBox,
  SortOpDropbar,
};
