import React, { useState } from 'react'

const App = () => {
  const [input, setInput] = useState('');

  const clickHandler = (key)=>{
    if(key === 'c'){
      setInput('');
    }else if(key === '←'){
      setInput(input.slice(0,-1));
    }else if(key === '='){
      setInput(eval(input));
    }else{
      setInput(prevInput => prevInput+key);
    }
  }
  

  const but_design = 'lg:w-1/5 bg-red-500 border border-black rounded-md';
  const but_tray_design = 'lg:my-4 lg:h-10 lg:w-80 flex justify-around text-3xl';
  return (
    <>
    <div className='box-content m-auto lg:my-14 border border-black bg-slate-300 lg:h-96 lg:w-80 p-4'>
      <h1 className='m-2 h-14 border border-black bg-white text-5xl text-right overflow-x-auto'>{ input }</h1>
      <div className={ but_tray_design }>
        <button className={ but_design } onClick={()=>clickHandler('c') }>c</button>
        <button className= { but_design } onClick={()=>clickHandler('←') }>←</button>
        <button className= { but_design } onClick={()=>clickHandler('/') }>/</button>
        <button className= { but_design } onClick={()=>clickHandler('*') }>*</button>
      </div>
      <div className={ but_tray_design }>
        <button className={ but_design } onClick={()=>clickHandler('9')} >9</button>
        <button className= { but_design } onClick={()=>clickHandler('8')}>8</button>
        <button className= { but_design } onClick={()=>clickHandler('7')}>7</button>
        <button className= { but_design } onClick={()=>clickHandler('-')}>-</button>
      </div>
      <div className={ but_tray_design }>
        <button className={ but_design } onClick={()=>clickHandler('6')}>6</button>
        <button className= { but_design } onClick={()=>clickHandler('5')}>5</button>
        <button className= { but_design } onClick={()=>clickHandler('4')}>4</button>
        <button className= { but_design } onClick={()=>clickHandler('+')}>+</button>
      </div>
      <div className={ but_tray_design }>
        <button className={ but_design } onClick={()=>clickHandler('3')}>3</button>
        <button className= { but_design } onClick={()=>clickHandler('2')}>2</button>
        <button className= { but_design } onClick={()=>clickHandler('1')}>1</button>
        <button className= { but_design } onClick={()=>clickHandler('.')}>.</button>
      </div>
      <div className={ but_tray_design } >
        <button className= { but_design } onClick={()=>clickHandler('0')}>0</button>
        <button className= { but_design } onClick={()=>clickHandler('=')}>=</button>
      </div>
    </div>
    // <footer className='lg:w-screen bg-white text-center text-lg absolute bottom-0'>Made with ♥ by MK Gupta</footer>
    </>
  )
}

export default App;
