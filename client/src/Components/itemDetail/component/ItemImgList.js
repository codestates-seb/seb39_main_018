import React from 'react';
import { ImgList } from "../ItemDetailStyle";
import { LeftIcon,RightIcon } from "../../icons/Icons";

const ItemImgList = () => {
    return (
      <ImgList>
        <div className="list_icon">
          <LeftIcon />
        </div>
        <Post.NextPicture />
        <Post.NextPicture />
        <Post.NextPicture />
        <Post.NextPicture />
        <div className="list_icon">
          <RightIcon />
        </div>
      </ImgList>
    );
  };

  export default ItemImgList;