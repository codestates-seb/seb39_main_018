import React from 'react';
import { Category } from '../ItemDetailStyle';

const ItemCategory = () => {
  return (
    <Category>
      <ul className="category_list">
        <li>티켓 ⇒</li>
        <li>여행 →</li>
        <li>비행기 </li>
      </ul>
    </Category>
  );
};

export default ItemCategory;
