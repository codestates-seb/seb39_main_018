import React, { useEffect } from 'react';
import Logins from '../Modals/Login/General/LoginStyle';
import Writes from './WriteMainStyle';
import { useState } from 'react';
import axios from 'axios';
import { BsCameraFill } from 'react-icons/bs';

const WriteMain = () => {
  //-- 사진파일 -> 서버로 전송 --//
  const handleImgClick = (e) => {
    const formdata = new FormData();
    formdata.append('uploadImage', files[0]); // 새 값 추가

    const config = {
      Headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(`api`, formdata, config);
  };

  //-- 사진 미리보기 --//
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;

    let imageUrlLists = [...showImages];

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
  //----//

  //-- 제목 input box value 가져오기 --//
  const [inputvalue, setInputvalue] = useState('');
  const handleInputvalue = (e) => {
    setInputvalue(e.target.value);
  };
  //-----//

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
            <small>(0/4)</small>
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
              type="text"
              placeholder="제목을 입력해주세요."
              value={inputvalue}
              onChange={handleInputvalue}
            ></Writes.GreyInput>
          </Writes.ImgWrap>
        </Writes.Writeframe>

        <Writes.Writeframe>
          <Writes.MiniTitle>
            카테고리<Writes.RedSpan>*</Writes.RedSpan>
          </Writes.MiniTitle>

          {/* <Writes.CateTitle>
            <Writes.CateList></Writes.CateList>
          </Writes.CateTitle> */}
        </Writes.Writeframe>

        <button>저장하기</button>
      </Writes.WriteBox>
    </Writes.MainContainer>
  );
};

export default WriteMain;
