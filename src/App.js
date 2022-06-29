/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 맛집';
  let [a, b] = useState(['맛집 추천1', '맛집 추천2', '맛집 추천3'])
  let [good, c] = useState(0);

  // const rendering = () => {
  //   const result = [];
  //   for (let i = 0; i < a.length; i++) {
  //     result.push(<h4 key={i}>{a[i]}</h4>);
  //   }
  //   return result;
  // };


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSiez: '16px'}}>블로그임</h4>
      </div>
      <h4>{post}</h4>

      <div className='list'>
        {/* {rendering()} */}
        {a.map((title, index) => (
        <div key={index}>
          <h4>{title}  <span onClick={()=>{c(good+1)}}>👍</span> {good}</h4>
          <p>2.17 dd</p>
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default App;
