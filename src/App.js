
import '../src/main.css';


// Import components

import { useState } from 'react';


import Show from './Components/Show';

import Form from './Components/Form'; 

function App() {
  const  [weight, setWeight] = useState('')

    const  [height, setHeight] = useState('')

    const [bmi, setBMI] = useState('');


    const h = height / 100;
    const bmI = weight / (h * h);


  return (
    <div className="App">
      <h2 className='main-up'>BMI Healthy Weight Calculator</h2>
      <div className='inside'>
      <Show setWeight={setWeight} weight={weight}  setHeight={setHeight} height={height} bmi={bmi} setBMI={setBMI}h={h}></Show>
     <Form setWeight={setWeight} weight={weight}  setHeight={setHeight} height={height} bmi={bmi} setBMI={setBMI}h={h}></Form>
      </div>
    </div>
  );
}



export default App;
