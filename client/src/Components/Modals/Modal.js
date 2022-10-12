import React, { useState, useEffect } from 'react';
import './modal.css';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  // const { open, close, header } = props;
  // 현재 트랜지션 효과를 보여주고 있는 중이라는 상태 값

  const [animate, setAnimate] = useState(false);
  // 실제 컴포넌트가 사라지는 시점을 지연시키기 위한 값
  const [visible, setVisible] = useState(props.open);

  useEffect(() => {
    // open true -> false 가 되는 것을 감지 (즉, 모달창을 닫을 때)
    // console.log(visible)
    // console.log(props.open)
    // if (visible && !props.open) {
    //   setAnimate(true);
    //   setTimeout(() => setAnimate(false), 250);
    // }
    // setAnimate(props.open);
  }, [props]);

  // if (!animate && !visible) return null;
  // if (!props.open) props.close();

  // useEffect(() => {
  //   console.log(open)
  // }, [])

  const modalClose = () => {
    props.close();
  };

  if (!props.open) {
    return <></>;
  } else {
    return (
      <div className="modal-overlay" onClick={() => modalClose()}>
        <div
          className={props.open ? 'modal open' : 'modal close'}
          onClick={(e) => e.stopPropagation()}
        >
          <section>
            <header>
              <button className="close" onClick={() => modalClose()}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
          </section>
        </div>
      </div>
    );
  }
};


export default Modal;
