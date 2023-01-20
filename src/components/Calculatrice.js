import React, { useState,useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'


function Calculatrice() {
  let r  = useSelector(state => state.result);
  const history = useSelector(state => state.history)
  console.log(history)
  const dispatch = useDispatch()
  const [result, setResult] = useState("")
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8","9", "0"];
  const operations = ["ADD","SUBSTRACT","MULTIPLY", "DIVIDE"]
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    setResult(r)
  }, [r])


  function print(e){
 
    setResult(old => `${old}${e.target.value}`)
  }

  function ADD(){
    // alert()
    // console.log(result)
    dispatch({type:"ADD" , actualResult: result})
  }
  function SUBSTRACT(){
    dispatch({type:"SUBSTRACT" , actualResult: result})
  }
  function MULTIPLY(){
    dispatch({type:"MULTIPLY" , actualResult: result})
  }
  function DIVIDE(){
    dispatch({type:"DIVIDE" , actualResult: result})
  }
  function RESET(){
    setResult("")
    dispatch({type:"RESET"})
  }
  function EQUAL(){
    dispatch({type:"EQUAL",actualResult: result})
  }

  function toggle(){
    // hidden
    setHidden(old=> !old)
  }
  return (
    <div>
      <h1 className='title'>Calculatrice</h1>
        <button className='btn-history' onClick={toggle}>Afficher history log</button>
        <div className='calculatrice'>
            <input type="text" className='result' value={result} readOnly/>
     
            {numbers.map((i, index)=> <button key={index} className='btn'  value={i} onClick={print}>{i}</button>)}

            
            <button className='btn'  value="=" onClick={EQUAL} >=</button>
            <button className='btn'  value="c" onClick={RESET}>C</button>
            <div className='actions'>
            <button className='btn'  value="+" onClick={ADD}>+</button>
            <button className='btn'  value="-" onClick={SUBSTRACT}>-</button>
            <button className='btn'  value="*"  onClick={MULTIPLY}>*</button>
            <button className='btn'  value="/" onClick={DIVIDE}>/</button>
            </div>
           
        </div>
        
        <div className={`history ${hidden ? "hidden" : ""}`}>
          <div className='close' onClick={toggle}>x</div>
              {history.map((h, index)=> <p key={index}>{h}</p>)}
        </div>
    </div>
  )
}

export default Calculatrice