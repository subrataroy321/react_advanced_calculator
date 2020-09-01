import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [value, setValue] = useState(0)
    let [answer, setAnswer] = useState('')
    let [num1, setNum1] = useState('')
    let [num2, setNum2] = useState('')
    let [operator, setOperator] = useState('')

    const clearValues = () => {
        setNum1('')
        setNum2('')
        setOperator('')
        setValue(0)
        setAnswer('')
    }


    async function handleNumberBtnClick(e) {
        function setTempValue() {
            let tempValue = e.target.value
            setValue(tempValue)
        }

        function setTempValueWithValue() {
            let tempValue = value + e.target.value
            setValue(tempValue)
        }

        value === 0 ? await setTempValue() : await setTempValueWithValue()
        console.log(value)  
    }

    function handleOperatorBtnClick(e) {
        console.log(value)
        setNum1(value)
        setOperator(e.target.value)
        setValue(0)
    }

    const setNum2Value = () => {
        setNum2(value)
        setValue('')
    }

    function getAnswer() {
        setNum2(value)
        setValue('')
        console.log(value)
        console.log(num2)
        let total = parseInt(num1) + parseInt(num2)
        console.log(num1)
        console.log(total)
        setAnswer(total)
    } 


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p className="valueContainer">{num1}{operator}{num2}</p>
                <div className="answer-box">{value}{answer}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" value="ac" onClick={clearValues}>AC</button>
                    <button className="calc-button calc-button-top" value="+" >+/-</button>
                    <button className="calc-button calc-button-top" value="%" onClick={handleOperatorBtnClick}>%</button>
                    <button className="calc-button calc-button-op" value="/" onClick={handleOperatorBtnClick}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="7" onClick={handleNumberBtnClick}>7</button>
                    <button className="calc-button" value="8" onClick={handleNumberBtnClick}>8</button>
                    <button className="calc-button" value="9" onClick={handleNumberBtnClick}>9</button>
                    <button className="calc-button calc-button-op" value="x" onClick={handleOperatorBtnClick}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="4" onClick={handleNumberBtnClick}>4</button>
                    <button className="calc-button" value="5" onClick={handleNumberBtnClick}>5</button>
                    <button className="calc-button" value="6" onClick={handleNumberBtnClick}>6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={handleOperatorBtnClick}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="1" onClick={handleNumberBtnClick}>1</button>
                    <button className="calc-button" value="2" onClick={handleNumberBtnClick}>2</button>
                    <button className="calc-button" value="3" onClick={handleNumberBtnClick}>3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={handleOperatorBtnClick}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value="0" onClick={handleNumberBtnClick}>0</button>
                    <button className="calc-button" value="." onClick={handleNumberBtnClick}>.</button>
                    <button className="calc-button calc-button-op" value="=" onClick={getAnswer}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator