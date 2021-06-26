import React, {useState} from 'react';
import './App.css';
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
  const [time, setTime] = useState({h:0, m:0, s:0});
  let newS = time.s;
  let newM = time.m;
  let newH = time.h;
  let clickTime = 0;
  const [inter, setInter] = useState();
  const [isRunning, setIsRunning] = useState(0);

  
  const doubleClickButton = () => {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
    }
    else {
        if((new Date().getTime() - clickTime) < 300) {
            setIsRunning(0);
            clearInterval(inter);
        }
        else {
            clickTime = new Date().getTime();
        }
    }
  }
  const reset = () => {
    stop();
    newS=0; newM=0; newH=0;
    start();
  }
  const stop = () => {
    setIsRunning(0);
    clearInterval(inter);
    setTime({h:0, m:0, s:0});
  }
  const start = () => {
    setInter(setInterval(startTimer, 1000));
    setIsRunning(1);
  } 
  const startTimer = () => {
    if(newM===59 && newS===59) {
      newH+=1;
      newS=-1;
      newM=0;
    }
    if(newS===59) {
      newS=-1;
      newM+=1;
    }
    newS++;
    return setTime({h:newH, m:newM, s:newS});
  }

  return (
    <div>
      <p className='timerHeader'> TIMER </p>
      <div className='display'><Display time={time}/></div>
      <div className='buttons'><Buttons time={time} start={start} isRunning={isRunning} stop={stop} reset={reset} doubleClickButton={doubleClickButton}/></div>
    </div>
  );
}

export default App;
