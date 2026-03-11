import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function Squres({value,onClick}) {
  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  )
}



function calculationwinner(square){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  for(let i=0;i<lines.length;i++){
    const [a,b,c] = lines[i]
    if(square[a] && square[a] === square[b] && square[a] === square[c]){
      return square[a]
    }
  }
}
function App() {
  const [squres, setSqures] = useState(Array(9).fill(null))
  const [nextXis,setNextXis] = useState(true)


function handleclick(i) {
if(squres[i]|| calculationwinner(squres)) return;
const newSqures = squres.slice()
newSqures[i] = nextXis ? 'X' : 'O'
setSqures(newSqures)
setNextXis(!nextXis)

}


function handlereset(){
  setNextXis(true)
  setSqures(Array(9).fill(null))
}
const Winner= calculationwinner(squres)
const status= Winner ? `Winner: ${Winner}` : `Next player: ${nextXis ? 'X' : 'O'}`;
  return (
    <div className='games'>
      <div className='status'>
        {status}
      </div>

      <div className='board'>

        <div className='row-board'>
          <Squres value={squres[0]} onClick={()=>handleclick(0)}/>
          <Squres value={squres[1]} onClick={()=>handleclick(1)}/>
          <Squres value={squres[2]} onClick={()=>handleclick(2)}/>
        </div>
           <div className='row-board'>
          <Squres value={squres[3]} onClick={()=>handleclick(3)}/>
          <Squres value={squres[4]} onClick={()=>handleclick(4)}/>
          <Squres value={squres[5]} onClick={()=>handleclick(5)}/>
        </div>
           <div className='row-board'>
          <Squres value={squres[6]} onClick={()=>handleclick(6)}/>
          <Squres value={squres[7]} onClick={()=>handleclick(7)}/>
          <Squres value={squres[8]} onClick={()=>handleclick(8)}/>
        </div>
        </div>
        <button className="reset" onClick={()=>handlereset()}> reset</button>
    </div>
  )
}

export default App
