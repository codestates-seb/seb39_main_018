import styled from 'styled-components';

const Title = styled.h3`
  display: block;
  padding: 30px 0 0 0;
  font-size: 25px;
  font-weight: 700;
  color: #111;
`;

const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 20px;
  text-align: center;
  line-height: 20px;
  color: #9999;
  font-size: 14px;
  padding-top: 3px;
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

export default { Title, SubTitle, Certified, CertifiedButton };
