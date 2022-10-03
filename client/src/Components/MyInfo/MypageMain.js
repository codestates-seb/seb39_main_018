import React from 'react';
import Mains from './MypageMainStyle';
import { useNavigate } from 'react-router-dom';
import MypageSideBar from './MypageSideBar';
import Draws from '../Withdraw/WithdrawPageStyle';
import Wishs from './MypageWishStyle';

const MypageMain = () => {
  const navigate = useNavigate();

  return (
    <Draws.Container>
      <MypageSideBar />
      <Draws.CustomerContent
        style={{
          minHeight: '1020px',
        }}
      >
        <Draws.CustomerWithdraw>
          <Mains.Container>
            <Mains.UserContainter>
              <Mains.UserUSer>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
              </Mains.UserUSer>
              <Mains.UserInfo>
                <Mains.UserID>aaaa1111</Mains.UserID>
                <Mains.UserEmail>aaaa1111@naver.com</Mains.UserEmail>
              </Mains.UserInfo>
              <Mains.UserRight>
                <Mains.ProfileButton onClick={() => navigate('/my/profile')}>
                  프로필 수정
                </Mains.ProfileButton>
              </Mains.UserRight>
            </Mains.UserContainter>

            <Mains.Just>
              <Mains.TitleMore>
                <Mains.Title>구매 상품</Mains.Title>
                <Mains.More onClick={() => navigate('/my/buy')}>더보기 ﹥</Mains.More>
              </Mains.TitleMore>
              <Wishs.Content style={{ marginBottom: '100px' }}>
                <Wishs.Item>
                  <Wishs.ItemImg>
                    <Wishs.RealItem>
                      <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" />
                    </Wishs.RealItem>
                  </Wishs.ItemImg>
                  <Wishs.ItemNamePrice>
                    <Wishs.ItemName>아이유 콘서트 티켓 팝니다</Wishs.ItemName>
                    <br></br>
                    <Wishs.ItemPrice>12,345원</Wishs.ItemPrice>
                  </Wishs.ItemNamePrice>
                </Wishs.Item>
                <Wishs.Item>
                  <Wishs.ItemImg>
                    <Wishs.RealItem>
                      <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" />
                    </Wishs.RealItem>
                  </Wishs.ItemImg>
                  <Wishs.ItemNamePrice>
                    <Wishs.ItemName>아이유 콘서트 티켓 팝니다</Wishs.ItemName>
                    <br></br>
                    <Wishs.ItemPrice>12,345원</Wishs.ItemPrice>
                  </Wishs.ItemNamePrice>
                </Wishs.Item>
                <Wishs.Item>
                  <Wishs.ItemImg>
                    <Wishs.XButton></Wishs.XButton>
                    <Wishs.RealItem>
                      <img src="http://hyunsik.me/wordpress/wp-content/uploads/2014/10/11.png" />
                    </Wishs.RealItem>
                  </Wishs.ItemImg>
                  <Wishs.ItemNamePrice>
                    <Wishs.ItemName>소격동 콘서트 티켓 팝니다</Wishs.ItemName>
                    <br></br>
                    <Wishs.ItemPrice>12,345원</Wishs.ItemPrice>
                  </Wishs.ItemNamePrice>
                </Wishs.Item>
              </Wishs.Content>
            </Mains.Just>

            <Mains.Just>
              <Mains.TitleMore>
                <Mains.Title>판매 상품</Mains.Title>
                <Mains.More onClick={() => navigate('/my/sell')}>더보기 ﹥</Mains.More>
              </Mains.TitleMore>
              <Wishs.Content>
                <Wishs.Item>
                  <Wishs.ItemImg>
                    <Wishs.RealItem>
                      <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" />
                    </Wishs.RealItem>
                  </Wishs.ItemImg>
                  <Wishs.ItemNamePrice>
                    <Wishs.ItemName>아이유 콘서트 티켓 팝니다</Wishs.ItemName>
                    <br></br>
                    <Wishs.ItemPrice>12,345원</Wishs.ItemPrice>
                  </Wishs.ItemNamePrice>
                </Wishs.Item>
                <Wishs.Item>
                  <Wishs.ItemImg>
                    <Wishs.XButton></Wishs.XButton>
                    <Wishs.RealItem>
                      <img src="http://hyunsik.me/wordpress/wp-content/uploads/2014/10/11.png" />
                    </Wishs.RealItem>
                  </Wishs.ItemImg>
                  <Wishs.ItemNamePrice>
                    <Wishs.ItemName>소격동 콘서트 티켓 팝니다</Wishs.ItemName>
                    <br></br>
                    <Wishs.ItemPrice>12,345원</Wishs.ItemPrice>
                  </Wishs.ItemNamePrice>
                </Wishs.Item>
              </Wishs.Content>
            </Mains.Just>
          </Mains.Container>
        </Draws.CustomerWithdraw>
      </Draws.CustomerContent>
    </Draws.Container>
  );
};

export default MypageMain;
