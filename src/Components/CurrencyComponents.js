import './CurrencyComponents.css'
const CurrencyComponents = (props)=>{
const {currencyChoice,selectCurrency,changeCurrency,Amount,onchangeAmount} = props
    return(
        <div className="currency">
            <select value={selectCurrency} onChange={changeCurrency}>
                {currencyChoice.map((Choice)=>
                    <option key={Choice} value={Choice}>{Choice}</option>
                )}
            </select>
            <input type="number" 
            value={Amount}
            onChange={onchangeAmount}
            
            />
        </div>
    )

}
export default CurrencyComponents