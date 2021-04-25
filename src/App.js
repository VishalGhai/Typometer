import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FinishScreen from './FinishScreen'
import Timer from './Timer'
const randomWords = require("random-words")
const App = () => {
    const [input, setInput] = useState('')
    const [tempString, setTempString] = useState('')
    const [tempStringArray, setTempStringArray] = useState([])
    const [inputarray, setInputArray] = useState([])
    const [onProcess, setOnProcess] = useState(false)
    const [timer, setTimer] = useState(30)
    const [incorrectAttempt, setIncorrectAttempt] = useState(0)
    let timerinterval = ''
    const startTimer = () => {
        timerinterval = setInterval(() => {
            setTimer(timer => timer - 1)
        }, 1000)
    }

    useEffect(() => {
        if (timer < 0) setOnProcess(true)
    }, [timer])

    useEffect(async () => {
        setTempString(randomWords({ exactly: 50, join: ' ' })) // generates one sentence
    }, [])

    useEffect(() => {
        setTempStringArray(tempString.split(''))
    }, [tempString])

    useEffect(() => {
        setInputArray(input.split(''))
        if (input.length === 1) {
            if (timerinterval === '')
                startTimer()
            else clearInterval(timerinterval)
        }
        if ((input === tempStringArray.length - 1)) finish(!onProcess)
        if(inputarray[inputarray.length-1]!==tempStringArray[inputarray.length-1]) setIncorrectAttempt(incorrectAttempt=>incorrectAttempt+1)
    }, [input])


    const finish = (value) => {
        setOnProcess(value)
    }

    const wrongAttempt = (value) => {
        setIncorrectAttempt(value)
    }

    return (
        !onProcess ? <div style={mainContainer}>
            <h1 style={{ color: 'white', position: 'absolute', left: '30px', top: '0', fontWeight: 900 }}>Typometer</h1>
            <Timer timer={timer} />
            <textarea value={input} autoFocus={true} onChange={e => { setInput(e.target.value); }} type="hidden" style={inputContainer} />
            <h1 style={{ marginTop: '-200px', width: 'fit-content' , marginInline:'100px', height: '20%', color: 'grey', position: 'absolute' }}>{tempString}</h1>
            <h1 style={{ marginTop: '-200px', width:'100%' , marginInline:'100px', zIndex: 2, height: '20%' }}>
                {
                    inputarray.map((value, index) => {
                        if (value === tempStringArray[index])
                            return <span style={{ color: 'white' }}>{value}</span>
                        else {
                            // wrongAttempt(incorrectAttempt + 1)
                            return <span style={{ color: 'red' }}>{value}</span>
                        }
                    })
                }
            </h1>
        </div> :
            <FinishScreen input={input} tempString={tempString} incorrectAttempt={incorrectAttempt} />
    )
}
const inputContainer = {
    overflow: 'hidden',
    border: 'none',
    textAlign: 'center',
    outline: 'none',
    fontFamily: "'Quicksand', sans-serif",
    position: 'absolute',
    marginTop: '-226px',
    zIndex: 3,
    width: 'fit-content',
    height: '19.7%',
    backgroundColor: 'rgba(255,255,255,0)',
    color: 'rgba(255,255,255,0)',
    fontSize: '36px',
    padding: 0,
    fontWeight: 'bold'
}

const mainContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
}



export default App
