import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const numbers =[1,2,3,4,5,6,7,8,9]
  const operations = ['+', '-', '*', '/']

  return (
    <div className="App">
      <div className='calc'>
          <div className='numberSection'>
            <div>Result</div>
          </div>
          <div className='operationSection'>
            <div className='resultButton'>Result</div>
            <div className='zeroButton'>Zero</div>
          </div>
          <div className='keypadSection'>
            {
              numbers.map((num) => {
                return (
                  <div className='individualNumbers'>{num}</div>
                );
              })
            }
          </div>
      </div>
    </div>
  );
}

export default App;
