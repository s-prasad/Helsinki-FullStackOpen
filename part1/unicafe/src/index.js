import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = (props) => (
    <tr>
        <td>{props.text}</td> 
        <td>{props.value}</td>
    </tr>
)

const Statistics = (props) => {
    const [good, neutral, bad] = props.data
    const all =  good+neutral+bad
    
    if (all == 0) {
        return (<div>No feedback given</div>)
    } else {
        return (
            <table>
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="all" value={all} />
                <Statistic text="average" value={all == 0 ? 0 : ((good*1 + bad*-1)/all).toFixed(2)} />
                <Statistic text="positive" value={all == 0 ? 0 : ((good/all)).toFixed(2)} />
            </table>
        )
    }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const updateValue = (currValue, stateToUpdate) => {
      stateToUpdate(currValue+1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={()=>updateValue(good, setGood)} text="good" />
      <Button handleClick={()=>updateValue(neutral, setNeutral)} text="neutral" />
      <Button handleClick={()=>updateValue(bad, setBad)} text="bad" />
      <h2>Statistics</h2>
      <Statistics data={[good, neutral, bad]} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
