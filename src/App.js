/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "글 제목";
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '월평동 우동 맛집', '파이썬 독학']);  
  // state => 변동 시 자동으로 html에 반영 (재렌더링) > 변경이 잦은 html에서 사용
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      <button onClick={ () => {
                let copy = [...글제목];
                copy.sort();
                글제목변경(copy);
      } }>가나다순정렬</button>

      <button onClick={ () => {
                let copy = [...글제목];
                copy[0] = '여자 코트 추천';
                글제목변경(copy); 
      } }>글 수정</button>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => { 좋아요변경(좋아요 + 1) } }>👍</span> { 좋아요 }</h4>
        <p>6월 5일</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>6월 5일</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>6월 5일</p>
      </div>
    </div>
  );
}

export default App;
