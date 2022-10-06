import React from 'react';
import Foots from './Footerstyle';
import { HiMail } from 'react-icons/hi';
import { FaPhoneSquareAlt, FaGithubSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { GiEarthAsiaOceania } from 'react-icons/gi';

const Footer = () => {
  return (
    <Foots.FooterContainer>
      <Foots.FooterBox>
        <Foots.FooterContent>
          <Foots.FooterList>
            <Foots.FooterLeft>
              <Foots.Left>
                <Foots.H4Title>SORT</Foots.H4Title>
                <Foots.Contact>
                  <Foots.FooterLink style={{ display: 'flex' }}>
                    <HiMail
                      style={{
                        marginTop: '5px',
                      }}
                    />
                    <Foots.JustSpan
                      style={{
                        marginTop: '-2px',
                        marginLeft: '5px',
                        fontSize: '0.8rem',
                        fontWight: '480',
                        color: 'black',
                      }}
                    >
                      Send Email
                    </Foots.JustSpan>
                  </Foots.FooterLink>
                </Foots.Contact>
              </Foots.Left>

              <Foots.Left>
                <Foots.H4Title>About</Foots.H4Title>
                <Foots.Contact>
                  <Foots.FooterLink>
                    <Foots.JustSpan>Team</Foots.JustSpan>
                    <Foots.JustSpan>Client</Foots.JustSpan>
                    <Foots.JustSpan>Server</Foots.JustSpan>
                  </Foots.FooterLink>
                </Foots.Contact>
              </Foots.Left>

              <Foots.Left>
                <Foots.H4Title>Contact Us</Foots.H4Title>
                <Foots.Contact>
                  <Foots.FooterLink>
                    <Foots.JustSpan>Eunsoo</Foots.JustSpan>
                    <Foots.JustSpan>Yeonju</Foots.JustSpan>
                    <Foots.JustSpan>Hyejin</Foots.JustSpan>
                    <Foots.JustSpan>Jihong</Foots.JustSpan>
                  </Foots.FooterLink>
                </Foots.Contact>
              </Foots.Left>
            </Foots.FooterLeft>
            <Foots.FooterRight>
              <Foots.Right>
                <Foots.SnsBox>
                  <Foots.Sns>
                    <FaPhoneSquareAlt />
                  </Foots.Sns>
                  <Foots.Sns>
                    <FaGithubSquare />
                  </Foots.Sns>
                  <Foots.Sns>
                    <AiFillInstagram style={{ fontSize: '30px', marginBottom: '-3px' }} />
                  </Foots.Sns>
                </Foots.SnsBox>
              </Foots.Right>
            </Foots.FooterRight>
          </Foots.FooterList>

          <Foots.Bottom>
            <Foots.BottomLeft>
              솔트 서비스 내 상품을 제외한 모든 상품은 개인 간 거래로 이루어지며, 구매 및 판매 시
              신중하게 진행하시길 바랍니다.
              <br />
              이에 관한 법적 책임을 지지 않습니다.
            </Foots.BottomLeft>

            <Foots.BottomRight>
              <Foots.CopyRightAndFrom>
                <Foots.FromBox>
                  <GiEarthAsiaOceania />
                  <span>South Korea </span>
                </Foots.FromBox>
                <span style={{ color: 'grey', fontSize: '11px' }}>© 2022 SORT</span>
              </Foots.CopyRightAndFrom>
            </Foots.BottomRight>
          </Foots.Bottom>
        </Foots.FooterContent>
      </Foots.FooterBox>
    </Foots.FooterContainer>
  );
};

export default Footer;
