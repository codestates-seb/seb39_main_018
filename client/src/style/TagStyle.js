import styled from 'styled-components';

const TagContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90px;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  background: skyblue;
  font-size: var(--f-xsmall);
  color: white;
  cursor: pointer;
  
  ${TagContainer}:hover {
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

  .circle1 {
    position: absolute;
    left: -11px;
    top: -11px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    content: '';
  }
  .circle2 {
    position: absolute;
    right: -11px;
    top: -11px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    content: '';
  }
  .circle3 {
    position: absolute;
    left: -11px;
    bottom: -11px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    content: '';
  }
  .circle4 {
    position: absolute;
    right: -11px;
    bottom: -11px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    content: '';
  }
`;

export { TagContainer };
