import styled from 'styled-components';

const Advertise = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  letter-spacing: -0.1px;
  padding-top: 6px;
  padding: 30px 40px 25px 2px;
  border-bottom: 1px solid #ebebeb;
  opacity: 0.8;
`;

const Checkbox = styled.input`
  width: 50px;
`;

const Certified = styled.div`
  width: 40%;
  transform: translate(285px, -40px);
  margin-bottom: -40px;
`;

const CertifiedButton = styled.button`
  height: 40px;
  font-size: 14px;
  padding: 10px 20px;
  color: #fff;
  background-color: #000000;
  line-height: 100%;
  border-radius: 2.5px;
  display: inline;
  font-size: 14px;
  font-weight: 300;
  opacity: 0.9;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition-duration: 0.25s;
  }
`;

const IdBox = styled.div`
  box-sizing: border-box;
  position: relative;
  padding-bottom: 10px;
  .info_default {
    width: 340px;
    height: 30px;
    margin-top: 10px;
    padding-left: 5px;
    border-bottom: 1px solid var(--lightgray);
    font-size: 14px;
    color: #a3a3a3;
  }
`;

const NameBox = styled.div`
  font-size: 13px;
  font-weight: 640;
  line-height: 18px;
  position: relative;
  color: ${(props) => (props.color === 'red' ? 'rgba(900, 20, 0, 0.7)' : '##ebebeb')};
  .info_default {
    width: 340px;
    height: 30px;
    margin-top: 10px;
    padding-left: 5px;
    border-bottom: 1px solid var(--lightgray);
    font-size: 13px;
    color: #a3a3a3;
  }
`;

const InputBox = styled.input`
  padding-right: 30px;

  height: 38px;
  width: 92.5%;
  font-size: 13px;
  letter-spacing: -0.15px;
  outline: 0;
  border: 0;
  border-bottom: ${(props) =>
    props.color === 'red' ? '1px solid rgba(900, 20, 0, 0.7)' : '1px solid #ebebeb'};

  &:focus {
    border-bottom: 1px solid #111;
  }
`;

const PasswordBox = styled.div`
  padding-bottom: 25px;
`;
export { Advertise, Certified, CertifiedButton, Checkbox, IdBox, NameBox, InputBox, PasswordBox };
