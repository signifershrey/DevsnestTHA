import React ,{useState}from 'react'
import useCounter from './Hooks/useCounter'


const CounterOne = () => {

// const [count, setCount] = useState(0)

// const increment =() => {
//     setCount(count+1)
// }

// const decrement = () => {
//     setCount(prevCount => prevCount -1)
// }


// const reset = () => {
//     setCount(0);
// }

    const [count,increment,decrement,reset] = useCounter(0,5)
    return (
        <div>
            <h1>Counter1=  {count}</h1>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
            <button onClick={reset}>RESET</button>
            
        </div>
    )
}

export default CounterOne
