import React from 'react'

const Timer = ({timer}) => {
    return (
        <h1 style={{ color: 'white', position: 'absolute', bottom: '200px' }}>YOU HAVE : {timer} SECONDS</h1>
    )
}

export default Timer
