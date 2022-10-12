import styled from 'styled-components';

const Subscribe = styled.div`
  padding-top: 80px;
  font-size: 1em;
  line-height: 1.5;
  padding-bottom: 150px;
  background-color: rgba(0, 0, 0, 0.015);
`;

const SubForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 0;
  position: static;
`;

const SubFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SubTitle = styled.div`
  text-align: center;
  font-weight: 700;
  line-height: 1.4;
  font-size: 2.5rem;
  letter-spacing: 1px;
  @media only screen and (max-width: 960px) {
    font-size: 1.6rem;
  }
`;

const SubMini = styled.p`
  padding-bottom: 32px;
  padding-top: 18px;
  color: rgba(0, 0, 0, 0.7);
  letter-spacing: -0.7;
`;

export default { Subscribe, SubForm, SubFormContainer, SubTitle, SubMini };
