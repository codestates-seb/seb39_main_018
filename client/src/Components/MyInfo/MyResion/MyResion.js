import React from 'react';
import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Draws from '../../MyInfo/Withdraw/WithdrawStyle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { kakao } = window;

const MyResion = () => {
  const navigate = useNavigate();

  // 인증하기 버튼 클릭
  // 위도, 경도, 사용자 위치 주소
  const [latt, setLatt] = useState(0);
  const [long, setLong] = useState(0);
  const [address, setAddress] = useState('');

  // 현재위치 전송
  const mapLocationCheck = () => {
    axios({
      method: '',
      url: '',
      headers: { '': '' },
      data: {
        address: address,
      },
    })
      .then((res) => {
        window.alert('지역인증을 완료했습니다.');
        navigate('/');
      })
      .catch((err) => {
        window.alert('지역인증에 실패했습니다.');
        console.log(err);
      });
  };

  // 사용자 위치 주소 요청
  const getLocation = () => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatt(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      );
    } else {
      window.alert('GPS를 지원하지 않습니다');
    }
  };
  getLocation();

  useEffect(() => {
    if (latt && long) {
      var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(latt, long), // 지도의 중심좌표
          level: 1, // 지도의 확대 레벨
        };

      // 지도를 생성합니다
      const map = new kakao.maps.Map(mapContainer, mapOption);

      // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new kakao.maps.services.Geocoder();

      // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
      searchAddrFromCoords(map.getCenter(), displayCenterInfo);

      // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
      kakao.maps.event.addListener(map, 'idle', function () {
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);
      });

      function searchAddrFromCoords(coords, callback) {
        // 좌표로 행정동 주소 정보를 요청합니다
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
      }

      // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
      function displayCenterInfo(result, status) {
        if (status === kakao.maps.services.Status.OK) {
          var infoDiv = document.getElementById('centerAddr');

          for (var i = 0; i < result.length; i++) {
            // 행정동의 region_type 값은 'H' 이므로
            if (result[i].region_type === 'H') {
              if (infoDiv !== null && infoDiv.innerHTML !== null) {
                infoDiv.innerHTML = result[i].address_name;
              }
              console.log(result[i].address_name);
              setAddress(result[i].address_name);
              break;
            }
          }
        }
      }
    }
  }, [latt, long]);

  // 현재 내 위치 지도 띄울 함수
  const [draggable, setDraggable] = useState(true);
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: '위치를 확인할 수 없습니다.',
        isLoading: false,
      }));
    }
  }, []);
  //

  return (
    <Draws.CustomerContent>
      <Draws.CustomerWithdraw>
        <Draws.ContentTitle
          style={{
            paddingBottom: '15px',
          }}
        >
          <Draws.Title>지역인증</Draws.Title>
        </Draws.ContentTitle>

        <Map // 지도
          center={state.center}
          style={{
            width: '100%',
            height: '350px',
            paddingTop: '20px',
            paddingBottom: '15px',
          }}
          level={3}
          draggable={draggable}
        >
          {!state.isLoading && (
            <MapMarker position={state.center}>
              {/* <div style={{ padding: '5px', color: '#000' }}>
              {state.errMsg ? state.errMsg : '여기에 계신가요?!'}
            </div> */}
            </MapMarker>
          )}
        </Map>

        <div>
          {/* <div className="map_wrap"> */}
          <div id="map"></div>
          <Draws.H3>
            나의 현재 위치는 '
            <span id="centerAddr" style={{ color: 'black', fontWeight: '500' }} />' 입니다.
          </Draws.H3>
          <Draws.RealAgree>
            <Draws.WhiteButtonBox style={{ fontWeight: '350' }} onClick={() => mapLocationCheck()}>
              지역인증 완료하기
            </Draws.WhiteButtonBox>
          </Draws.RealAgree>
          {/* </div> */}
        </div>
      </Draws.CustomerWithdraw>
    </Draws.CustomerContent>
  );
};

export default MyResion;
