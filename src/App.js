import money from './img/money.png'
import './App.css';
import CurrencyComponents from './Components/CurrencyComponents';
import { useEffect, useState } from 'react';

function App() {
  const [currencyChoice,setcurrencyChoice] = useState([])
  const [fromCurrency,setfromCurrency] = useState("USD")
  const [toCurrency,settoCurrency] = useState("THB")
  const [Amount,setAmount]=useState(1)
  const [exChangeRate,setexChangeRate] =useState (0)
  const [checkformCurrency,setcheckformCurrency] = useState(true)

  let fromAmount,toAmount
  if (checkformCurrency) {
     fromAmount = Amount
     toAmount=(Amount*exChangeRate).toFixed(2)
  }else{
    toAmount =Amount
    fromAmount = (Amount/exChangeRate).toFixed(2)
  }

  useEffect(()=>{
    const url =`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setcurrencyChoice([...Object.keys(data.rates)])
      setexChangeRate(data.rates[toCurrency])
    })
  },[fromCurrency,toCurrency])

const AmountFromCurrency=(e)=>{
  setAmount(e.target.value)
  setcheckformCurrency(true)

}
const AmountTOCurrency=(e)=>{
  setAmount(e.target.value)
  setcheckformCurrency(false)
}


  return (
    <div>
      <img src={money} alt="logo" className='money-img'></img>
      <h1>Currency Converter (API)</h1>
      <div className='container'>
            <CurrencyComponents 
            currencyChoice={currencyChoice} 
            selectCurrency={fromCurrency}
            changeCurrency={(e)=>setfromCurrency(e.target.value)}
            Amount = {fromAmount}
            onchangeAmount = {AmountFromCurrency}
            />
            <div className='equal'>=</div>
            <CurrencyComponents 
            currencyChoice={currencyChoice} 
            selectCurrency={toCurrency}
            changeCurrency={(e)=>settoCurrency(e.target.value)}
            Amount = {toAmount}
            onchangeAmount = {AmountTOCurrency}
            />
      </div>
    </div>
  );
}

export default App;
