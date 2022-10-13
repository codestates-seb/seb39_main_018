import React from 'react';
import Lands from './HeaderStyle';

const LandingHeader = () => {
  return (
    <Lands.Header>
      <img src={sortlogo} onClick={() => navigate('/main')} />
      <Lands.HeaderRight>
        <a href="https://github.com/codestates-seb/seb39_main_018">
          <VscGithubAlt />
        </a>
        <a>
          <IoLogoInstagram />
        </a>
      </Lands.HeaderRight>
    </Lands.Header>
  );
};

export default LandingHeader;
