import React,{useState, useEffect} from 'react';

/*
props = 정적인 데이터를 사용할 떄, 페이지 로드시 한ㅂ
state = 동적인 데이터를 사용할 떄, api를 계속해서 받아올때

정적 & 동적 구분법
##  렌더링이 필요한지? 
    state가 변경되었을 떄, 수정되는 부분만 리렌더링 


*/
const Counter = ()=>{
    const [number, setNumber] = useState(1);//인자 기본값
    useEffect(()=> {
        console.log("rendering....!")
    }, [number]); 
    //useEffect customized --> 커스텀에 따라 didUpdate, willUpdate
    //number가 변경되었을 때만 
    //[] 비어있을때 최초 렌더링일때만 

    const increase = () => {
        setNumber(number + 1); 
    }   
    const decrease = () => {
        setNumber(number - 1);
    } 
    return <>{number} 입니다.
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </>
}

export default Counter;