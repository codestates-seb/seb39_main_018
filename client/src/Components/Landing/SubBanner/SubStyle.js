import styled from 'styled-components';

const AllOption = styled.div`
  display: flex;
  width: 100%;
`;

const SubBanner_Container = styled(AllOption)`
  padding-top: 200px;

  height: 400px;
  justify-content: center;
  align-items: center;

  animation: slides 3s ease-out;
  position: absolute;

  @keyframes slides {
    from {
      right: 100px;
      opacity: 0;
    }
    to {
      right: 0px;
      opacity: 1;
    }
  }

  @media only screen and (max-width: 960px) {
    padding-top: 100px;
    height: 200px;
  }
`;

const Featuree = styled.div`
  border-radius: 10px;
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  img {
    width: 120px;
    height: 80px;
  }
  p {
    margin: 50px;
  }

  @media only screen and (max-width: 960px) {
    width: 200px;
    height: 100px;

    img {
      width: 100px;
      height: 60px;
    }
    p {
      margin: 22px;
      font-size: 9px;
    }
  }
`;

export { SubBanner_Container, Featuree };
