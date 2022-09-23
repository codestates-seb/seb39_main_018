import React, { useState, useEffect } from 'react';
import './modal.css';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  // 현재 트랜지션 효과를 보여주고 있는 중이라는 상태 값
  const [animate, setAnimate] = useState(false);
  // 실제 컴포넌트가 사라지는 시점을 지연시키기 위한 값
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    // open 값이 true -> false 가 되는 것을 감지 (즉, 모달창을 닫을 때)
    if (visible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setAnimate(open);
  }, [visible, open]);

  if (!animate && !visible) return null;

  return (
    // 모달의 open close클래스로 css animation을 구현
    <div className={open ? 'modal open' : 'modal close'}>
      <section>
        <header>
          <button className="close" onClick={close}>
            &times;
          </button>
        </header>
        <main>{props.children}</main>
      </section>
    </div>
  );
};

export default Modal;
