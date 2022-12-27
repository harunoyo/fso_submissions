import { useState } from "react"

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({g, b, n, all}) => {

  if (all == 0) {
    return (
      <div>No feedback given!</div>
    )
  } else {  
    return (
      <table>
        <StatisticLine text="Good" value={g} />
        <StatisticLine text="Neutral" value={n} />
        <StatisticLine text="Bad" value={b} />
        <StatisticLine text="Total" value={g} />
        <StatisticLine text="Average" value={(g-b)/all} />
        <StatisticLine text="Positive" value={[g*100/all, '%']} />
      </table>
  )
  }
} 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setAll(all + 1)
    setGood(good + 1)
  }
  
  const handleNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }
  
  const handleBad = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback:</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h1>Statistics:</h1>
      <Statistics g={good} b={bad} n={neutral} all={all} />
    </div>
  )
}

export default App;
