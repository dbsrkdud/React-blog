/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/* 기본적으로 알아야 할 것
  - state 만드는 법
  - props 전송하는 법
  - 컴포넌트 만드는 법
  - UI 만드는 step
  ...
*/

function App() {

  let post = "글 제목";
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);  
  // state => 변동 시 자동으로 html에 반영 (재렌더링) > 변경이 잦은 html에서 사용
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(1);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {/* <button onClick={ () => {
                let copy = [...글제목];
                copy.sort();
                글제목변경(copy);
      } }>가나다순정렬</button>

      <button onClick={ () => {
                let copy = [...글제목];
                copy[0] = '여자 코트 추천';
                글제목변경(copy); 
      } }>글 수정</button> */}

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => { 좋아요변경(좋아요 + 1) } }>👍</span> { 좋아요 }</h4>
        <p>6월 5일</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>6월 5일</p>
      </div>
      <div className="list">
        <h4 onClick={ () => { modal == true ? setModal(false) : setModal(true) } }>{ 글제목[2] }</h4>
        <p>6월 5일</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className="list">
              <h4 onClick={ () => { setModal(true); setTitle(i); } }>{ 글제목[i] }
                <span onClick={ (e) => {
                    e.stopPropagation();
                    // state가 array 자료일 경우 복사
                    let copy = [...좋아요];
                    copy[i] = copy[i] + 1;
                    좋아요변경(copy);
                  } }> 👍</span> { 좋아요[i] }
              </h4>
               <p>6월 5일</p>
            </div>
          )
        })
      }

      <input onChange={ (e) => {
        입력값변경(e.target.value); 
        console.log(입력값);      // state 변경함수는 늦게 처리(비동기처리), 첫 글자는 출력되지 않음
      } } />

      <button onClick={ () => {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
        좋아요.push(0);
      } }>글쓰기</button>

      {
        modal == true ? <Modal 글제목={ 글제목 } 글제목변경={ 글제목변경 } title={ title } /> : null
      }

    </div>
  );
}

// 컴포넌트
// const Modal = () => {}

function Modal(props){
  return (
    <div className="modal"> 
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={ () => { props.글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']) } }>글수정</button>
      </div>
  )
}

export default App;
