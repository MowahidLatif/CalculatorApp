import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const numbers =[1,2,3,4,5,6,7,8,9]
  const operations = ['+', '-', '*', '/']

  const [firstNumber, setFirstNumber] = useState("")
  const [secondNumber, setSecondNumber] = useState("")
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState(0)

  useEffect(() => {
    console.log(Number(firstNumber) + " " + operation + " " + Number(secondNumber));
  }, [firstNumber, secondNumber, operation])

  function selectNum(num) {
    if (operation === "") {
      setFirstNumber(firstNumber + num);
    } else {
      setSecondNumber(secondNumber + num);
    }
  }

  function selectOp(op) {
    setOperation(op);
  }

  function setZero(op) {
    setResult(0);
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");

  }

  function computeResult() {
    switch(operation) {
      case '+':
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case '-':
        setResult(Number(firstNumber) - Number(secondNumber));
        break;
      case '*':
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
      case '/':
        setResult(Number(firstNumber) / Number(secondNumber));
        break;
      default:
        setResult(0);
    }
  }

  return (
    <div className="App">
      <div className='calc'>
          <div className='numberSection'>
            <div>{result}</div>
          </div>
          <div className='operationSection'>
            <div className='actionButton' onClick={()=>computeResult()}>Result</div>
            <div className='actionButton' onClick={()=>setZero()}>Zero</div>
          </div>
          <div className='keypadSection'>
            <div className='squareNumbers'>
              {numbers.map((num, key) => {
                return (
                  <div className='individualNumbers' onClick={() => selectNum(num)}>{num}</div>
                );
              })}
            </div>
            <div className='vertialOperations'>
              {operations.map((op) => {
                return (
                  <div className='individualNumbers' onClick={() => selectOp(op)}>{op}</div>
                );
              })}
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
