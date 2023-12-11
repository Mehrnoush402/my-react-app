import React, { useState } from 'react'

function ChildComponent({ num }) {
    console.log('ChildComponent rerender');
    // const [count, setCount] = useState(0)
    const [name, setName] = useState('alireza')


    let co = 0
    console.log(" co : ", co)
    const counter = (param) => {
        console.log(co += 1);
    }



    const changeMyName = (e) => {
        setName(e.target.value)
    }


    return (
        <>
            <br />
            <button onClick={() => counter('plus')}>
                increase
            </button>
            <span>
                num in childComponent is : {num}
            </span>
            <button onClick={counter}>
                decrease
            </button>
            <br />
            <br />
            <br />
            my name is {name}
            <br />
            <br />
            <br />
            <input type="text" onChange={(e) => changeMyName(e)} value={name} />
        </>
    )
}

export default ChildComponent;