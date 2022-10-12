import styled from 'styled-components';

const ModalContainer = styled.div`
  width: 100%;
  height: 150%;
  position: absolute;
  z-index: 11;
  background: #545454;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
`;

const Modalwindow = styled.div`
  width: 450px;
  height: 250px;
  margin-top: 250px;
  background: white;
  opacity: none;
  border-radius: 10px;
`;
const ModalTitle = styled.div`
  display: flex;
  padding: 0 25px;
  align-items: flex-end;
  margin: 0 10px;
  height: 60px;
`;
const ModalDescription = styled.div`
  display: flex;
  padding: 0 35px;
  align-items: center;
  color: #b0aeae;
  height: 80px;
  font-size: 15px;
`;

const BtnSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 70px;
`;

const ModalBtn = styled.div`
  width: 120px;
  height: 45px;
  margin: 0 10px;
`;

export { ModalContainer, Modalwindow, ModalTitle, ModalDescription, ModalBtn, BtnSection };
