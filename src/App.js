/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useDeferredValue, useState, useTransition } from 'react';

let a = new Array(10).fill(0)

function App() {
  //useDeferredValue, useState, useTransition
  let [name, setName] = useState('');
  let [isPending, startTransition] = useTransition();
  let state = useDeferredValue(name);
  //


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
      {/* useDeferredValue, useState, useTransition */}
      <input onChange={(e =>{
        startTransition(()=>{
          setName(e.target.value)
        })
      })}/>
      {
        isPending ? 'Loading..' : 
        a.map(()=>{
          return <div>{state}</div>
        })
      }
      {/*  */}

      <div className="black-nav">
        <h4 style={{color : 'red', fontSiez: '16px'}}>블로그임</h4>
      </div>
      <h4>{post}</h4>

      <button onClick={()=>{
        let copy = [...a];
        copy[0] = '수정수정';
        b(copy);
      }}>수정</button>

      <div className='list'>
        {/* {rendering()} */}
        {a.map((title, index) => (
        <div key={index}>
          <h4>{title}  <span onClick={()=>{c(good+1)}}>👍</span> {good}</h4>
          <p>2.17 dd</p>
        </div>
      ))}
      </div>

      <Modal/>      
      
    </div>
  );
}

const Modal2 = () =>{
  return(
    <div></div>
  )
}

function Modal(){
  return(
    <>
      <div className="modal">
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
      </div>
      <div></div>
    </>
  )
}

export default App;
