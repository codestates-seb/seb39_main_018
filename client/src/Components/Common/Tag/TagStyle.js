import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100px;
  height: 40px;
  margin: 20px 10px;
  border-radius: 10px;
  text-align: center;
  background: skyblue;
  font-size: var(--f-xsmall);
  color: white;
  cursor: pointer;

  ${Container}:hover {
    background: pink;
    .tag_cancel {
      display: block;
    }
  }

  p {
    margin: 3px;
  }

  .tag_cancel {
    display: none;
    position: relative;
    font-size: 13px;
  }
`;

//-- 태그 모서리 둥글게 깍는 요소
const CircleSet = styled.div`
  position: absolute;
  right: -11px;
  bottom: -11px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  content: '';
`;
const Circle1 = styled(CircleSet)`
  left: -11px;
  top: -11px;
`;
const Circle2 = styled(CircleSet)`
  right: -11px;
  top: -11px;
`;
const Circle3 = styled(CircleSet)`
  left: -11px;
  bottom: -11px;
`;
const Circle4 = styled(CircleSet)`
  right: -11px;
  bottom: -11px;
`;
/// -------------------------------

export default { Container, Circle1, Circle2, Circle3, Circle4 };

const TagComponent = styled.div`
  display: ${(props) => props.display || 'none'};
  align-items: center;
  padding: 5px 8px;
  margin-right: 10px;
  font-size: var(--f-small);
  border-radius: var(--b-small);
  background: var(--gray);

  .cancel_icon {
    font-size: 18px;
    margin-left: 10px;
    margin-top: 5px;
    cursor: pointer;
  }
`;

export { TagComponent };
