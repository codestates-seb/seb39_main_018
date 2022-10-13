import React, { useEffect } from 'react';
import Writes from './WriteMainStyle';
import { useState } from 'react';
import axios from 'axios';
import { BsCameraFill } from 'react-icons/bs';
import Draws from '../MyInfo/Withdraw/WithdrawStyle';
import { VscClose } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { writePost } from '../../redux/itemslice';
import { postItem, usePost } from '../../util/requestItem';

const WriteMain = () => {
  //-- 사진 미리보기 --//
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  let imageUrlLists = [...showImages];
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }
    if (imageUrlLists.length > 4) {
      imageUrlLists = imageUrlLists.slice(0, 4);
    }
    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  //-- input 관리 --//
  const [inputs, setInputs] = useState({
    title: '',
    price: '',
    seat_number: 'f열',
    body: '',
    end_date: '',
    status: '판매중',
    photo: '0',
    region: '서울시 강남구 논현동',
    status: '판매중',
  });
  const dispatch = useDispatch();
  const postSend = () => {
    dispatch(writePost(inputs));
  };

  const writeinfo = useSelector((state) => state.items.writeInfo);
  const { title, price, seat_number, body } = inputs;
  console.log(writeinfo);
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  //-- 카테고리 선택 --//
  const ticketList = [
    { id: null, value: '카테고리를 선택해주세요.' },
    { id: '콘서트', value: '콘서트' },
    { id: '뮤지컬', value: '뮤지컬' },
    { id: '스포츠', value: '스포츠' },
    { id: '영화', value: '연극/영화' },
    { id: '전시', value: '전시' },
    { id: '여행', value: '여행' },
  ];

  const [choiceTicket, setChoiceTicket] = useState('카테고리를 선택해주세요.');

  const onClickDropbar = (e) => {
    const { value } = e.target;
    setChoiceTicket(ticketList.filter((el) => el.value === value)[0].id);
  };

  //-- 가격 ; 숫자만 입력 가능 --//
  const [num, setNum] = useState('');
  const priceInput = (num) => {
    const priceComma = (num) => {
      num = String(num);
      return num.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const unpriceComma = (num) => {
      num = String(num);
      return num.replace(/[^\d]+/g, '');
    };
    return priceComma(unpriceComma(num));
  };

  //-- 태그 --//
  const [writeTag, setWriteTag] = useState('');
  const [tags, setTags] = useState([]);

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      enterTag();
    }
  };

  const enterTag = () => {
    let upTags = [...tags];
    upTags.push(writeTag);
    setTags(upTags);
    setWriteTag('');
  };

  const removeTag = (e) => {
    const removeTag = e.target.parentElement.firstChild.innerText;
    const filteredtags = tags.filter((writeTag) => writeTag !== removeTag);
    setTags(filteredtags);
  };

  useEffect(() => {
    if (tags.length > 4) {
      setTags(tags.slice(0, 4));
    }
  }, [writeTag]);
  // const tests = postItem();
  const { postData, caseByResult } = usePost();
  caseByResult;
  console.log(caseByResult);
  //-- 티켓 사용일 --//

  return (
    <Writes.MainContainer>
      <Writes.ContainerTop>
        <Writes.TopTitle>
          티켓등록<Writes.RedSpan style={{ marginLeft: '20px' }}>*필수항목</Writes.RedSpan>
        </Writes.TopTitle>
      </Writes.ContainerTop>

      <Writes.WriteBox>
        <Writes.Writeframe>
          <Writes.MiniTitle>
            티켓 이미지<Writes.RedSpan>*</Writes.RedSpan>
            <br />
            <small>{imageUrlLists.length}/4</small>
          </Writes.MiniTitle>

          <Writes.ImgWrap>
            <Writes.Wrap>
              <Writes.InputBox>
                <BsCameraFill style={{ width: '2rem', height: '2rem' }} />
                이미지 등록
                <input
                  type="file"
                  id="file"
                  accept="image/jpg, image/jpeg, image/png"
                  multiple=""
                  onChange={handleAddImages}
                />
              </Writes.InputBox>
              {showImages.map((image, id) => (
                <Writes.UpImg key={id}>
                  <img src={image} alt={`${image}-${id}`} />
                  <span onClick={() => handleDeleteImage(id)}></span>
                </Writes.UpImg>
              ))}
            </Writes.Wrap>
          </Writes.ImgWrap>
        </Writes.Writeframe>

        <Writes.Writeframe>
          <Writes.MiniTitle>
            제목<Writes.RedSpan>*</Writes.RedSpan>
          </Writes.MiniTitle>

          <Writes.ImgWrap>
            <Writes.GreyInput
              name="title"
              value={title}
              placeholder="제목을 입력해주세요."
              onChange={onChange}
            ></Writes.GreyInput>
          </Writes.ImgWrap>
        </Writes.Writeframe>

        <Writes.Writeframe>
          <Writes.MiniTitle>
            카테고리<Writes.RedSpan>*</Writes.RedSpan>
          </Writes.MiniTitle>

          <Writes.ImgWrap>
            <Writes.TicketCategory>
              <Writes.CategoryBox>
                <Writes.TicketBar onChange={onClickDropbar}>
                  {ticketList.map((el) => {
                    return <option key={el.id}>{el.value}</option>;
                  })}
                </Writes.TicketBar>
              </Writes.CategoryBox>
              <Writes.ChoiceBox>
                <Writes.Choice>선택한 카테고리</Writes.Choice>
                <Writes.ChoicePick>{choiceTicket}</Writes.ChoicePick>
              </Writes.ChoiceBox>
            </Writes.TicketCategory>
          </Writes.ImgWrap>
        </Writes.Writeframe>

        <Writes.Writeframe>
          <Writes.MiniTitle>
            가격<Writes.RedSpan>*</Writes.RedSpan>
          </Writes.MiniTitle>

          <Writes.ImgWrap>
            <Writes.GreyInput
              style={{ width: '28%' }}
              name="price"
              type="text"
              value={num}
              placeholder="가격을 입력해주세요."
              onChange={(e) => {
                setNum(priceInput(e.target.value));
                setInputs({ ...inputs, ['price']: e.target.value });
              }}
            ></Writes.GreyInput>
            원
          </Writes.ImgWrap>
        </Writes.Writeframe>

        <Writes.Writeframe>
          <Writes.MiniTitle>좌석</Writes.MiniTitle>

          <Writes.ImgWrap>
            <Writes.GreyInput
              style={{ width: '28%' }}
              name="seat"
              placeholder="좌석을 입력해주세요."
              onChange={onChange}
            ></Writes.GreyInput>
          </Writes.ImgWrap>
        </Writes.Writeframe>

        <Writes.Writeframe>
          <Writes.MiniTitle>
            사용일<Writes.RedSpan>*</Writes.RedSpan>
          </Writes.MiniTitle>
          <Writes.ImgWrap>
            <Writes.GreyInput
              onChange={(e) => setInputs({ ...inputs, end_date: e.target.value })}
              style={{ width: '28%' }}
              type="datetime-local"
            />
          </Writes.ImgWrap>
        </Writes.Writeframe>

        <Writes.Writeframe>
          <Writes.MiniTitle>
            티켓설명<Writes.RedSpan>*</Writes.RedSpan>
          </Writes.MiniTitle>

          <Writes.ImgWrap>
            <Draws.WriteInput
              style={{}}
              name="body"
              value={body}
              placeholder="구매자에게 필요한 티켓 정보를 포함하여 작성하면 구매 문의를 줄일 수 있습니다 :)"
              onChange={onChange}
            ></Draws.WriteInput>
          </Writes.ImgWrap>
        </Writes.Writeframe>

        <Writes.Writeframe>
          <Writes.MiniTitle>
            태그
            <br />
            <small>{tags.length}/4</small>
          </Writes.MiniTitle>

          <Writes.ImgWrap>
            <Writes.TagContainer>
              {tags.map((writeTag, index) => {
                return (
                  <Writes.RealTag key={index}>
                    <span>{writeTag}</span>
                    <VscClose style={{ cursor: 'pointer' }} onClick={removeTag} />
                  </Writes.RealTag>
                );
              })}
              <Writes.GreyInput
                type="text"
                tabIndex={2}
                onChange={(e) => setWriteTag(e.target.value)}
                value={writeTag}
                onKeyPress={onKeyPress}
                placeholder="태그를 입력해주세요."
              ></Writes.GreyInput>
            </Writes.TagContainer>
          </Writes.ImgWrap>
        </Writes.Writeframe>
      </Writes.WriteBox>

      <Draws.RealAgree style={{ marginTop: '-30px', marginBottom: '40px' }}>
        <Draws.BlackButtonBox>취소하기</Draws.BlackButtonBox>
        <Draws.WhiteButtonBox
          onClick={() => {
            dispatch(writePost(inputs));
            setTimeout(() => {
              postData(writeinfo);
            }, 1000);
          }}
        >
          티켓등록
        </Draws.WhiteButtonBox>
      </Draws.RealAgree>
    </Writes.MainContainer>
  );
};

export default WriteMain;
