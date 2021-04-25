import React from 'react'

const FinishScreen = ({tempString,incorrectAttempt,input}) => {
    return (
        <div style={{ ...mainContainer, flexDirection: 'column' }}>
            <h1 style={{ color: 'white' }}>Well done!!</h1>
            <h1 style={{ color: 'white' }}>Accuracy : {((tempString.length - incorrectAttempt) / tempString.length * 100).toFixed(2)}</h1>
            <h1 style={{ color: 'white' }}>WPM : {input.split(' ').length*2}</h1>
            <button style={{ padding: '10px', border: 'none', outline: 'none', backgroundColor: 'white', fontSize: '25px', borderRadius: '10px', fontFamily: "'Quicksand',sans-serif",marginTop: '10px'}} onClick={() => { window.location.reload() }}>TRY AGAIN</button>
        </div>
    )
}

const mainContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
}

export default FinishScreen
