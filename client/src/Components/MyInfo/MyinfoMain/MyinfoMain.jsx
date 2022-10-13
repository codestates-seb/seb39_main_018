import React from 'react';
import Mains from './MainStyle';
import { useNavigate } from 'react-router-dom';
import Draws from '../Withdraw/WithdrawStyle';
import Wishs from '../MyWish/MyWishStyle';
import { postUserInfo, betaPostUserInfo } from '../../../util/userInfo';

const MyinfoMain = ({ email, name }) => {
  const navigate = useNavigate();
  console.log(email, name);

  return (
    <Draws.CustomerContent
      style={{
        minHeight: '1020px',
      }}
    >
      <Draws.CustomerWithdraw>
        <Mains.UserContainter>
          <Mains.UserUSer>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
          </Mains.UserUSer>
          <Mains.UserInfo>
            <Mains.UserID>{name}</Mains.UserID>
            <Mains.UserEmail>{email}</Mains.UserEmail>
          </Mains.UserInfo>
          <Mains.UserRight>
            <Mains.ProfileButton onClick={() => navigate('/mypage/profile')}>
              프로필 수정
            </Mains.ProfileButton>
          </Mains.UserRight>
        </Mains.UserContainter>

        <Mains.Just>
          <Mains.TitleMore>
            <Mains.Title>구매 상품</Mains.Title>
            <Mains.More onClick={() => navigate('/mypage/buy')}>더보기 ﹥</Mains.More>
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
            <Mains.More onClick={() => navigate('/mypage/sell')}>더보기 ﹥</Mains.More>
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
      </Draws.CustomerWithdraw>
    </Draws.CustomerContent>
  );
};

export default MyinfoMain;
